import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
  SiTiktok,
  SiWhatsapp,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
  {
    Icon: SiFacebook,
    label: "Facebook",
    handle: "@hoinacharityfoundation",
    url: "https://www.facebook.com/hoinacharityfoundation",
    color: "bg-blue-600",
  },
  {
    Icon: SiInstagram,
    label: "Instagram",
    handle: "@hoinacharityfoundation",
    url: "https://www.instagram.com/hoinacharityfoundation",
    color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400",
  },
  {
    Icon: SiX,
    label: "X (Twitter)",
    handle: "@hoinacharityfdn",
    url: "https://www.x.com/hoinacharityfdn",
    color: "bg-black",
  },
  {
    Icon: SiYoutube,
    label: "YouTube",
    handle: "@hoinacharityfoundation",
    url: "https://www.youtube.com/@hoinacharityfoundation",
    color: "bg-red-600",
  },
  {
    Icon: SiTiktok,
    label: "TikTok",
    handle: "@hoinacharityfoundation",
    url: "https://www.tiktok.com/@hoinacharityfoundation",
    color: "bg-black",
  },
  {
    Icon: SiWhatsapp,
    label: "WhatsApp",
    handle: "+234 913 698 9232",
    url: "https://wa.me/2349136989232",
    color: "bg-[#25D366]",
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Contact Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our programs or want to partner with us? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* Left: Contact Info + Socials */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct contact card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-7 rounded-2xl border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>

              <div className="space-y-5">
                <a
                  href="mailto:info@hoinacharityfoundation.com"
                  data-testid="link-contact-email"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">Email Address</p>
                    <p className="text-muted-foreground text-sm break-all">info@hoinacharityfoundation.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0 text-[#25D366]">
                    <SiWhatsapp size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">WhatsApp / Phone</p>
                    <a href="https://wa.me/2349136989232" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-[#25D366] transition-colors block">
                      +234 913 698 9232
                    </a>
                    <a href="tel:08080061442" className="text-muted-foreground text-sm hover:text-primary transition-colors block">
                      +234 808 006 1442
                    </a>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Bekaji+Central+Mosque+Jimeta+Adamawa+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-address"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">Office Address</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A.U. Usman &amp; Associate, Block 4,<br />
                      Opp. Bekaji Central Mosque,<br />
                      Jimeta, Adamawa State, Nigeria
                    </p>
                    <p className="text-primary text-xs font-semibold mt-1">View on Google Maps</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Social Media Handles card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-7 rounded-2xl border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold mb-5 text-foreground">Follow &amp; Connect</h3>
              <div className="space-y-3">
                {socials.map(({ Icon, label, handle, url, color }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-social-${label.toLowerCase().replace(/[^a-z]/g, "")}`}
                    className="flex items-center gap-3 group hover:bg-secondary/50 rounded-xl p-2 -mx-2 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 ${color} shadow-sm`}>
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-xs leading-none mb-0.5">{label}</p>
                      <p className="text-muted-foreground text-xs group-hover:text-primary transition-colors truncate">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white p-8 rounded-2xl border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-2 text-foreground">Send a Message</h3>
            <p className="text-muted-foreground text-sm mb-6">We typically respond within 24–48 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <CheckCircle size={56} className="text-emerald-500" />
                <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">Send Another</Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input placeholder="Your full name" className="h-11 bg-secondary/40" required data-testid="input-contact-name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="+234 ..." className="h-11 bg-secondary/40" data-testid="input-contact-phone" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input type="email" placeholder="your@email.com" className="h-11 bg-secondary/40" data-testid="input-contact-email" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="How can we help?" className="h-11 bg-secondary/40" data-testid="input-contact-subject" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry or how you'd like to get involved..."
                    className="min-h-[130px] resize-none bg-secondary/40"
                    required
                    data-testid="textarea-contact-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-base shadow-lg hover:shadow-xl transition-all mt-2"
                  data-testid="button-contact-submit"
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
