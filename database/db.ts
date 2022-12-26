import * as mongoose from "mongoose";
import { configs } from "../configs";
const PATH = configs.DB_PATH || "";

export const connect = () => {
  mongoose.connect(PATH);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "db connection error"));
  db.once("open", () => console.info("connected to db", PATH));
};
