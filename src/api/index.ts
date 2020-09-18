import { Router } from 'express';
import auth from './auth/auth.route';
import order from './order/order.route';
import orderItem from './orderItem/orderItem.route';
import product from './product/product.route';
import supplier from './supplier/supplier.route';
import users from './users/user.route';

const router: Router = Router();

router.use('/', auth);
router.use('/users', users);
router.use('/orders', order);
router.use('/orderitems', orderItem);
router.use('/suppliers', supplier);
router.use('/products', product);

export default router;
