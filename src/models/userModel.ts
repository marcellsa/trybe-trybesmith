import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/User';

export default class UserModel {
  // atributos
  connection: Pool;

  // constutor
  constructor(connection: Pool) {
    this.connection = connection;
  }

  // métodos
  async create({ username, vocation, level, password }: IUser): Promise<IUser> {
    const query = `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) 
    VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query, 
      [username, vocation, level, password],
    );
    const newUser = { id: insertId, username, vocation, level, password };
    return newUser;
  }
}