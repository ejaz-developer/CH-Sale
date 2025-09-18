import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { dark } from '@clerk/themes';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import PlansPage from './pages/PlansPage';
import ProfilePage from './pages/ProfilePage';
import IntegrationPage from './pages/IntegrationPage';
import './App.css';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key');
}

// Custom Clerk appearance
const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: '#2a9d8f',
    colorBackground: '#1a2f36',
    colorInputBackground: '#264653',
    colorInputText: '#f8fafc',
    colorText: '#f8fafc',
    colorTextSecondary: '#94a3b8',
    borderRadius: '8px',
  },
  elements: {
    card: 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8',
    headerTitle:
      'text-2xl font-bold bg-gradient-to-r from-persian to-saffron bg-clip-text text-transparent',
    headerSubtitle: 'text-slate-400',
    formButtonPrimary:
      'bg-gradient-to-r from-persian to-saffron hover:shadow-glow rounded-lg transition-all duration-300',
    footerActionLink: 'text-persian hover:text-saffron transition-colors',
  },
};

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey} appearance={clerkAppearance}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-charcoal-darkest via-charcoal-darker to-charcoal-dark text-slate-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/integration" element={<IntegrationPage />} />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
