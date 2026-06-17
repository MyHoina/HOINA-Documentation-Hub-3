import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const partners = [
  {
    name: "UN Women Nigeria",
    abbr: "UN Women",
    description: "United Nations Entity for Gender Equality and Women's Empowerment",
    color: "bg-blue-700",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    bgLight: "bg-blue-50",
  },
  {
    name: "Disability Working Group Nigeria",
    abbr: "DWG Nigeria",
    description: "Advocating for disability-inclusive societies across Nigeria",
    color: "bg-indigo-700",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
    bgLight: "bg-indigo-50",
  },
  {
    name: "CASFOD",
    abbr: "CASFOD",
    description: "Centre for Agriculture, Food and Development",
    color: "bg-emerald-700",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    bgLight: "bg-emerald-50",
  },
  {
    name: "Adamawa State Universal Basic Education Board",
    abbr: "SUBEB Adamawa",
    description: "Universal Basic Education Commission — Adamawa State",
    color: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary/20",
    bgLight: "bg-primary/5",
  },
  {
    name: "Hahatana Empowerment Initiative",
    abbr: "Hahatana",
    description: "Community empowerment and social inclusion across Adamawa",
    color: "bg-rose-700",
    textColor: "text-rose-700",
    borderColor: "border-rose-200",
    bgLight: "bg-rose-50",
  },
  {
    name: "Save the Children Nigeria",
    abbr: "Save the Children",
    description: "Global child rights and humanitarian organisation",
    color: "bg-red-600",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    bgLight: "bg-red-50",
  },
  {
    name: "Adamawa People with Disabilities & Vulnerable Support Initiative",
    abbr: "APDVSI",
    description: "Inclusion and support for persons with disabilities in Adamawa",
    color: "bg-teal-700",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
    bgLight: "bg-teal-50",
  },
  {
    name: "Corporate Affairs Commission",
    abbr: "CAC Nigeria",
    description: "Registered Non-Profit — CAC/IT/748392",
    color: "bg-gray-700",
    textColor: "text-gray-700",
    borderColor: "border-gray-200",
    bgLight: "bg-gray-50",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/3 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent/5 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <Handshake size={14} />
            Our Partners &amp; Affiliates
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Stronger <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            HOINA works alongside leading local and international organizations to amplify our reach and deepen our impact across Adamawa State and beyond.
          </p>
        </motion.div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {partners.map((p, i) => (
            <motion.div
              key={p.abbr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-testid={`card-partner-${i}`}
              className={`group flex flex-col items-center text-center p-5 rounded-2xl border ${p.borderColor} ${p.bgLight} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Abbreviation badge */}
              <div className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center text-white font-extrabold text-xs text-center leading-tight mb-3 shadow-md px-1`}>
                {p.abbr.split(" ").slice(0, 2).join("\n")}
              </div>
              <h4 className={`font-bold text-xs ${p.textColor} mb-1 leading-snug`}>{p.abbr}</h4>
              <p className="text-muted-foreground text-[11px] leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-out banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-r from-primary to-primary/80 px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="text-center md:text-left">
            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Become a Partner</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              Partner with HOINA to Build a Better Adamawa
            </h3>
            <p className="text-white/75 text-sm max-w-xl">
              Whether you are an NGO, government body, school, or business — we welcome collaborations that align with our mission of justice, education, and resilience.
            </p>
          </div>
          <a
            href="mailto:info@hoinacharityfoundation.com?subject=Partnership Inquiry"
            data-testid="link-partner-cta"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-colors shadow-lg whitespace-nowrap"
          >
            <Handshake size={18} />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
