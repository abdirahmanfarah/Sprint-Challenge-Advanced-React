import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [someValue, setSomeValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
      catch(error) {
        return initialValue
      }
  });
  const setValue = value => {
    setSomeValue(value);

    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return [someValue, setValue]
}