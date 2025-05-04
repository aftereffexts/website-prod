import React from 'react';

function Terms({ t }) {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">1. Agreement to Terms</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>By accessing and using ISIKCOM's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">2. Use License</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Permission is granted to temporarily access our services for personal, non-commercial use. This license shall automatically terminate if you violate any of these restrictions.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">3. Service Description</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>ISIKCOM provides IT infrastructure and managed services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">4. Data Protection</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We process personal data in accordance with the EU General Data Protection Regulation (GDPR). For more information, please refer to our Privacy Policy.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">5. Limitation of Liability</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>ISIKCOM shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">6. Governing Law</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>These terms shall be governed by and construed in accordance with the laws of the European Union and your country of residence.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;