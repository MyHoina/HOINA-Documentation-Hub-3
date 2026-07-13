import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function IntakeForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [supportType, setSupportType] = useState("");
  const [entityType, setEntityType] = useState("Individual");
  const [urgency, setUrgency] = useState("");
  const [explanation, setExplanation] = useState("");

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    setSupportType("");
    setEntityType("Individual");
    setUrgency("");
    setExplanation("");
  };

  return (
    <section id="support" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Request Support</h2>
          <p className="text-muted-foreground text-lg">
            Whether you need advocacy support, educational materials, or community intervention, we are here to help.
          </p>
        </div>

        <Card className="border-border shadow-xl rounded-2xl overflow-hidden bg-white">
          <div className="bg-secondary/50 px-6 py-4 border-b border-border flex justify-between items-center">
            <div className="text-sm font-medium text-muted-foreground">
              Step {step} of 4
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i <= step ? "bg-primary" : "bg-primary/20"}`}
                />
              ))}
            </div>
          </div>

          <CardContent className="p-0">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Submitted Successfully</h3>
                  <p className="text-muted-foreground mb-8">
                    Your request has been sent to our team. We'll contact you within 48 hours to discuss the next steps.
                  </p>
                  <Button onClick={resetForm} variant="outline">
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}
                  className="p-6 md:p-8 min-h-[400px] flex flex-col"
                >
                  <div className="flex-grow space-y-6">
                    {/* Step 1: Type of Support */}
                    {step === 1 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <h3 className="text-xl font-semibold mb-6">What kind of support do you need?</h3>
                        <div className="space-y-4">
                          <Label>Support Type</Label>
                          <Select value={supportType} onValueChange={setSupportType} required>
                            <SelectTrigger className="h-14 text-base">
                              <SelectValue placeholder="Select a support type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="advocacy">Advocacy & Awareness Support</SelectItem>
                              <SelectItem value="material">Material Support (School uniforms, books)</SelectItem>
                              <SelectItem value="financial">Financial Support (Educational allowances)</SelectItem>
                              <SelectItem value="other">Other / Community Intervention</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Personal Details */}
                    {step === 2 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <h3 className="text-xl font-semibold mb-6">Tell us about yourself</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" placeholder="Enter your full name" required className="h-12" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="e.g. 09136989232" required className="h-12" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address (Optional)</Label>
                            <Input id="email" type="email" placeholder="Enter your email" className="h-12" />
                          </div>
                          <div className="space-y-2">
                            <Label>Gender</Label>
                            <Select required>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border">
                          <Label>Are you applying as an individual or an organization?</Label>
                          <RadioGroup 
                            value={entityType} 
                            onValueChange={setEntityType}
                            className="flex flex-col md:flex-row gap-4"
                          >
                            <div className="flex items-center space-x-2 border border-border p-4 rounded-lg flex-1 hover:bg-secondary/20 cursor-pointer">
                              <RadioGroupItem value="Individual" id="individual" />
                              <Label htmlFor="individual" className="cursor-pointer w-full font-medium">Individual / Family</Label>
                            </div>
                            <div className="flex items-center space-x-2 border border-border p-4 rounded-lg flex-1 hover:bg-secondary/20 cursor-pointer">
                              <RadioGroupItem value="Organization" id="organization" />
                              <Label htmlFor="organization" className="cursor-pointer w-full font-medium">Organization / Community</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {entityType === "Organization" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-2">
                            <div className="space-y-2">
                              <Label htmlFor="orgName">Organization/Community Name</Label>
                              <Input id="orgName" required className="h-12" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="beneficiaries">Est. Number of Beneficiaries</Label>
                              <Input id="beneficiaries" type="number" required className="h-12" />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Step 3: Details */}
                    {step === 3 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <h3 className="text-xl font-semibold mb-6">Request Details</h3>
                        <div className="space-y-4">
                          <Label>How urgent is this request?</Label>
                          <Select value={urgency} onValueChange={setUrgency} required>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate / Emergency</SelectItem>
                              <SelectItem value="month">Within 1 Month</SelectItem>
                              <SelectItem value="ongoing">Ongoing Sensitization / Long-term</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="explanation">Please explain your situation or request</Label>
                            <span className="text-xs text-muted-foreground">{explanation.length}/500</span>
                          </div>
                          <Textarea 
                            id="explanation" 
                            placeholder="Provide any details that will help us understand your needs better..." 
                            className="min-h-[150px] resize-none"
                            value={explanation}
                            onChange={(e) => setExplanation(e.target.value.slice(0, 500))}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Summary */}
                    {step === 4 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                        <h3 className="text-xl font-semibold mb-6">Review your request</h3>
                        <div className="bg-secondary/30 rounded-xl p-6 space-y-4 border border-border">
                          <div className="grid grid-cols-2 gap-y-4 text-sm">
                            <div>
                              <p className="text-muted-foreground mb-1">Support Type</p>
                              <p className="font-semibold capitalize">{supportType || "Not specified"}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground mb-1">Urgency</p>
                              <p className="font-semibold capitalize">{urgency || "Not specified"}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground mb-1">Entity Type</p>
                              <p className="font-semibold">{entityType}</p>
                            </div>
                          </div>
                          {explanation && (
                            <div className="pt-4 border-t border-border/50">
                              <p className="text-muted-foreground mb-1 text-sm">Additional Details</p>
                              <p className="text-sm italic text-foreground/80">"{explanation}"</p>
                            </div>
                          )}
                        </div>
                        <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm flex gap-3">
                          <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                          <p>By submitting this form, you consent to HOINA Charity Foundation contacting you regarding your request. All information provided is kept strictly confidential.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Form Navigation Actions */}
                  <div className="pt-6 mt-6 border-t border-border flex justify-between">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                        <ArrowLeft size={16} /> Back
                      </Button>
                    ) : (
                      <div />
                    )}
                    
                    {step < 4 ? (
                      <Button type="submit" className="bg-primary text-white gap-2">
                        Continue <ArrowRight size={16} />
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-accent hover:bg-accent/90 text-white gap-2 px-8" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send to Administrators"}
                        {!isSubmitting && <CheckCircle2 size={16} />}
                      </Button>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
