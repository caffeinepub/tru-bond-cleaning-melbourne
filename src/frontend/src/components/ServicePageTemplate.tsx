import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const WA_LINK = "https://wa.me/61488841883";
const SITE_URL = "https://trubondcleaningmelbourne.com.au";

interface ServicePageProps {
  meta: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogImage: string;
  };
  heading: string;
  tagline: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  intro: string;
  paragraphs: string[];
  includes: string[];
  relatedServices: Array<{ title: string; to: string }>;
}

export default function ServicePageTemplate({
  meta,
  heading,
  tagline,
  image,
  imageAlt,
  highlights,
  intro,
  paragraphs,
  includes,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}${meta.canonical}`} />
        <meta property="og:image" content={`${SITE_URL}${meta.ogImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link rel="canonical" href={`${SITE_URL}${meta.canonical}`} />
      </Helmet>

      {/* Hero */}
      <section className="brand-gradient py-14 md:py-18">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">{heading}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              {tagline}
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              {heading}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 rounded-full px-3 py-1 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-brand-green" />
                  {h}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 shadow-green"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 font-semibold px-8"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-2xl shadow-card object-cover aspect-[16/9] mb-8"
                loading="lazy"
              />

              <p className="text-lg text-foreground/85 font-medium leading-relaxed mb-6">
                {intro}
              </p>

              <div className="space-y-4 text-foreground/75 leading-relaxed mb-8">
                {paragraphs.map((para, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static paragraph list
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* What's Included */}
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <h2 className="font-heading font-bold text-xl text-foreground mb-4">
                  What's Included
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="brand-gradient rounded-2xl p-6 text-white text-center">
                <h3 className="font-heading font-bold text-xl mb-2">
                  Ready to Book? Get Your Free Quote Today
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  100% Bond Back Guarantee. Same-day availability. All Melbourne
                  suburbs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    asChild
                    className="bg-brand-green hover:bg-brand-green/90 text-white font-bold"
                  >
                    <Link to="/contact">Get a Free Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Quick Quote */}
              <Card className="border-brand-green/30 shadow-card">
                <CardContent className="p-5">
                  <h3 className="font-heading font-bold text-base text-foreground mb-1">
                    Get an Instant Quote
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fill in a quick form and we'll get back to you within
                    minutes.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
                  >
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                  <div className="relative my-3">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs text-muted-foreground bg-card px-2">
                      or
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold"
                  >
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Fast Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Signals */}
              <Card className="border-border/50 shadow-card">
                <CardContent className="p-5">
                  <h3 className="font-heading font-bold text-sm text-foreground mb-3">
                    Why Choose Us
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "100% Bond Back Guarantee",
                      "Fully Insured & Police Checked",
                      "REIV-Standard Cleaning Checklist",
                      "Eco-Friendly Products",
                      "Same Day Booking Available",
                      "10+ Years Melbourne Experience",
                      "Free Re-clean Within 72 Hours",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/75"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <Card className="border-border/50 shadow-card">
                  <CardContent className="p-5">
                    <h3 className="font-heading font-bold text-sm text-foreground mb-3">
                      Related Services
                    </h3>
                    <ul className="space-y-1.5">
                      {relatedServices.map((s) => (
                        <li key={s.to}>
                          <Link
                            to={s.to}
                            className="flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue/80 font-medium"
                          >
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
