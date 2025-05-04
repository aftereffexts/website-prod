import React from 'react';

function Privacy({ t }) {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">{t.privacy.title}</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            {/* Impressum Section */}
            <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">{t.privacy.impressum.title}</h2>
              
              {/* General Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.impressum.general.title}</h3>
                <p className="mb-2 dark:text-gray-300">
                  <strong>{t.privacy.impressum.general.website}:</strong>{' '}
                  <a href="https://isikcom.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    https://isikcom.com
                  </a>
                </p>
                <p className="mb-4 dark:text-gray-300">
                  <strong>{t.privacy.impressum.general.provider}:</strong> Mohammed Ali Isik Einzelunternehmen
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.impressum.contact.title}</h3>
                <p className="dark:text-gray-300">{t.privacy.impressum.contact.address}</p>
                <p className="mb-4 dark:text-gray-300">{t.privacy.impressum.contact.city}</p>
                <p className="mb-2 dark:text-gray-300">
                  <strong>{t.privacy.impressum.contact.phone}:</strong>{' '}
                  <a href="tel:4915792619115" className="text-primary hover:text-primary-dark">+49 1579 2619115</a>
                </p>
                <p className="dark:text-gray-300">
                  <strong>{t.privacy.impressum.contact.email}:</strong>{' '}
                  <a href="mailto:privacy@isikcom.com" className="text-primary hover:text-primary-dark">privacy@isikcom.com</a>
                </p>
              </div>

              {/* Registration Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.impressum.registration.title}</h3>
                <p className="dark:text-gray-300">
                  <strong>{t.privacy.impressum.registration.vatId}:</strong> folgt
                </p>
              </div>

              {/* Liability for Links */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.impressum.liability.links.title}</h3>
                <p className="dark:text-gray-300">{t.privacy.impressum.liability.links.content}</p>
              </div>

              {/* Liability for Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.impressum.liability.content.title}</h3>
                <p className="dark:text-gray-300">{t.privacy.impressum.liability.content.content}</p>
              </div>

              {/* Copyright */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.impressum.copyright.title}</h3>
                <p className="dark:text-gray-300">{t.privacy.impressum.copyright.content}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;