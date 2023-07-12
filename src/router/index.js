import Express from 'express';
const router = Express.Router();
import productRouter from './ProductRoute.js';

router.use('/product', productRouter);

export default router;
