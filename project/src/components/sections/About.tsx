import React from 'react';
import { Container, Title, Text, Grid, Card, Badge, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../../data/portfolio.json';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container size="xl" className="px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              size="lg"
              className="mb-4"
            >
              Sobre Mí
            </Badge>
            <Title order={2} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Conoce Mi Perfil Profesional
            </Title>
            <Text 
              size="lg" 
              className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Desarrollador web argentino especializado en tecnologías modernas 
              y soluciones digitales innovadoras.
            </Text>
          </motion.div>

          {/* About Content */}
          <div className="mb-16">
            <motion.div variants={itemVariants}>
              <Card shadow="lg" padding="xl" className="mb-8">
                <Grid>
                  <Grid.Col span={{ base: 12, md: 8 }}>
                    <Title order={3} className="mb-4 text-gray-900 dark:text-white">
                      Mi Historia Profesional
                    </Title>
                    <Text className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      Soy un desarrollador web argentino con experiencia en el desarrollo 
                      de aplicaciones web modernas. Mi pasión por la tecnología me llevó 
                      a especializarme en desarrollo frontend y backend, trabajando con 
                      tecnologías como React, JavaScript, Node.js y bases de datos.
                    </Text>
                    <Text className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      Actualmente trabajo en Artes Virtuales Group como Desarrollador Full Stack, 
                      donde colaboro en proyectos web innovadores y trabajo con un equipo 
                      multidisciplinario para crear soluciones digitales de calidad.
                    </Text>
                    <Text className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Mi objetivo es seguir creciendo profesionalmente en el desarrollo web, 
                      manteniéndome actualizado con las últimas tendencias y mejores prácticas, 
                      siempre buscando formas de mejorar la experiencia del usuario final.
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                      <Title order={4} className="mb-6 text-center">
                        Estadísticas
                      </Title>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold">2+</div>
                          <div className="text-sm opacity-90">Años de Experiencia</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">15+</div>
                          <div className="text-sm opacity-90">Proyectos Completados</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">100%</div>
                          <div className="text-sm opacity-90">Satisfacción del Cliente</div>
                        </div>
                      </div>
                    </div>
                  </Grid.Col>
                </Grid>
              </Card>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <Title order={3} className="text-center mb-12 text-gray-900 dark:text-white">
              Competencias Técnicas
            </Title>
            <Grid>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="md" padding="xl" className="h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">💻</div>
                    <Title order={4} className="text-gray-800 dark:text-white">
                      Habilidades Técnicas
                    </Title>
                  </div>
                  <div className="space-y-2">
                    {portfolioData.skills.technical.map((skill) => (
                      <Badge key={skill} variant="outline" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="md" padding="xl" className="h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">🌐</div>
                    <Title order={4} className="text-gray-800 dark:text-white">
                      Idiomas
                    </Title>
                  </div>
                  <div className="space-y-2">
                    {portfolioData.skills.languages.map((language) => (
                      <Badge key={language} variant="outline" className="mr-2 mb-2">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="md" padding="xl" className="h-full">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">🤝</div>
                    <Title order={4} className="text-gray-800 dark:text-white">
                      Habilidades Blandas
                    </Title>
                  </div>
                  <div className="space-y-2">
                    {portfolioData.skills.soft.map((skill) => (
                      <Badge key={skill} variant="outline" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Grid.Col>
            </Grid>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <Title order={3} className="text-center mb-12 text-gray-900 dark:text-white">
              Educación y Formación
            </Title>
            <Grid>
              {portfolioData.education.map((edu, index) => (
                <Grid.Col span={{ base: 12, md: 6 }} key={index}>
                  <Card shadow="md" padding="xl" className="h-full hover:shadow-xl transition-shadow">
                    <Badge 
                      variant="gradient" 
                      gradient={{ from: 'blue', to: 'cyan' }} 
                      className="mb-4"
                    >
                      {edu.period}
                    </Badge>
                    <Title order={4} className="mb-2 text-gray-900 dark:text-white">
                      {edu.degree}
                    </Title>
                    <Text weight={500} className="mb-3 text-blue-600 dark:text-blue-400">
                      {edu.institution}
                    </Text>
                    <Text className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;