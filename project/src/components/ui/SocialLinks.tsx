import React from 'react';
import { Group, ActionIcon } from '@mantine/core';
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandTwitter, 
  IconMail 
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';

const SocialLinks: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'brand-github': IconBrandGithub,
      'brand-linkedin': IconBrandLinkedin,
      'brand-twitter': IconBrandTwitter,
      'mail': IconMail,
    };
    return iconMap[iconName] || IconMail;
  };

  const getColor = (platform: string) => {
    const colorMap: { [key: string]: string } = {
      'GitHub': 'gray',
      'LinkedIn': 'blue',
      'Twitter': 'cyan',
      'Email': 'red',
    };
    return colorMap[platform] || 'gray';
  };

  return (
    <Group gap="sm">
      {portfolioData.social.map((social, index) => {
        const IconComponent = getIcon(social.icon);
        const color = getColor(social.platform);
        
        return (
          <motion.div
            key={social.platform}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ActionIcon
              size="lg"
              variant="subtle"
              color={color}
              component="a"
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover:bg-opacity-20 transition-all duration-200"
            >
              <IconComponent size={20} />
            </ActionIcon>
          </motion.div>
        );
      })}
    </Group>
  );
};

export default SocialLinks;