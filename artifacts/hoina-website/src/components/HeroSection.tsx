import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/IMG-20260617-WA0044_1781726983329.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="HOINA Charity Foundation Impact in Adamawa State"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 font-semibold text-sm mb-6 backdrop-blur-sm shadow-sm">
              Youth-Led Humanitarian Organization
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
              Justice. Education. <span className="text-accent">Hope.</span>
              <span className="block text-2xl md:text-4xl font-bold mt-2 text-white/90">
                For Every Child in Adamawa State
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-sm font-medium"
          >
            A sustainable development for better tomorrow. We fight for children's education rights and provide free legal aid for vulnerable families.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto"
              onClick={() => scrollToSection("#support")}
            >
              Get Support Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold rounded-full px-8 py-6 text-lg backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto"
              onClick={() => scrollToSection("#programs")}
            >
              Our Programs
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
