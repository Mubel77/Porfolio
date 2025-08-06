import React, { useState } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useColorScheme } from '@mantine/hooks';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

// Components
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WorkExperience from './components/sections/WorkExperience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(preferredColorScheme);

  const toggleColorScheme = () => {
    setColorScheme(current => current === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider
        theme={{
          colorScheme,
          primaryColor: 'blue',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          headings: {
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontWeight: '700',
          },
          components: {
            Button: {
              defaultProps: {
                fw: 500,
              },
            },
            Badge: {
              defaultProps: {
                fw: 500,
              },
            },
          },
        }}
        defaultColorScheme="auto"
      >
        <Notifications position="top-right" />
        <div className={`min-h-screen ${colorScheme === 'dark' ? 'dark' : ''}`}>
          <Header colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
          <main>
            <Hero />
            <About />
            <WorkExperience />
            <Contact />
          </main>
          <Footer />
        </div>
      </MantineProvider>
    </>
  );
};

export default App;