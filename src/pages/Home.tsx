import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Network, Server, Shield, Settings, Users, Database, ArrowRight,
  Layout, Cloud, Terminal, BookOpen, Building, Share2
} from 'lucide-react';

const services = [
  {
    icon: Network,
    key: 'network',
  },
  {
    icon: Server,
    key: 'server',
  },
  {
    icon: Shield,
    key: 'security',
  },
  {
    icon: Settings,
    key: 'support',
  },
];

const features = [
  {
    key: 'infrastructure',
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=1024',
  },
  {
    key: 'managed',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1024',
  },
  {
    key: 'cloud',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1024',
  },
];

function Home({ t }) {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary dark:bg-primary/80 text-white pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-xl mb-8">{t.hero.subtitle}</p>
            <button 
              onClick={handleContactClick}
              className="bg-accent hover:bg-accent-dark text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center mx-auto transition-colors"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t.services.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all dark:shadow-gray-900/30">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{t.services.items[service.key].title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.services.items[service.key].description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Zigzag Features */}
      <div id="features">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`zigzag-section flex items-center py-20 ${
              index % 2 === 0 
                ? 'bg-white dark:bg-gray-800' 
                : 'bg-gray-50 dark:bg-gray-900'
            } transition-colors`}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <img
                    src={feature.image}
                    alt={t.features[feature.key].title}
                    className="rounded-lg shadow-xl w-full object-cover"
                    style={{ height: '400px' }}
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold dark:text-white">{t.features[feature.key].title}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">{t.features[feature.key].description}</p>
                  <button 
                    onClick={handleContactClick}
                    className="flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    {t.features.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div id="about" className="bg-primary dark:bg-primary/80 text-white py-16 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Database className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg">{t.stats.uptime}</div>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">{t.stats.clients}</div>
            </div>
            <div>
              <Settings className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">{t.stats.support}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div id="contact" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">{t.contact.title}</h2>
            <button 
              onClick={handleContactClick}
              className="bg-accent hover:bg-accent-dark text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              {t.contact.cta}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;