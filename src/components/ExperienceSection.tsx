'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, ExternalLink } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'Technopalette',
      position: 'Software Engineer Level 3',
      location: 'India',
      duration: 'Apr 2023 - Present',
      description: 'Developed and maintained scalable search systems with advanced filters, sorting, pagination, and dynamic deep linking. Implemented secure authentication flows and integrated multiple payment gateways.',
      highlights: [
        'Built scalable search systems improving SEO and discoverability',
        'Integrated multiple payment gateways (CCAvenue, PayPal, Worldline, PayU)',
        'Implemented real-time notifications and session management',
        'Developed multi-language support for global accessibility',
        'Optimized application performance through lazy loading and code splitting',
        'Conducted rigorous code reviews and mentored junior developers'
      ]
    },
    {
      company: 'Arraign Technologies',
      position: 'Front End Developer',
      location: 'Bengaluru',
      duration: 'Jul 2021 - Feb 2023',
      description: 'Focused on frontend development creating responsive web applications and implementing modern UI/UX designs with performance optimization.',
      highlights: [
        'Developed responsive web applications with modern frameworks',
        'Collaborated with UI/UX designers for pixel-perfect implementations',
        'Maintained clean coding practices and conducted code reviews',
        'Implemented performance optimization strategies',
        'Built next-generation streaming platform for digital creators'
      ]
    },
    {
      company: 'Prism Cloud Inc',
      position: 'Jr Front End Developer',
      location: 'Canada (Remote)',
      duration: 'Jan 2021 - Jun 2021',
      description: 'Worked on Canada Tax System project, developing user-friendly web platform for tax preparation and guidance.',
      highlights: [
        'Developed tax system web platform features',
        'Focused on user-friendly interface design',
        'Collaborated with remote international team',
        'Gained experience in financial domain applications',
        'Built MyTaxHub Tips platform for tax optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven track record of delivering exceptional results for clients worldwide
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Work Experience</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-gray-400 to-white rounded-full border-4 border-black z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-white/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">{exp.position}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{exp.company}</h4>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <Award className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-500/10 to-gray-400/10 border border-white/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your project to life with my expertise in modern web development.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
            >
              <span>Start a Project</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;