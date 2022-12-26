import * as express from "express";
import { AuthenticatedRequest } from "../../interface/authenticate-request";
export declare class PostRoutes {
    static get: (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => Promise<void>;
    static getOne: (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => Promise<express.Response<any, Record<string, any>>>;
    static post: (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => Promise<void>;
    static delete: (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => Promise<express.Response<any, Record<string, any>>>;
    static put: (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => Promise<express.Response<any, Record<string, any>>>;
    static updatelike: (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => Promise<express.Response<any, Record<string, any>>>;
}
