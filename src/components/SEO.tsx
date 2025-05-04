import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ISIKCOM - IT Infrastructure & Cloud Services',
  description = 'Enterprise-grade IT infrastructure, cloud services, and managed solutions for businesses. 24/7 technical support and cybersecurity services.',
  type = 'website',
  image = 'https://isikcom.com/og-image.jpg'
}) => {
  const location = useLocation();
  const canonicalUrl = `https://isikcom.com${location.pathname}`;

  // JSON-LD structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ISIKCOM',
    url: 'https://isikcom.com',
    logo: 'https://isikcom.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49 1579 2619115',
      contactType: 'customer service',
      email: 'm.isik@isikcom.com',
      areaServed: 'DE',
      availableLanguage: ['en', 'de']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hermann-Hesse-Str. 30',
      addressLocality: 'Ludwigsburg',
      postalCode: '71642',
      addressCountry: 'DE'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: location.pathname.split('/').filter(Boolean).map((path, index, array) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: path.charAt(0).toUpperCase() + path.slice(1),
      item: `https://isikcom.com/${array.slice(0, index + 1).join('/')}`
    }))
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ISIKCOM" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Language Alternates */}
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      <link rel="alternate" href={`${canonicalUrl}/de`} hrefLang="de" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
};

export default SEO;