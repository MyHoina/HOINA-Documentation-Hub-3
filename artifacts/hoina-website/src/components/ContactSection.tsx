import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our programs or want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:info@hoinacharityfoundation.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email Us</p>
                    <p className="text-muted-foreground">info@hoinacharityfoundation.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Call / WhatsApp</p>
                    <p className="text-muted-foreground">09136989232</p>
                    <p className="text-muted-foreground">08080061442</p>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?q=Jimeta+Adamawa+State+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Visit Our Office</p>
                    <p className="text-muted-foreground leading-relaxed">
                      A.U. Usman & Associate, Block 4,<br />
                      Opp. Bekaji Central Mosque,<br />
                      Jimeta, Adamawa State, Nigeria
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input placeholder="Your name" className="h-12 bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="Your email address" className="h-12 bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[120px] resize-none bg-secondary/50" 
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg mt-2">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
