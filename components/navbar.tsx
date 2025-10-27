"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import { motion } from "framer-motion";
const Links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Join Newsletter",
    href: "#newsletter",
  },
];
const Navbar = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Wait for container animation to complete (0.5s duration + 0.2s delay = 0.7s)
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="font-days-one">
      <ul className="flex flex-col gap-3 text-xl text-black">
        {Links.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{
              x: -100,
              y: 50,
              opacity: 0,
              rotateX: -45,
              rotateY: -15,
              transformOrigin: "bottom left",
            }}
            animate={
              shouldAnimate
                ? {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    rotateY: 0,
                  }
                : {
                    x: -100,
                    y: 50,
                    opacity: 0,
                    rotateX: -45,
                    rotateY: -15,
                  }
            }
            transition={{
              duration: 0.6,
              delay: shouldAnimate ? index * 0.1 : 0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ perspective: "1000px" }}
          >
            <Link
              href={link.href}
              className="block hover:scale-105 transition-transform duration-200"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </ul>
      <motion.div
        initial={{
          x: -100,
          y: 50,
          opacity: 0,
          rotateX: -45,
          rotateY: -15,
          transformOrigin: "bottom left",
        }}
        animate={
          shouldAnimate
            ? {
                x: 0,
                y: 0,
                opacity: 1,
                rotateX: 0,
                rotateY: 0,
              }
            : {
                x: -100,
                y: 50,
                opacity: 0,
                rotateX: -45,
                rotateY: -15,
              }
        }
        transition={{
          duration: 0.6,
          delay: shouldAnimate ? 0.3 : 0,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ perspective: "1000px" }}
      >
        <Button className="mt-10 bg-[#FFFFFF]/80 shadow-md text-black font-semibold px-12 hover:scale-105 transition-transform duration-200">
          Book A Call
        </Button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
