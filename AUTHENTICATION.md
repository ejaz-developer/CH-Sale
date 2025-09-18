# Secure Authentication Implementation

This document describes the secure authentication implementation for the CH Sale POS application, following industry best practices for Electron desktop applications.

## Overview

The authentication system has been completely redesigned to move sensitive authentication logic from the Electron renderer process to a secure Express.js backend. This implementation provides:

- **Enterprise-grade security** with backend-only Clerk token verification
- **Offline capabilities** with encrypted local data storage
- **Automatic session management** with JWT token refresh
- **Secure IPC communication** between Electron processes

## Architecture

### Backend Authentication (Express.js)

The backend handles all authentication operations securely:

#### Authentication Endpoints

- `POST /api/auth/verify-clerk-token` - Verify Clerk session tokens
- `POST /api/auth/refresh-token` - Refresh JWT tokens
- `GET /api/auth/verify` - Verify current authentication status
- `POST /api/auth/logout` - Secure logout
- `GET /api/auth/auth-url` - Get authentication URL for Electron
- `POST /api/auth/verify-offline` - Verify offline authentication

#### Security Features

1. **Clerk Token Verification**: Only the backend communicates with Clerk APIs
2. **JWT Session Management**: Secure JWT tokens for desktop communication
3. **Encrypted Local Storage**: User data encrypted for offline access
4. **Token Refresh**: Automatic token renewal before expiration

### Electron Main Process

The main process handles secure authentication windows and IPC communication:

#### IPC Handlers

- `start-auth` - Open secure authentication window
- `verify-auth` - Verify session tokens with backend
- `refresh-token` - Refresh JWT tokens
- `verify-current-auth` - Check current authentication status
- `logout` - Secure logout process
- `verify-offline-auth` - Offline authentication verification

#### Security Features

1. **Isolated Authentication Window**: Separate session for auth
2. **Secure IPC Communication**: Protected token handling
3. **Session Management**: Automatic cleanup and security

### Frontend (React)

The renderer process uses a secure authentication context:

#### Components

- `AuthProvider` - Authentication context provider
- `AuthGuard` - Route protection component
- `AuthService` - Authentication service layer
- `Login` - Secure login interface

#### Features

1. **Context-based Authentication**: React context for auth state
2. **Route Protection**: Automatic redirection for unauthenticated users
3. **Offline Support**: Graceful degradation when offline
4. **Loading States**: Smooth user experience during auth operations

## Setup Instructions

### Backend Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure environment variables:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/ch-sale-db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=24h

# Clerk Configuration
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
CLERK_JWT_VERIFICATION_KEY=your-clerk-jwt-verification-key

# Encryption
ENCRYPTION_KEY=your-encryption-key-for-local-cache

# CORS
ALLOWED_ORIGIN=http://localhost:3000

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

4. Start the backend:
```bash
npm start
```

### Desktop App Setup

1. Install dependencies:
```bash
cd desktop-app
npm install
```

2. Build the application:
```bash
npm run build
```

3. Start in development:
```bash
npm run electron
```

## Security Benefits

### Before (Insecure)
- Clerk credentials exposed in renderer process
- Direct API calls from frontend
- No offline authentication capability
- Vulnerable to reverse engineering

### After (Secure)
- Backend-only credential handling
- Encrypted local storage
- JWT-based session management
- Secure IPC communication
- Offline authentication support

## Authentication Flow

### Online Authentication

1. User clicks "Sign In" in desktop app
2. Electron main process opens secure authentication window
3. User authenticates with Clerk via web interface
4. Backend verifies Clerk session token
5. Backend generates JWT token for desktop app
6. User data encrypted and cached locally
7. Authentication window closes, user logged in

### Offline Authentication

1. User attempts to access app while offline
2. System checks for encrypted local data
3. Backend verifies encrypted user data
4. User logged in with cached credentials
5. Online re-authentication required when connection restored

### Token Refresh

1. System automatically checks token expiration
2. Requests new token from backend if needed
3. Updates local storage with new token
4. Seamless user experience without re-login

## API Reference

### Backend Authentication API

#### Verify Clerk Token
```http
POST /api/auth/verify-clerk-token
Content-Type: application/json

{
  "sessionToken": "clerk_session_token_here"
}
```

Response:
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "role": "user"
  },
  "encryptedUserData": "encrypted_data_here",
  "expiresIn": "24h"
}
```

#### Refresh Token
```http
POST /api/auth/refresh-token
Authorization: Bearer jwt_token_here
```

#### Verify Authentication
```http
GET /api/auth/verify
Authorization: Bearer jwt_token_here
```

### Electron IPC API

```javascript
// Start authentication
const result = await window.electronAPI.startAuth();

// Verify token
const verification = await window.electronAPI.verifyAuth(sessionToken);

// Refresh token
const refresh = await window.electronAPI.refreshToken(currentToken);

// Logout
const logout = await window.electronAPI.logout(token);
```

## Testing

### Backend Testing
```bash
cd backend
npm test
```

### Authentication Flow Testing
```bash
# Start backend
cd backend && npm start

# Test health endpoint
curl http://localhost:5000/health

# Test auth URL endpoint
curl http://localhost:5000/api/auth/auth-url
```

## Troubleshooting

### Common Issues

1. **"Electron API not available"**
   - Ensure preload script is properly configured
   - Check webPreferences in main process

2. **"Token verification failed"**
   - Verify Clerk configuration in backend
   - Check JWT_SECRET in environment variables

3. **"Offline authentication failed"**
   - Ensure encrypted user data exists in localStorage
   - Check ENCRYPTION_KEY in backend environment

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

## Security Considerations

1. **Never expose Clerk credentials in renderer process**
2. **Always use HTTPS in production**
3. **Regularly rotate JWT secrets**
4. **Monitor authentication logs**
5. **Implement rate limiting on auth endpoints**
6. **Use strong encryption keys for local storage**

## Migration Guide

### From Old Authentication System

1. Remove Clerk provider from React app
2. Update routes to use new authentication
3. Replace sign-in/sign-up pages with new login
4. Test authentication flow thoroughly
5. Update environment configuration

### Breaking Changes

- Clerk authentication moved to backend
- New authentication context required
- Route protection updated
- Login page redesigned

## Future Enhancements

- [ ] Implement OAuth provider support
- [ ] Add biometric authentication
- [ ] Implement session analytics
- [ ] Add multi-factor authentication
- [ ] Implement SSO integration