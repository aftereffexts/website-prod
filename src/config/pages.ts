import { lazy } from 'react';

// Lazy load all pages
const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const Infrastructure = lazy(() => import('../pages/products/Infrastructure'));
const Cloud = lazy(() => import('../pages/products/Cloud'));
const Server = lazy(() => import('../pages/products/Server'));
const Documentation = lazy(() => import('../pages/resources/Documentation'));
const CaseStudies = lazy(() => import('../pages/resources/CaseStudies'));
const Integration = lazy(() => import('../pages/resources/Integration'));

export const pages = {
  home: {
    path: '/',
    component: Home,
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
    title: 'Home'
  },
  contact: {
    path: '/contact',
    component: Contact,
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
    title: 'Contact'
  },
  infrastructure: {
    path: '/products/infrastructure',
    component: Infrastructure,
    enabled: true,
    showInNavbar: false,
    showInFooter: false,
    title: 'Infrastructure'
  },
  cloud: {
    path: '/products/cloud',
    component: Cloud,
    enabled: true,
    showInNavbar: false,
    showInFooter: false,
    title: 'Cloud Services'
  },
  server: {
    path: '/products/server',
    component: Server,
    enabled: true,
    showInNavbar: false,
    showInFooter: false,
    title: 'Server Management'
  },
  documentation: {
    path: '/resources/docs',
    component: Documentation,
    enabled: true,
    showInNavbar: false,
    showInFooter: false,
    title: 'Documentation'
  },
  caseStudies: {
    path: '/resources/cases',
    component: CaseStudies,
    enabled: true,
    showInNavbar: false,
    showInFooter: false,
    title: 'Case Studies'
  },
  integration: {
    path: '/resources/integrate',
    component: Integration,
    enabled: true,
    showInNavbar: false,
    showInFooter: false,
    title: 'Integration'
  }
};

// Helper function to get enabled pages
export const getEnabledPages = () => {
  return Object.values(pages).filter(page => page.enabled);
};

// Helper function to get navbar pages
export const getNavbarPages = () => {
  return Object.values(pages).filter(page => page.enabled && page.showInNavbar);
};

// Helper function to get footer pages
export const getFooterPages = () => {
  return Object.values(pages).filter(page => page.enabled && page.showInFooter);
};