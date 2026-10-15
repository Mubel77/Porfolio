import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Proyectos from './routes/Proyectos';
import Experiencia from './routes/Experiencia';
import Contacto from './routes/Contacto';
import Habilidades from './routes/Habilidades';
import Estudios from './routes/Estudios';
import { getStoredLanguage } from './utils/i18n';
import MotionExperience from './components/MotionExperience';
import esContent from './data/es.json';
import enContent from './data/en.json';
import './styles/globals.css';
import './App.css';

function App() {
  const [language, setLanguage] = useState(getStoredLanguage);
  const content = language === 'es' ? esContent : enContent;

  return (
    <ThemeProvider>
      <Router>
        <div className="portfolio-app">
          <MotionExperience />
          <Header content={content.header} onLanguageChange={setLanguage} />
          
          <Routes>
            <Route path="/" element={<Home content={content} />} />
            <Route path="/proyectos" element={<Proyectos content={content} />} />
            <Route path="/experiencia" element={<Experiencia content={content} />} />
            <Route path="/contacto" element={<Contacto content={content} />} />
            <Route path="/estudios" element={<Estudios content={content} />} />
            <Route path="/habilidades" element={<Habilidades content={content} />} />
          </Routes>
          <Footer content={content.footer} aboutContent={content.about} navLabels={content.header.nav} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;