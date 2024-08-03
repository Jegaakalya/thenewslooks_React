// src/AdminOnlyComponent.js
import React from 'react';
import useAuth from './useAuth';

const AdminOnlyComponent = () => {
  const { isAuth, role } = useAuth();

  if (!isAuth || role !== 'Admin') {
    return <div>Permission denied</div>;
  }

  return <div>Admin Content</div>;
};

export default AdminOnlyComponent;
