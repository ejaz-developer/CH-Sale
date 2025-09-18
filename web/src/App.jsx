import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        {/* Auth routes without layout */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Main routes with layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="dashboard"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Dashboard - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="demo"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Demo - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="about"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">About - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="contact"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Contact - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="help"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Help - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="docs"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Documentation - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="privacy"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Privacy Policy - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="terms"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Terms of Service - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-white text-2xl">Page Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
