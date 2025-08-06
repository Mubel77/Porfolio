import React, { useState } from 'react';
import { Container, Title, Text, Badge, Card, Group, Button, TextInput, Textarea, Grid } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconSend, IconBrandWhatsapp } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { notifications } from '@mantine/notifications';
import portfolioData from '../../data/portfolio.json';
import SocialLinks from '../ui/SocialLinks';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envío de formulario
    setTimeout(() => {
      notifications.show({
        title: '¡Mensaje enviado!',
        message: 'Gracias por contactarme. Te responderé pronto.',
        color: 'green',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: IconMail,
      label: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: 'blue'
    },
    {
      icon: IconPhone,
      label: 'Teléfono',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      color: 'green'
    },
    {
      icon: IconMapPin,
      label: 'Ubicación',
      value: portfolioData.personal.location,
      href: '#',
      color: 'red'
    },
    {
      icon: IconBrandWhatsapp,
      label: 'WhatsApp',
      value: 'Contactar',
      href: `https://wa.me/${portfolioData.personal.phone.replace(/\s+/g, '')}`,
      color: 'teal'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
              gradient={{ from: 'purple', to: 'pink' }}
              size="lg"
              className="mb-4"
            >
              Contacto
            </Badge>
            <Title order={2} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Trabajemos Juntos
            </Title>
            <Text 
              size="lg" 
              className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas 
              y ayudarte a convertirlas en realidad.
            </Text>
          </motion.div>

          <Grid>
            {/* Contact Info */}
            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div variants={itemVariants}>
                <Card shadow="lg" padding="xl" className="h-full">
                  <Title order={3} className="mb-6 text-gray-900 dark:text-white">
                    Información de Contacto
                  </Title>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Group className="cursor-pointer">
                          <div className={`p-3 rounded-lg bg-${info.color}-100 dark:bg-${info.color}-900/20`}>
                            <info.icon size={20} className={`text-${info.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <Text size="sm" className="text-gray-500 dark:text-gray-400">
                              {info.label}
                            </Text>
                            <Text
                              weight={500}
                              className="text-gray-900 dark:text-white cursor-pointer hover:text-blue-600"
                              component={info.href !== '#' ? 'a' : 'span'}
                              href={info.href !== '#' ? info.href : undefined}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                            >
                              {info.value}
                            </Text>
                          </div>
                        </Group>
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Text size="sm" className="mb-4 text-gray-500 dark:text-gray-400">
                      También me puedes encontrar en:
                    </Text>
                    <SocialLinks />
                  </div>

                  {/* Availability */}
                  <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Group>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <Text size="sm" className="text-green-700 dark:text-green-400 font-medium">
                        Disponible para proyectos freelance
                      </Text>
                    </Group>
                  </div>
                </Card>
              </motion.div>
            </Grid.Col>

            {/* Contact Form */}
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div variants={itemVariants}>
                <Card shadow="lg" padding="xl" className="h-full">
                  <Title order={3} className="mb-6 text-gray-900 dark:text-white">
                    Envíame un Mensaje
                  </Title>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Grid>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Nombre completo"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          size="md"
                        />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Email"
                          placeholder="tu@email.com"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          size="md"
                        />
                      </Grid.Col>
                    </Grid>

                    <Textarea
                      label="Mensaje"
                      placeholder="Cuéntame sobre tu proyecto..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      minRows={6}
                      size="md"
                    />

                    <Button
                      type="submit"
                      size="lg"
                      variant="gradient"
                      gradient={{ from: 'blue', to: 'purple' }}
                      leftSection={<IconSend size={18} />}
                      loading={isLoading}
                      fullWidth
                      className="mt-6"
                    >
                      {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </form>

                  {/* Quick Contact Options */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Text size="sm" className="mb-4 text-gray-500 dark:text-gray-400">
                      ¿Prefieres contacto directo?
                    </Text>
                    <Group>
                      <Button
                        variant="outline"
                        leftSection={<IconMail size={16} />}
                        component="a"
                        href={`mailto:${portfolioData.personal.email}`}
                        size="sm"
                      >
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        color="green"
                        leftSection={<IconBrandWhatsapp size={16} />}
                        component="a"
                        href={`https://wa.me/${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                        target="_blank"
                        size="sm"
                      >
                        WhatsApp
                      </Button>
                    </Group>
                  </div>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Text size="lg" className="text-gray-600 dark:text-gray-400">
              Estoy disponible para nuevos proyectos y oportunidades de colaboración. 
              ¡No dudes en contactarme!
            </Text>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;