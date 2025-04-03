import { useEffect, useState } from "react";
import CosmicAnimation from "@/components/CosmicAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121628] text-white overflow-x-hidden">
      {/* Cosmic Loader */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-[#121628] flex justify-center items-center z-50 transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-8 rounded-full bg-[#33CCFF] opacity-20 animate-pulse"></div>
          <div className="absolute inset-16 rounded-full border-4 border-white opacity-40" style={{ animation: 'spin 10s linear infinite' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Science Circus</h1>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <CosmicAnimation />
      </div>

      {/* Content */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <SponsorsSection />
      <TeamSection />
      <ContactSection />
      <Footer />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 invisible"
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
