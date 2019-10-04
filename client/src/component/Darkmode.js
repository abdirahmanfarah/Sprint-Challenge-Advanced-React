import React, { useState } from 'react';

import { useDarkMode } from '../hooks/useDarkMode'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode('key', false)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  };

  return (
    <div>
      <div className="dark-mode__toggle"  onClick={toggleMode}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
           />
      </div>
    </div>
  )
}

export default DarkMode;