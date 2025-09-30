"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./styles.css";

export default function GencareProjectPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/gencare.png"
            alt="GenCare App Preview"
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
              Mobile App
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              GenCare - Pregnancy Care Application
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Supporting expecting mothers with personalized health tracking and
              AI-powered analysis
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
            <div className="prose prose-lg prose-invert max-w-none text-white">
              <p>
                GenCare is a comprehensive mobile application designed to
                support expecting mothers throughout their pregnancy journey.
                The app combines personalized health tracking with advanced AI
                technology to provide a complete pregnancy care solution.
              </p>
              <p>
                The application offers week-by-week pregnancy information,
                personalized health tracking tools, nutrition guidance, and a
                revolutionary ultrasound analysis feature that uses machine
                learning to detect potential issues early.
              </p>
              <p>
                With GenCare, expecting mothers can monitor their health
                metrics, track fetal development, receive personalized
                recommendations, and easily share information with their
                healthcare providers - all from their mobile device.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-800 p-6 rounded-xl shadow-xl h-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              Project Details
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-400">My Role</h4>
                <p className="text-white mt-1">Lead Mobile Developer</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400">Timeline</h4>
                <p className="text-white mt-1">6 months (2023)</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "React Native",
                    "Expo",
                    "Node.js",
                    "MongoDB",
                    "AWS",
                    "ML/AI",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400">Links</h4>
                <p className="text-white text-sm mt-1 mb-2">
                  Contact me for access to the live mobile application demo.
                </p>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://github.com/dev-ahmed-abdelmohsen/GenCare_Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://gen-care-website.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Project Website</span>
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
            <p className="mt-4 text-xl text-gray-300">
              Comprehensive pregnancy care in your pocket
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health Tracking",
                description:
                  "Monitor vital signs, symptoms, weight gain, and other health metrics throughout pregnancy",
                icon: "📊",
              },
              {
                title: "AI Ultrasound Analysis",
                description:
                  "Upload ultrasound images for ML-powered analysis to detect potential issues early",
                icon: "🔍",
              },
              {
                title: "Pregnancy Timeline",
                description:
                  "Week-by-week information on fetal development and maternal changes",
                icon: "📅",
              },
              {
                title: "Nutrition Guidance",
                description:
                  "Personalized meal plans and dietary recommendations based on trimester and health needs",
                icon: "🥗",
              },
              {
                title: "Healthcare Integration",
                description:
                  "Share health data and reports directly with healthcare providers",
                icon: "🏥",
              },
              {
                title: "Community Support",
                description:
                  "Connect with other expecting mothers in a moderated community forum",
                icon: "👪",
              },
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
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white">App Showcase</h2>
          <p className="mt-4 text-xl text-gray-300">
            Experience GenCare's intuitive interface and powerful features
          </p>
        </motion.div>

        {/* App in Context - Showing the app among other apps */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-md mx-auto">
            {/* Phone mockup with app icons */}
            <div className="bg-black rounded-[40px] p-4 border-[14px] border-gray-800 shadow-2xl">
              <div className="relative aspect-[9/19] rounded-3xl overflow-hidden bg-white">
                <Image
                  src="/gencare/00.jpeg"
                  alt="GenCare App on Phone"
                  fill
                  className="object-cover"
                />

                {/* Arrow pointing to GenCare */}
                <div className="absolute top-[40%] right-[-50px] transform translate-x-0 translate-y-0">
                  <div className="relative">
                    <svg
                      width="100"
                      height="60"
                      viewBox="0 0 100 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-lg"
                    >
                      <path
                        d="M0 30H85M85 30L55 5M85 30L55 55"
                        stroke="#14b8a6"
                        strokeWidth="5"
                      />
                    </svg>
                    <span className="absolute top-[-30px] right-0 text-teal-400 font-bold whitespace-nowrap text-shadow">
                      GenCare App
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature-by-Feature Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">Feature Showcase</h2>
            <p className="mt-4 text-xl text-gray-300">
              Explore the powerful features that make GenCare essential for
              expecting mothers
            </p>
          </motion.div>

          {/* Feature 1: Health Tracking */}
          <FeatureShowcase
            title="Comprehensive Health Tracking"
            description="Monitor vital signs, symptoms, weight gain, and other health metrics throughout pregnancy. Get personalized insights and trends to keep you and your baby healthy."
            screenshots={[
              { src: "/gencare/0.jpeg", alt: "Health Tracking Dashboard" },
              { src: "/gencare/1.jpeg", alt: "Health Metrics Input" },
            ]}
            reversed={false}
          />

          {/* Feature 2: AI Analysis */}
          <FeatureShowcase
            title="AI-Powered Ultrasound Analysis"
            description="Our revolutionary machine learning technology analyzes ultrasound images to detect potential issues early, providing peace of mind and allowing timely medical intervention when needed."
            screenshots={[
              { src: "/gencare/4.jpeg", alt: "AI Analysis Interface" },
              { src: "/gencare/5.jpeg", alt: "Analysis Results" },
            ]}
            reversed={true}
          />

          {/* Feature 3: Pregnancy Timeline */}
          <FeatureShowcase
            title="Interactive Pregnancy Timeline"
            description="Track your pregnancy week by week with detailed information about fetal development and maternal changes. See what to expect next and how your baby is growing."
            screenshots={[
              { src: "/gencare/4.jpeg", alt: "Pregnancy Timeline View" },
              { src: "/gencare/5.jpeg", alt: "Weekly Development Details" },
            ]}
            reversed={false}
          />

          {/* Feature 4: Nutrition Guidance */}
          <FeatureShowcase
            title="Personalized Nutrition Guidance"
            description="Get custom meal plans and dietary recommendations based on your trimester and health needs. Learn what foods benefit your baby's development and which to avoid."
            screenshots={[
              { src: "/gencare/10.jpeg", alt: "Nutrition Recommendations" },
              { src: "/gencare/11.jpeg", alt: "Meal Planning Interface" },
            ]}
            reversed={true}
          />

          {/* Feature 5: profile and health tracking */}
          <FeatureShowcase
            title="Profile and Health Tracking"
            description="Keep track of your health metrics, appointments, and medical history all in one place. Get reminders for check-ups and stay organized throughout your pregnancy journey."
            screenshots={[
              { src: "/gencare/6.jpeg", alt: "Profile Overview" },
              { src: "/gencare/8.jpeg", alt: "Health Metrics Details" },
            ]}
            reversed={true}
          />

          {/* Feature 5: Multi Language Support */}
          <FeatureShowcase
            title="Multi Language Support"
            description="Access GenCare in your preferred language. Our app offers comprehensive language support to ensure all users can benefit from its features."
            screenshots={[
              { src: "/gencare/14.jpeg", alt: "Multi Language Support" },
              { src: "/gencare/15.jpeg", alt: "Language Selection" },
            ]}
            reversed={true}
          />
        </div>
      </section>
      {/* Visual Gallery - Image Slider */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white">App Gallery</h2>
          <p className="mt-4 text-xl text-gray-300">
            Explore the complete GenCare experience
          </p>
        </motion.div>

        <ImageSlider />
      </section>

      {/* Back to Projects Button */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>
      </section>
    </div>
  );
}

// Feature Showcase Component
const FeatureShowcase = ({
  title,
  description,
  screenshots,
  reversed = false,
}: {
  title: string;
  description: string;
  screenshots: { src: string; alt: string }[];
  reversed?: boolean;
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 mb-6 text-lg">{description}</p>
      </motion.div>

      <motion.div
        className={`flex gap-4 justify-center ${
          reversed ? "lg:justify-start" : "lg:justify-end"
        }`}
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0 && screenshots.length > 1
                ? "lg:-mr-8 z-10"
                : "lg:mt-10"
            } shadow-xl`}
          >
            <div className="bg-black rounded-[30px] p-3 border-[8px] border-gray-800">
              <div className="relative aspect-[9/19] w-32 sm:w-40 md:w-48 rounded-2xl overflow-hidden bg-white">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Image Slider Component
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalImages = 16; // Images from 0 to 15
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStartX, setDragStartX] = React.useState(0);
  const [dragDistance, setDragDistance] = React.useState(0);

  // Fix for image 13 - ensure all image numbers are valid
  const getValidImagePath = (index: number) => {
    // If image 13 has issues, we could replace it with an alternative
    // or use a different naming convention if needed
    if (index === 13) {
      return `/gencare/13.jpeg`; // Ensure extension is correct (jpeg vs jpg)
    }
    return `/gencare/${index}.jpeg`;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  // Handle touch/mouse events for drag functionality
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragDistance(0);
  };

  const handleDragMove = (clientX: number) => {
    if (isDragging) {
      const distance = clientX - dragStartX;
      setDragDistance(distance);
    }
  };

  const handleDragEnd = () => {
    if (isDragging) {
      // If dragged more than 50px, change slide
      if (dragDistance > 50) {
        prevSlide();
      } else if (dragDistance < -50) {
        nextSlide();
      }

      setIsDragging(false);
      setDragDistance(0);
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-advance slides with pause on hover/touch
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main slider with enhanced styling */}
      <div
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Phone mockup with drag functionality */}
        <div
          ref={sliderRef}
          className="relative mx-auto bg-black rounded-[40px] p-4 border-[14px] border-gray-800 shadow-2xl max-w-xs transform transition-transform"
          style={{
            transform: isDragging
              ? `translateX(${dragDistance}px)`
              : "translateX(0)",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Status bar decoration */}
          <div className="absolute top-0 left-0 right-0 h-7 z-10 bg-black rounded-t-3xl flex items-center px-4">
            <div className="w-1/3 text-white/50 text-xs font-medium">9:41</div>
            <div className="w-1/3 flex justify-center">
              <div className="w-12 h-4 bg-black rounded-b-lg"></div>
            </div>
            <div className="w-1/3 flex justify-end space-x-1">
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
            </div>
          </div>

          <div className="relative aspect-[9/19] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={getValidImagePath(currentIndex)}
                  alt={`GenCare App Screenshot ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = "/gencare/0.jpeg"; // Default to first image
                    console.error(`Error loading image ${currentIndex}`);
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Swipe indicator overlay */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
              <div className="h-12 w-12 bg-black/20 backdrop-blur-sm rounded-r-full ml-2"></div>
              <div className="h-12 w-12 bg-black/20 backdrop-blur-sm rounded-l-full mr-2"></div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-center">
            <div className="w-1/3 h-1 bg-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced navigation controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 -left-5 sm:left-2 p-3 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-teal-600/80 transition-colors border border-white/10 shadow-xl z-10"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 -right-5 sm:right-2 p-3 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-teal-600/80 transition-colors border border-white/10 shadow-xl z-10"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Swipe instruction */}
        <div className="absolute -bottom-10 left-0 right-0 text-center text-white/50 text-sm">
          <span className="hidden sm:inline">← Swipe or use arrow keys →</span>
          <span className="sm:hidden">← Swipe →</span>
        </div>
      </div>

      {/* Enhanced progress indicator */}
      <div className="mt-16 flex flex-col items-center">
        <div className="text-white font-medium mb-4 flex items-center gap-2">
          <span className="px-3 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full">
            {currentIndex + 1} / {totalImages}
          </span>
        </div>

        <div className="flex items-center space-x-1 max-w-full overflow-x-auto py-4 px-4 scrollbar-hide">
          {Array.from({ length: totalImages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                currentIndex === index
                  ? "w-8 h-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                  : "w-2 h-2 bg-gray-500/50 hover:bg-gray-400 rounded-full"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
