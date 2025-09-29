"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function AthkarProjectPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/projects/azkar.png" 
            alt="Athkar App Preview"
            fill
            className="object-cover brightness-[0.3]" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 max-w-7xl mx-auto">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
              Web Application
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Athkar - Islamic Supplications App
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Interactive web application providing daily Islamic supplications and Quran learning features
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
            <div className="prose  prose-lg prose-invert max-w-none text-white">
              <p>
                Athkar is a comprehensive Islamic application designed to provide Muslims with easy access to daily supplications (adhkar) and Quran learning resources. The app features a modern, responsive interface that works seamlessly across all devices, allowing users to access spiritual content anywhere.
              </p>
              <p>
                The application includes complete collections of morning and evening adhkar, prayer-specific supplications, and situation-based duas. Each supplication is presented in Arabic with transliteration and translation, making it accessible to Muslims worldwide regardless of their Arabic proficiency.
              </p>
              <p>
                Additionally, the app includes Tajweed (proper Quran recitation) lessons and interactive Quran memorization tools to help users improve their relationship with the Quran.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-slate-800 p-6 rounded-xl shadow-xl h-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Project Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400">My Role</h4>
                <p className="text-white mt-1">Full-Stack Developer</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400">Timeline</h4>
                <p className="text-white mt-1">3 months (2023)</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700 rounded-full text-sm font-medium text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400">Links</h4>
                <div className="flex space-x-4 mt-2">
                  <a 
                    href="https://gencare.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt /> 
                    <span>Live Site</span>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <FaGithub /> 
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">Key Features</h2>
            <p className="mt-4 text-xl text-gray-300">Comprehensive Islamic content in a modern interface</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Adhkar Collections",
                description: "Complete morning and evening supplications with Arabic text, transliteration, and translations",
                icon: "🌙"
              },
              {
                title: "Prayer Supplications",
                description: "Comprehensive collection of duas for before, during, and after prayers",
                icon: "🤲"
              },
              {
                title: "Quran Learning Tools",
                description: "Interactive Tajweed lessons and memorization assistance",
                icon: "📖"
              },
              {
                title: "Multiple Languages",
                description: "Interface and translations available in multiple languages",
                icon: "🌐"
              },
              {
                title: "Dark Mode Support",
                description: "Eye-friendly reading experience in low-light environments",
                icon: "🌓"
              },
              {
                title: "Offline Functionality",
                description: "Access all content without an internet connection",
                icon: "📱"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-slate-700 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white">Visual Showcase</h2>
          <p className="mt-4 text-xl text-gray-300">See the application in action</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/projects/azkar.png"
              alt="Athkar App Screenshot" 
              width={600} 
              height={400} 
              className="w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-slate-700 flex items-center justify-center">
              <p className="text-gray-400">Additional screenshot placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Projects Button */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </section>
    </div>
  );
}
