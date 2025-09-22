import React from 'react';
import { useAuth } from '../hooks/useauth';
import { Navigate } from 'react-router-dom'; // 1. Import Navigate

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    // 2. If there's no user, redirect to the /login page
    return <Navigate to="/login" />;
  }

  // 3. If there is a user, show the children (the dashboard)
  return <>{children}</>;
};

export default ProtectedRoute;