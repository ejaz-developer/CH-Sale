import { Router } from 'express';
import { getCurrentUser, getUserById, handleClerkWebhook } from '../controller/user.controller.js';
import { requireAuth } from '@clerk/express';
const router = Router();

// Clerk webhook endpoint
router.route('/webhook/clerk').post(handleClerkWebhook);
router.route('/get-user/:id').get(getUserById);
router.route('/profile').get(requireAuth(), getCurrentUser);

export default router;
