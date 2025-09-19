import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import { FullPageLoading } from './LoadingSpinner'

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth()
  const location = useLocation()

  // Show loading while Clerk is initializing
  if (!isLoaded) {
    return <FullPageLoading message="Checking authentication..." />
  }

  // If user is not signed in, redirect to sign-in with return URL
  if (!isSignedIn) {
    return <Navigate to={`/sign-in?redirect_url=${encodeURIComponent(location.pathname)}`} replace />
  }

  // If user is signed in, render the protected content
  return children
}

export default ProtectedRoute
