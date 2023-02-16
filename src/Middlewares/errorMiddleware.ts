import { NextFunction, Request, Response } from 'express';
import { exceptions } from '@/Exceptions/exceptions';
import { logger } from '@/Utils/logger';

const errorMiddleware = (error: exceptions, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.statusCode || 500;
    const message: string = error.errorMessage || 'Something went wrong';

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
