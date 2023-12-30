import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoute;
