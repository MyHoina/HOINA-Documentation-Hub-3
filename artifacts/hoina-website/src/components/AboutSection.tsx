import { motion } from "framer-motion";
import founderImg from "@/assets/images/about-founder.png";
import { BadgeCheck, Users, Scale, Globe } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Youth-Led" },
    { icon: BadgeCheck, label: "Community-Driven" },
    { icon: Scale, label: "Rights-Based" },
    { icon: Globe, label: "SDG-Aligned" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img 
                src={founderImg} 
                alt="Halima Usman, Founder of HOINA Charity Foundation" 
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                <p className="text-white font-bold text-xl">Halima Usman, BSc Law</p>
                <p className="text-white/80 text-sm font-medium">Founder & Executive Director</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Not as an institution, <br/><span className="text-primary">but as a promise.</span>
            </h2>
            
            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                Halima Usman grew up watching her community fall behind — children dropping out of school, families unable to access legal help, and voices going unheard simply because no one stood beside them.
              </p>
              <p className="leading-relaxed">
                As she pursued her law degree, she saw the same pattern again and again: the poor and the vulnerable denied fair treatment. So she built Hoina — not as an institution, but as a promise.
              </p>
              <p className="leading-relaxed font-semibold text-foreground/90 border-l-4 border-accent pl-4 italic">
                "A promise that no child in Adamawa would lose their future to poverty, and no family would face a courtroom alone."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border mt-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center justify-center text-center gap-2 p-3 rounded-xl bg-white shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={20} />
                    </div>
                    <span className="font-semibold text-xs text-foreground">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
