import { useState } from "react";

const useLocalStorage = (key, initialState) => {

  const [storedValue, setStoredValue] = useState(() => {

    if(JSON.parse(window.localStorage.getItem(key))) {
      return JSON.parse(window.localStorage.getItem(key))
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialState));
    }
 
  });

  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;


