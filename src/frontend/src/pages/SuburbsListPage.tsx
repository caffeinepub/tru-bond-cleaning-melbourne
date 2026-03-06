import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const WA_LINK = "https://wa.me/61488841883";
const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const suburbs = [
  {
    name: "South Yarra",
    to: "/suburbs/south-yarra",
    desc: "Inner-south | Premium apartments & heritage homes",
    highlight: "High-demand rental market",
  },
  {
    name: "Richmond",
    to: "/suburbs/richmond",
    desc: "Inner-east | Victorian terraces & sports precinct",
    highlight: "Heritage terrace specialists",
  },
  {
    name: "St Kilda",
    to: "/suburbs/st-kilda",
    desc: "Bayside | Art Deco apartments & beachside units",
    highlight: "Mould & coastal cleaning",
  },
  {
    name: "Carlton",
    to: "/suburbs/carlton",
    desc: "Inner-north | Student apartments & Lygon St terraces",
    highlight: "University suburb experts",
  },
  {
    name: "Fitzroy",
    to: "/suburbs/fitzroy",
    desc: "Inner-north | Exposed brick, converted warehouses",
    highlight: "Heritage & warehouse specialists",
  },
  {
    name: "Brunswick",
    to: "/suburbs/brunswick",
    desc: "Inner-north | Share houses & Sydney Rd terraces",
    highlight: "Share house specialists",
  },
  {
    name: "Prahran",
    to: "/suburbs/prahran",
    desc: "Inner-south | Chapel Street apartments & period homes",
    highlight: "Period & modern homes",
  },
  {
    name: "Docklands",
    to: "/suburbs/docklands",
    desc: "Waterfront CBD | Modern high-rise apartments",
    highlight: "High-rise & premium finishes",
  },
  {
    name: "Box Hill",
    to: "/suburbs/box-hill",
    desc: "Eastern suburbs | Family homes & townhouses",
    highlight: "Carpet steam cleaning",
  },
  {
    name: "Frankston",
    to: "/suburbs/frankston",
    desc: "Bayside south | Coastal homes & family properties",
    highlight: "Coastal property specialists",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning across all Melbourne suburbs. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Melbourne, Victoria",
  priceRange: "$$",
};

export default function SuburbsListPage() {
  return (
    <>
      <Helmet>
        <title>
          Bond Cleaning Melbourne Suburbs | Tru Bond Cleaning Melbourne
        </title>
        <meta
          name="description"
          content="Tru Bond Cleaning Melbourne services all suburbs. Find your suburb for end of lease cleaning, bond back guarantee, same day booking."
        />
        <meta
          name="keywords"
          content="bond cleaning Melbourne suburbs, end of lease cleaning Melbourne, bond clean suburbs Melbourne, exit clean Melbourne"
        />
        <meta
          property="og:title"
          content="Bond Cleaning Melbourne Suburbs | Tru Bond Cleaning Melbourne"
        />
        <meta
          property="og:description"
          content="Professional bond cleaning across Melbourne. Find your suburb and book today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/suburbs`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/generated/hero-bond-cleaning-melbourne.dim_1200x600.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bond Cleaning Melbourne Suburbs | Tru Bond Cleaning"
        />
        <meta
          name="twitter:description"
          content="Professional bond cleaning across Melbourne. 100% Bond Back Guarantee."
        />
        <link rel="canonical" href={`${SITE_URL}/suburbs`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="brand-gradient py-14 md:py-18">
        <div className="container mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/60 text-sm mb-5"
          >
            <Link
              to="/"
              data-ocid="suburbs.breadcrumb.link"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">Melbourne Suburbs</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Melbourne Coverage
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Bond Cleaning Across{" "}
              <span className="text-brand-green">All Melbourne Suburbs</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-xl">
              From the inner suburbs to the bayside, Tru Bond Cleaning Melbourne
              covers the whole city. Find your suburb below and get a free
              quote. Every clean comes with our 100% Bond Back Guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                data-ocid="suburbs.quote.primary_button"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 shadow-green"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="suburbs.whatsapp.secondary_button"
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

      {/* Intro + Suburbs Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Tru Bond Cleaning Melbourne services renters right across
                Greater Melbourne — from the inner city to the bay, the eastern
                suburbs, and beyond. We know each suburb's unique rental market,
                the types of properties agents manage, and exactly what property
                managers look for at exit inspections.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-10">
                Select your suburb below to learn more about our bond cleaning
                service in your area, see what's included, and get a free quote.
                Same-day bookings available. 100% Bond Back Guarantee on every
                clean.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                data-ocid="suburbs.list"
              >
                {suburbs.map((suburb, i) => (
                  <motion.div
                    key={suburb.to}
                    variants={itemVariants}
                    data-ocid={`suburbs.item.${i + 1}`}
                  >
                    <Link to={suburb.to} className="block h-full">
                      <Card className="h-full hover-lift shadow-card cursor-pointer border-border/50 group">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors mt-0.5">
                              <MapPin className="w-4.5 h-4.5 text-brand-blue" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h2 className="font-heading font-bold text-base text-foreground group-hover:text-brand-blue transition-colors mb-0.5">
                                Bond Cleaning {suburb.name}
                              </h2>
                              <p className="text-muted-foreground text-xs leading-snug mb-2">
                                {suburb.desc}
                              </p>
                              <span className="inline-flex items-center gap-1 text-xs text-brand-green font-medium">
                                <CheckCircle2 className="w-3 h-3" />
                                {suburb.highlight}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-brand-blue transition-colors shrink-0 mt-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Banner */}
              <div className="brand-gradient rounded-2xl p-6 text-white text-center mt-10">
                <h3 className="font-heading font-bold text-xl mb-2">
                  Don't See Your Suburb?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  We cover all of Greater Melbourne. Contact us and we'll get
                  your suburb sorted.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    asChild
                    data-ocid="suburbs.cta.primary_button"
                    className="bg-brand-green hover:bg-brand-green/90 text-white font-bold"
                  >
                    <Link to="/contact">Contact Us Today</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    data-ocid="suburbs.cta.secondary_button"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
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
                    data-ocid="suburbs.sidebar.primary_button"
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
                    data-ocid="suburbs.sidebar.secondary_button"
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold"
                  >
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp for Fast Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-card">
                <CardContent className="p-5">
                  <h3 className="font-heading font-bold text-sm text-foreground mb-3">
                    Why Choose Tru Bond Cleaning
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
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
