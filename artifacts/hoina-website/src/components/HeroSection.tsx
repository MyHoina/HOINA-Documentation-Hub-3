import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/IMG-20260617-WA0044_1781726983329.jpg";
import { Heart, Users } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="HOINA Charity Foundation Impact in Adamawa State"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic dual-gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3d]/95 via-[#0a1e3d]/75 to-[#0a1e3d]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-accent to-transparent z-10 opacity-60" />

      <div className="container mx-auto px-6 md:px-10 relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">

          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/20 border border-accent/40 font-semibold text-sm text-white mb-8 backdrop-blur-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Youth-Led Humanitarian Organization · Adamawa State
            </span>
          </motion.div>

          {/* Hero headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-3 drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Education.{" "}
              <span className="italic text-accent">Dignity.</span>
            </h1>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Hope.
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            <div className="w-16 h-0.5 bg-accent mb-6" />
            <p className="text-lg md:text-2xl text-white/85 mb-10 max-w-xl leading-relaxed font-light">
              We champion every child's right to education and stand beside vulnerable families across Adamawa State — because a better tomorrow starts today.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-9 py-6 text-base shadow-xl shadow-accent/30 hover:-translate-y-1 transition-all w-full sm:w-auto gap-2"
              onClick={() => scrollToSection("#support")}
            >
              <Heart size={18} fill="white" /> Get Support Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold rounded-full px-9 py-6 text-base backdrop-blur-sm hover:-translate-y-1 transition-all w-full sm:w-auto gap-2"
              onClick={() => scrollToSection("#programs")}
            >
              <Users size={18} /> Our Programs
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-6"
          >
            {[
              { label: "1,100+ Children back in school" },
              { label: "6+ Years of grassroots impact" },
              { label: "CAC Registered Non-Profit" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
