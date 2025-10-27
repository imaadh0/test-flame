"use client";
import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { motion } from "motion/react";

const items = [
  {
    title: "TAANZ - Outsourcing",
    description: "A comprehensive accounting outsourcing platform that streamlines financial operations for businesses worldwide.",
    image: "/taanz-proj.png",
    category: "Web Application",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Automated Bookkeeping", "Real-time Reports", "Multi-currency Support"]
  },
  {
    title: "Orbit Overseas",
    description: "An innovative travel itinerary management system that helps travelers plan and organize their journeys seamlessly.",
    image: "/orbit-proj.png",
    category: "Mobile App",
    tech: ["React Native", "Firebase", "Maps API"],
    features: ["Smart Itinerary", "Budget Tracking", "Social Sharing"]
  },
  {
    title: "Project 3",
    description: "A cutting-edge project showcasing our expertise in modern web development and user experience design.",
    image: "/images/project-3.jpg",
    category: "Web Platform",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    features: ["Responsive Design", "Performance Optimized", "SEO Ready"]
  },
];

const OurWork = () => {
  const ProjectCard = ({
    title,
    description,
    image,
    category,
    tech,
    features,
  }: {
    title: string;
    description: string;
    image: string;
    category: string;
    tech: string[];
    features: string[];
  }) => {
    return (
      <motion.div 
        className="group relative w-80 h-96 md:w-96 md:h-[28rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFAE00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
          {/* Category Badge */}
         

          {/* Title */}
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#FFAE00] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {tech.map((item, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs text-gray-300 border border-white/20"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div 
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <div className="space-y-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-[#FFAE00] rounded-full" />
                  <span className="text-xs text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hover Indicator */}
          <motion.div 
            className="absolute top-4 right-4 w-8 h-8 bg-[#FFAE00]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
          >
            <svg className="w-4 h-4 text-[#FFAE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFAE00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    );
  };

  return (
    <section className="w-full min-h-screen bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Pattern */}
      

      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center font-days-one pt-36 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Work
          <span className="text-[#FFAE00] font-days-one font-bold">.</span>
        </motion.h1>

        <motion.div 
          className="max-w-7xl mx-auto px-4 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Carousel
            items={items.map((item, index) => (
              <ProjectCard key={item.title} {...item} />
            ))}
          />
        </motion.div>

        {/* Bottom Decoration */}
        <div 
          className="flex justify-center mt-20 pb-20" >
         
          
          </div>
        
      </div>
    </section>
  );
};

export default OurWork;
