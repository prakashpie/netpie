import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "./entities/user.entity";

export const AppDataSource = new DataSource({
  entities: [User],
  logging: false,
  migrations: [],
  subscribers: [],
  synchronize: true, // WARNING: Don't use in production
  type: "postgres",
  url: process.env.DATABASE_URL,
});
