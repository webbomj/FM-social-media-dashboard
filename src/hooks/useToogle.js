import { useLayoutEffect, useState } from 'react';

const useToogle = () => {
  const [theme, setTheme] = useState('dark')

  useLayoutEffect(
    () => {
      document.documentElement.setAttribute('data-theme', theme)
    }
    ,[theme])
  return  {theme, setTheme}
};

export default useToogle;