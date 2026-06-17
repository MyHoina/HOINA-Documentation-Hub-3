import { motion } from "framer-motion";
import programsBg from "@/assets/images/programs-bg.png";
import { ShieldAlert, HeartHandshake, Users, Droplets, BookOpen, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "Child Rights & Protection",
      description: "Advocacy, safe education, and campaigns against child labour and early marriage.",
      icon: ShieldAlert,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      title: "GBV Prevention & Response",
      description: "Community sensitization, safe spaces, and survivor referral pathways.",
      icon: HeartHandshake,
      color: "bg-rose-100 text-rose-700",
    },
    {
      id: 3,
      title: "Peacebuilding & Conflict Resolution",
      description: "Community dialogues, peace clubs, and youth peace engagement.",
      icon: Users,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 4,
      title: "Humanitarian Response & Resilience",
      description: "Emergency relief, disaster preparedness, and IDP support.",
      icon: Droplets,
      color: "bg-amber-100 text-amber-700",
    },
    {
      id: 5,
      title: "Environmental Hygiene & Public Health",
      description: "Hygiene campaigns and flood-prone area sanitation.",
      icon: Droplets,
      color: "bg-teal-100 text-teal-700",
    },
    {
      id: 6,
      title: "Education & Legal Aid",
      description: "Legal representation for vulnerable families and school materials distribution.",
      icon: Scale,
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Sectors of <span className="text-accent">Intervention</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We tackle the root causes of inequality in Adamawa State through targeted, community-driven action across six core pillars.
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
              <motion.div key={program.id} variants={itemVariants}>
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white/50 backdrop-blur-sm">
                  <div className="h-2 w-full bg-border group-hover:bg-primary transition-colors" />
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${program.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 rounded-3xl overflow-hidden relative shadow-2xl h-[400px]"
        >
          <img 
            src={programsBg} 
            alt="Community education session" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 flex items-center">
            <div className="p-8 md:p-16 max-w-2xl">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Empowering Communities Through Knowledge</h3>
              <p className="text-white/90 text-lg">We believe that lasting change starts when communities understand their rights and have the tools to defend them.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
