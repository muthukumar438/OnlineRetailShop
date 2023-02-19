import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '@/Interfaces/iAuthenticate';
import AuthendicateService from '@/Services/authService';
declare class AuthController {
    authService: AuthendicateService;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logIn: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logOut: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
export default AuthController;
