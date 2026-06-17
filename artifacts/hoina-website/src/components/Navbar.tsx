import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import hoinaLogo from "@assets/Hoi_0_1781723886651.jpg";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Impact", href: "#impact" },
    { name: "Donate", href: "#donate" },
    { name: "Get Support", href: "#support" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/97 backdrop-blur-md shadow-md py-2" : "bg-white py-2"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14">

        {/* Brand — logo + compact text */}
        <button
          className="flex items-center gap-2 focus:outline-none flex-shrink-0"
          onClick={() => scrollToSection("#home")}
          aria-label="HOINA Charity Foundation — go to top"
          data-testid="link-navbar-brand"
        >
          <img
            src={hoinaLogo}
            alt="HOINA Logo"
            className="w-10 h-10 rounded-full object-cover shadow-sm flex-shrink-0"
          />
          {/* Full name only on large screens */}
          <span className="hidden lg:block font-bold text-primary text-sm leading-tight">
            HOINA Charity &amp;<br />Support Foundation
          </span>
          {/* Short name on md */}
          <span className="hidden md:block lg:hidden font-bold text-primary text-sm leading-tight">
            HOINA
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <ul className="flex items-center gap-0.5 lg:gap-1 font-medium text-[13px] text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="px-2 lg:px-3 py-1.5 rounded-lg hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none whitespace-nowrap"
                  data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <Button
            className="ml-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-4 py-1.5 text-sm h-9 shadow-md hover:shadow-lg transition-all"
            onClick={() => scrollToSection("#donate")}
            data-testid="button-nav-donate"
          >
            Donate Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-xl py-4 px-5 flex flex-col gap-1 z-50">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="w-full text-left py-3 px-3 font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors border-b border-border/30 last:border-0"
              data-testid={`link-mobile-${link.name.toLowerCase().replace(" ", "-")}`}
            >
              {link.name}
            </button>
          ))}
          <Button
            className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full w-full mt-3 h-11"
            onClick={() => scrollToSection("#donate")}
          >
            Donate Now
          </Button>
        </div>
      )}
    </nav>
  );
}
