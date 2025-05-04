import React from 'react';
import { Building, Users, Globe, Award, ChevronRight } from 'lucide-react';

// Define the expected structure of our translations
interface AboutTranslations {
  about: {
    title: string;
    overview: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    mission: {
      title: string;
      content: string;
    };
    vision: {
      title: string;
      content: string;
    };
    team: {
      title: string;
      members: Array<{
        name: string;
        position: string;
        description: string;
      }>;
    };
    values: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

// Default translations to prevent undefined errors
const defaultTranslations: AboutTranslations = {
  about: {
    title: "About Us",
    overview: "We are committed to delivering innovative solutions that transform businesses.",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "500+", label: "Clients Worldwide" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support" }
    ],
    mission: {
      title: "Our Mission",
      content: "To provide cutting-edge solutions that empower businesses to achieve their full potential."
    },
    vision: {
      title: "Our Vision",
      content: "To be the global leader in innovative technology solutions that drive business success."
    },
    team: {
      title: "Our Team",
      members: [
        {
          name: "John Smith",
          position: "CEO",
          description: "Visionary leader with 15+ years of industry experience."
        },
        {
          name: "Sarah Johnson",
          position: "CTO",
          description: "Technical expert driving innovation and growth."
        },
        {
          name: "Michael Brown",
          position: "Head of Operations",
          description: "Operations specialist ensuring smooth delivery."
        }
      ]
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Innovation",
          description: "Constantly pushing boundaries to deliver cutting-edge solutions."
        },
        {
          title: "Excellence",
          description: "Committed to delivering the highest quality in everything we do."
        },
        {
          title: "Integrity",
          description: "Building trust through honest and ethical business practices."
        },
        {
          title: "Collaboration",
          description: "Working together to achieve exceptional results."
        }
      ]
    }
  }
};

function About({ t = defaultTranslations }: { t?: AboutTranslations }) {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">{t.about.title}</h1>
          
          {/* Company Overview */}
          <section className="mb-16">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {t.about.overview}
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {t.about.stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                  <Globe className="h-6 w-6 text-primary mr-2" />
                  {t.about.mission.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{t.about.mission.content}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  {t.about.vision.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{t.about.vision.content}</p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white flex items-center">
              <Users className="h-7 w-7 text-primary mr-2" />
              {t.about.team.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.about.team.members.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-center mb-2 dark:text-white">{member.name}</h3>
                  <p className="text-primary text-center mb-4">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">{t.about.values.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.about.values.items.map((value, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-start">
                  <ChevronRight className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;