import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import TailorSection from '@/components/TailorSection';
import MensSuitsSection from '@/components/MensSection';
import WomensSuitsSection from '@/components/WomensSection';
import WorkSection from '@/components/workSection';
import ServicesSection from "@/components/servicesSection";
import FabricsSection from "@/components/fabricSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CEOSection from "@/components/ceoSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <TailorSection />
      <MensSuitsSection />
      <WomensSuitsSection />
      <WorkSection />
      <ServicesSection />
      <FabricsSection />
      <TestimonialsSection />
      <CEOSection />
    </>
  );
}
