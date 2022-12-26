import * as dotenv from "dotenv";
import * as path from "path";

if (process.env.NODE_PROD === "test") {
  dotenv.config({ path: path.join(__dirname, ".env.spec") });
} else {
  dotenv.config();
}
dotenv.config();
class Config {
  DB_PATH: string;
  PORT: string;
  HOST: string;
  NODE_PROD: string;
  constructor() {
    this.DB_PATH = process.env.DB_PATH;
    this.HOST = process.env.HOST;
    this.PORT = process.env.PORT;
    this.NODE_PROD = process.env.NODE_PROD;
  }
}

export const config = new Config();
