import { Router } from 'express';
import { getUserById, handleClerkWebhook } from '../controller/user.controller.js';

const router = Router();

// Clerk webhook endpoint
router.route('/webhook/clerk').post(handleClerkWebhook);
router.route('/get-user/:id').get(getUserById);
export default router;
