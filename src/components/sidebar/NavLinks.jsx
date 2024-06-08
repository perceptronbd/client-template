// navLinks.jsx
// Description:
// This file exports an array of navigation link objects used by the Sidebar component. Each object represents a section
// with a label and an array of items. Each item contains a label, a href link, and an optional icon component.

import { Home, User, Settings, LogOut } from 'lucide-react';

export const navLinks = [
  {
    label: 'Main',
    items: [
      {
        label: 'Home',
        href: '/',
        icon: <Home />,
      },
      {
        label: 'Profile',
        href: '/profile',
        icon: <User />,
      },
    ],
  },
  {
    label: 'Settings',
    items: [
      {
        label: 'Account Settings',
        href: '/settings/account',
        icon: <Settings />,
      },
      {
        label: 'Logout',
        href: '#',
        icon: <LogOut />,
      },
    ],
  },
];

export default navLinks;
