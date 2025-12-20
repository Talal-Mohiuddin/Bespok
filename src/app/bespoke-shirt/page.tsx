import Navbar from "@/components/PageNavbar"
import PageHero from "@/components/PageHero"
import ShirtsIntro from "@/components/shirtIntro"
import TailorProcess from "@/components/shirtTailor"
import Shirtboxes from "@/components/shirtBoxes"
import ShirtHero from "@/components/shirtHero"
import ShirtFaq from "@/components/shirtfaq"
import Footer from "@/components/Footer"

export default function Contact() {
  return (
    <>
        <Navbar />
        <PageHero />
        <ShirtsIntro />
        <TailorProcess />
        <Shirtboxes />
        <ShirtHero />
        <ShirtFaq />
        <Footer />
    </>
  )
}