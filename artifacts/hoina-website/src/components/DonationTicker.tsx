import { useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const donations = [
  { name: "Fatima A.", amount: "₦10,000", item: "School Uniforms" },
  { name: "Ibrahim K.", amount: "₦25,000", item: "Legal Aid Fund" },
  { name: "Maryam O.", amount: "₦5,000", item: "Textbooks" },
  { name: "Anonymous", amount: "₦50,000", item: "Child Protection" },
  { name: "Hauwa B.", amount: "₦15,000", item: "Exercise Books" },
  { name: "Abdullahi M.", amount: "₦8,000", item: "School Feeding" },
  { name: "Grace T.", amount: "₦20,000", item: "GBV Response" },
  { name: "Yusuf D.", amount: "₦12,000", item: "Humanitarian Relief" },
  { name: "Aisha N.", amount: "₦30,000", item: "Education Fund" },
  { name: "Bello S.", amount: "₦7,500", item: "Uniforms for Girls" },
  { name: "Falmata U.", amount: "₦40,000", item: "Legal Filing Fees" },
  { name: "Anonymous", amount: "₦100,000", item: "General Support" },
];

export function DonationTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.6;

    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handlePause = () => cancelAnimationFrame(animationId);
    const handleResume = () => { animationId = requestAnimationFrame(animate); };
    track.addEventListener("mouseenter", handlePause);
    track.addEventListener("mouseleave", handleResume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", handlePause);
      track.removeEventListener("mouseleave", handleResume);
    };
  }, []);

  const items = [...donations, ...donations];

  return (
    <div
      className="bg-accent text-white py-2 overflow-hidden relative z-50"
      aria-label="Recent donations ticker"
      data-testid="donation-ticker"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-accent to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-accent to-transparent z-10 pointer-events-none" />

      <div className="flex items-center whitespace-nowrap" ref={trackRef}>
        {items.map((d, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-6 text-sm font-semibold"
            data-testid={`ticker-item-${i}`}
          >
            <Heart size={13} className="fill-white/70 text-white/70 flex-shrink-0" />
            <span className="text-white/80 font-normal">{d.name} just donated</span>
            <span className="font-extrabold">{d.amount}</span>
            <span className="text-white/70 font-normal">for {d.item}</span>
            <span className="ml-4 text-white/30">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
