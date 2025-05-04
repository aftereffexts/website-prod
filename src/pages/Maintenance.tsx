import React from 'react';
import { Globe, Mail, Clock } from 'lucide-react';
import { maintenanceConfig } from '../config/maintenance';

function Maintenance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 mx-4">
        <div className="flex flex-col items-center text-center">
          <Globe className="h-16 w-16 text-primary mb-6 animate-pulse" />
          <h1 className="text-4xl font-bold mb-4 dark:text-white">{maintenanceConfig.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {maintenanceConfig.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full mb-8">
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
              <Clock className="h-5 w-5 text-primary" />
              <span>Launch: {maintenanceConfig.estimatedDate}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
              <Mail className="h-5 w-5 text-primary" />
              <a 
                href={`mailto:${maintenanceConfig.contactEmail}`}
                className="hover:text-primary transition-colors"
              >
                {maintenanceConfig.contactEmail}
              </a>
            </div>
          </div>

          <div className="w-full max-w-md bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-8">
            <div className="bg-primary h-2 rounded-full w-3/4 animate-pulse"></div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thank you for your patience while we prepare something amazing for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;