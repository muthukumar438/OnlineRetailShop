import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Hello world, welcome to my web app !!!");
      req.statusCode=200;
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;