"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full min-h-screen bg-[#191717]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <motion.path
            fill="#FFAE00"
            fillOpacity="1"
            d="M0,96L30,106.7C60,117,120,139,180,149.3C240,160,300,160,360,165.3C420,171,480,181,540,192C600,203,660,213,720,202.7C780,192,840,160,900,133.3C960,107,1020,85,1080,117.3C1140,149,1200,235,1260,272C1320,309,1380,299,1410,293.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </svg>
      </motion.div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center justify-center font-days-one  mb-8 md:mb-16"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        What We Do
        <span className="text-[#FFAE00] font-days-one font-bold">.</span>
      </motion.h1>
      <div className=" w-full flex items-center justify-center px-4 md:px-0">
        <div className="grid h-full w-full grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-4  gap-4 py-10 max-w-screen-xl mx-auto">
          <motion.div
            className="col-span-1 row-span-1 md:row-span-3 animate-rotate-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0 }}
          >
            <div className="bg-[#0A0A0A] rounded-3xl p-6 sm:p-8 lg:p-10 h-full flex flex-col">
              <div className="flex flex-col gap-4 justify-center order-1 md:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFAE00] font-inter text-start">
                  Custom Web Development
                </h2>
                <p className="text-base sm:text-lg font-inter text-start leading-relaxed">
                  From responsive landing pages to complex web applications, we create
                  fast, secure, and scalable solutions using modern technologies like React,
                  Next.js, and Node.js.
                </p>
              </div>
              <div className="flex items-center justify-center order-2 md:order-1">
                <Image
                  src="/web-dev.png"
                  alt="Web Development"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-span-1 md:col-span-2 row-span-1 rounded-xl animate-rotate-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#0A0A0A] rounded-3xl h-full p-6 sm:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4 justify-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFAE00] font-inter text-start md:text-start">
                  UI/UX Design
                </h2>
                <p className="text-base sm:text-lg font-inter text-start md:text-start md:max-w-[280px] leading-relaxed">
                  We craft intuitive, user-centered designs that balance aesthetics with functionality.
                  Through user research, wireframing, and prototyping, we create experiences that
                  delight users and drive conversions.
                </p>
              </div>
              <div className="relative flex justify-center md:absolute md:right-24 md:bottom-[-28px]">
                <Image
                  src="/ui-des.png"
                  alt="UI Design"
                  width={280}
                  height={280}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-span-1 row-span-1 md:row-span-2 rounded-xl animate-rotate-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[#0A0A0A] rounded-3xl gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 h-full">
              <div className="flex flex-col gap-4 justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFAE00] font-inter text-start">
                  Brand Identity & Strategy
                </h2>
                <p className="text-base sm:text-lg font-inter text-start leading-relaxed">
                  We develop comprehensive brand identities that tell your story and resonate with your audience.
                  From logo design to complete brand guidelines, we ensure consistency across all touchpoints.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/brand-des.png"
                  alt="Brand Design"
                  width={380}
                  height={380}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-span-1 row-span-1 md:row-span-2 rounded-xl animate-rotate-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-[#0A0A0A] rounded-3xl p-6 sm:p-8 lg:p-10 h-full">
              <div className="flex flex-col gap-4 justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFAE00] font-inter text-start">
                  Digital Marketing & SEO
                </h2>
                <p className="text-base sm:text-lg font-inter text-start leading-relaxed">
                  We optimize your online presence for search engines and create data-driven
                  digital marketing strategies that increase visibility, drive traffic, and
                  convert visitors into loyal customers.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/social-man.png"
                  alt="Digital Marketing & SEO"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
