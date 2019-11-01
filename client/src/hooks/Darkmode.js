import { useLocalStorage } from './LocalStorage';
import React, { useEffect } from 'react';

 const useDarkMode = (key, initialValue) => {
  const [dark, setDark] = useLocalStorage(key, initialValue);

  useEffect(() => {
    try {

      dark ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.removed('dark-mode')
    }
    catch(error) {
      return setDark
    }
  }, [dark, setDark])
  return [dark, setDark]
}

export default useDarkMode;