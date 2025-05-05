"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

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
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and user authentication.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://github.com/yourusername/ecommerce-project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team workspaces.",
    image: "/projects/task-app.jpg",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "WebSockets"],
    link: "https://github.com/yourusername/task-management"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Professional portfolio website showcasing projects and skills with modern design.",
    image: "/projects/portfolio.jpg",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    link: "https://github.com/yourusername/portfolio"
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, []);

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
    }, 5000);

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
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover brightness-[0.7]"
                priority={index === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition"
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition"
        aria-label="Next project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-white w-4" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
