import { NextFunction, Request, Response } from 'express';
import { exceptions } from '@/Exceptions/exceptions';
declare const errorMiddleware: (error: exceptions, req: Request, res: Response, next: NextFunction) => void;
export default errorMiddleware;
