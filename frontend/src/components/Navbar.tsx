import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Home, BarChart3, Settings } from 'lucide-react';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Today', path: '/dashboard/today', icon: Home },
    { name: 'Calendar', path: '/dashboard/calendar', icon: Calendar },
    { name: 'Moods', path: '/dashboard/moods', icon: BarChart3 },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'active' : ''}`
                }
              >
                <Icon className="navbar-icon" />
                <span className="navbar-text">{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;