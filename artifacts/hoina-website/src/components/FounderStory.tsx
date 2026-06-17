import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@assets/Founder,_Halima_Usman_4_1781726333364.jpg";
import communityImg from "@assets/IMG-20260617-WA0050_1781726983285.jpg";
import { Quote, Scale, Heart, BookOpen, Star, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: "easeOut" },
  }),
};

const milestones = [
  {
    icon: BookOpen,
    title: "The Awakening",
    text: "Growing up in Adamawa State, Halima witnessed firsthand what poverty does to a child's future — a neighbour's daughter pulled from school at nine, a widow left without any recourse after a land dispute, a boy beaten by his employer with no one to speak for him. These were not distant statistics. They were faces she knew.",
  },
  {
    icon: Scale,
    title: "The Education",
    text: "Driven by an unshakeable belief that the law should serve everyone — not just those who can afford it — Halima pursued a BSc in Law. Every lecture strengthened her resolve. She saw how rights written in ink remained invisible to the communities that needed them most, and she vowed that she would be the bridge between those words and those lives.",
  },
  {
    icon: Heart,
    title: "The Foundation",
    text: "HOINA Charity Foundation was born not from a boardroom or a grant proposal — it was born from a mother's tears, a child's empty schoolbag, and Halima's refusal to walk away. She brought together a small circle of passionate young people and went to work: knocking on school gates, sitting with families in crisis, standing in courtrooms where the vulnerable had never before had anyone in their corner.",
  },
  {
    icon: Star,
    title: "The Mission Today",
    text: "Today, HOINA has returned over 2,000 children to school and won more than 200 legal cases for families who had lost all hope. But for Halima, every number is a name. Every statistic is a story that did not end in silence. She continues to lead with the same fire that started it all — a young woman from Adamawa who simply decided that enough was enough.",
  },
];

export function FounderStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="founder-story"
      ref={sectionRef}
      className="py-24 md:py-36 bg-white relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            The Woman Behind the Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Meet <span className="text-primary">Halima Usman</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Founder of HOINA Charity & Support Foundation &mdash; attorney, advocate, and a daughter of Adamawa State who chose to fight.
          </p>
        </motion.div>

        {/* Hero portrait + opening quote */}
        <div className="flex flex-col lg:flex-row gap-14 items-center mb-24">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex-shrink-0"
          >
            <div className="relative">
              {/* Orange frame accent */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-accent/30 z-0" />
              {/* Blue dot accent */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-primary/10 z-0" />

              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src={founderImg}
                  alt="Halima Usman, Founder of HOINA Charity Foundation"
                  data-testid="img-founder-portrait"
                  className="w-full h-auto object-cover"
                />
                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent px-6 pt-10 pb-5">
                  <p className="text-white font-bold text-xl tracking-tight">Halima Usman</p>
                  <p className="text-white/80 text-sm font-medium">BSc Law &bull; Founder, HOINA Charity Foundation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Opening story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="w-full lg:w-7/12 space-y-7"
          >
            {/* Pull quote */}
            <div className="relative pl-6 border-l-4 border-accent">
              <Quote className="absolute -top-1 -left-3 w-5 h-5 text-accent/60 fill-accent/20" />
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed italic">
                "I did not build HOINA because I had all the answers. I built it because I could no longer sit with the questions — not while children were losing their futures and families were losing their dignity."
              </p>
              <p className="mt-3 text-sm font-bold text-accent uppercase tracking-widest">— Halima Usman, Founder</p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              There are people in this world who see injustice and turn away, and there are those who see it and cannot sleep. Halima Usman has not slept easily since childhood — not because life was unkind to her, but because she was paying attention. She was watching the children who would never return to class. She was listening to the mothers who had nowhere to turn. She was reading the laws that promised protection to people who had never once heard their own rights spoken aloud.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              She is young. She is from here — from the red earth and warm skies of Adamawa State. And that is precisely why what she has built means everything. Because HOINA is not a foreign idea parachuted in from afar. It is a daughter of this land, built by someone who loves it, who knows its pain, and who believes — with every fiber of her legal training and every ounce of her humanity — that it deserves better.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["BSc Law", "Youth-Led", "Community Advocate", "Child Rights Champion", "Legal Aid Pioneer"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey milestones */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
          >
            Her Journey to <span className="text-accent">HOINA</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  data-testid={`card-milestone-${i}`}
                  className="group relative bg-white rounded-2xl p-7 shadow-md border border-border/60 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Step number */}
                  <span className="absolute top-5 right-5 text-5xl font-black text-primary/5 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">{m.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Community photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-16 rounded-3xl overflow-hidden shadow-xl relative h-72 md:h-96"
        >
          <img
            src={communityImg}
            alt="HOINA team supporting community members at an inclusion event in Adamawa State"
            data-testid="img-community-event"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent flex items-end p-8 md:p-12">
            <div className="max-w-xl">
              <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">On the Ground</p>
              <p className="text-white text-lg md:text-2xl font-semibold leading-snug">
                HOINA doesn't just advocate from a distance — we sit beside the people we serve, in every room that matters.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl bg-primary overflow-hidden px-8 md:px-16 py-14 text-white text-center"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Quote className="w-10 h-10 mx-auto text-accent/70 fill-accent/20" />

            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              "Every child who stays in school because of HOINA is proof that one person's decision to act can change an entire generation's destiny. I am just one person. But so was everyone who ever changed anything."
            </p>

            <p className="text-white/70 font-bold uppercase tracking-widest text-sm">— Halima Usman, BSc Law &bull; Founder, HOINA Charity & Support Foundation</p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-support"
                data-testid="link-founder-get-support"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-bold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/30"
              >
                Apply for Support <ArrowRight size={18} />
              </a>
              <a
                href="#donate"
                data-testid="link-founder-donate"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-colors"
              >
                Support Her Mission
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
