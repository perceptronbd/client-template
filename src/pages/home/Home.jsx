import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className="flex w-full gap-6 text-start">
      {' '}
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
