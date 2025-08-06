import React, { useState } from 'react';
import { Container, Title, Text, Badge, Card, Group, Button, Grid, Modal, List } from '@mantine/core';
import { IconBuildingSkyscraper, IconCalendar, IconMapPin, IconExternalLink, IconBrandGithub, IconEye } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useDisclosure } from '@mantine/hooks';
import portfolioData from '../../data/portfolio.json';

const WorkExperience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);

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

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    open();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'green';
      case 'En desarrollo':
        return 'yellow';
      default:
        return 'gray';
    }
  };

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
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
              gradient={{ from: 'green', to: 'teal' }}
              size="lg"
              className="mb-4"
            >
              Experiencia & Proyectos
            </Badge>
            <Title order={2} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Mi Trayectoria Profesional
            </Title>
            <Text 
              size="lg" 
              className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Experiencia laboral y proyectos que demuestran mis habilidades 
              técnicas y creatividad en el desarrollo web.
            </Text>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <Title order={3} className="text-center mb-12 text-gray-900 dark:text-white">
              Experiencia Laboral
            </Title>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {portfolioData.experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                      <Card shadow="lg" padding="xl" className="hover:shadow-xl transition-shadow">
                        {/* Header */}
                        <div className="mb-6">
                          <Group justify="apart" className="mb-2">
                            <Badge
                              variant="light"
                              color="blue"
                              size="lg"
                              leftSection={<IconCalendar size={14} />}
                            >
                              {exp.period}
                            </Badge>
                          </Group>
                          
                          <Title order={4} className="mb-2 text-gray-900 dark:text-white">
                            {exp.position}
                          </Title>
                          
                          <Group className="mb-3">
                            <Group gap="xs">
                              <IconBuildingSkyscraper size={16} className="text-blue-500" />
                              <Text weight={500} className="text-blue-600 dark:text-blue-400">
                                {exp.company}
                              </Text>
                            </Group>
                            <Group gap="xs">
                              <IconMapPin size={16} className="text-gray-500" />
                              <Text size="sm" className="text-gray-500">
                                {exp.location}
                              </Text>
                            </Group>
                          </Group>
                        </div>

                        {/* Description */}
                        <Text className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </Text>

                        {/* Achievements */}
                        <div className="mb-6">
                          <Title order={5} className="mb-3 text-gray-900 dark:text-white">
                            Logros Principales:
                          </Title>
                          <List
                            spacing="sm"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {exp.achievements.map((achievement, idx) => (
                              <List.Item key={idx}>
                                {achievement}
                              </List.Item>
                            ))}
                          </List>
                        </div>

                        {/* Technologies */}
                        <div>
                          <Title order={5} className="mb-3 text-gray-900 dark:text-white">
                            Tecnologías:
                          </Title>
                          <Group gap="xs">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                size="sm"
                                className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </Group>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={itemVariants}>
            <Title order={3} className="text-center mb-12 text-gray-900 dark:text-white">
              Proyectos Destacados
            </Title>
            
            <Grid>
              {portfolioData.projects.map((project) => (
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={project.id}>
                  <motion.div variants={itemVariants}>
                    <Card
                      shadow="md"
                      padding="lg"
                      className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Project Image */}
                      <div className="relative mb-4 rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <Button
                            variant="filled"
                            color="blue"
                            leftSection={<IconEye size={16} />}
                            onClick={() => openProjectModal(project)}
                            className="opacity-0 hover:opacity-100 transition-opacity duration-300"
                          >
                            Ver Detalles
                          </Button>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 flex flex-col">
                        <Group justify="apart" className="mb-3">
                          <Badge
                            variant="light"
                            color={getStatusColor(project.status)}
                          >
                            {project.status}
                          </Badge>
                          <Badge variant="outline">
                            {project.category}
                          </Badge>
                        </Group>

                        <Title order={4} className="mb-3 text-gray-900 dark:text-white">
                          {project.title}
                        </Title>

                        <Text
                          size="sm"
                          className="mb-4 text-gray-600 dark:text-gray-400 line-clamp-3 flex-1"
                        >
                          {project.description}
                        </Text>

                        {/* Technologies */}
                        <Group gap="xs" className="mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" size="sm">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" size="sm" color="gray">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </Group>

                        {/* Actions */}
                        <Group className="mt-auto">
                          {project.liveUrl && (
                            <Button
                              variant="light"
                              size="sm"
                              leftSection={<IconExternalLink size={16} />}
                              component="a"
                              href={project.liveUrl}
                              target="_blank"
                              className="flex-1"
                            >
                              Demo
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              leftSection={<IconBrandGithub size={16} />}
                              component="a"
                              href={project.githubUrl}
                              target="_blank"
                              className="flex-1"
                            >
                              Código
                            </Button>
                          )}
                        </Group>
                      </div>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title={selectedProject?.title}
        size="lg"
        centered
      >
        {selectedProject && (
          <div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <Group justify="apart" className="mb-4">
              <Badge
                variant="light"
                color={getStatusColor(selectedProject.status)}
                size="lg"
              >
                {selectedProject.status}
              </Badge>
              <Badge variant="outline" size="lg">
                {selectedProject.category}
              </Badge>
            </Group>

            <Text className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {selectedProject.description}
            </Text>

            <div className="mb-6">
              <Title order={4} className="mb-3 text-gray-900 dark:text-white">
                Características Principales:
              </Title>
              <List spacing="sm">
                {selectedProject.features.map((feature: string, index: number) => (
                  <List.Item key={index}>{feature}</List.Item>
                ))}
              </List>
            </div>

            <div className="mb-6">
              <Title order={4} className="mb-3 text-gray-900 dark:text-white">
                Tecnologías Utilizadas:
              </Title>
              <Group gap="xs">
                {selectedProject.technologies.map((tech: string) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </Group>
            </div>

            <Group>
              {selectedProject.liveUrl && (
                <Button
                  leftSection={<IconExternalLink size={16} />}
                  component="a"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                >
                  Ver Demo
                </Button>
              )}
              {selectedProject.githubUrl && (
                <Button
                  leftSection={<IconBrandGithub size={16} />}
                  component="a"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  variant="outline"
                >
                  Ver Código
                </Button>
              )}
            </Group>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default WorkExperience;