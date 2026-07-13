import { motion } from "framer-motion";
import programsBg from "@assets/IMG-20260617-WA0063_1781726983163.jpg";
import imgChildRights from "@assets/IMG-20260617-WA0065_1781726983244.jpg";
import imgGBV from "@assets/IMG-20260617-WA0037_1781726983351.jpg";
import imgPeacebuilding from "@assets/IMG-20260617-WA0067_1781726983219.jpg";
import imgHumanitarian from "@assets/IMG-20260617-WA0047_1781726983266.jpg";
import imgEducation from "@assets/IMG-20260617-WA0057_1781726983307.jpg";
import { ShieldAlert, HeartHandshake, Users, Droplets, Leaf, Scale } from "lucide-react";

const imgHygiene = "/hygiene-program.png";

const programs = [
  {
    id: 1,
    title: "Child Rights & Protection",
    description: "Advocacy, safe education, and campaigns against child labour and early marriage. Every child deserves a childhood.",
    icon: ShieldAlert,
    color: "bg-blue-100 text-blue-700",
    borderColor: "group-hover:border-blue-400",
    photo: imgChildRights,
    photoAlt: "HOINA World Child's Day awareness campaign",
  },
  {
    id: 2,
    title: "GBV Prevention & Response",
    description: "Community sensitization, safe spaces, and survivor referral pathways. We stand firmly against all forms of gender-based violence.",
    icon: HeartHandshake,
    color: "bg-rose-100 text-rose-700",
    borderColor: "group-hover:border-rose-400",
    photo: imgGBV,
    photoAlt: "HOINA team at 16 Days of Activism campaign at Bachure Primary School Yola",
  },
  {
    id: 3,
    title: "Peacebuilding & Conflict Resolution",
    description: "Community dialogues, peace clubs, and youth peace engagement to foster cohesion across Adamawa State.",
    icon: Users,
    color: "bg-emerald-100 text-emerald-700",
    borderColor: "group-hover:border-emerald-400",
    photo: imgPeacebuilding,
    photoAlt: "HOINA community engagement event in Adamawa State",
  },
  {
    id: 4,
    title: "Humanitarian Response & Resilience",
    description: "Emergency relief, disaster preparedness, and IDP support. We reach the most vulnerable when they need us most.",
    icon: Droplets,
    color: "bg-amber-100 text-amber-700",
    borderColor: "group-hover:border-amber-400",
    photo: imgHumanitarian,
    photoAlt: "HOINA Adamawa People with Disabilities support event",
  },
  {
    id: 5,
    title: "Environmental Hygiene & Public Health",
    description: "Hygiene and sanitation campaigns in flood-prone areas. Clean water, safe spaces, and healthy communities.",
    icon: Leaf,
    color: "bg-teal-100 text-teal-700",
    borderColor: "group-hover:border-teal-400",
    photo: imgHygiene,
    photoAlt: "Community hygiene and sanitation campaign in Adamawa State Nigeria",
  },
  {
    id: 6,
    title: "Education & Community Advocacy",
    description: "School materials distribution, rights awareness campaigns, and family empowerment — ensuring every child has the tools to learn and every family knows their rights.",
    icon: Scale,
    color: "bg-indigo-100 text-indigo-700",
    borderColor: "group-hover:border-indigo-400",
    photo: imgEducation,
    photoAlt: "HOINA team at Bachure Primary School Yola North for education outreach",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              What We Do
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Sectors of <span className="text-accent">Intervention</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We tackle the root causes of inequality in Adamawa State through targeted, community-driven action across six core areas.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                variants={itemVariants}
                data-testid={`card-program-${program.id}`}
              >
                <div className={`group h-full border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white ${program.borderColor}`}>
                  {/* Photo header */}
                  <div className="relative h-44 overflow-hidden bg-muted">
                    {program.photo ? (
                      <img
                        src={program.photo}
                        alt={program.photoAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                        <Icon size={48} className="text-teal-400 opacity-50" />
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Icon badge */}
                    <div className={`absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${program.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Full-width community photo banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 rounded-3xl overflow-hidden relative shadow-2xl h-[420px]"
        >
          <img
            src={programsBg}
            alt="HOINA team at the International Day for Persons with Disabilities event with UN Women Nigeria"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-2xl">
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">HOINA in Action</p>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Partnering for Inclusion and Dignity Across Adamawa State
              </h3>
              <p className="text-white/85 text-lg leading-relaxed">
                From disability inclusion events with UN Women Nigeria to child rights campaigns at primary schools — HOINA shows up, every time.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
