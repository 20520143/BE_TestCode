import express from 'express';
const router = express.Router();
import productController from '../controller/Product.Controller.js';

router.get('/getproduct', productController.getProduct);

export default router;
