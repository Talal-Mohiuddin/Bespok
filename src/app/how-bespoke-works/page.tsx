import Navbar from "@/components/PageNavbar"
import PageHero from "@/components/PageHero"
import WorksStepIntro from "@/components/worksPage"
import ConsultationStep from "@/components/tailorSteps"
import TailorCTA from "@/components/tailorHero"
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
        <Navbar />
        <PageHero />
        <WorksStepIntro />
        <ConsultationStep />
        <TailorCTA />
        <Footer />
    </>
  )
}