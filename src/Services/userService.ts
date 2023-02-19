import { hash } from 'bcrypt';
import { CreateDtoUser } from '@/Dto/userDto';
import { exceptions } from '@/Exceptions/exceptions';
import { iUser } from '@/Interfaces/iUser';
import mUser from '@/Models/userModel';
import { isEmpty } from '@/Utils/util';

class UserService {
  public users = mUser;

  public async findAllUser(): Promise<iUser[]> {
    const users: iUser[] = await this.users.find();
    return users;
  }

  public async findUserById(userId: string): Promise<iUser> {
    if (isEmpty(userId)) throw new exceptions(400, "UserId is empty");

    const findUser: iUser = await this.users.findOne({ _id: userId });
    if (!findUser) throw new exceptions(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateDtoUser): Promise<iUser> {
    if (isEmpty(userData)) throw new exceptions(400, "userData is empty");

    const findUser: iUser = await this.users.findOne({ email: userData.email });
    if (findUser) throw new exceptions(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: iUser = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async updateUser(userId: string, userData: CreateDtoUser): Promise<iUser> {
    if (isEmpty(userData)) throw new exceptions(400, "userData is empty");

    if (userData.email) {
      const findUser: iUser = await this.users.findOne({ email: userData.email });
      if (findUser && findUser._id != userId) throw new exceptions(409, `This email ${userData.email} already exists`);
    }

    if (userData.password) {
      const hashedPassword = await hash(userData.password, 10);
      userData = { ...userData, password: hashedPassword };
    }

    const updateUserById: iUser = await this.users.findByIdAndUpdate(userId, { userData });
    if (!updateUserById) throw new exceptions(409, "User doesn't exist");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<iUser> {
    const deleteUserById: iUser = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new exceptions(409, "User doesn't exist");

    return deleteUserById;
  }
}

export default UserService;