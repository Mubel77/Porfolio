import React, { useState, useEffect } from 'react';
import { AppShell, Group, Burger, Button, Avatar, Menu, ActionIcon, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDownload, IconSun, IconMoon } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';

interface HeaderProps {
  colorScheme: 'light' | 'dark';
  toggleColorScheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ colorScheme, toggleColorScheme }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = portfolioData.navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      close();
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container size="xl" className="px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Avatar 
              src={portfolioData.personal.avatar} 
              alt={portfolioData.personal.name}
              size="md"
              className="ring-2 ring-blue-500/20"
            />
            <div className="hidden sm:block">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {portfolioData.personal.name.split(' ')[0]}
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Developer
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {portfolioData.navigation.map((item) => (
              <motion.button
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <ActionIcon
              onClick={toggleColorScheme}
              variant="subtle"
              size="lg"
              className="hidden sm:flex"
            >
              {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>

            <Button
              leftSection={<IconDownload size={16} />}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="sm"
              className="hidden sm:flex"
              component="a"
              href={portfolioData.personal.resume}
              target="_blank"
              onClick={() => {
                // Simular descarga de CV
                const link = document.createElement('a');
                link.href = portfolioData.personal.resume;
                link.download = 'CV-Mauricio-Cuellar.pdf';
                link.click();
                
                // Mostrar alerta
                alert('¡CV descargado exitosamente!');
              }}
            >
              CV
            </Button>

            {/* Mobile menu button */}
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className="md:hidden"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white dark:bg-gray-900 rounded-lg mt-2 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="p-4 space-y-2">
                {portfolioData.navigation.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <Button
                    leftSection={<IconDownload size={16} />}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                    size="sm"
                    fullWidth
                    onClick={() => {
                      // Simular descarga de CV
                      const link = document.createElement('a');
                      link.href = portfolioData.personal.resume;
                      link.download = 'CV-Mauricio-Cuellar.pdf';
                      link.click();
                      
                      // Mostrar alerta
                      alert('¡CV descargado exitosamente!');
                      close();
                    }}
                  >
                    Descargar CV
                  </Button>
                  <ActionIcon
                    onClick={toggleColorScheme}
                    variant="subtle"
                    size="lg"
                    className="ml-2"
                  >
                    {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
                  </ActionIcon>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Header;