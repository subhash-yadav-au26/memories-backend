import * as code from "http-status";
import * as express from "express";
import { AuthenticatedRequest } from "../../interface/authenticate-request";
import { PostHelpers } from "./helper";
import * as mongoose from "mongoose";

export class PostRoutes {
  public static get = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const postData = await PostHelpers.findAll();
      res.status(code.OK).json({ message: postData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public static getOne = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No post with id :${id}` });
      }
      const postData = await PostHelpers.findOne(id);
      res.status(code.OK).json({ message: postData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public static post = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const resBody = req.body;
      const resData = await PostHelpers.create(resBody);
      res.status(code.OK).json({ message: resData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public static delete = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No post with id :${id}` });
      }
      await PostHelpers.findByIdAndDelete(id);
      res.status(code.OK).json({ message: "post deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public static put = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      const resBody = req.body;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No post with id :${id}` });
      }
      await PostHelpers.findByIDAndUpdate(id, resBody);
      res.status(code.OK).json({ message: "post updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  public static updatelike = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No post with id :${id}` });
      }
      res.status(code.OK).json({ message: "post like updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
