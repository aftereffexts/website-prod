import { 
  Globe, Layout, Cloud, Terminal, BookOpen, Building, Share2,
  Network, Server, Shield, Settings, Linkedin, Twitter, Facebook,
  Mail, Phone, MapPin
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Types for better TypeScript support
interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

interface MenuItem {
  title: string;
  description?: string;
  icon?: LucideIcon;
  path: string;
  enabled: boolean;
}

interface DropdownSection {
  title: string;
  items: MenuItem[];
  enabled: boolean;
}

interface PageConfig {
  path: string;
  component: React.LazyExoticComponent<any>;
  enabled: boolean;
  showInNavbar: boolean;
  showInFooter: boolean;
  title: string;
}

// Site Configuration
export const siteConfig = {
  name: 'ISIKCOM',
  logo: {
    icon: Globe,
    text: 'ISIKCOM'
  },
  company: {
    name: 'ISIKCOM',
    address: 'Hermann-Hesse-Str. 30, Ludwigsburg, 71642',
    phone: '+49 1579 2619115',
    email: 'm.isik@isikcom.com'
  },
  social: [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/isikcom'
    }
  ] as SocialLink[],
  
  // Navigation Dropdowns
  navigation: {
    products: {
      title: 'Products',
      enabled: true,
      items: [
        {
          title: 'Infrastructure',
          description: 'Enterprise-grade network solutions',
          icon: Layout,
          path: '/products/infrastructure',
          enabled: true
        },
        {
          title: 'Cloud Services',
          description: 'Scalable cloud computing',
          icon: Cloud,
          path: '/products/cloud',
          enabled: true
        },
        {
          title: 'Server Management',
          description: '24/7 server monitoring',
          icon: Terminal,
          path: '/products/server',
          enabled: true
        }
      ]
    },
    resources: {
      title: 'Resources',
      enabled: true,
      items: [
        {
          title: 'Documentation',
          description: 'Detailed guides and API references',
          icon: BookOpen,
          path: '/resources/docs',
          enabled: true
        },
        {
          title: 'Case Studies',
          description: 'Success stories from clients',
          icon: Building,
          path: '/resources/cases',
          enabled: true
        },
        {
          title: 'Integration',
          description: 'Connect with your tools',
          icon: Share2,
          path: '/resources/integrate',
          enabled: true
        }
      ]
    }
  },

  // Services shown on homepage and footer
  services: [
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade networking solutions for reliability and performance',
      icon: Network,
      path: '/services/network',
      enabled: true
    },
    {
      title: 'Server Management',
      description: '24/7 server monitoring and maintenance',
      icon: Server,
      path: '/services/server',
      enabled: true
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your assets',
      icon: Shield,
      path: '/services/security',
      enabled: true
    },
    {
      title: 'IT Support',
      description: 'Round-the-clock technical support',
      icon: Settings,
      path: '/services/support',
      enabled: true
    }
  ],

  // Contact information icons
  contactIcons: {
    address: MapPin,
    phone: Phone,
    email: Mail
  },

  // Footer links configuration
  footerLinks: {
    legal: [
      { title: 'Privacy Policy', path: '/privacy', enabled: true },
      { title: 'Terms of Service', path: '/terms', enabled: true },
      { title: 'Cookie Policy', path: '/cookies', enabled: true }
    ],
    quickLinks: [
      { title: 'About', path: '/', enabled: true },
      { title: 'Services', path: '#services', enabled: true },
      { title: 'Features', path: '#features', enabled: true },
      { title: 'Contact', path: '/contact', enabled: true }
    ]
  }
};

// Helper function to get enabled navigation items
export const getEnabledNavItems = (section: DropdownSection) => {
  return section.enabled ? section.items.filter(item => item.enabled) : [];
};

// Helper function to get enabled services
export const getEnabledServices = () => {
  return siteConfig.services.filter(service => service.enabled);
};

// Helper function to get enabled footer links
export const getEnabledFooterLinks = (section: 'legal' | 'quickLinks') => {
  return siteConfig.footerLinks[section].filter(link => link.enabled);
};