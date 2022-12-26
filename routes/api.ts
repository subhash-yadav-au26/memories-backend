import * as express from "express";
export const api = express.Router();
import { PostRouter } from "./post/index";
api.use("/post", new PostRouter().router);
