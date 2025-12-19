"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    name: "Humza Darr",
    role: "CEO",
    image: "/ceo.png",
    objectPosition: "78% 30%",
    bio: "Lorem ipsum sed dictum enim tristique tristique sed consequat risus tortor pellentesque sit vitae egestas penatibus dictum justo elit quam nec ultrices posuere lectus dui.",
  },
  {
    name: "John Smith",
    role: "Head Tailor",
    image: "/ceo.png",
    objectPosition: "78% 30%",
    bio: "Expert craftsman with over 20 years of experience in bespoke tailoring. Specializes in custom suits and traditional techniques passed down through generations.",
  },
  {
    name: "Sarah Johnson",
    role: "Design Director",
    image: "/ceo.png",
    objectPosition: "78% 30%",
    bio: "Leading our design vision with a keen eye for detail and contemporary fashion. Creates unique patterns that blend classic elegance with modern style.",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const currentMember = teamMembers[currentIndex];

  const fadeVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
    }),
  };

  return (
    <section className="bg-black">
      {/* Desktop View */}
      <div className="relative hidden h-[780px] w-full overflow-hidden md:block">
        {/* Background image */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={`image-${currentIndex}`}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={currentMember.image}
            alt={currentMember.name}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: currentMember.objectPosition }}
            draggable={false}
          />
        </AnimatePresence>

        {/* Dark left fade + soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/10" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.70)_100%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] px-8 md:px-16">
          <div className="flex h-full w-full items-center">
            {/* Left text block */}
            <div className="w-full md:w-[520px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <h3 className="font-serif text-[44px] leading-none text-white">
                    {currentMember.name}
                  </h3>

                  <p className="mt-6 max-w-[460px] font-serif text-[18px] leading-[1.6] text-white/80">
                    {currentMember.bio}
                  </p>

                  <p className="mt-10 font-serif text-[28px] text-white/80">
                    {currentMember.role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom center nav buttons */}
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrevious}
              aria-label="Previous"
              className="flex h-[70px] w-[90px] items-center justify-center rounded-2xl border border-white/20 text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="flex h-[70px] w-[90px] items-center justify-center rounded-2xl border border-white/20 text-[#B8906D] transition hover:border-white/40 hover:bg-white/5"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative block w-full overflow-hidden md:hidden">
        <div className="relative h-[500px] w-full">
          {/* Background image */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={`mobile-image-${currentIndex}`}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={currentMember.image}
              alt={currentMember.name}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: currentMember.objectPosition }}
              draggable={false}
            />
          </AnimatePresence>

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
        </div>

        {/* Content below image */}
        <div className="bg-black px-6 pb-12 pt-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`mobile-content-${currentIndex}`}
              custom={direction}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
            >
              <h3 className="font-serif text-[32px] leading-tight text-white sm:text-[38px]">
                {currentMember.name}
              </h3>

              <p className="mt-4 font-serif text-[16px] leading-[1.6] text-white/80 sm:text-[18px]">
                {currentMember.bio}
              </p>

              <p className="mt-6 font-serif text-[22px] text-white/80 sm:text-[26px]">
                {currentMember.role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              aria-label="Previous"
              className="flex h-[60px] w-[80px] items-center justify-center rounded-xl border border-white/20 text-white transition hover:border-white/40 hover:bg-white/5 active:bg-white/10"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="flex h-[60px] w-[80px] items-center justify-center rounded-xl border border-white/20 text-[#B8906D] transition hover:border-white/40 hover:bg-white/5 active:bg-white/10"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}