import OrderModel from '../models/orderModel';
import connection from '../models/connection';
import { IOrder } from '../interfaces/Order';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) { }

  async getAll(): Promise<IOrder[]> {
    return this.orderModel.getAll();
  }
}