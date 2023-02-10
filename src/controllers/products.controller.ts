import { Request, Response } from 'express';
import ProductsServices from '../services/products.services';

export default class ProductsController {
  constructor(private productsService = new ProductsServices()) { }

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.productsService.getAll();
    res.status(200).json(result);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const result = await this.productsService.create(product);
    res.status(201).json(result);
  }
}
