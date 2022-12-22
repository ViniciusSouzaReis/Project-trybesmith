import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.get('/products', productController.getAll);
router.post('/products', productController.create);

export default router;