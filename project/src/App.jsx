import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageFab from './components/LanguageFab';
import Home from './routes/Home';
import Proyectos from './routes/Proyectos';
import Experiencia from './routes/Experiencia';
import Contacto from './routes/Contacto';
import Habilidades from './routes/Habilidades';
import Estudios from './routes/Estudios';
import { getStoredLanguage } from './utils/i18n';
import esContent from './data/es.json';
import enContent from './data/en.json';
import './styles/globals.css';

function App() {
  const [language, setLanguage] = useState(getStoredLanguage);
  const [content, setContent] = useState(esContent);

  useEffect(() => {
    setContent(language === 'es' ? esContent : enContent);
  }, [language]);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
          <Header content={content.header} />
          
          <Routes>
            <Route path="/" element={<Home content={content} />} />
            <Route path="/proyectos" element={<Proyectos content={content} />} />
            <Route path="/experiencia" element={<Experiencia content={content} />} />
            <Route path="/contacto" element={<Contacto content={content} />} />
            <Route path="/estudios" element={<Estudios content={content} />} />
            <Route path="/habilidades" element={<Habilidades content={content} />} />
          </Routes>

          <Footer content={content.footer} aboutContent={content.about} />
          <LanguageFab onLanguageChange={setLanguage} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;