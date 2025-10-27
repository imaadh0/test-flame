"use client";
import { useEffect, useState } from "react";

const logos = [
  {
    name: "Oyo Eats",
    url: "/partner-logos/cafe95.png",
  },
  {
    name: "Orbit Overseas",
    url: "/partner-logos/countrykitchen.png",
  },
  {
    name: "TAANZ - Outsourcing",
    url: "/partner-logos/gfc.png",
  },
];

const AnimatedLogoCloud = () => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const animateLogos = () => {
      setTranslateX((prev) => {
        const logoWidth = 160 + 40; // w-40 (160px) + gap-10 (40px)
        const totalWidth = logoWidth * logos.length;
        return prev <= -totalWidth ? 0 : prev - 1;
      });
    };

    const interval = setInterval(animateLogos, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-transparent py-10 mt-20">
      <div className="relative overflow-hidden">
        <div className="flex gap-10">
          {Array.from({ length: 4 }).map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex shrink-0 gap-10"
              style={{
                transform: `translateX(${translateX}px)`,
              }}
            >
              {logos.map((logo, logoIndex) => (
                <img
                  key={`${setIndex}-${logoIndex}`}
                  src={logo.url}
                  className="size-40 opacity-100 brightness-100 transition-opacity duration-300 hover:opacity-100"
                  alt={logo.name}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
