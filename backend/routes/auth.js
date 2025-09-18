import express from 'express';
import { clerkClient } from '@clerk/clerk-sdk-node';
import User from '../models/user.models.js';
import { generateToken, verifyToken, refreshToken } from '../middleware/auth.js';
import CryptoJS from 'crypto-js';

const router = express.Router();

// Initialize authentication with Clerk verification
router.post('/verify-clerk-token', async (req, res) => {
  try {
    const { sessionToken } = req.body;
    
    if (!sessionToken) {
      return res.status(400).json({ error: 'Session token is required' });
    }

    // Verify the session token with Clerk
    const session = await clerkClient.sessions.verifySession(sessionToken, {
      audience: process.env.CLERK_JWT_VERIFICATION_KEY
    });

    if (!session) {
      return res.status(401).json({ error: 'Invalid session token' });
    }

    // Get user information from Clerk
    const clerkUser = await clerkClient.users.getUser(session.userId);
    
    // Find or create user in our database
    let user = await User.findOne({ clerkId: clerkUser.id });
    
    if (!user) {
      user = new User({
        clerkId: clerkUser.id,
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
        lastLogin: new Date()
      });
      await user.save();
    } else {
      user.lastLogin = new Date();
      await user.save();
    }

    // Generate JWT token for desktop app
    const jwtToken = generateToken(user);
    
    // Prepare user data for caching (encrypted)
    const userData = {
      id: user._id,
      clerkId: user.clerkId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      plan: user.plan,
      isActive: user.isActive
    };

    // Encrypt user data for local storage
    const encryptedUserData = CryptoJS.AES.encrypt(
      JSON.stringify(userData), 
      process.env.ENCRYPTION_KEY || 'default-key'
    ).toString();

    res.json({
      success: true,
      token: jwtToken,
      user: userData,
      encryptedUserData,
      expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    });

  } catch (error) {
    console.error('Token verification error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

// Refresh JWT token
router.post('/refresh-token', refreshToken, (req, res) => {
  try {
    const newToken = res.get('X-New-Token');
    
    if (newToken) {
      res.json({
        success: true,
        token: newToken,
        message: 'Token refreshed successfully'
      });
    } else {
      res.json({
        success: true,
        message: 'Token is still valid'
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Token refresh failed' });
  }
});

// Verify current token status
router.get('/verify', verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.user.userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.isActive) {
      return res.status(403).json({ error: 'Account is inactive' });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        clerkId: user.clerkId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        plan: user.plan,
        isActive: user.isActive
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Verification failed' });
  }
});

// Logout endpoint
router.post('/logout', verifyToken, async (req, res) => {
  try {
    // In a real application, you might want to blacklist the token
    // For now, we'll just return success
    res.json({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' });
  }
});

// Get authentication URL for Electron window
router.get('/auth-url', (req, res) => {
  try {
    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const authUrl = `${baseUrl}/sign-in?redirect_url=${encodeURIComponent(req.query.redirect_url || '/')}`;
    
    res.json({
      success: true,
      authUrl
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate auth URL' });
  }
});

// Offline authentication verification
router.post('/verify-offline', (req, res) => {
  try {
    const { encryptedUserData } = req.body;
    
    if (!encryptedUserData) {
      return res.status(400).json({ error: 'Encrypted user data is required' });
    }

    // Decrypt user data
    const bytes = CryptoJS.AES.decrypt(encryptedUserData, process.env.ENCRYPTION_KEY || 'default-key');
    const userData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
    // Validate user data structure
    if (!userData.clerkId || !userData.email) {
      return res.status(400).json({ error: 'Invalid user data' });
    }

    res.json({
      success: true,
      user: userData,
      message: 'Offline authentication successful'
    });

  } catch (error) {
    console.error('Offline verification error:', error);
    res.status(400).json({ error: 'Invalid encrypted data' });
  }
});

export default router;