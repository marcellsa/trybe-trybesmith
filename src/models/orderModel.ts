import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/Order';

export default class OrderModel {
  // atributos
  connection: Pool;

  // construtor
  constructor(connection: Pool) {
    this.connection = connection;
  }

  // métodos
  async getAll(): Promise<IOrder[]> {
    const query = `SELECT orders.id, orders.user_id AS userId, 
    JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders 
    INNER JOIN Trybesmith.products 
    ON orders.id = products.order_id GROUP BY id`;
    const [orders] = await this.connection.execute<(IOrder & RowDataPacket)[]>(query);
    return orders;
  }
}