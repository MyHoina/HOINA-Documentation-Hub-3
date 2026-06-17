import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "My daughter was going to drop out after my husband left. HOINA gave her school supplies, a uniform, and a future. She reads to me every night now.",
      author: "Fatima A.",
      role: "Mother of beneficiary",
      location: "Jimeta"
    },
    {
      quote: "I didn't know I had rights. HOINA's legal team stood in court for my son when I had nothing. We won.",
      author: "Ibrahim K.",
      role: "Father",
      location: "Yola"
    },
    {
      quote: "They came to our village and told us violence against women is not our culture. Now we have a peace club.",
      author: "Maryam O.",
      role: "Community volunteer",
      location: "Adamawa"
    },
    {
      quote: "My school got sanitation materials and hygiene training. We learned how to stay safe.",
      author: "Aminu D.",
      role: "Student",
      location: "Primary School"
    },
    {
      quote: "HOINA's team sat with me and my child for hours before the court hearing. I didn't feel alone.",
      author: "Grace T.",
      role: "Survivor",
      location: "Adamawa"
    },
    {
      quote: "They gave my daughter a full school bag — books, pens, everything. First time she smiled that year.",
      author: "Hauwa B.",
      role: "Widow",
      location: "Jimeta"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              Voices of Hope
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Real Stories from <span className="text-primary">Adamawa</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border/50 bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="w-10 h-10 text-accent/40 mb-6" />
                      <p className="text-foreground/80 text-lg leading-relaxed flex-grow italic mb-8 font-medium">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                          {t.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{t.author}</p>
                          <p className="text-sm text-muted-foreground">{t.role}, {t.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-white border-border hover:bg-primary hover:text-white" />
              <CarouselNext className="-right-12 bg-white border-border hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
