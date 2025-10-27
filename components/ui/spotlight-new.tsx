"use client";
import React from "react";
import { motion } from "framer-motion";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 95%, .12) 0, hsla(210, 100%, 75%, .06) 50%, hsla(210, 100%, 65%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 95%, .10) 0, hsla(210, 100%, 75%, .04) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 95%, .08) 0, hsla(210, 100%, 65%, .04) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-full z-40 pointer-events-none"
        style={{
          x: `clamp(0px, ${xOffset}px, 50vw)`,
        }}
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 w-[50vw] sm:w-[60vw] md:w-[70vw] lg:w-[${width}px] h-[80vh] sm:h-[90vh] md:h-[${height}px]`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left w-[20vw] sm:w-[25vw] md:w-[30vw] lg:w-[${smallWidth}px] h-[80vh] sm:h-[90vh] md:h-[${height}px]`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left w-[20vw] sm:w-[25vw] md:w-[30vw] lg:w-[${smallWidth}px] h-[80vh] sm:h-[90vh] md:h-[${height}px]`}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-full h-full z-40 pointer-events-none"
        style={{
          x: `clamp(-50vw, -${xOffset}px, 0px)`,
        }}
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 w-[50vw] sm:w-[60vw] md:w-[70vw] lg:w-[${width}px] h-[80vh] sm:h-[90vh] md:h-[${height}px]`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right w-[20vw] sm:w-[25vw] md:w-[30vw] lg:w-[${smallWidth}px] h-[80vh] sm:h-[90vh] md:h-[${height}px]`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right w-[20vw] sm:w-[25vw] md:w-[30vw] lg:w-[${smallWidth}px] h-[80vh] sm:h-[90vh] md:h-[${height}px]`}
        />
      </motion.div>
    </motion.div>
  );
};
