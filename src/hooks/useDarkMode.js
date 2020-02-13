import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = initialValue => {

  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {
    darkMode === false
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  });

    return [ darkMode, setDarkMode];
}

export default useDarkMode;
