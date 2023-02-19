import { NextFunction, Request, Response } from 'express';
import { CreateDtoUser } from '@/Dto/userDto';
import { RequestWithUser } from '@/Interfaces/iAuthenticate';
import { iUser } from '@/Interfaces/iUser';
import AuthendicateService from '@/Services/authService';

class AuthController {
  public authService = new AuthendicateService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateDtoUser = req.body;
      const signUpUserData: iUser = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateDtoUser = req.body;
      const { cookie, findUser } = await this.authService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: iUser = req.user;
      const logOutUserData: iUser = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
