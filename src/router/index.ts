import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsController = new ProductsController();

const router = Router();

router.get('/products', (req, res) => productsController.getAll(req, res));
router.post('/products', (req, res) => productsController.create(req, res));

export default router;