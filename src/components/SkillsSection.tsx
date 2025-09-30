'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95, color: 'from-gray-400 to-gray-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-300 to-gray-500' },
        { name: 'TypeScript', level: 88, color: 'from-gray-500 to-gray-700' },
        { name: 'JavaScript (ES6+)', level: 92, color: 'from-gray-400 to-gray-600' },
        { name: 'React Native', level: 75, color: 'from-gray-300 to-gray-500' },
      ]
    },
    {
      title: 'UI Libraries & Styling',
      skills: [
        { name: 'Material UI (MUI)', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-gray-300 to-gray-500' },
        { name: 'shadcn/ui', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'Styled Components', level: 82, color: 'from-gray-400 to-gray-600' },
        { name: 'CSS Modules', level: 85, color: 'from-gray-300 to-gray-500' },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: '.NET Web API', level: 75, color: 'from-gray-400 to-gray-600' },
        { name: 'Node.js', level: 80, color: 'from-gray-300 to-gray-500' },
        { name: 'Express.js', level: 78, color: 'from-gray-500 to-gray-700' },
        { name: 'PostgreSQL', level: 75, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', level: 72, color: 'from-gray-300 to-gray-500' },
      ]
    },
    {
      title: 'State Management & Tools',
      skills: [
        { name: 'Recoil', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'React Query (TanStack)', level: 80, color: 'from-gray-300 to-gray-500' },
        { name: 'Redux', level: 75, color: 'from-gray-500 to-gray-700' },
        { name: 'Zustand', level: 78, color: 'from-gray-400 to-gray-600' },
        { name: 'React Hook Form', level: 88, color: 'from-gray-300 to-gray-500' },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 70, color: 'from-gray-400 to-gray-600' },
        { name: 'GitHub Actions', level: 65, color: 'from-gray-300 to-gray-500' },
        { name: 'CI/CD Pipelines', level: 68, color: 'from-gray-500 to-gray-700' },
        { name: 'Git', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'Postman', level: 85, color: 'from-gray-300 to-gray-500' },
      ]
    }
  ];

  const certifications = [
    'Mechanical Engineering Graduate',
    'React Specialist',
    'Frontend Architecture',
    'Modern Web Development'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-white/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-gray-400 to-white rounded-full mr-3" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-white text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-gray-400 to-white rounded-full mr-3" />
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Frontend Architecture',
                'Performance Optimization',
                'Code Reviews',
                'Technical Mentoring',
                'Cross-functional Collaboration',
                'UI/UX Implementation',
                'API Integration',
                'Payment Gateway Integration',
                'Real-time Applications',
                'Multi-language Support',
                'Responsive Development',
                'Testing & Quality Assurance'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-gray-400 to-white rounded-full mr-3" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-white/50 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;