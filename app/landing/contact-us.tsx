import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full min-h-screen bg-[#191717]">
      <h1 className="text-5xl md:text-7xl font-bold text-center justify-center font-days-one pt-36 pb-20">
        Contact Us
        <span className="text-[#FFAE00] font-days-one font-bold">.</span>
      </h1>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start">
          {/* Left Side - Contact Information */}
          <div className="flex flex-col gap-8 lg:w-1/2 lg:pr-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Ready to bring your vision to life? Let's discuss how we can help transform
              your business with cutting-edge web solutions. Our team is here to understand
              your unique needs and deliver exceptional results.
            </p>

            {/* Phone Numbers */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/phone-image.png"
                  alt="Phone"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="text-white text-lg">
                <span>0768011651 | 0772797684</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/mail-image.png"
                  alt="Email"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="text-white text-lg">
                <span>hello@fiinix.com</span>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-4 p-4 bg-[#FFAE00]/10 rounded-xl border border-[#FFAE00]/20">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#FFAE00]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FFAE00] text-lg">⚡</span>
                </div>
              </div>
              <div className="text-white">
                <p className="font-semibold">Quick Response Guarantee</p>
                <p className="text-sm text-gray-300">We respond to all inquiries within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-gray-700 self-stretch mx-12" />

          {/* Right Side - Contact Form */}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <Input
              type="text"
              placeholder="Your Full Name"
              classNames={{
                input: "bg-[#2A2828] text-white placeholder:text-gray-500",
                inputWrapper: "bg-[#2A2828] border-none",
              }}
            />
            <Input
              type="email"
              placeholder="your.email@company.com"
              classNames={{
                input: "bg-[#2A2828] text-white placeholder:text-gray-500",
                inputWrapper: "bg-[#2A2828] border-none",
              }}
            />
            <Input
              type="text"
              placeholder="Company Name (Optional)"
              classNames={{
                input: "bg-[#2A2828] text-white placeholder:text-gray-500",
                inputWrapper: "bg-[#2A2828] border-none",
              }}
            />
            <textarea
              placeholder="Tell us about your project, timeline, and goals..."
              rows={5}
              className="bg-[#2A2828] text-white placeholder:text-gray-500 text-sm px-3 py-2 rounded-xl border-none outline-none resize-none"
            />
            <Button
              className="bg-gradient-to-r from-[#FFAE00] to-[#FF8C00] text-black font-bold text-lg py-6 rounded-lg hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Start Your Project →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
