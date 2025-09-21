import { json } from "body-parser";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import { Server } from "http";

import { applyApolloMiddleware } from "@/graphql";
import restRoutes from "@/routes";

export class App {
  private readonly app: Express;
  private server: Server | undefined;

  constructor() {
    this.app = express();
  }

  // Make this method asynchronous so we can use await.
  async setupMiddleware() {
    // CORS middleware
    this.app.use(cors());

    // JSON parsing middleware
    this.app.use(json());

    // Apply GraphQL middleware
    await applyApolloMiddleware(this.app);
  }

  /**
   * Start the server on the specified port
   */
  public async start(port: number | string) {
    try {
      // Await the setup of all middleware, including the asynchronous ones.
      await this.setupMiddleware();

      this.setupRoutes();

      this.server = this.app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port.toString()}`);
        console.log(
          `🚀 GraphQL endpoint at http://localhost:${port.toString()}/graphql`,
        );
        console.log(
          `🚀  Health check: http://localhost:${port.toString()}/health`,
        );
      });

      this.server.on("error", (error) => {
        throw error; // Re-throw the error to be caught by the outer catch block.
      });

      return this.server;
    } catch (error) {
      console.error("Failed to start the server:", error);
      throw error;
    }
  }

  /**
   * Stop the server
   */
  public async stop() {
    const serverClosePromise = new Promise<void>((resolve, reject) => {
      if (this.server) {
        this.server.close((error) => {
          if (error) {
            reject(error);
          } else {
            console.log("Server stopped");
            resolve();
          }
        });
      } else {
        resolve();
      }
    });

    // Wait for server to close
    await serverClosePromise;
  }

  private setupRoutes() {
    // Rest API endpoints
    this.app.use("/api", restRoutes);

    // Health check endpoint
    this.app.get("/health", (req: Request, res: Response) => {
      res.json({
        message: "Welcome to the Hybrid Express.js + Apollo Server!",
        status: "OK",
        timestamp: new Date().toISOString(),
      });
    });
  }
}
