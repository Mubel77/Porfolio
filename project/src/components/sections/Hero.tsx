import React from 'react';
import { Container, Title, Text, Button, Group, Avatar, Badge } from '@mantine/core';
import { IconDownload, IconMail, IconArrowDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import SocialLinks from '../ui/SocialLinks';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <Container size="xl" className="px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative">
              <Avatar
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                size={150}
                className="mx-auto ring-4 ring-blue-500/20 shadow-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-blue-500/20 -z-10"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <Badge
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="lg"
              className="mb-4"
            >
              👋 ¡Hola! Soy
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <Title
              order={1}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
            >
              {portfolioData.personal.name}
            </Title>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <Title
              order={2}
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
            >
              {portfolioData.personal.title}
            </Title>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <Text
              className="text-lg md:text-xl mb-4 text-gray-600 dark:text-gray-400 font-medium"
            >
              {portfolioData.personal.subtitle}
            </Text>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <Text
              size="lg"
              className="max-w-2xl mx-auto mb-6 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {portfolioData.personal.description}
            </Text>
          </motion.div>

          {/* Objective */}
          <motion.div variants={itemVariants}>
            <div className="max-w-2xl mx-auto mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <Text
                size="md"
                className="text-gray-700 dark:text-gray-300 leading-relaxed italic"
              >
                "{portfolioData.personal.objective}"
              </Text>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge
              variant="light"
              color="green"
              size="lg"
              className="mb-8"
            >
              📍 {portfolioData.personal.location}
            </Badge>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants}>
            <Group justify="center" className="mb-8">
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                leftSection={<IconMail size={20} />}
                onClick={() => scrollToSection('#contact')}
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                Contáctame
              </Button>
              <Button
                size="lg"
                variant="outline"
                leftSection={<IconDownload size={20} />}
                onClick={() => {
                  // Simular descarga de CV
                  const link = document.createElement('a');
                  link.href = portfolioData.personal.resume;
                  link.download = 'CV-Mauricio-Cuellar.pdf';
                  link.click();
                  
                  // Mostrar alerta
                  alert('¡CV descargado exitosamente!');
                }}
                className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Descargar CV
              </Button>
              <Button
                size="lg"
                variant="light"
                onClick={() => scrollToSection('#work')}
                className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Ver Proyectos
              </Button>
            </Group>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-12">
            <SocialLinks />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-blue-500 transition-colors flex flex-col items-center space-y-2"
            >
              <span className="text-sm">Conoce más</span>
              <IconArrowDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;