"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

// Smooth pulse animation component for the letter "i"
function PulseI({ delay = 0 }: { delay?: number }) {
  return (
    <span
      style={{
        display: "inline",
        animation: `pulseGlow 3s ease-in-out ${delay}s infinite`,
      }}
    >
      i
      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            color: #ffffff;
            text-shadow: 0 0 0px rgba(255, 174, 0, 0);
          }
          50% {
            color: #ffae00;
            text-shadow: 0 0 20px rgba(255, 174, 0, 0.8),
              0 0 30px rgba(255, 174, 0, 0.6), 0 0 40px rgba(255, 174, 0, 0.4);
          }
        }
      `}</style>
    </span>
  );
}

// Component to render text with animated "i"s
function AnimatedText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, index) => {
        if (char === "i") {
          // Alternate delays for the two "i"s
          const iCount = text.slice(0, index).split("i").length - 1;
          return <PulseI key={index} delay={iCount * 0.8} />;
        }
        return <span key={index}>{char}</span>;
      })}
    </>
  );
}

export default function Hero() {
  const headline = "We build products that ship.";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Sub copy cycling with full sentences
  const sentences = useMemo(
    () => [
      "We ship fast web apps for teams that care about speed, DX, and outcomes.",
      "We build accessible products for teams that value inclusivity and reach.",
      "We craft robust solutions for teams that demand reliability and scale.",
      "We design beautiful experiences for teams that appreciate quality and detail.",
    ],
    []
  );
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSentenceIndex((i) => (i + 1) % sentences.length);
        setIsAnimating(false);
      }, 350); // Wait for vanish before changing text
    }, 4000); // Change every 4 seconds
    return () => clearInterval(id);
  }, [sentences.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            filter: "grayscale(1) brightness(0.4) contrast(1.2)",
          }}
        />
      </div>

      {/* Soften background with subtle dark gradients to reduce visual noise */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.7)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-28 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F5F5] leading-tight">
            <span
              className="block transition-all duration-1000 ease-out"
              style={{
                whiteSpace: "normal",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <AnimatedText text={headline} />
            </span>
          </h1>
          <div className="mt-5">
            <p
              className="text-base sm:text-lg text-white/80 transition-all duration-300 ease-in-out"
              style={{
                filter: isAnimating ? "blur(20px)" : "blur(0px)",
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "scale(0.9)" : "scale(1)",
              }}
            >
              {sentences[sentenceIndex]}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FFAE00] to-[#FFD700] px-6 py-3 text-sm font-semibold text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,174,0,0.6)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFAE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center rounded-full border border-[#FFAE00]/40 px-6 py-3 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:border-[#FFAE00]/60 active:scale-95 backdrop-blur-xl bg-white/5"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(255, 174, 0, 0.1), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
