import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  async getAll(_req: Request, res:Response): Promise<void> {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  }
}