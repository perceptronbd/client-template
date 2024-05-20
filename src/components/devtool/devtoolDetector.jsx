import { Bug, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  console.log('currentPath', currentPath);

  const links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Issues', href: '/issues' },
    { label: 'Profile', href: '/profile' },
    { label: 'Settings', href: '/settings' },
  ];

  return (
    <nav className="flex items-center w-full gap-4 px-4 border-b h-14 md:px-8 lg:px-16">
      {/* Logo */}
      <Link to="/">
        <p className="font-bold uppercase">Logo</p>
      </Link>

      <button className="ml-auto md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menus */}
      <ul
        className={`${
          menuOpen
            ? 'translate-x-0 absolute z-10 right-4 top-14'
            : 'hidden translate-x-3 translate-y-3'
        } flex md:hidden flex-col shadow-2xl rounded-lg bg-white p-4 w-52 gap-4 transition-all duration-300 ease-in-out`}
      >
        {links.map((link) => (
          <li
            key={link.label}
            className={`${currentPath === link.href ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Menus */}
      <ul className="hidden gap-5 md:flex">
        {links.map((link) => (
          <li
            key={link.label}
            className={`${currentPath === link.href ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
