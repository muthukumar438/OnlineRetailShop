import { Router } from 'express';
import IndexController from '@/Controllers/indexController';
import { iRoutes } from '@/Interfaces/iRoutes';

class IndexRoute implements iRoutes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;
