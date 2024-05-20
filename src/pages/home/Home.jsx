import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className="flex w-full gap-6 text-start">
      {' '}
      <Sidebar />
      <div className="grid gap-6">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
