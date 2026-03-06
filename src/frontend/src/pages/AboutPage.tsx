import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Heart,
  Leaf,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";
const WA_LINK = "https://wa.me/61488841883";

const values = [
  {
    icon: Shield,
    title: "Reliable",
    desc: "We show up on time, every time. No excuses, no cancellations at the last minute.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent",
    desc: "Fixed quotes upfront — never an hourly rate that blows out on moving day.",
  },
  {
    icon: Award,
    title: "Thorough",
    desc: "We clean to REIV-standard checklists. Every corner, every surface, every time.",
  },
  {
    icon: Heart,
    title: "Friendly",
    desc: "Moving out is stressful. We make our part of it easy, friendly, and hassle-free.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    desc: "We use biodegradable, eco-friendly products that are safe for families and pets.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    desc: "We're a locally owned Melbourne business — not a big franchise. Your satisfaction matters.",
  },
];

const milestones = [
  {
    year: "2014",
    event: "Tru Bond Cleaning Melbourne founded by a local Melbourne couple",
  },
  {
    year: "2016",
    event:
      "Expanded to full bond cleaning services across the Melbourne metro area",
  },
  {
    year: "2018",
    event: "Introduced eco-friendly cleaning products across all services",
  },
  { year: "2020", event: "Reached 2,000 completed bond cleans milestone" },
  {
    year: "2022",
    event: "Introduced online booking system for same-day availability",
  },
  {
    year: "2024",
    event: "Over 5,000 Melbourne renters helped to get their bond back",
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Tru Bond Cleaning Melbourne | Locally Owned Bond Cleaners
        </title>
        <meta
          name="description"
          content="Learn about Tru Bond Cleaning Melbourne — locally owned, fully insured, police checked. Over 10 years helping Melbourne renters get their full bond back."
        />
        <meta
          name="keywords"
          content="about Tru Bond Cleaning Melbourne, bond cleaning company Melbourne, local bond cleaners Melbourne, end of lease cleaning Melbourne team"
        />
        <meta
          property="og:title"
          content="About Tru Bond Cleaning Melbourne | Local Bond Cleaning Experts"
        />
        <meta
          property="og:description"
          content="Locally owned and operated. Over 10 years of experience. Fully insured, police checked, and committed to getting your full bond back."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/generated/tru-bond-cleaning-team-melbourne.dim_800x500.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`${SITE_URL}/about`} />
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
              Our Story
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              About Tru Bond Cleaning Melbourne
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Locally owned, fully insured, and dedicated to helping Melbourne
              renters get every dollar of their bond back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/generated/tru-bond-cleaning-team-melbourne.dim_800x500.jpg"
                alt="The Tru Bond Cleaning Melbourne team — professional bond cleaners serving Melbourne renters"
                className="w-full rounded-2xl shadow-card object-cover aspect-[16/10]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
                Our Mission
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-5">
                Melbourne's Bond Cleaning Specialists — For Over a Decade
              </h2>

              <div className="space-y-4 text-foreground/75 leading-relaxed">
                <p>
                  Tru Bond Cleaning Melbourne is a locally owned and operated
                  bond cleaning company serving renters across Melbourne. We
                  started our business with one simple goal: to make moving out
                  less stressful for Melbourne renters and to help them get
                  their full bond back every time.
                </p>
                <p>
                  Over the past decade, we've grown into one of Melbourne's most
                  trusted bond cleaning services, completing thousands of cleans
                  across the city — from inner-city apartments in the CBD and
                  Fitzroy to suburban homes in Dandenong, Ringwood, Werribee,
                  and everywhere in between.
                </p>
                <p>
                  Our team is made up of trained, experienced cleaners who take
                  pride in their work. Every team member is fully insured and
                  police-checked for your peace of mind. We don't cut corners.
                  We show up on time, work hard, and leave your property
                  spotless.
                </p>
                <p>
                  We believe in honest, transparent pricing. You'll always get a
                  fixed quote before we start — never an hourly rate that blows
                  out on the day. And if the real estate agent finds any issues
                  after our clean, we'll come back and fix it for free. That's
                  our promise to you.
                </p>
                <p className="font-medium text-foreground">
                  At Tru Bond Cleaning Melbourne, we love what we do — and it
                  shows in every clean we complete.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "Fully Insured",
                  "Police Checked",
                  "Locally Owned",
                  "10+ Years Experience",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 green-badge rounded-full px-3 py-1.5 text-xs font-semibold"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              What We Stand For
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className="h-full border-border/50 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/10 mb-4">
                        <Icon className="w-6 h-6 text-brand-blue" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                        {v.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {v.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              A Decade of Helping Melbourne Renters
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 pb-8 relative"
              >
                {/* Line */}
                {i < milestones.length - 1 && (
                  <div className="absolute left-[1.375rem] top-10 bottom-0 w-px bg-border" />
                )}
                {/* Dot */}
                <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-brand-blue text-white font-bold text-xs shadow-brand z-10">
                  {m.year.slice(2)}
                </div>
                <div className="pt-2">
                  <div className="font-heading font-bold text-brand-blue text-sm mb-1">
                    {m.year}
                  </div>
                  <p className="text-foreground/75 text-sm leading-relaxed">
                    {m.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="brand-gradient py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-white mb-2">
                100% Bond Back Guarantee
              </h2>
              <p className="text-white/80 max-w-xl">
                If your real estate agent isn't happy with any part of our
                clean, we'll come back and fix it for free within 72 hours. No
                questions asked. We stand behind every job we do.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
