import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <p>this is admin dashobard</p> <Outlet />
    </div>
  );
};

export default AdminDashboard;
