import ProductsModel from '../models/products.model';
import { IProduct } from '../interfaces/Product';
import connection from '../models/connection';

export default class ProductsServices {
  constructor(private productsModel = new ProductsModel(connection)) { }

  async getAll(): Promise<IProduct[]> {
    return this.productsModel.getAll();
  }

  async create(product: IProduct): Promise<IProduct> {
    return this.productsModel.create(product);
  }
}