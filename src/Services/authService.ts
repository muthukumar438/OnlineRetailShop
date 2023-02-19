import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@/config';
import { CreateDtoUser } from '@/Dto/userDto';
import { exceptions } from '@/Exceptions/exceptions';
import { DataStoredInToken, TokenData } from '@Interfaces/iAuthenticate';
import { iUser } from '@/Interfaces/iUser';
import mUser from '@/Models/userModel';
import { isEmpty } from '@/Utils/util';

class AuthendicateService {
  public users = mUser;

  public async signup(userData: CreateDtoUser): Promise<iUser> {
    if (isEmpty(userData)) throw new exceptions(400, 'userData is empty');

    const findUser: iUser = await this.users.findOne({ email: userData.email });
    if (findUser) throw new exceptions(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: iUser = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async login(userData: CreateDtoUser): Promise<{ cookie: string; findUser: iUser }> {
    if (isEmpty(userData)) throw new exceptions(400, 'userData is empty');

    const findUser: iUser = await this.users.findOne({ email: userData.email });
    if (!findUser) throw new exceptions(409, `This email ${userData.email} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new exceptions(409, 'Password is not matching');

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser };
  }

  public async logout(userData: iUser): Promise<iUser> {
    if (isEmpty(userData)) throw new exceptions(400, 'userData is empty');

    const findUser: iUser = await this.users.findOne({ email: userData.email, password: userData.password });
    if (!findUser) throw new exceptions(409, `This email ${userData.email} was not found`);

    return findUser;
  }

  public createToken(user: iUser): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthendicateService;
