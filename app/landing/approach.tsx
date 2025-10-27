"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Approach = () => {
  const [stepProgress, setStepProgress] = useState<number[]>([0, 0, 0, 0]);
  const [stepAnimations, setStepAnimations] = useState<number[]>([0, 0, 0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Device detection
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    // Skip scroll-based animation for mobile and tablet
    if (isMobile || isTablet) {
      return;
    }

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const newProgress = stepRefs.current.map((ref, index) => {
        if (!ref) return stepProgress[index] || 0;

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = elementTop + rect.height;
        const elementHeight = rect.height;

        // Calculate how much of the element is visible in viewport
        const viewportTop = scrollPosition;
        const viewportBottom = scrollPosition + viewportHeight;

        // If element is completely above viewport (already scrolled past)
        if (elementBottom < viewportTop) {
          return 1; // Keep it filled - never unfill previous sections
        }

        // If element is completely below viewport
        if (elementTop > viewportBottom) {
          return 0;
        }

        // Calculate visible portion for current section
        const visibleTop = Math.max(elementTop, viewportTop);
        const visibleBottom = Math.min(elementBottom, viewportBottom);
        const visibleHeight = visibleBottom - visibleTop;

        // Calculate progress based on how much is visible
        const progress = Math.min(visibleHeight / elementHeight, 1);

        // Ensure we never go below the current progress (prevents unfilling)
        return Math.max(stepProgress[index] || 0, progress);
      });

      // Calculate animation progress for each step (desktop only)
      const newAnimations = stepRefs.current.map((ref, index) => {
        if (!ref) return stepAnimations[index] || 0;

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = elementTop + rect.height;
        const elementHeight = rect.height;

        const viewportTop = scrollPosition;
        const viewportBottom = scrollPosition + viewportHeight;

        const threshold = 0.25;
        const viewportThreshold = viewportHeight * threshold;

        // If element is completely above viewport (already scrolled past)
        if (elementBottom < viewportTop) {
          return 1; // Keep it animated
        }

        // If element is outside viewport from bottom, start reversing
        if (elementTop > viewportBottom + viewportThreshold) {
          return 0;
        }

        // If element is completely below viewport
        if (elementTop > viewportBottom) {
          return stepAnimations[index] || 0; // Keep current animation state
        }

        // Calculate animation progress based on visibility
        const visibleTop = Math.max(elementTop, viewportTop);
        const visibleBottom = Math.min(elementBottom, viewportBottom);
        const visibleHeight = visibleBottom - visibleTop;

        // Calculate animation progress (0 to 1)
        let animationProgress = Math.min(visibleHeight / elementHeight, 1);

        // Desktop: Only increase animation progress, don't decrease unless outside threshold
        return Math.max(stepAnimations[index] || 0, animationProgress);
      });

      setStepProgress(newProgress);
      setStepAnimations(newAnimations);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, isTablet]);

  const steps = [
    {
      title: "Strategy & Discovery",
      text: "We listen carefully, analyze your requirements in depth, and design a clear, results-driven roadmap aligned with your vision and long-term business goals",
      img: "/two-guys-tech.png",
      stepNumber: "01",
    },
    {
      title: "Creative Build",
      text: "Our team designs and develops digital experiences that blend creativity with functionality, guided by user needs and built to scale with the latest technologies.",
      img: "/strategy.png",
      stepNumber: "02",
    },
    {
      title: "Review & Refine",
      text: "We work closely with you to polish every detail until it’s just right, ensuring the outcome reflects your vision, meets standards, and delivers excellence",
      img: "/launch.png",
      stepNumber: "03",
    },
    {
      title: "Launch & Beyond",
      text: "We deploy your solution efficiently, monitor its performance closely, and provide continuous support to ensure long-term success and optimal results",
      img: "/launch-3.png",
      stepNumber: "04",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements for Depth */}
      <div className="absolute inset-0 opacity-30">
        {/* Dot Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FFAE00 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #FFAE00 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.h1
        className="lg:text-7xl text-5xl font-bold text-center justify-center font-days-one relative z-20 pt-36"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        Our Approach
        <span className="text-[#FFAE00] font-days-one font-bold">.</span>
      </motion.h1>
      <div className="flex flex-col max-w-screen-xl mx-auto px-4 md:px-6 relative z-20 mt-16 md:mt-0">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "md:grid-flow-col-dense" : ""
            }`}
          >
            {/* Mobile/Tablet: Simple reveal animation */}
            {isMobile || isTablet ? (
              <>
                <motion.div
                  className={`space-y-4 ${i % 2 === 1 ? "md:col-start-2" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-[#FF8800]">
                    {step.stepNumber}
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {step.title}
                  </h2>
                  <p className="text-md text-gray-300 md:max-w-xl">
                    {step.text}
                  </p>
                  <div className="mt-6">
                    <motion.div
                      className="lg:w-100 md:w-1/2 w-80 h-6 sm:h-8 bg-white rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div
                        className="h-full bg-[#FF8800] rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
                {/* Image */}
                <motion.div
                  className={`w-full ${i % 2 === 1 ? "md:col-start-1" : ""}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="w-auto h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 2}
                  />
                </motion.div>
              </>
            ) : (
              /* Desktop: Scroll-based animation */
              <>
                <motion.div
                  className={`space-y-4 ${i % 2 === 1 ? "md:col-start-2" : ""}`}
                  animate={{
                    opacity: stepAnimations[i],
                    scale: stepAnimations[i],
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.h1
                    className="text-3xl md:text-4xl font-bold text-[#FF8800]"
                    animate={{
                      opacity: stepAnimations[i],
                      scale: stepAnimations[i],
                    }}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {step.stepNumber}
                  </motion.h1>
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold"
                    animate={{
                      opacity: stepAnimations[i],
                      scale: stepAnimations[i],
                    }}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {step.title}
                  </motion.h2>
                  <motion.p
                    className="text-md text-gray-300 md:max-w-xl"
                    animate={{
                      opacity: stepAnimations[i],
                      scale: stepAnimations[i],
                    }}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {step.text}
                  </motion.p>
                  <motion.div
                    className="mt-6"
                    animate={{
                      opacity: stepAnimations[i],
                      scale: stepAnimations[i],
                    }}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="lg:w-100 md:w-1/2 w-80 h-6 sm:h-8 bg-white rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#FF8800] rounded-full"
                        animate={{
                          width: `${stepProgress[i] * 100}%`,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
                {/* Image */}
                <motion.div
                  className={`w-full ${i % 2 === 1 ? "md:col-start-1" : ""}`}
                  animate={{
                    opacity: stepAnimations[i],
                    scale: stepAnimations[i],
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="w-auto h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 2}
                  />
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
