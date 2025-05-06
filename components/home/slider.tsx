"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Muslim Azkar App",
    description: "Muslim Azkar App with a modern design and a responsive layout.",
    image: "/projects/azkar.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://gencare.vercel.app/"
  },
  {
    id: 2,
    title: "Real State Website",
    description: "Real State Website with a modern design and a responsive layout.",
    image: "/projects/mawa1.png",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "MongoDB", "Node.js"],
    link: "https://mawa-rho.vercel.app/map/"
  },
    {
      id: 3,
      title: "Real State Subsite For Owners",
      description: "Real State Subsite For Owners with a modern design and a responsive layout.",
      image: "/projects/mawa-owners.png",
      tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
      link: "https://mawa-owners.vercel.app/dashboard"
    },
    // {
    //   id: 4,
    //   title: "E-Commerce Website",
    //   description: "E-Commerce Website with a modern design and a responsive layout.",
    //   image: "/projects/viewstore.png",
    //   tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    //   link: "https://viewstore.vercel.app/"
    // },
  ];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setIsImageLoading(true);
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setIsImageLoading(true);
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setIsImageLoading(true);
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  }, [currentIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="w-full max-w-5xl mx-auto relative overflow-hidden rounded-xl shadow-2xl">
      <div 
        className="relative h-[500px] sm:h-[600px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: direction === 'right' ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 'right' ? -300 : 300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
              {/* Project Image Container */}
              <div className="w-full h-3/5 relative flex justify-center items-center p-4 overflow-hidden">
                {/* All images are treated as photos now */}
                <motion.div 
                  className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute w-full h-full bg-gradient-radial from-teal-900/20 to-gray-900/40 z-10 mix-blend-overlay"></div>
                  <Image 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className={`object-cover transition-all duration-700 ${
                      isImageLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'
                    }`}
                    priority={currentIndex === 0}
                    onLoadingComplete={() => setIsImageLoading(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent p-6 sm:p-8 text-white">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold mb-2 text-white"
                >
                  {projects[currentIndex].title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-5 text-sm sm:text-base text-gray-300"
                >
                  {projects[currentIndex].description}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap gap-2 mb-5"
                >
                  {projects[currentIndex].tags.map((tag, idx) => (
                    <motion.span 
                      key={tag} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                      className="px-3 py-1 bg-teal-600/80 backdrop-blur-sm rounded-full text-xs font-medium transition-all hover:bg-teal-500/90 shadow-sm hover:shadow-teal-500/50"
                      whileHover={{ y: -2, scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                {projects[currentIndex].link && (
                  <motion.a 
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="inline-flex items-center px-6 py-2.5 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-500 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3)" }}
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-teal-900/80 text-white hover:bg-teal-800 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-teal-800/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </motion.button>
      
      <motion.button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-teal-900/80 text-white hover:bg-teal-800 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-teal-800/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 h-2 bg-teal-400 shadow-md shadow-teal-400/30" 
                : "w-2 h-2 bg-white/50 hover:bg-teal-400/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
