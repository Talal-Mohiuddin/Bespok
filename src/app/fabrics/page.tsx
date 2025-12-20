import Navbar from "@/components/PageNavbar"
import PageHero from "@/components/PageHero"
import FabricsSection from "@/components/fabrics1";
import FabricsSection2 from "@/components/fabrics2";
import FabricTypes from "@/components/fabricTypes";
import SectionDivider from "@/components/whiteSection";
import Footer from "@/components/Footer";
export default function Contact() {
  return (
    <>
        <Navbar />
        <PageHero />
        <FabricsSection />
        <FabricsSection2 />
        <SectionDivider />
        <FabricTypes />
        <SectionDivider />
        <SectionDivider />
        <Footer />
    </>
  )
}