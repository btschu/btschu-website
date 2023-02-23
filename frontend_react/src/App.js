import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

import useLocalStorage from './hooks/useLocalStorage';


import './App.scss';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'dark');

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <div className="app" onClick={switchTheme} data-theme={theme}>
      <Navbar theme={theme}/>
      <Header theme={theme}/>
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
};

export default App;
