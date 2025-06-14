"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ProjectSlider from './slider';
import Image from 'next/image';

const skills = [
  { 
    name: 'Backend', 
    items: ['Node.js', 'Express.js', 'Java', 'Python', 'Flask', 'REST APIs'],
    icon: '🔧',
    color: 'from-blue-500 to-purple-600'
  },
  { 
    name: 'DevOps', 
    items: ['Docker', 'AWS (EC2, S3)', 'CI/CD', 'Git', 'Linux', 'Nginx'],
    icon: '⚙️',
    color: 'from-green-500 to-teal-600'
  },
  { 
    name: 'Database', 
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Database Design'],
    icon: '🗄️',
    color: 'from-orange-500 to-red-600'
  },
  { 
    name: 'Frontend', 
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: '💻',
    color: 'from-cyan-500 to-blue-600'
  },
  { 
    name: 'Mobile', 
    items: ['React Native', 'Expo', 'Mobile UI/UX', 'Cross-platform'],
    icon: '📱',
    color: 'from-purple-500 to-pink-600'
  },
];

const stats = [
  { number: '15+', label: 'Projects Completed', icon: '🚀' },
  { number: '3+', label: 'Years Experience', icon: '⏱️' },
  { number: '100+', label: 'Monthly Active Users', icon: '👥' },
  { number: '99%', label: 'Client Satisfaction', icon: '⭐' },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const statsRef = useRef(null);
  const contactRef = useRef(null);
  
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <motion.div 
          className="flex flex-col items-center text-center z-10 px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-blue-500 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ahmed Abd Elmohsen
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 text-gray-300">
              Software Engineer
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Backend Developer
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                DevOps Engineer
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Problem Solver
              </span>
            </div>
          </motion.div>

          <motion.p 
            className="max-w-3xl text-gray-300 mb-12 text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I build robust, scalable, and efficient applications using cutting-edge technologies. 
            Specializing in backend development and cloud infrastructure.
          </motion.p>

          {/* <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a 
              href="#projects" 
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                View My Work
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div> */}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="py-20 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-blue-900/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced About Section */}
      <section ref={aboutRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section - Shows first on mobile, second on desktop */}
            <motion.div 
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-2xl opacity-20 scale-110"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-400 to-blue-500 bg-white shadow-2xl">
                  <Image 
                    src="/profile_3.jpeg" 
                    alt="Ahmed Abd Elmohsen" 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 16rem, (max-width: 768px) 20rem, 20rem"
                    priority
                    style={{
                      objectPosition: 'center 20%', // تركيز على الوجه وتجنب النص
                    }}
                  />
                  {/* Overlay gradient لتحسين المظهر */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent hover:from-teal-900/10 transition-all duration-500"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse delay-700"></div>
              </div>
            </motion.div>

            {/* Text Content - Shows second on mobile, first on desktop */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
                I'm <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Ahmed Abd Elmohsen</span>, 
                a passionate Software Engineer
              </h3>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                <p>
                  With over 3 years of hands-on experience in software development, I specialize in building 
                  robust backend systems and scalable cloud infrastructure that power modern applications.
                </p>
                <p>
                  My expertise spans across backend development, DevOps practices, and cloud technologies. 
                  I'm passionate about writing clean, efficient code and implementing best practices in software architecture.
                </p>
                <p>
                  I've successfully delivered 15+ projects ranging from e-commerce platforms to healthcare applications, 
                  always focusing on performance, security, and user experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <motion.a 
                  href="/ats-resume.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 font-semibold text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section ref={skillsRef} className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in modern technologies and frameworks that power today's digital solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isSkillsInView ? "visible" : "hidden"}
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                     style={{ background: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})` }}>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isSkillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center group/skill"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mr-3 group-hover/skill:scale-125 transition-transform"></div>
                        <span className="text-gray-700 group-hover/skill:text-gray-900 transition-colors">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover my latest work showcasing innovative solutions and cutting-edge technologies
            </p>
          </motion.div>
          
          <ProjectSlider />
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section ref={contactRef} id="contact" className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/30 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
            </p>
          </motion.div>
          
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                icon: '📧', 
                title: 'Email', 
                value: 'Drop me a line', 
                href: 'mailto:ashams3719262@gmail.com',
                description: 'ashams3719262@gmail.com',
                color: 'from-red-500 to-pink-600'
              },
              { 
                icon: '💼', 
                title: 'LinkedIn', 
                value: 'Connect professionally', 
                href: 'https://linkedin.com/in/ahmed-838-shams/',
                description: 'Professional network',
                color: 'from-blue-600 to-blue-800'
              },
              { 
                icon: '🐙', 
                title: 'GitHub', 
                value: 'Check my code', 
                href: 'https://github.com/ahmed-838',
                description: 'Open source projects',
                color: 'from-gray-700 to-gray-900'
              },
              { 
                icon: '💬', 
                title: 'WhatsApp', 
                value: 'Quick chat', 
                href: 'https://wa.me/01224900205',
                description: 'Instant messaging',
                color: 'from-green-500 to-green-700'
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-teal-600 font-medium mb-2">{contact.value}</p>
                  <p className="text-gray-500 text-sm">{contact.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Professional Info Card */}
            <motion.div 
              className="bg-gradient-to-br from-slate-900 to-gray-900 p-10 rounded-3xl text-white relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
              
              <h3 className="text-3xl font-bold mb-8 relative z-10">Professional Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="border-l-4 border-teal-400 pl-6">
                  <h4 className="text-xl font-semibold text-teal-400 mb-2">Current Status</h4>
                  <p className="text-gray-300">Open to new opportunities and freelance projects</p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">Location</h4>
                  <p className="text-gray-300">Cairo, Egypt (GMT+2)</p>
                  <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">Specialization</h4>
                  <p className="text-gray-300">Backend Development & DevOps</p>
                  <p className="text-gray-400 text-sm">Node.js, AWS, Docker, CI/CD</p>
                </div>
                
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Response Time</h4>
                  <p className="text-gray-300">Usually within 24 hours</p>
                  <p className="text-gray-400 text-sm">Faster response via WhatsApp</p>
                </div>
              </div>
            </motion.div>
            
            {/* Services & Availability */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Services Offered */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  Services I Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Backend Development',
                    'API Design & Development',
                    'Database Architecture',
                    'Cloud Infrastructure',
                    'DevOps & CI/CD',
                    'Performance Optimization',
                    'Code Review & Consulting',
                    'Technical Documentation'
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                      className="flex items-center group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                <p className="text-teal-100 mb-6">
                  Let's discuss your ideas and turn them into reality
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:ashams3719262@gmail.com"
                    className="px-6 py-3 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">📧</span>
                    Send Email
                  </motion.a>
                  <motion.a
                    href="https://wa.me/01224900205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">💬</span>
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
