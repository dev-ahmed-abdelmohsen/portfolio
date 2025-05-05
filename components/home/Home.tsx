"use client";

import { useState, useEffect } from 'react';
import ProjectSlider from './slider';
import Image from 'next/image';

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'TailwindCSS'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'Django'] },
  { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
  { name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Git'] },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-slate-800 text-white overflow-hidden">
        <div 
          className={`flex flex-col items-center text-center z-10 px-4 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="block text-teal-400">Ahmed abd Elmohsen</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8">
            Software Engineer
          </h2>
          <p className="max-w-2xl text-gray-300 mb-8 text-base sm:text-lg">
            I build elegant, responsive, and efficient web applications
            with cutting-edge technologies.
          </p>
          <div className="flex gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full font-medium transition"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 rounded-full font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500 rounded-full blur-[150px]"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-slate-500 rounded-full blur-[150px]"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">I'm <span className="text-teal-600">Ahmed abd Elmohsen</span>, a Software Engineer</h3>
              <p className="text-gray-600 mb-6">
                With over X years of experience in web development, I specialize in building robust and scalable applications 
                that provide exceptional user experiences. My passion lies in solving complex problems with clean, efficient code.
              </p>
              <p className="text-gray-600 mb-6">
                I've worked on a diverse range of projects from e-commerce platforms to real-time collaboration tools,
                always focusing on performance, accessibility, and maintainability.
              </p>
              <div className="flex gap-4">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-teal-600 bg-gray-200">
                <Image 
                  src="/profile.svg" 
                  alt="Ahmed abd Elmohsen" 
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 16rem, 20rem"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category) => (
              <div key={category.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4 text-teal-600">{category.name}</h3>
                <ul className="space-y-2">  
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects. Each project represents a unique challenge and solution.
            </p>
          </div>
          
          <ProjectSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-teal-600 text-white rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-teal-600">ahmed.abd.elmohsen@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-teal-600 text-white rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-teal-600">Cairo, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-teal-600 text-white rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Social Profiles</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a>
                      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ahmed abd Elmohsen</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Ahmed abd Elmohsen"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ahmed.abd.elmohsen@gmail.com</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="ahmed.abd.elmohsen@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
