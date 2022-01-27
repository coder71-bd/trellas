import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../../components/Spinner';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  console.log(user);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return user?.email ? (
    user?.emailVerified ? (
      children
    ) : (
      <Navigate to="/emailverify" />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
