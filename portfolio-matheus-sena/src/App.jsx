import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

import Header      from './components/Header';
import Hero        from './components/Hero';
import AboutMe     from './components/AboutMe';
import Experience  from './components/Experience';
import Projects    from './components/Projects';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Hero />
    <AboutMe />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </ThemeProvider>
);

export default App;
