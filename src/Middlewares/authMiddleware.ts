import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@/config';
import { exceptions } from '@/Exceptions/exceptions';
import { DataStoredInToken, RequestWithUser} from "@Interfaces/iAuthenticate"
import mUser from '@/Models/userModel';
const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);

    if (Authorization) {
      const secretKey: string = SECRET_KEY;
      const verificationResponse = (await verify(Authorization, secretKey)) as DataStoredInToken;
      const userId = verificationResponse._id;
      const findUser = await mUser.findById(userId);

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new exceptions(401, 'Wrong authentication token'));
      }
    } else {
      next(new exceptions(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new exceptions(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
