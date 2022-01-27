import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/Spinner';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Spinner />;
  }

  return user?.email && (admin || !isLoading) ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default AdminRoute;
