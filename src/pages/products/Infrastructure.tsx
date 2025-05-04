import React from 'react';
import { Shield, Cloud, Lock, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Infrastructure() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 dark:text-white">Network Infrastructure Solutions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade networking powered by industry-leading technologies for maximum security, 
            reliability, and performance.
          </p>
        </div>

        {/* Technology Sections */}
        <div className="space-y-24">
          {/* Cloudflare Section */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://www.cloudflare.com/img/logo-cloudflare-light.svg"
                alt="Network Security"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg"
                  alt="Cloudflare"
                  className="h-8 dark:hidden"
                />
                <img 
                  src="https://www.cloudflare.com/img/logo-cloudflare-light.svg"
                  alt="Cloudflare"
                  className="h-8 hidden dark:block"
                />
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Comprehensive DDoS protection and web security through Cloudflare's global network:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enterprise-grade DDoS mitigation</li>
                  <li>Web Application Firewall (WAF)</li>
                  <li>Zero Trust security model</li>
                  <li>Global CDN for optimal performance</li>
                  <li>SSL/TLS encryption</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Microsoft Entra Section */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
                alt="Identity Management"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://www.microsoft.com/favicon.ico"
                  alt="Microsoft"
                  className="h-8"
                />
                <h2 className="text-3xl font-bold dark:text-white">Microsoft Entra ID</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Secure identity and access management with Microsoft Entra ID (formerly Azure AD):
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Single Sign-On (SSO) capabilities</li>
                  <li>Multi-Factor Authentication (MFA)</li>
                  <li>Conditional Access policies</li>
                  <li>Identity Protection</li>
                  <li>Privileged Identity Management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fortinet Section */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
                alt="Network Infrastructure"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg"
                  alt="Fortinet"
                  className="h-8"
                />
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Comprehensive network security with Fortinet's Security Fabric:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>FortiGate Next-Generation Firewalls</li>
                  <li>FortiSwitch Secure Access</li>
                  <li>FortiAP Wireless Solutions</li>
                  <li>FortiAnalyzer Security Analytics</li>
                  <li>FortiManager Centralized Management</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Ready to secure your network?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;