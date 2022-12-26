import * as express from "express";
import { PostRoutes } from "./routes";
export class PostRouter {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.router.get("/", PostRoutes.get);
    this.router.post("/", PostRoutes.post);
    this.router.get("/:id", PostRoutes.getOne);
    this.router.put("/:id", PostRoutes.put);
    this.router.delete("/:id", PostRoutes.delete);
    this.router.put("/:id/likePost", PostRoutes.updatelike);
  }
}
