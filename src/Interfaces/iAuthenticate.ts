import { Request } from 'express';
import { iUser } from './iUser';

export interface DataStoredInToken {
  _id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: iUser;
}
