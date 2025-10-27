"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from "react";

export function GradualSpacing({
  text = "Gradual Spacing",
  className = "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]",
  textClassName = "",
  highlightWords = [],
  highlightColor = "#FF8800",
}: {
  text: string;
  className?: string;
  textClassName?: string;
  highlightWords?: string[];
  highlightColor?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-1 w-fit ${textClassName}`}
    >
      <AnimatePresence>
        {text.split("").map((char, index) => {
          const isHighlighted = highlightWords.includes(char);

          return (
            <motion.span
              ref={ref}
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={className}
              style={isHighlighted ? { color: highlightColor } : {}}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.span>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
