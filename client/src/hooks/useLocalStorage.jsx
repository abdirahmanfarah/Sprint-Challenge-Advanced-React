import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

  const[thisValue, setThisValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    catch(error) {
      return initialValue;
    }
  });
  const setValue = value => {
    setThisValue(value);

    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [thisValue, setThisValue]
}
