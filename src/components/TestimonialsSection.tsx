"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Muhammad Ali Hassnain",
    image: "/review1.png",
    review:
      "Very professional, had given my walima suit for stitching, gave me as many tries as I wanted, fixed and altered the suit as I had imagined. Their tailor master and shop manager Liaqat Bhai were really helpful and supportive all throughout.",
  },
  {
    name: "Nazar Waheed",
    image: "/review2.jpg",
    review:
      "Exceptional craftsmanship and attention to detail. The fit was perfect and the quality exceeded my expectations. Highly recommended!",
  },
  {
    name: "Ahmed Khan",
    image: "/tailorSection.jpg",
    review:
      "Outstanding service from start to finish. The team was professional and the final product was exactly what I envisioned. Worth every penny!",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-10 py-20">
        {/* Header */}
        <h2 className="text-center font-serif text-[48px] text-[#A66242]">
          Hear from our clients
        </h2>
        <p className="mx-auto mt-6 max-w-[900px] text-center font-serif text-[18px] leading-[1.8] text-[#4A4A4A]">
          From flawless fits to unmatched craftsmanship, our clients share their
          experiences of wearing true bespoke garments that reflect precision,
          personality, and prestige.
        </p>

        {/* Cards */}
        <div className="mt-20 flex gap-8">
          {/* Left big card */}
          <div className="relative flex-1 overflow-hidden rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7D5A46] via-[#3D2C20] to-[#0A0A0A]" />

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-between p-12">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex items-start gap-12"
                >
                  {/* Left photo and name */}
                  <div className="flex-shrink-0">
                    <div className="h-[240px] w-[240px] overflow-hidden rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <p className="mt-6 font-serif text-[24px] text-white">
                      {currentTestimonial.name}
                    </p>
                  </div>

                  {/* Review text and stars */}
                  <div className="flex-1 pt-8">
                    <p className="max-w-[500px] font-serif text-[18px] leading-[1.7] text-white">
                      {currentTestimonial.review}
                    </p>

                    {/* Stars */}
                    <div className="mt-6 flex gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Big quotes at bottom right */}
              <div className="absolute bottom-8 right-16 text-[320px] font-serif leading-none text-white/5">
                "
              </div>

              {/* Left arrow */}
              <button
                onClick={handlePrevious}
                className="absolute bottom-12 left-12 text-white/80 transition hover:text-white hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-12 w-12 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right small card */}
          <div className="relative w-[400px] flex-shrink-0 overflow-hidden rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7D5A46] via-[#3D2C20] to-[#0A0A0A]" />

            <div className="relative z-10 flex h-full min-h-[500px] flex-col items-center justify-center p-12">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`next-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="h-[280px] w-[280px] overflow-hidden rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                    <img
                      src={nextTestimonial.image}
                      alt={nextTestimonial.name}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>

                  <p className="mt-8 font-serif text-[24px] text-white">
                    {nextTestimonial.name}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Right arrow */}
              <button
                onClick={handleNext}
                className="absolute bottom-12 right-12 text-white/80 transition hover:text-white hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-12 w-12 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#FFD700"
        d="M12 2.5l2.93 6.06 6.69.58-5.06 4.37 1.52 6.53L12 16.9 5.92 20.04l1.52-6.53-5.06-4.37 6.69-.58L12 2.5z"
      />
    </svg>
  );
}