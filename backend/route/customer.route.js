import { requireAuth } from '@clerk/express';
import { Router } from 'express';
import {
  createCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
} from '../controller/customer.controller';

const router = Router();

router.route('/').get(requireAuth(), getCustomers);
router.route('/').post(requireAuth(), createCustomer);
router.route('/:customerId').get(requireAuth(), getCustomerById).put(requireAuth(), updateCustomer).delete(requireAuth(), );
export default router;
