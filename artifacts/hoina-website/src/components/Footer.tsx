import { SiFacebook, SiInstagram, SiX, SiYoutube, SiTiktok, SiWhatsapp } from "react-icons/si";
import hoinaLogo from "@assets/Hoi_0_1781723886651.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t-[6px] border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-full">
                <img
                  src={hoinaLogo}
                  alt="HOINA Charity Foundation Logo"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              <div className="font-bold text-xl leading-tight">
                HOINA Charity &<br />Support Foundation
              </div>
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              A youth-led humanitarian force in Adamawa State, championing children's education rights and standing with vulnerable families and communities.
            </p>
            <p className="text-accent font-semibold italic">
              "A sustainable development for better tomorrow"
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><button onClick={() => scrollToSection("#home")} className="hover:text-accent transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection("#about")} className="hover:text-accent transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("#programs")} className="hover:text-accent transition-colors">Our Programs</button></li>
              <li><button onClick={() => scrollToSection("#impact")} className="hover:text-accent transition-colors">Our Impact</button></li>
              <li><button onClick={() => scrollToSection("#donate")} className="hover:text-accent transition-colors">Donate</button></li>
              <li><button onClick={() => scrollToSection("#support")} className="hover:text-accent transition-colors">Get Support</button></li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Connect With Us</h4>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://www.facebook.com/hoinacharityfoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiFacebook />
              </a>
              <a href="https://www.instagram.com/hoinacharityfoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiInstagram />
              </a>
              <a href="https://www.x.com/hoinacharityfoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiX />
              </a>
              <a href="https://www.youtube.com/hoinacharityfoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiYoutube />
              </a>
              <a href="https://www.tiktok.com/hoinacharityfoundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <SiTiktok />
              </a>
            </div>

            <h4 className="font-bold text-sm mb-3 text-white/80">Share Our Mission</h4>
            <div className="flex gap-3">
              <button className="text-white/60 hover:text-white transition-colors" title="Share on Facebook"><SiFacebook size={20} /></button>
              <button className="text-white/60 hover:text-white transition-colors" title="Share on X"><SiX size={20} /></button>
              <button className="text-white/60 hover:text-white transition-colors" title="Share on WhatsApp"><SiWhatsapp size={20} /></button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} HOINA Charity & Support Foundation. All rights reserved.</p>
          <p>Registered Non-Profit Organization No. CAC/IT/748392</p>
        </div>
      </div>
    </footer>
  );
}
