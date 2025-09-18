import jwt from 'jsonwebtoken';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

// Middleware to verify JWT tokens
export const verifyToken = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

// Middleware to verify Clerk tokens (for backend-only routes)
export const verifyClerkToken = ClerkExpressRequireAuth();

// Generate JWT token for desktop app
export const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user.clerkId,
      email: user.email,
      role: user.role,
      sessionId: Date.now() // Simple session ID
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
  );
};

// Refresh token logic
export const refreshToken = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: true });
    
    // Check if token is expired
    if (decoded.exp < Date.now() / 1000) {
      // Token is expired, generate new one
      const newToken = jwt.sign(
        {
          userId: decoded.userId,
          email: decoded.email,
          role: decoded.role,
          sessionId: Date.now()
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
      );
      
      res.header('X-New-Token', newToken);
    }
    
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};