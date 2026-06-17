import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startValue = 0;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        const percentage = Math.min(progress / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));
        
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsSection() {
  const stats = [
    {
      value: 2000,
      suffix: "+",
      label: "Students Back to School",
      subtext: "Provided with uniforms, learning materials, and a primary education feeding allowance — prioritizing young girls",
    },
    {
      value: 200,
      suffix: "+",
      label: "Legal Cases Won",
      subtext: "Child abuse, child protection, and vulnerable family support cases represented free of charge in court",
    },
    {
      value: 6,
      suffix: "+",
      label: "Years of Impact",
      subtext: "Relentless dedication to grassroots justice and sustainable community development",
    },
    {
      value: 50,
      suffix: "+",
      label: "Partner Organizations",
      subtext: "Working alongside local and international allies to maximize our reach",
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-primary-foreground/80 text-lg">Every number represents a life changed, a right defended, and a future secured.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-accent mb-4 tracking-tighter">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
