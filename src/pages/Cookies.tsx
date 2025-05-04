import React from 'react';

function Cookies({ t }) {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">Cookie Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">What Are Cookies</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and are essential for some of our website's functionality.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Types of Cookies We Use</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>

                <h3 className="text-xl font-semibold mb-2 dark:text-white">Preference Cookies</h3>
                <p>These cookies enable us to remember your preferences and customize your experience (e.g., language preference, dark mode settings).</p>

                <h3 className="text-xl font-semibold mb-2 dark:text-white">Analytics Cookies</h3>
                <p>We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and website functionality.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Your Cookie Choices</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed.</p>
                <p>Please note that if you disable cookies, some functionality of our website may not be available.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Cookie Consent</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>When you first visit our website, we will ask for your consent to use non-essential cookies. You can change your preferences at any time.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Updates to This Policy</h2>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookies;