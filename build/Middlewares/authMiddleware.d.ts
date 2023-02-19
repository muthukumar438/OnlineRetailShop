import { NextFunction, Response } from 'express';
import { RequestWithUser } from "@Interfaces/iAuthenticate";
declare const authMiddleware: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
export default authMiddleware;
