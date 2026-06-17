import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import hoinaLogo from "@assets/Hoi_0_1781723886651.jpg";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Our Impact", href: "#impact" },
    { name: "Donate", href: "#donate" },
    { name: "Get Support", href: "#support" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => scrollToSection("#home")}
        >
          <img
            src={hoinaLogo}
            alt="HOINA Charity Foundation Logo"
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
          <div className="hidden sm:block font-bold text-primary text-lg leading-tight tracking-tight">
            HOINA Charity &<br />Support Foundation
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 font-medium text-sm text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-primary transition-colors focus:outline-none"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <Button 
            className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            onClick={() => scrollToSection("#donate")}
          >
            Donate Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4 font-medium text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left py-2 hover:text-primary transition-colors border-b border-border/50"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <Button 
            className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full w-full mt-2"
            onClick={() => scrollToSection("#donate")}
          >
            Donate Now
          </Button>
        </div>
      )}
    </nav>
  );
}
