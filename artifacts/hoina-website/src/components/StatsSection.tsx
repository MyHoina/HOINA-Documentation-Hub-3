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
        if (progress < duration) requestAnimationFrame(animate);
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

const stats = [
  {
    value: 1100,
    suffix: "+",
    label: "Children Back to School",
    subtext: "Provided with uniforms, learning materials, and educational feeding allowances — with a priority focus on girls.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    value: 18,
    suffix: "+",
    label: "Communities Reached",
    subtext: "Grassroots outreach across Adamawa State — sensitization, humanitarian response, and peacebuilding in action.",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    value: 6,
    suffix: "+",
    label: "Years of Dedication",
    subtext: "Relentless commitment to sustainable development and community empowerment since our founding.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    value: 50,
    suffix: "+",
    label: "Partner Organizations",
    subtext: "Collaborating with local and international allies — including UN Women Nigeria — to multiply our reach.",
    color: "from-purple-500/20 to-purple-600/10",
  },
];

export function StatsSection() {
  return (
    <section id="impact" className="py-24 md:py-32 bg-[#0a1e3d] text-white relative overflow-hidden">
      {/* Architectural background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 60M0 0L60 60" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Our Impact
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Lives Changed.<br />
              <span className="text-accent italic">Communities Transformed.</span>
            </h2>
            <p className="text-white/60 text-lg">
              Every number is a name. Every statistic is a story that did not end in silence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/25 transition-all duration-300 h-full flex flex-col">
                <div
                  className="text-5xl md:text-6xl font-black text-accent mb-3 tracking-tighter"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{stat.label}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-grow">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
