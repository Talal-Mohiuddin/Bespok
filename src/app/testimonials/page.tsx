import Navbar from "@/components/PageNavbar"
import PageHero from "@/components/PageHero"
import VideoTestimonials from "@/components/videoTestimonials";
import ReviewsSection from "@/components/reviewsSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
        <Navbar />
        <PageHero />
        <ReviewsSection />
        <VideoTestimonials />
        <Footer />
    </>
  )
}