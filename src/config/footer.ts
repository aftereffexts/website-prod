import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const footerConfig = {
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
      url: 'https://www.linkedin.com/in/moisik/?originalSubdomain=de'
    },
  ],
  contactIcons: {
    address: MapPin,
    phone: Phone,
    email: Mail
  }
};