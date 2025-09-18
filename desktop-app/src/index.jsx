import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error(
    'Missing Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your .env file',
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
    appearance={{
      baseTheme: dark,
      
    }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);
