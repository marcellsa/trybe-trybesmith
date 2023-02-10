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

  async create({ name, amount }: IProduct): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const newProduct = { id: insertId, name, amount };
    return newProduct;
  }
}