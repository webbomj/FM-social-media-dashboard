import React from 'react';
import "../css/Header.css"
import useToogle from '../hooks/useToogle';

const Header = () => {

  const {theme, setTheme} = useToogle()

  const toogleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }

  }

  return (
    <div className='header'>
      <div className='header__leftBlock'>
        <h1 className='header__h1'>Social Media Dashboard</h1>
        <span className='header__leftSpan'>Total Followers: 23,004</span>
      </div>
      <div className='header__rightBlock'>
        <span className='header__rightSpan'>Dark Mode</span>
        <div className='toogle-wrapper' onClick={toogleTheme}>
          <div className={theme === 'dark' ? 'toogleDark' : 'toogleLight'}>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;