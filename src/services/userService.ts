import UserModel from '../models/userModel';
import { IUser } from '../interfaces/User';
import connection from '../models/connection';

export default class UserService {
  constructor(private userModel = new UserModel(connection)) { }

  async create(user: IUser): Promise<IUser> {
    return this.userModel.create(user);
  }
}