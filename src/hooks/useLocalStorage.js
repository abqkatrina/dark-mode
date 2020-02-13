 import { useState } from "react";

 const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.setItem(key, initialValue);
      return item ? JSON.parse(item) : initialValue;})

    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };

  return [storedValue, setStoredValue, setValue];
}
export default useLocalStorage;


