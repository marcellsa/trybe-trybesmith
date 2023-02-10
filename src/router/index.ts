import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import UserController from '../controllers/userController';

const productsController = new ProductsController();
const userController = new UserController();

const router = Router();

router.get('/products', (req, res) => productsController.getAll(req, res));
router.post('/products', (req, res) => productsController.create(req, res));
router.post('/users', (req, res) => userController.create(req, res));

export default router;