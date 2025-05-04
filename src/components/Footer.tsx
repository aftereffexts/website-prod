import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { footerConfig } from '../config/footer';

function Footer({ t }) {
  const { company, social, contactIcons } = footerConfig;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/home" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">{company.name}</span>
            </Link>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {social.map((item, index) => (
                <a 
                  key={index}
                  href={item.url} 
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/home" className="text-gray-400 hover:text-primary transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/home#services" className="text-gray-400 hover:text-primary transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/home#features" className="text-gray-400 hover:text-primary transition-colors">{t.nav.features}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li><Link to="/products/infrastructure" className="text-gray-400 hover:text-primary transition-colors">{t.services.items.network.title}</Link></li>
              <li><Link to="/products/server" className="text-gray-400 hover:text-primary transition-colors">{t.services.items.server.title}</Link></li>
              <li><Link to="/products/cloud" className="text-gray-400 hover:text-primary transition-colors">{t.services.items.security.title}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">{t.services.items.support.title}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.contactInfo}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <contactIcons.address className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">{company.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <contactIcons.phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">{company.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <contactIcons.email className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">{company.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">{t.footer.rights}</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">{t.footer.privacy}</Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">{t.footer.terms}</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors">{t.footer.cookies}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;