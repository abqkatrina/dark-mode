import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {

  const [theme, toggleTheme] = useDarkMode();

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleTheme}
          className={theme === 'dark' ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
