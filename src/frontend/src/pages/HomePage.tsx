import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Bath,
  CheckCircle2,
  ChevronRight,
  Clock,
  Home,
  Leaf,
  MapPin,
  MessageCircle,
  Paintbrush,
  Shield,
  Sofa,
  Star,
  UtensilsCrossed,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const WA_LINK = "https://wa.me/61488841883";
const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const faqData = [
  {
    q: "What is Bond Cleaning and Why Is It Required?",
    a: "Bond cleaning (also called end of lease cleaning) is a thorough top-to-bottom clean of a rental property when a tenant moves out. Landlords and real estate agents in Melbourne require it so the property is returned in the same condition as when you moved in. If you skip it or don't clean to the required standard, your landlord can deduct money from your rental bond. A professional bond clean covers every room, including the oven, windows, carpets, bathrooms, and more — giving you the best chance of getting your full bond back.",
  },
  {
    q: "Why Is Bond Cleaning Important?",
    a: "Bond cleaning is important because it directly affects how much of your rental bond you get back. In Victoria, bond amounts can be thousands of dollars — so a proper clean is worth every cent. Real estate agents inspect the property against a detailed condition report, and any missed areas can lead to bond deductions. A professional bond cleaning service like Tru Bond Cleaning Melbourne knows exactly what agents check, so we make sure nothing gets missed. We give you peace of mind and protect your money.",
  },
  {
    q: "How Much for a Bond Clean?",
    a: "Bond cleaning costs in Melbourne typically range from $250 for a small one-bedroom unit to $700+ for a large four-bedroom house. The price depends on the size of the property, its condition, and any extra services like carpet steam cleaning or window cleaning. At Tru Bond Cleaning Melbourne, we offer transparent, upfront pricing with no hidden fees. Contact us for a free quote tailored to your property — we'll beat any written quote from a competitor.",
  },
  {
    q: "What Is a Full Bond Clean?",
    a: "A full bond clean is a complete, professional clean of every area in your rental property. It includes the kitchen (oven, stovetop, rangehood, cupboards inside and out), all bathrooms and toilets, all bedrooms and living areas, windows (inside and out where accessible), walls and skirting boards, light fittings, door tracks, and more. Carpet steam cleaning is often included or available as an add-on. A full bond clean meets the REIV (Real Estate Institute of Victoria) checklist standards, giving you the best shot at a full bond refund.",
  },
  {
    q: "Which Are the Top Rated Bond Cleaning Companies Near Me?",
    a: (
      <div className="space-y-4">
        <p>
          Here are five top-rated bond cleaning companies in Melbourne and
          Brisbane worth checking out:
        </p>
        <ol className="space-y-3 list-none">
          {[
            {
              n: 1,
              name: "Jim's Cleaning Melbourne",
              url: "https://jimscleaning.com.au",
              desc: "Jim's Cleaning is one of Australia's largest and most recognisable cleaning franchises. With hundreds of franchisees across Melbourne, they offer end of lease cleaning, carpet cleaning, and window cleaning. Their strong brand recognition and nationwide training program mean consistent quality. Customers appreciate their easy online booking system and the confidence of dealing with a well-known Australian brand. However, pricing can vary between franchisees.",
            },
            {
              n: 2,
              name: "Pristine Home Melbourne",
              url: "https://pristinehome.com.au",
              desc: "Pristine Home has built a solid reputation in Melbourne for high-quality residential cleaning, particularly end of lease and spring cleaning services. Their team is known for attention to detail and reliability. They offer a satisfaction guarantee and work to REIV-standard checklists. Customers rate their friendly communication and punctual service highly.",
            },
            {
              n: 3,
              name: "Speedy Clean Melbourne",
              url: "https://speedyclean.com.au",
              desc: "Speedy Clean lives up to its name with fast booking and quick turnaround times across Melbourne. They specialise in end of lease cleans and offer carpet steam cleaning as an add-on. Their competitive pricing and same-day availability make them popular with tenants on tight moving schedules.",
            },
            {
              n: 4,
              name: "Clean To Perfection Melbourne",
              url: "https://cleantoperfection.com.au",
              desc: "Clean To Perfection is a boutique Melbourne cleaning company focused on premium end of lease and deep cleaning services. They're particularly praised for their thorough oven and bathroom cleans — two areas that cause the most bond disputes. They offer flexible scheduling and free follow-up cleans.",
            },
            {
              n: 5,
              name: "Tru Bond Cleaning Melbourne",
              url: "https://trubondcleaningbrisbane.com",
              desc: "Tru Bond Cleaning Melbourne is a locally owned and operated bond cleaning specialist serving renters across Melbourne. With over a decade of experience, they know exactly what Melbourne real estate agents look for during exit inspections. Their team is fully insured, police-checked, and uses eco-friendly products safe for families and pets. They back every clean with a 100% bond back guarantee and offer free re-cleans if any issues arise.",
            },
          ].map((c) => (
            <li key={c.n} className="flex gap-3">
              <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mt-0.5">
                {c.n}
              </span>
              <div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue hover:underline"
                >
                  {c.name}
                </a>
                <span className="text-muted-foreground text-xs ml-2">
                  ({c.url.replace("https://", "")})
                </span>
                <p className="text-sm text-foreground/80 mt-0.5">{c.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
  {
    q: "Which Cleaning Products Are Best for Bond Cleaning?",
    a: "Professional bond cleaners use a range of specialist products to tackle different surfaces. Some of the best include: Selleys Oven Pride for ovens and grills, Domestos Thick Bleach for bathrooms and toilets, Windex Multi-Surface Cleaner for windows and glass, Sugar Soap for walls and skirting boards, White King Bathroom Spray for tiles and grout, and Bissell or Rug Doctor carpet cleaning solutions for carpets. At Tru Bond Cleaning Melbourne, we use professional-grade, eco-friendly products that are tough on grime but gentle on surfaces and safe for your family and pets.",
  },
  {
    q: "How Much Does a Professional Bond Clean Typically Cost?",
    a: (
      <div className="space-y-2">
        <p>A professional bond clean in Melbourne typically costs:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          {[
            ["1-bedroom unit", "$250–$350"],
            ["2-bedroom unit", "$350–$450"],
            ["3-bedroom house", "$450–$600"],
            ["4-bedroom house", "$600–$800+"],
          ].map(([size, price]) => (
            <li
              key={size}
              className="flex items-center justify-between bg-secondary rounded-md px-3 py-2 text-sm"
            >
              <span className="font-medium">{size}</span>
              <span className="text-brand-blue font-bold">{price}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-2">
          Extras like carpet steam cleaning ($80–$200), window cleaning
          ($50–$150), and garage cleaning ($50–$100) are often priced
          separately. Tru Bond Cleaning Melbourne offers all-inclusive packages
          so you know exactly what you're paying before we start.
        </p>
      </div>
    ),
  },
  {
    q: "What Products Are Best for Bond Cleaning Carpets?",
    a: (
      <div className="space-y-2">
        <p>
          For carpet bond cleaning, professional-grade products make a real
          difference. Top picks include:
        </p>
        <ul className="space-y-2 mt-2">
          {[
            {
              name: "Bissell Professional Pet Urine Eliminator",
              where: "Bunnings",
              url: "https://www.bunnings.com.au",
              note: "great for stains and odours",
            },
            {
              name: "Rug Doctor Carpet Detergent",
              where: "Rug Doctor AU",
              url: "https://www.rugdoctor.com.au",
              note: "specifically designed for deep extraction cleaning",
            },
            {
              name: "Britex Carpet Cleaner",
              where: "Coles and Woolworths",
              url: "https://www.woolworths.com.au",
              note: "a popular Aussie brand for fresh-smelling results",
            },
            {
              name: "Preen Carpet Stain Remover",
              where: "Bunnings",
              url: "https://www.bunnings.com.au",
              note: "excellent for spot treatment before steam cleaning",
            },
          ].map((p) => (
            <li key={p.name} className="text-sm">
              <span className="font-semibold">{p.name}</span> — available at{" "}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                {p.where}
              </a>{" "}
              — {p.note}.
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-2">
          Professional steam extraction (hot water extraction) is the gold
          standard and the method used by Tru Bond Cleaning Melbourne.
        </p>
      </div>
    ),
  },
  {
    q: "How to Choose a Reliable Bond Cleaner?",
    a: (
      <div className="space-y-2">
        <p>
          Choosing a reliable bond cleaner in Melbourne comes down to a few key
          things:
        </p>
        <ol className="space-y-2 mt-2">
          {[
            "Check Google reviews — look for companies with 4.5 stars or higher and plenty of reviews.",
            "Ask if they offer a bond back guarantee — if they don't, walk away.",
            "Make sure they're fully insured — this protects you if anything gets damaged.",
            "Get a written quote — avoid any company that won't put pricing in writing.",
            "Check their checklist — a good bond cleaner follows the REIV standard checklist.",
            "Ask about experience — local Melbourne experience matters because agents have specific expectations.",
          ].map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static list
            <li key={i} className="flex gap-2.5 text-sm">
              <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-green/15 text-brand-green font-bold text-xs mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm font-medium text-brand-blue mt-2">
          Tru Bond Cleaning Melbourne ticks all these boxes.
        </p>
      </div>
    ),
  },
  {
    q: "Can I Book a Bond Cleaning Company Online with a Satisfaction Guarantee?",
    a: "Yes! At Tru Bond Cleaning Melbourne, you can book your bond clean online in just a few minutes. Simply fill out our booking form, choose your service date, and we'll confirm your booking right away. Every clean comes with our 100% Bond Back Guarantee — if your real estate agent isn't happy with any part of the clean, we'll come back and fix it for free within 72 hours. No questions asked. We want you to get your full bond back, and we stand behind every job we do.",
  },
];

const services = [
  {
    icon: Home,
    title: "End of Lease Cleaning",
    desc: "Full REIV-standard bond clean covering every room, surface, and fixture.",
    to: "/services/end-of-lease-cleaning",
  },
  {
    icon: Sofa,
    title: "Carpet Steam Cleaning",
    desc: "Hot water extraction that removes stains, odours, and allergens from every carpet fibre.",
    to: "/services/carpet-steam-cleaning",
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    desc: "Streak-free windows inside and out, including tracks, frames, and flyscreens.",
    to: "/services/window-cleaning",
  },
  {
    icon: UtensilsCrossed,
    title: "Oven & Kitchen Deep Clean",
    desc: "We degrease ovens, rangehoods, stovetops, and cupboards until they shine.",
    to: "/services/oven-kitchen-cleaning",
  },
  {
    icon: Bath,
    title: "Bathroom & Toilet Cleaning",
    desc: "Mould removal, tile scrubbing, and sparkling fixtures from floor to ceiling.",
    to: "/services/bathroom-cleaning",
  },
  {
    icon: Paintbrush,
    title: "Walls & Skirting Boards",
    desc: "We wipe scuffs, marks, and grime off every wall, skirting board, and door frame.",
    to: "/services/walls-skirting-cleaning",
  },
];

const stats = [
  { value: "5,000+", label: "Cleans Completed" },
  { value: "100%", label: "Bond Back Guarantee" },
  { value: "5★", label: "Google Rating" },
  { value: "10+", label: "Years Experience" },
];

const whyUs = [
  {
    icon: Award,
    title: "100% Bond Back Guarantee",
    desc: "If your agent finds an issue, we come back and fix it free within 72 hours.",
  },
  {
    icon: Star,
    title: "5-Star Google Reviews",
    desc: "Hundreds of happy Melbourne renters can't be wrong.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Police Checked",
    desc: "Every team member is vetted and insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Same Day Booking Available",
    desc: "Moving out soon? We work 7 days a week including public holidays.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "Safe for families, kids, and pets. Tough on grime, gentle on the planet.",
  },
  {
    icon: CheckCircle2,
    title: "10+ Years Melbourne Experience",
    desc: "We know exactly what Melbourne agents look for at exit inspections.",
  },
];

const melbourneSuburbs = [
  {
    name: "South Yarra",
    to: "/suburbs/south-yarra",
    desc: "Inner-south | Premium apartments & terraces",
  },
  {
    name: "Richmond",
    to: "/suburbs/richmond",
    desc: "Inner-east | Victorian terraces & sports precinct",
  },
  {
    name: "St Kilda",
    to: "/suburbs/st-kilda",
    desc: "Bayside | Art Deco apartments & beach units",
  },
  {
    name: "Carlton",
    to: "/suburbs/carlton",
    desc: "Inner-north | Student apartments & Lygon St",
  },
  {
    name: "Fitzroy",
    to: "/suburbs/fitzroy",
    desc: "Inner-north | Exposed brick & converted warehouses",
  },
  {
    name: "Brunswick",
    to: "/suburbs/brunswick",
    desc: "Inner-north | Share houses & Sydney Rd terraces",
  },
  {
    name: "Prahran",
    to: "/suburbs/prahran",
    desc: "Inner-south | Chapel Street & period homes",
  },
  {
    name: "Docklands",
    to: "/suburbs/docklands",
    desc: "Waterfront CBD | Modern high-rise apartments",
  },
  {
    name: "Box Hill",
    to: "/suburbs/box-hill",
    desc: "Eastern suburbs | Family homes & townhouses",
  },
  {
    name: "Frankston",
    to: "/suburbs/frankston",
    desc: "Bayside south | Coastal homes & beach properties",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: typeof faq.q === "string" ? faq.q : String(faq.q),
    acceptedAnswer: {
      "@type": "Answer",
      text:
        typeof faq.a === "string" ? faq.a : "See website for detailed answer.",
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning and end of lease cleaning service in Melbourne, Victoria. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-37.8136",
    longitude: "144.9631",
  },
  areaServed: "Melbourne, Victoria",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "200",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "20:00",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Bond Cleaning Melbourne | 100% Bond Back Guarantee | Tru Bond Cleaning
        </title>
        <meta
          name="description"
          content="Professional bond cleaning in Melbourne. Fully insured team, REIV-standard checklist, 100% Bond Back Guarantee. Get a free quote today — same day bookings available."
        />
        <meta
          name="keywords"
          content="bond cleaning Melbourne, end of lease cleaning Melbourne, bond clean Melbourne, carpet steam cleaning Melbourne, window cleaning Melbourne, exit clean Melbourne"
        />
        <meta
          property="og:title"
          content="Bond Cleaning Melbourne | Tru Bond Cleaning Melbourne"
        />
        <meta
          property="og:description"
          content="Melbourne's most trusted bond cleaning service. 100% Bond Back Guarantee, fully insured, eco-friendly. Book online today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/generated/hero-bond-cleaning-melbourne.dim_1200x600.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bond Cleaning Melbourne | Tru Bond Cleaning Melbourne"
        />
        <meta
          name="twitter:description"
          content="Melbourne's most trusted bond cleaning service. 100% Bond Back Guarantee."
        />
        <link rel="canonical" href={SITE_URL} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bond-cleaning-melbourne.dim_1200x600.jpg"
            alt="Professional bond cleaning team at work in a Melbourne rental property — Tru Bond Cleaning Melbourne"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-1.5 green-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Bond Back Guarantee
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-5"
            >
              Melbourne's Most Trusted{" "}
              <span className="text-brand-green">Bond Cleaning</span> Service
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              We help you get your full bond back — guaranteed. Fast, thorough,
              and hassle-free. Book online in minutes.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                data-ocid="hero.quote.primary_button"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-base px-8 shadow-green"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="hero.whatsapp.secondary_button"
                className="border-white/50 text-white hover:bg-white/10 font-semibold text-base px-8 backdrop-blur-sm"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              {[
                "Fully Insured",
                "Police Checked",
                "7 Days a Week",
                "Free Re-Clean",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-white/80 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-brand-blue py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl text-white">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              About Our Service
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Melbourne's End of Lease Cleaning Experts
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-5">
              Moving out is stressful enough without worrying about the clean.
              At Tru Bond Cleaning Melbourne, we take care of the entire end of
              lease clean so you can focus on your move. Our experienced team
              covers every corner of your home — from the oven to the skirting
              boards — to make sure your property meets the real estate agent's
              standards.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We've helped thousands of Melbourne renters get their full bond
              back. We know exactly what property managers look for, and we
              clean to those standards every single time. Book online today and
              get a free, no-obligation quote within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section-alt py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              What We Clean
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Our Bond Cleaning Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              We cover every area of your rental property — from top to bottom,
              inside and out.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  data-ocid={`services.item.${i + 1}`}
                >
                  <Link to={service.to} className="block h-full">
                    <Card className="h-full hover-lift shadow-card cursor-pointer border-border/50 group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/10 mb-4 group-hover:bg-brand-blue/20 transition-colors">
                          <Icon className="w-6 h-6 text-brand-blue" />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-brand-blue transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.desc}
                        </p>
                        <span className="inline-flex items-center text-brand-blue text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                          Learn More <ChevronRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              Why Choose Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Melbourne Renters Trust Tru Bond Cleaning
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-card transition-shadow"
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-brand-green/10">
                    <Icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section
        className="section-alt py-16 md:py-20"
        data-ocid="suburbs.section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              Melbourne Coverage
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Bond Cleaning Across Melbourne — We Come to You
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From the inner suburbs to the bayside, Tru Bond Cleaning Melbourne
              covers it all. Select your suburb for local info and a tailored
              quote.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8"
          >
            {melbourneSuburbs.map((suburb, i) => (
              <motion.div
                key={suburb.to}
                variants={itemVariants}
                data-ocid={`suburbs.item.${i + 1}`}
              >
                <Link to={suburb.to} className="block h-full">
                  <Card className="h-full hover-lift shadow-card cursor-pointer border-border/50 group">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                        </div>
                        <h3 className="font-heading font-bold text-sm text-foreground group-hover:text-brand-blue transition-colors leading-tight">
                          {suburb.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-xs leading-snug mb-2">
                        {suburb.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-brand-blue font-semibold group-hover:gap-1.5 transition-all">
                        View Page <ChevronRight className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Button
              asChild
              data-ocid="suburbs.all.primary_button"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8"
            >
              <Link to="/suburbs">
                <MapPin className="w-4 h-4 mr-2" />
                View All Melbourne Suburbs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              Customer Reviews
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah T.",
                suburb: "Richmond",
                review:
                  "Got my full bond back! The team was professional, on time, and cleaned things I didn't even think to check. Highly recommend Tru Bond Cleaning Melbourne to anyone moving out.",
                rating: 5,
              },
              {
                name: "James K.",
                suburb: "Southbank",
                review:
                  "Booked online the night before my lease ended and they came the next morning. Absolute legends. The oven looked brand new. Real estate agent was really happy with the result.",
                rating: 5,
              },
              {
                name: "Priya M.",
                suburb: "Box Hill",
                review:
                  "Used them for carpet steam cleaning and full bond clean. Great value, eco-friendly products, and incredibly thorough. My property manager said it was one of the best exits she's seen.",
                rating: 5,
              },
            ].map((review) => (
              <Card key={review.name} className="shadow-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Star
                        key={`star-${review.name}-${i}`}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                    "{review.review}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {review.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {review.suburb}, Melbourne
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24" id="faq">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Bond Cleaning Questions, Answered
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Everything you need to know about bond cleaning in Melbourne —
              straight from the experts.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={
                    typeof faq.q === "string"
                      ? faq.q.substring(0, 30)
                      : `faq-${index}`
                  }
                  value={`faq-${index}`}
                  data-ocid={`faq.item.${index + 1}`}
                  className="border border-border rounded-xl overflow-hidden bg-card shadow-xs"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-heading font-semibold text-base text-foreground hover:text-brand-blue hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-foreground/80 text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="brand-gradient py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Get Your Bond Back?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Book your Melbourne bond clean today. Same-day availability. Free
              quote. 100% Bond Back Guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
