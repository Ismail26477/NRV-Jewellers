import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto bg-luxury-black relative shadow-2xl">
      <Header />
      <HeroSlider />
      <ScrollReveal><AboutSection /></ScrollReveal>
      <CollectionSection />
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><GallerySection /></ScrollReveal>
      <ScrollReveal><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><LocationSection /></ScrollReveal>
      <ScrollReveal><WhatsAppCTA /></ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
