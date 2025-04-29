import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import en from './translations/en.json';
import es from './translations/es.json';
import Experience from './components/Experience';

function App() {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(en);

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('es');
      setTranslations(es);
    } else {
      setLanguage('en');
      setTranslations(en);
    }
  };

  return (
    <>
      <Navbar translations={translations} toggleLanguage={toggleLanguage} language={language} />
      <Hero translations={translations} />
      <About translations={translations} />
      <Experience translations={translations} language={language} />
      <Projects translations={translations} />
      <Footer translations={translations} />
    </>
  );
}

export default App;