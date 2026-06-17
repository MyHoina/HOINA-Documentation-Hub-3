import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import img1 from "@assets/IMG-20260617-WA0044_1781726983329.jpg";
import img2 from "@assets/IMG-20260617-WA0057_1781726983307.jpg";
import img3 from "@assets/IMG-20260617-WA0063_1781726983163.jpg";
import img4 from "@assets/IMG-20260617-WA0037_1781726983351.jpg";
import img5 from "@assets/IMG-20260617-WA0047_1781726983266.jpg";
import img6 from "@assets/IMG-20260617-WA0067_1781726983219.jpg";
import img7 from "@assets/IMG-20260617-WA0050_1781726983285.jpg";
import img8 from "@assets/IMG-20260617-WA0065_1781726983244.jpg";

const photos = [
  {
    src: img1,
    alt: "HOINA advocates gather with 'Every Child, Every Right' signs at a community event in Adamawa State",
    caption: "Community Advocacy March",
    tag: "Child Rights",
    span: "col-span-2 row-span-2",
  },
  {
    src: img2,
    alt: "HOINA team at Bachure Primary School Yola North LGA education outreach campaign",
    caption: "Bachure Primary School, Yola North",
    tag: "Education",
    span: "",
  },
  {
    src: img3,
    alt: "HOINA at the International Day for Persons with Disabilities with UN Women Nigeria and DWG",
    caption: "UN Women – International Day for Persons with Disabilities",
    tag: "Inclusion",
    span: "",
  },
  {
    src: img4,
    alt: "HOINA team at 16 Days of Activism against GBV at Bachure Primary School, Yola",
    caption: "16 Days of Activism – End Digital Violence",
    tag: "GBV Prevention",
    span: "",
  },
  {
    src: img5,
    alt: "Adamawa People with Disabilities outdoor inclusion event supported by HOINA",
    caption: "Disability Inclusion – Adamawa State",
    tag: "Humanitarian",
    span: "col-span-2",
  },
  {
    src: img6,
    alt: "Community engagement and sensitization event hosted by HOINA in Adamawa State",
    caption: "Community Sensitization Session",
    tag: "Peacebuilding",
    span: "",
  },
  {
    src: img7,
    alt: "HOINA team supporting wheelchair users at an inclusion event in Yola",
    caption: "On the Ground – Wheelchair Support Event",
    tag: "Humanitarian",
    span: "",
  },
  {
    src: img8,
    alt: "HOINA Charity Foundation World Child's Day awareness campaign",
    caption: "World Child's Day – Every Child Matters",
    tag: "Child Rights",
    span: "",
  },
];

const tagColors: Record<string, string> = {
  "Child Rights": "bg-blue-600",
  "Education": "bg-indigo-600",
  "Inclusion": "bg-purple-600",
  "GBV Prevention": "bg-rose-600",
  "Humanitarian": "bg-amber-600",
  "Peacebuilding": "bg-emerald-600",
};

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Subtle decorative bg */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            In the Field
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real Work. <span className="text-primary">Real Impact.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every photo here is a moment of action — a school visited, a family supported, a right defended. This is HOINA on the ground in Adamawa State.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[200px] gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              data-testid={`gallery-photo-${i}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 ${photo.span}`}
              onClick={() => open(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Tag */}
              <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[11px] font-bold tracking-wide shadow ${tagColors[photo.tag] ?? "bg-primary"}`}>
                {photo.tag}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-end justify-between">
                  <p className="text-white text-sm font-semibold leading-snug max-w-[80%]">{photo.caption}</p>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ml-2">
                    <ZoomIn size={17} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-6"
        >
          Click any photo to enlarge &bull; Use arrow keys or swipe to navigate
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={close}
            data-testid="lightbox-overlay"
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
              onClick={close}
              aria-label="Close lightbox"
              data-testid="button-lightbox-close"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-3 md:left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col items-center max-h-[85vh] max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
                <div className="mt-4 text-center px-4">
                  <span className={`inline-block px-3 py-0.5 rounded-full text-white text-xs font-bold mb-2 ${tagColors[photos[lightboxIndex].tag] ?? "bg-primary"}`}>
                    {photos[lightboxIndex].tag}
                  </span>
                  <p className="text-white font-semibold text-base md:text-lg">
                    {photos[lightboxIndex].caption}
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    {lightboxIndex + 1} / {photos.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              className="absolute right-3 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
              data-testid="button-lightbox-next"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
