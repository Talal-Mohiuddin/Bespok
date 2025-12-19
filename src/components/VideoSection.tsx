"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VideoSection(){
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white z-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/video.jpg"
          alt="Bespoke tailoring workshop"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
          Why Bespoke Tailoring Matters
        </h2>

        <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
          At Bespoke Tailors, we believe clothing is more than fabric — it's a
          reflection of your personality, confidence, and taste. Every garment
          is hand-crafted, made to measure, and tailored with precision to
          deliver a perfect fit and timeless style.
        </p>

        <button className="bg-[#A66242] hover:bg-[#532f26] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
          Discover True Bespoke
        </button>
      </div>
    </motion.section>
  );
}