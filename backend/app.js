import express from 'express';
import cors from 'cors';
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.NODE_ENV == 'development' ? '*' : process.env.ALLOWED_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'Internal Server Error' });
});

export default app;
