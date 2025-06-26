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
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.general.title}</h3>
                <p className="mb-2 dark:text-gray-300">
                  <strong>Website:</strong>{' '}
                  <a href="https://isikcom.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    https://isikcom.com
                  </a>
                </p>
                <p className="mb-4 dark:text-gray-300">
                  <strong>Provider:</strong> {t.privacy.impressum.content.company}
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.contact.title}</h3>
                <p className="dark:text-gray-300">{t.privacy.impressum.content.address}</p>
                <p className="mb-4 dark:text-gray-300">Germany</p>
                <p className="mb-2 dark:text-gray-300">
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${t.privacy.impressum.content.phone}`} className="text-primary hover:text-primary-dark">
                    {t.privacy.impressum.content.phone}
                  </a>
                </p>
                <p className="dark:text-gray-300">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${t.privacy.impressum.content.email}`} className="text-primary hover:text-primary-dark">
                    {t.privacy.impressum.content.email}
                  </a>
                </p>
              </div>

              {/* Registration Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.registration.title}</h3>
                <p className="dark:text-gray-300">
                  <strong>VAT ID:</strong> {t.privacy.impressum.content.vatId}
                </p>
              </div>

              {/* Liability for Links */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.liability.title}</h3>
                <p className="dark:text-gray-300">{t.privacy.liability.content}</p>
              </div>

              {/* Liability for Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">Content Liability</h3>
                <p className="dark:text-gray-300">{t.privacy.liability.content}</p>
              </div>

              {/* Copyright */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t.privacy.copyright.title}</h3>
                <p className="dark:text-gray-300">{t.privacy.copyright.content}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;