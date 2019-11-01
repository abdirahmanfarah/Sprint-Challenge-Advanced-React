import React, { useState } from 'react';
import {useDarkmode} from '../hooks/Darkmode';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState('key', false)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <div className='dark-mode_clicked' onClick={toggleMode}>
        <div className={darkMode ? 'notClicked clicked' : 'notClicked'} />
      </div>
    </div>
  )
}
export default DarkMode;