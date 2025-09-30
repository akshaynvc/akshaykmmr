'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Zap, Target, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on achieving business objectives'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Excellent communication and collaboration skills'
    }
  ];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '8+', label: 'Happy Clients' },
    { number: '100%', label: 'Remote Ready' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Software Engineer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Experienced Software Engineer specializing in modern web development with React, Next.js, and TypeScript. 
                I build scalable applications that solve real business problems and deliver measurable results for clients 
                across various industries.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I work effectively with remote teams and have a strong track record of delivering quality software on time. 
                Currently expanding my expertise in full-stack development with .NET and cloud technologies to provide 
                comprehensive solutions for my clients.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-white/50 transition-all duration-300 hover:bg-gray-800/80"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700 hover:border-white/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coffee Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-6 rounded-xl border border-gray-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-white" />
              <div className="flex items-center space-x-3 mb-3">
                <Coffee className="w-6 h-6 text-white" />
                <h4 className="font-semibold text-white">Remote Work Philosophy</h4>
              </div>
              <blockquote className="text-gray-300 italic">
                &quot;Great code knows no boundaries. Whether it&apos;s 3 AM or 3 PM, 
                from anywhere in the world, I deliver exceptional results that drive business success.&quot;
              </blockquote>
            </motion.div>

            {/* Available for Work Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-500/20 to-gray-400/20 border border-gray-400/30 rounded-full px-4 py-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
              />
              <span className="text-gray-400 font-medium">Available for Remote Work</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;