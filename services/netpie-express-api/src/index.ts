import "reflect-metadata";

import { App } from "./app";
import { config } from "./config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    const app = new App();

    app.start(config.port).catch((error: unknown) => {
      console.error("Failed to start server:", error);
      process.exit(1);
    });

    // Graceful shutdown
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    process.on("SIGTERM", async () => {
      console.log("SIGTERM received, shutting down gracefully");
      try {
        await app.stop();
        process.exit(0);
      } catch (error) {
        console.error("Error during shutdown:", error);
        process.exit(1);
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    process.on("SIGINT", async () => {
      console.log("SIGINT received, shutting down gracefully");
      try {
        await app.stop();
        process.exit(0);
      } catch (error) {
        console.error("Error during shutdown:", error);
        process.exit(1);
      }
    });
  })
  .catch((error: unknown) => { console.log(error); });
