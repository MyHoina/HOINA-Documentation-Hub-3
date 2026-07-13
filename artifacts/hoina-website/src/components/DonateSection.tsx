import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Copy, CheckCircle2, ChevronDown, Landmark, Smartphone, CreditCard, Gift, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DonateSection() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1019283746";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
            <Heart size={32} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Your Support Changes Everything</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            100% of public donations directly fund instructional materials and community programs. Together, we can ensure every child learns and every vulnerable family is supported.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-12 py-8 text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                Donate Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white">
              <div className="bg-primary p-6 text-center text-primary-foreground relative">
                <Heart className="absolute top-4 right-4 text-primary-foreground/20" size={64} />
                <DialogTitle className="text-2xl font-bold mb-2">Choose How to Give</DialogTitle>
                <DialogDescription className="text-primary-foreground/80">
                  Every contribution brings hope to a family in Adamawa State.
                </DialogDescription>
              </div>
              
              <Tabs defaultValue="cash" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-none bg-secondary/50 p-0 h-14">
                  <TabsTrigger value="cash" className="rounded-none data-[state=active]:bg-white h-full font-semibold text-base">
                    Cash / Money
                  </TabsTrigger>
                  <TabsTrigger value="material" className="rounded-none data-[state=active]:bg-white h-full font-semibold text-base">
                    In-Kind / Material
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="cash" className="p-6 focus-visible:outline-none">
                  <div className="space-y-4">
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-secondary/50 p-3 border-b border-border flex items-center gap-2 text-foreground font-semibold">
                        <Landmark size={18} className="text-primary" />
                        Bank Transfer (Recommended)
                      </div>
                      <div className="p-4 space-y-3 bg-white">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Bank Name:</span>
                          <span className="font-semibold">Zenith Bank</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Account Name:</span>
                          <span className="font-semibold text-right">HOINA Charity & Support Foundation</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-muted-foreground text-sm">Account Number:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg tracking-wider text-primary">{accountNumber}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/5"
                              onClick={handleCopy}
                            >
                              {copied ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 items-center text-muted-foreground hover:text-foreground hover:border-primary/50">
                        <Smartphone size={24} className="text-primary" />
                        USSD
                      </Button>
                      <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 items-center text-muted-foreground hover:text-foreground hover:border-primary/50">
                        <CreditCard size={24} className="text-primary" />
                        PayPal
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="material" className="p-6 focus-visible:outline-none">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Gift size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Accepted Items</h4>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside pl-1">
                          <li>Books & Textbooks</li>
                          <li>Writing Materials</li>
                          <li>Exercise Books</li>
                          <li>School Uniforms</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                      <p className="text-sm text-foreground/80 flex items-center gap-2">
                        <Phone size={16} className="text-primary" />
                        Contact us via WhatsApp or visit our Jimeta office to arrange delivery.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          <p className="mt-8 text-white/60 text-sm">
            Unable to donate online? Contact us via the floating WhatsApp button, visit our Jimeta office, or follow us on social media to stay updated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
