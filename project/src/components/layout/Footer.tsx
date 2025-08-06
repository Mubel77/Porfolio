import React from 'react';
import { Container, Group, Text, Divider, Badge } from '@mantine/core';
import { IconHeart, IconCode } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';
import SocialLinks from '../ui/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container size="xl" className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
              >
                {portfolioData.personal.name}
              </motion.button>
              <Text size="sm" className="text-gray-400 mb-4 leading-relaxed">
                {portfolioData.personal.title} especializado en crear 
                experiencias web excepcionales y soluciones tecnológicas innovadoras.
              </Text>
              <Badge variant="light" color="green" className="mb-4">
                Disponible para proyectos
              </Badge>
            </div>

            {/* Quick Links */}
            <div>
              <Text weight={600} className="mb-4 text-white">
                Enlaces Rápidos
              </Text>
              <div className="space-y-2">
                {portfolioData.navigation.map((item) => (
                  <motion.button
                    key={item.href}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <Text weight={600} className="mb-4 text-white">
                Contacto
              </Text>
              <div className="space-y-2 text-sm text-gray-400">
                <Text>📧 {portfolioData.personal.email}</Text>
                <Text>📱 {portfolioData.personal.phone}</Text>
                <Text>📍 {portfolioData.personal.location}</Text>
              </div>
              <div className="mt-4">
                <Text size="sm" className="text-gray-400 mb-3">
                  Sígueme en:
                </Text>
                <SocialLinks />
              </div>
            </div>
          </div>

          <Divider color="gray.7" className="mb-6" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <Group className="text-sm text-gray-400">
              <Text>
                © {currentYear} {portfolioData.personal.name.split(' ')[0]}. 
                Todos los derechos reservados.
              </Text>
            </Group>

            <Group className="text-sm text-gray-400">
              <Group gap="xs">
                <Text>Hecho con</Text>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <IconHeart size={16} className="text-red-500" />
                </motion.div>
                <Text>y</Text>
                <IconCode size={16} className="text-blue-400" />
                <Text>por Mauricio</Text>
              </Group>
            </Group>

            <Group className="text-sm text-gray-400">
              <Badge variant="outline" size="sm">
                {portfolioData.footer.version}
              </Badge>
            </Group>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <Text size="xs" className="text-center text-gray-500">
              {portfolioData.footer.builtwith}
            </Text>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;