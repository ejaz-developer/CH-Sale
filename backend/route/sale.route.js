import { Router } from 'express';
import {
  createSale,
  deleteSale,
  getSaleById,
  getSales,
  updateSale,
} from '../controller/sale.controller.js';

const router = Router();

router.route('/').post(createSale).get(getSales);

router.route('/:saleId').get(getSaleById).put(updateSale).delete(deleteSale);

export default router;
