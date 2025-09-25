import { requireAuth } from '@clerk/express';
import { Router } from 'express';
import {
  archiveProduct,
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controller/product.controller.js';

const router = Router();

router.use(requireAuth());

router.route('/').post(createProduct).get(getProducts);

router
  .route('/:productId')
  .get(getProductById)
  .put(updateProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

router.route('/:productId/archive').patch(archiveProduct);

export default router;
