"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="lg:max-w-screen-sm max-w-sm mx-auto rounded-full backdrop-blur-sm py-4 mt-10 bg-gradient-to-r from-[#0A0A0A] to-[#191717] border-b border-[#FFAE00]/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto lg:max-w-xl max-w-[80%] justify-between flex">
        <h1 className="text-4xl font-bold tracking-tighter font-lalezar text-white">
          {" "}
          F<span className="text-[#FF8800]">ii</span>nix{" "}
        </h1>
        <div className="relative">
          <Button
            onPress={() => setIsOpen(!isOpen)}
            isIconOnly
            className={`text-black bg-[#FFAE00] w-[72px] rounded-full ${isOpen ? "bg-[#191717]" : "bg-[#FFAE00]"} transition-all duration-500 z-50`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key={"x"}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <XIcon size={24} className="text-white font-bold" />
                </motion.div>
              ) : (
                <motion.div
                  key={"menu"}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuIcon size={24} className="text-black font-bold" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.1,
                  x: 0,
                  y: 0,
                  transformOrigin: "top right",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.1,
                  x: 0,
                  y: 0,
                  transformOrigin: "top right",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="absolute top-[-30] right-[-20] mt-4 w-[350px] h-[400px] bg-gradient-to-r from-[#FFAE00] to-[#FF8800] rounded-2xl shadow-2xl z-30"
              >
                <div className="p-6 h-full flex items-center justify-center">
                  <Navbar />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
