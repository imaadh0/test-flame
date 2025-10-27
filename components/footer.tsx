"use client";
import React from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Palette } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#FFAE00] font-days-one mb-2">Fiinix</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform your business with powerful web solutions that drive results.
                We craft exceptional digital experiences that captivate and convert.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                
                  <MapPin className="w-5 h-5 text-[#FFAE00]" />
                
                <span>Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                
                  <Phone className="w-5 h-5 text-[#FFAE00]" />
                
                <span>0768011651 | 0772797684</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                
                  <Mail className="w-5 h-5 text-[#FFAE00]" />
                
                <span>hello@fiinix.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/#projects" },
                { name: "Approach", href: "/#approach" },
                { name: "Contact", href: "/#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFAE00] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Custom Web Development",
                "UI/UX Design",
                "Brand Identity & Strategy",
                "Digital Marketing & SEO",
                "E-commerce Solutions",
                "Web Application Development",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-[#FFAE00] transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <h4 className="text-xl font-semibold text-white mb-3">
              Subscribe to our newsletter!
            </h4>
            <p className="text-gray-300 mb-6">
              Subscribe for the latest web development news and exclusive offers.
              No spam, just valuable updates to help you stay ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="your.email@company.com"
                classNames={{
                  input: "bg-[#1A1A1A] text-white placeholder:text-gray-500 border-white/20",
                  inputWrapper: "bg-[#1A1A1A] border-white/20 hover:border-[#FFAE00]/50",
                }}
              />
              <Button
                className="bg-gradient-to-r from-[#FFAE00] to-[#FF8C00] text-black font-semibold px-14 py-2"
                
              >
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 lg:mb-0">
            © Copyright 2025 Fiinix. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            {[
              { name: "LinkedIn", icon: Linkedin, href: "#" },
              { name: "Twitter", icon: Twitter, href: "#" },
              { name: "Instagram", icon: Instagram, href: "#" },
              
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-[#FFAE00]/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#FFAE00] transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
