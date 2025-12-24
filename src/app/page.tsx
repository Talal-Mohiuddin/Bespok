import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import TailorSection from "@/components/TailorSection";
import MensSuitsSection from "@/components/MensSection";
import WomensSuitsSection from "@/components/WomensSection";
import WorkSection from "@/components/workSection";
import ServicesSection from "@/components/servicesSection";
import FabricsSection from "@/components/fabricSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";
import { FAQsSection } from "@/components/FaqSection";
import { LocationSection } from "@/components/LocationSection";
import { SocialFooter } from "@/components/SocialFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="relative z-10">
          <VideoSection />
          <TailorSection />
          <MensSuitsSection />
          <WomensSuitsSection />
          <WorkSection />
          <ServicesSection />
          <FabricsSection />
          <TestimonialsSection />
          {/* <TeamSection /> */}
          <FAQsSection />
          <LocationSection />
          <SocialFooter />
          <Footer />
        </div>
      </div>
    </>
  );
}
