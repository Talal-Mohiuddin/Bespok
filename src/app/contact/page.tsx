import Navbar from "@/components/PageNavbar"
import PageHero from "@/components/PageHero"
import ContactSection from "@/components/contact"
import ReachUsForm from "@/components/contactForm"
import Location from "@/components/location"
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
        <Navbar />
        <PageHero />
        <ContactSection />
        <ReachUsForm />
        <Location />
        <Footer />
    </>
  )
}