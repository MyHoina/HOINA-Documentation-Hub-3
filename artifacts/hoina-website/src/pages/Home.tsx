import { SiWhatsapp } from "react-icons/si";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DonateSection } from "@/components/DonateSection";
import { IntakeForm } from "@/components/IntakeForm";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <StatsSection />
        <TestimonialsSection />
        <DonateSection />
        <IntakeForm />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating Elements */}
      <ChatBot />
      
      <a 
        href="https://wa.me/2349136989232" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 hover:bg-[#20bd5a] transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Contact on WhatsApp"
      >
        <SiWhatsapp size={28} />
      </a>
    </div>
  );
}
