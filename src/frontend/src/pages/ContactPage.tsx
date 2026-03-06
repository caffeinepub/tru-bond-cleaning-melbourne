import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  Loader2,
  MessageCircle,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { ServiceType } from "../backend.d";
import { useActor } from "../hooks/useActor";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";
const WA_LINK = "https://wa.me/61488841883";

// Recipient is obfuscated — never shown in visible text
const RECIPIENT = atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");

const serviceOptions = [
  { value: ServiceType.endOfLease, label: "End of Lease Cleaning" },
  { value: ServiceType.carpetCleaning, label: "Carpet Steam Cleaning" },
  { value: ServiceType.windowCleaning, label: "Window Cleaning" },
  { value: ServiceType.pestControl, label: "Pest Control" },
  { value: ServiceType.other, label: "Other / Multiple Services" },
];

export default function ContactPage() {
  const { actor, isFetching } = useActor();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "" as ServiceType | "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone || !form.service) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      // Submit to backend canister
      if (actor && !isFetching) {
        await actor.submitContact(
          form.name,
          form.email,
          form.phone,
          form.service as ServiceType,
          form.message,
        );
      }

      // Also construct a mailto link and open it in background (encodes recipient)
      const mailtoLink = `mailto:${RECIPIENT}?subject=${encodeURIComponent(`Bond Cleaning Enquiry from ${form.name}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${serviceOptions.find((s) => s.value === form.service)?.label ?? form.service}\nMessage: ${form.message}`)}`;

      const anchor = document.createElement("a");
      anchor.href = mailtoLink;
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      setSubmitted(true);
      toast.success("Thanks! We'll get back to you shortly.");
    } catch {
      setError(
        "Something went wrong. Please try again or chat with us on WhatsApp.",
      );
      toast.error("Submission failed. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>
          Contact Tru Bond Cleaning Melbourne | Free Quote | Bond Clean Booking
        </title>
        <meta
          name="description"
          content="Get a free bond cleaning quote in Melbourne. Book online or chat on WhatsApp — same day availability. Tru Bond Cleaning Melbourne responds fast."
        />
        <meta
          name="keywords"
          content="contact bond cleaning Melbourne, book bond clean Melbourne, end of lease cleaning quote Melbourne, bond cleaning quote"
        />
        <meta
          property="og:title"
          content="Contact Tru Bond Cleaning Melbourne | Free Quote"
        />
        <meta
          property="og:description"
          content="Get your free bond cleaning quote today. Same day bookings available across Melbourne. 100% Bond Back Guarantee."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/generated/contact-bond-cleaning-melbourne.dim_800x500.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Tru Bond Cleaning Melbourne | Free Quote"
        />
        <meta
          name="twitter:description"
          content="Get your free bond cleaning quote today. Same day bookings available across Melbourne. 100% Bond Back Guarantee."
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>

      {/* Page Header */}
      <section className="brand-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              Get in Touch
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Get Your Free Bond Clean Quote
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Fill in the form below and we'll get back to you within minutes.
              Same-day bookings available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card border-border/50">
                <CardContent className="p-6 sm:p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      data-ocid="contact.form.success_state"
                      className="text-center py-12"
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 mx-auto mb-5">
                        <CheckCircle2 className="w-8 h-8 text-brand-green" />
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                        Quote Request Sent!
                      </h2>
                      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                        Thanks for reaching out! We'll get back to you within
                        minutes. For instant help, chat with us on WhatsApp.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => {
                            setSubmitted(false);
                            setForm({
                              name: "",
                              email: "",
                              phone: "",
                              service: "",
                              message: "",
                            });
                          }}
                          variant="outline"
                          className="border-brand-blue/30 text-brand-blue"
                        >
                          Submit Another Enquiry
                        </Button>
                        <Button
                          asChild
                          className="bg-[#25D366] hover:bg-[#1ebe5d] text-white"
                          data-ocid="contact.whatsapp.primary_button"
                        >
                          <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat on WhatsApp
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
                        Request a Free Quote
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-sm font-medium">
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            data-ocid="contact.name.input"
                            placeholder="e.g. Sarah Thompson"
                            value={form.name}
                            onChange={(e) =>
                              handleChange("name", e.target.value)
                            }
                            required
                            autoComplete="name"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            data-ocid="contact.email.input"
                            type="email"
                            placeholder="e.g. sarah@email.com"
                            value={form.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            required
                            autoComplete="email"
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="phone"
                            className="text-sm font-medium"
                          >
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            data-ocid="contact.phone.input"
                            type="tel"
                            placeholder="e.g. 0412 345 678"
                            value={form.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            required
                            autoComplete="tel"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-sm font-medium">
                            Service Required{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={form.service}
                            onValueChange={(v) => handleChange("service", v)}
                          >
                            <SelectTrigger
                              data-ocid="contact.service.select"
                              className="h-11"
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="mb-6 space-y-1.5">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Additional Details
                        </Label>
                        <Textarea
                          id="message"
                          data-ocid="contact.message.textarea"
                          placeholder="Tell us about your property (bedrooms, bathrooms, property address, preferred date, any specific requirements)..."
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          rows={4}
                          className="resize-none"
                        />
                      </div>

                      {error && (
                        <div
                          data-ocid="contact.form.error_state"
                          className="mb-4 flex items-center gap-2 text-destructive text-sm bg-destructive/5 border border-destructive/20 rounded-lg px-4 py-3"
                        >
                          {error}
                        </div>
                      )}

                      {submitting && (
                        <div
                          data-ocid="contact.form.loading_state"
                          className="sr-only"
                        >
                          Submitting your enquiry...
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        data-ocid="contact.form.submit_button"
                        disabled={submitting}
                        className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold shadow-brand"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending Enquiry...
                          </>
                        ) : (
                          "Send My Free Quote Request"
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center mt-3">
                        We respond to all enquiries within minutes during
                        business hours.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-5">
              {/* WhatsApp CTA */}
              <Card className="border-[#25D366]/30 bg-[#25D366]/5 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/20">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-foreground">
                        Chat on WhatsApp
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Instant response
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    Need a quote fast? Message us directly on WhatsApp and we'll
                    reply straight away.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold"
                    data-ocid="contact.whatsapp.primary_button"
                  >
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message Us Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Info Cards */}
              {[
                {
                  icon: Clock,
                  title: "Working Hours",
                  text: "7 days a week, 7am–8pm\nPublic holidays available",
                },
                {
                  icon: Shield,
                  title: "100% Bond Back Guarantee",
                  text: "If your agent finds an issue, we'll come back and fix it free within 72 hours.",
                },
                {
                  icon: CheckCircle2,
                  title: "Service Areas",
                  text: "All Melbourne suburbs from the CBD to outer suburbs. Same-day available.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl border border-border bg-card"
                  >
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/10">
                      <Icon className="w-4.5 h-4.5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-0.5">
                        {item.title}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Contact Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/generated/contact-bond-cleaning-melbourne.dim_800x500.jpg"
                  alt="Tru Bond Cleaning Melbourne team ready to take your booking — professional and friendly bond cleaners"
                  className="w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
