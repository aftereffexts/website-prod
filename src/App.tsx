import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  Network, Server, Shield, Settings, Users, Database, ArrowRight, Sun, Moon,
  Menu, X, Globe, ChevronDown, Layout, Cloud, Terminal, BookOpen,
  Building, Share2
} from 'lucide-react';
import { en } from './locales/en';
import { de } from './locales/de';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { maintenanceConfig } from './config/maintenance';

// Lazy load all pages
const Maintenance = lazy(() => import('./pages/Maintenance'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Infrastructure = lazy(() => import('./pages/products/Infrastructure'));
const CloudServices = lazy(() => import('./pages/products/Cloud'));
const ServerManagement = lazy(() => import('./pages/products/Server'));
const Documentation = lazy(() => import('./pages/resources/Documentation'));
const CaseStudies = lazy(() => import('./pages/resources/CaseStudies'));
const Integration = lazy(() => import('./pages/resources/Integration'));

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
    </div>
  );
}

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

interface DropdownItem {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onClick: () => void;
  t: any;
}

function DropdownMenu({ title, items, isOpen, onClick, t }: DropdownMenuProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleItemClick = () => {
    onClick();
    setIsHovered(false);
    window.scrollTo(0, 0);
  };
  
  return (
    <div 
      className="relative dropdown-menu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className="flex items-center space-x-1 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen || isHovered ? 'rotate-180' : ''}`} />
      </button>
      {(isOpen || isHovered) && (
        <div 
          className="absolute top-full left-0 w-64 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={handleItemClick}
            >
              <item.icon className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium dark:text-white">{item.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  t: any;
}

function Navbar({ darkMode, setDarkMode, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const productItems = [
    {
      title: 'Infrastructure',
      description: 'Enterprise-grade network solutions',
      icon: Layout,
      href: '/products/infrastructure'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud computing',
      icon: Cloud,
      href: '/products/cloud'
    },
    {
      title: 'Server Management',
      description: '24/7 server monitoring',
      icon: Terminal,
      href: '/products/server'
    }
  ];

  const resourceItems = [
    {
      title: 'Documentation',
      description: 'Detailed guides and API references',
      icon: BookOpen,
      href: '/resources/docs'
    },
    {
      title: 'Case Studies',
      description: 'Success stories from clients',
      icon: Building,
      href: '/resources/cases'
    },
    {
      title: 'Integration',
      description: 'Connect with your tools',
      icon: Share2,
      href: '/resources/integrate'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-menu')) {
        setActiveDropdown(null);
      }
    };
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavLinkClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || location.pathname !== '/home' || isOpen
      ? 'navbar-backdrop'
      : 'navbar-transparent'
  }`;

  if (maintenanceConfig.enabled) {
    return null;
  }

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/home" 
            className="flex items-center space-x-2"
            onClick={handleNavLinkClick}
          >
            <Globe className="h-8 w-8 text-primary" />
            <span className={`font-bold text-xl ${
              scrolled || location.pathname !== '/home' || isOpen
                ? 'text-gray-900 dark:text-white' 
                : 'text-white'
            }`}>
              ISIKCOM
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <DropdownMenu
              title="Products"
              items={productItems}
              isOpen={activeDropdown === 'products'}
              onClick={() => handleDropdownClick('products')}
              t={t}
            />
            <DropdownMenu
              title="Resources"
              items={resourceItems}
              isOpen={activeDropdown === 'resources'}
              onClick={() => handleDropdownClick('resources')}
              t={t}
            />
            <Link 
              to="/about" 
              className={`py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                scrolled || location.pathname !== '/home' || isOpen
                  ? 'text-gray-600 dark:text-gray-300' 
                  : 'text-white'
              }`}
              onClick={handleNavLinkClick}
            >
              {t.nav.about}
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                scrolled || location.pathname !== '/home' || isOpen
                  ? 'text-gray-600 dark:text-gray-300' 
                  : 'text-white'
              }`}
              onClick={handleNavLinkClick}
            >
              {t.nav.contact}
            </Link>
            
            <div className="ml-4 flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            <div className="border-b dark:border-gray-700 pb-4">
              <div className="font-medium mb-2 dark:text-white">Products</div>
              {productItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  onClick={handleNavLinkClick}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="border-b dark:border-gray-700 pb-4">
              <div className="font-medium mb-2 dark:text-white">Resources</div>
              {resourceItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  onClick={handleNavLinkClick}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
            <Link 
              to="/about" 
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={handleNavLinkClick}
            >
              {t.nav.about}
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={handleNavLinkClick}
            >
              {t.nav.contact}
            </Link>
            <button 
              className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
              onClick={handleNavLinkClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem('locale');
    return savedLocale || 'en';
  });
  const t = locale === 'de' ? de : en;

  useEffect(() => {
    // Check system dark mode preference
    if (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Check if user's browser language is German
    if (!localStorage.getItem('locale')) {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang.startsWith('de')) {
        setLocale('de');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <SEO />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          {!maintenanceConfig.enabled && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} t={t} />}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {maintenanceConfig.enabled ? (
                <>
                  <Route path="*" element={<Maintenance />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<Home t={t} />} />
                  <Route path="/about" element={<About t={t} />} />
                  <Route path="/contact" element={<Contact t={t} />} />
                  <Route path="/privacy" element={<Privacy t={t} />} />
                  <Route path="/terms" element={<Terms t={t} />} />
                  <Route path="/cookies" element={<Cookies t={t} />} />
                  <Route path="/products/infrastructure" element={<Infrastructure />} />
                  <Route path="/products/cloud" element={<CloudServices />} />
                  <Route path="/products/server" element={<ServerManagement />} />
                  <Route path="/resources/docs" element={<Documentation />} />
                  <Route path="/resources/cases" element={<CaseStudies />} />
                  <Route path="/resources/integrate" element={<Integration />} />
                </>
              )}
            </Routes>
          </Suspense>
          {!maintenanceConfig.enabled && <Footer t={t} />}
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;