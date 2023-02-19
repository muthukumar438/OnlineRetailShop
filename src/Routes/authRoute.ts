import { Router } from 'express';
import AuthController from '@/Controllers/authController';
import { CreateDtoUser } from '@/Dto/userDto';
import { iRoutes } from '@/Interfaces/iRoutes';
import authMiddleware from '@/Middlewares/authMiddleware';
import validationMiddleware from '@/Middlewares/validationMiddleware';

class AuthenticateRoute implements iRoutes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, validationMiddleware(CreateDtoUser, 'body'), this.authController.signUp);
    this.router.post(`${this.path}login`, validationMiddleware(CreateDtoUser, 'body'), this.authController.logIn);
    this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
  }
}

export default AuthenticateRoute;
