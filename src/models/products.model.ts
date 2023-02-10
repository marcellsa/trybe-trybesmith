import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/Product';

export default class ProductsModel {
  // atributos
  connection: Pool;

  // construtor
  constructor(connection: Pool) {
    this.connection = connection;
  }

  // métodos
  async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const [products] = await this.connection.execute<(IProduct & RowDataPacket)[]>(query);
    return products;
  }

  async create({ name, amount, userId }: IProduct): Promise<number> {
    const query = 'INSERT INTO Trybesmith.products VALUES (?, ?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount, userId]);
    return result.insertId;
    // const [dataInserted] = result;
    // const { insertId } = dataInserted;
    // return { id: insertId, name, amount, userId };
  }
}