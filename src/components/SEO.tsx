import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ISIKCOM - IT Infrastructure & Cloud Services',
  description = 'Enterprise-grade IT infrastructure, cloud services, and managed solutions for businesses. 24/7 technical support and cybersecurity services.',
  type = 'website',
  image = 'https://isikcom.com/og-image.jpg',
  keywords = 'IT infrastructure, it dienstleister, it service ludwigsburg, it beratung ludwigsburg, dienstleister stuttgart, cloud ludwigsburg, it ludwigsburg, it stuttgart, systemhaus stuttgart, systemhaus ludwigsburg, it service, baden-wuerttemberg, it waiblingen, it esslingen, netzwerk ludwigsburg, it security ludwigsburg  it cloud services, managed services, cybersecurity, server management, network solutions, Fortinet stuttgart, Cloudflare'
}) => {
  const location = useLocation();
  const canonicalUrl = `https://isikcom.com${location.pathname}`;

  // JSON-LD structured data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ISIKCOM',
    url: 'https://isikcom.com',
    logo: 'https://isikcom.com/logo.png',
    description: description,
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-1579-2619115',
      contactType: 'customer service',
      email: 'm.isik@isikcom.com',
      areaServed: ['DE', 'EU'],
      availableLanguage: ['en', 'de']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hermann-Hesse-Str. 30',
      addressLocality: 'Ludwigsburg',
      postalCode: '71642',
      addressCountry: 'DE'
    },
    sameAs: [
      'https://www.linkedin.com/in/moisik/?originalSubdomain=de'
    ]
  };

  // JSON-LD structured data for Website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ISIKCOM',
    url: 'https://isikcom.com',
    description: description,
    publisher: {
      '@type': 'Organization',
      name: 'ISIKCOM'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://isikcom.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // JSON-LD structured data for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Infrastructure Services',
    provider: {
      '@type': 'Organization',
      name: 'ISIKCOM'
    },
    description: 'Enterprise-grade IT infrastructure, cloud services, and managed solutions',
    serviceType: ['IT Infrastructure', 'Cloud Services', 'Cybersecurity', 'Server Management'],
    areaServed: {
      '@type': 'Country',
      name: 'Germany'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: location.pathname.split('/').filter(Boolean).map((path, index, array) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' '),
      item: `https://isikcom.com/${array.slice(0, index + 1).join('/')}`
    }))
  };

  // Add home to breadcrumb
  if (breadcrumbSchema.itemListElement.length > 0) {
    breadcrumbSchema.itemListElement.unshift({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://isikcom.com'
    });
  }

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ISIKCOM" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ISIKCOM" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@isikcom" />

      {/* Language Alternates */}
      <link rel="alternate" href={canonicalUrl} hrefLang="de" />
      <link rel="alternate" href={`${canonicalUrl}?lang=en`} hrefLang="en" />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="DE-BW" />
      <meta name="geo.placename" content="Ludwigsburg" />
      <meta name="geo.position" content="48.8974;9.1917" />
      <meta name="ICBM" content="48.8974, 9.1917" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      {breadcrumbSchema.itemListElement.length > 1 && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </>
  );
};

export default SEO;