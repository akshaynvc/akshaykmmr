'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import LetterGlitch from './LetterGlitch';
import { downloadResume } from '@/utils/paths';

const HeroSection: React.FC = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          {/* Floating particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 1200,
                y: Math.random() * 800,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * 1200,
                y: Math.random() * 800,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title with Glitch Effect */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold"
            >
              <span className="text-white">Hello, I&apos;m </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                {process.env.NEXT_PUBLIC_FULL_NAME?.split(' ')[0] || 'Akshay'}
              </span>
              <br />
              <LetterGlitch 
                text="Software Engineer" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-400 text-3xl sm:text-5xl lg:text-6xl font-bold"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting innovative digital solutions with modern technologies.
              <br />
              <span className="text-base text-gray-400 flex items-center justify-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                />
                Available for remote work worldwide
              </span>
            </motion.p>
          </div>

          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 max-w-4xl mx-auto"
          >
            {[
              'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
              'PostgreSQL', 'MongoDB', '.NET Web API', 'Material UI', 'Tailwind CSS', 
              'React Query', 'SignalR', 'Docker', 'AWS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="px-3 py-1.5 bg-gray-800/50 rounded-full border border-gray-700 hover:border-white hover:text-white transition-all duration-300 text-xs"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={downloadResume}
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Briefcase size={20} />
                <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <Mail size={20} />
                <span>Let&apos;s Talk</span>
              </span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center space-x-6"
          >
            {[
              { 
                icon: Github, 
                href: process.env.NEXT_PUBLIC_GITHUB_URL || '#', 
                label: 'GitHub' 
              },
              { 
                icon: Linkedin, 
                href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#', 
                label: 'LinkedIn' 
              },
              { 
                icon: Mail, 
                href: process.env.NEXT_PUBLIC_CONTACT_EMAIL_LINK || 'mailto:akshaykmmr8@gmail.com', 
                label: 'Email' 
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700 hover:border-white hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;