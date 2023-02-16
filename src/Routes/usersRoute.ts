import { Router } from 'express';
import UsersController from '@/Controllers/userController';
import { CreateDtoUser } from '@/dto/userDto';
import { iRoutes } from '@/Interfaces/iRoutes';
import validationMiddleware from '@/Middlewares/validationMiddleware';

class UserRoute implements iRoutes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateDtoUser, 'body'), this.usersController.createUser);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateDtoUser, 'body', true), this.usersController.updateUser);
    this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default UserRoute;
