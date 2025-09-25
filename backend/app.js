import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import dotenv from 'dotenv';
// routes import
import userRoute from './route/user.route.js';
import productRoute from './route/product.route.js';
dotenv.config({
  path: './.env',
});
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
  }),
);

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/products', productRoute);
// 404 handler
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'Internal Server Error' });
});

export default app;
