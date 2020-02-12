import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {

  const [theme, setTheme] = useLocalStorage(key, initialValue);
   
  const toggleTheme = () => {
    if (theme === 'light') {
      console.log('theme is light');
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
      // NEED TO SET CLASS
      // return (
      //   <body style={{ class: 'dark-mode'}}></body>
      // );
    } else {
      console.log('theme is dark')
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return [theme, toggleTheme];
} 
export default useDarkMode;
// {darkMode ? 'toggle toggled' : 'toggle'}