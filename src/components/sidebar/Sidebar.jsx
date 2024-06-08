// DOC: Sidebar.jsx
// Description:
// The Sidebar component is a reusable React component that provides a vertical navigation menu for a web application.
// It displays navigation links grouped into sections, a logo at the top, and a logout button.
// The component uses data from the `navLinks` array to generate navigation items dynamically.

// Props: None

// Usage:
// import Sidebar from './Sidebar';
// import { BrowserRouter as Router } from 'react-router-dom';
//
// function App() {
//   return (
//     <Router>
//       <Sidebar />
//       {/* Other components and routes */}
//     </Router>
//   );
// }

// navLinks structure: check NavLinks.jsx

import React from 'react';
import { navLinks } from './navLinks';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import logo from '../../assets/logo.png';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    console.log('User logged out');
    // navigate('/logout'); // Redirect to logout route
  };

  return (
    <aside className="flex flex-col justify-between h-screen pb-8 text-white w-80 bg-background">
      <nav>
        <div
          className="w-full px-6 pt-6 pb-3 mb-8"
          style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)' }}
        >
          <Link to="/">
            <img src={logo} alt="Qravy" />
          </Link>
        </div>
        {navLinks.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h3 className="pl-6 mb-3 text-xs text-gray-400 uppercase">{section.label}</h3>
            {section.items.map((item, itemIndex) =>
              item.label === 'logout' ? (
                <button
                  key={itemIndex}
                  onClick={handleLogout}
                  className="flex w-full gap-4 px-6 py-4 pl-6 capitalize "
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ) : (
                <NavLink
                  key={itemIndex}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center space-x-4 w-full py-4 pl-6 font-medium capitalize ${
                      isActive ? 'bg-primary' : ''
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              )
            )}
          </div>
        ))}
      </nav>
      {/* Bottom's items */}
      <div className="px-6">
        <Link to="/help" className="flex items-center gap-4 text-lg font-semibold text-blue-600">
          <HelpCircle /> Need Help?
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
