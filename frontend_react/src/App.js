import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import SocialMedia from './components/SocialMedia'

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
    <div className="app" data-theme={theme}>
      <Navbar theme={theme}/>
      <Header theme={theme}/>
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <SocialMedia theme={theme} switchTheme={switchTheme}/>
    </div>
  )
};

export default App;
