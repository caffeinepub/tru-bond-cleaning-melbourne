import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";
const WA_LINK = "https://wa.me/61488841883";

const services = [
  {
    title: "End of Lease Cleaning",
    slug: "end-of-lease-cleaning",
    image: "/assets/generated/end-of-lease-cleaning-melbourne.dim_800x500.jpg",
    imageAlt:
      "Professional end of lease cleaning service in Melbourne — Tru Bond Cleaning Melbourne",
    tagline: "Your #1 bond clean specialist in Melbourne",
    highlights: [
      "REIV-Standard Checklist",
      "Every Room Covered",
      "100% Bond Back Guarantee",
      "Same Day Available",
    ],
    intro:
      "End of lease cleaning is the most important clean you'll ever do in a rental property. When you move out in Melbourne, your real estate agent inspects the property against the original condition report. If the property isn't clean enough, they'll deduct money from your bond — and in some cases, you might lose hundreds or even thousands of dollars.",
    body: `At Tru Bond Cleaning Melbourne, we know exactly what agents look for. We've completed thousands of end of lease cleans across Melbourne, from Southbank apartments to suburban family homes in Ringwood, Dandenong, and Geelong. Our team follows a comprehensive REIV-standard checklist so nothing gets missed.

Our end of lease cleaning service includes: full kitchen clean (oven, stovetop, rangehood, microwave, cupboards inside and out, benchtops, splashback), all bathrooms and ensuites (shower screens, tiles, grout, toilet, vanity), all bedrooms and living areas (vacuuming, mopping, dusting), windows (inside and where accessible, outside), walls and skirting boards (we remove marks and scuffs), light fittings and switches, door tracks and frames, laundry area, and balcony or courtyard sweep.

We bring all our own equipment and eco-friendly cleaning products. You don't need to buy or supply anything. Our team arrives on time and works efficiently, usually completing a standard two-bedroom clean in under four hours.

What makes our service different? We offer a 100% Bond Back Guarantee. If your real estate agent finds any issues with our work, contact us within 72 hours and we'll come back and fix it — completely free. No arguments, no excuses. We want you to get every dollar of your bond back.

Pricing is transparent and based on the size of your property. We give you a fixed quote upfront so there are no nasty surprises on the day. Same-day and next-day bookings are available, and we work seven days a week including public holidays.

Whether you're moving out of a studio in the CBD or a five-bedroom house in the outer suburbs, Tru Bond Cleaning Melbourne has the experience, equipment, and drive to get the job done right. Book online today, or message us on WhatsApp for an instant quote.

Tru Bond Cleaning Melbourne — we make moving out easy.`,
  },
  {
    title: "Carpet Steam Cleaning",
    slug: "carpet-steam-cleaning",
    image: "/assets/generated/carpet-steam-cleaning-melbourne.dim_800x500.jpg",
    imageAlt:
      "Professional carpet steam cleaning service Melbourne — Tru Bond Cleaning Melbourne hot water extraction",
    tagline: "Deep clean that removes stains, odours & allergens",
    highlights: [
      "Hot Water Extraction",
      "Pet Stain Treatment",
      "Dries in 2–4 Hours",
      "Industry-Grade Equipment",
    ],
    intro:
      "Dirty carpets are one of the most common reasons tenants lose bond money in Melbourne. Real estate agents notice stained, smelly, or matted carpets immediately during exit inspections. If the carpets aren't in the condition described in the original lease, you're looking at a bond deduction — sometimes a big one.",
    body: `At Tru Bond Cleaning Melbourne, we use professional hot water extraction (steam cleaning) equipment to deep clean every carpet fibre. This isn't the same as running a hire machine from the supermarket. Our commercial-grade equipment injects hot water and cleaning solution deep into the carpet pile, then extracts all the dirt, bacteria, allergens, and moisture in one powerful pass.

Our carpet steam cleaning service covers: all carpeted rooms, hallways, and stairways; pre-treatment of stubborn stains (pet stains, food spills, wine, mud); deodorising treatment to remove pet odours and musty smells; rapid drying (carpets are usually dry within 2–4 hours); and a post-clean inspection to make sure results meet bond inspection standards.

We use Prochem, Chemspec, and other industry-leading carpet cleaning solutions that are safe for children, pets, and people with allergies. Our products are biodegradable and leave no toxic residue in your carpet fibres.

Steam cleaning is the method recommended by most carpet manufacturers and required by many Melbourne real estate agents and property managers. It removes more dirt and bacteria than dry cleaning methods, extends the life of your carpet, and leaves it looking and smelling fresh.

We often bundle carpet steam cleaning with our end of lease package at a discounted rate — it's the most cost-effective way to tackle both services in one visit. Our team coordinates the cleaning schedule so carpets are done after all other cleaning is complete, ensuring they stay spotless for the final inspection.

Got pets? We have a specialised pet treatment that breaks down the proteins in urine and eliminates odour at the source — not just masking it with fragrance. This is critical for passing bond inspections in pet-friendly rentals.

Book Tru Bond Cleaning Melbourne for carpet steam cleaning today. Fast, effective, and backed by our 100% Bond Back Guarantee. Your carpets will look better than they have in years — and your real estate agent will have nothing to complain about.`,
  },
  {
    title: "Window Cleaning",
    slug: "window-cleaning",
    image: "/assets/generated/window-cleaning-melbourne.dim_800x500.jpg",
    imageAlt:
      "Professional window cleaning Melbourne — streak-free windows by Tru Bond Cleaning Melbourne",
    tagline: "Crystal clear windows inside and out",
    highlights: [
      "Streak-Free Guarantee",
      "Tracks & Frames Cleaned",
      "Flyscreen Cleaning",
      "Upper Floors Accessible",
    ],
    intro:
      "Dirty windows are easy to overlook when you're packing up and moving out — but real estate agents notice them straight away. Streaky, grimy windows can lead to bond deductions even if the rest of your property is spotless. It's not worth the risk.",
    body: `At Tru Bond Cleaning Melbourne, our window cleaning service covers every pane of glass in your rental property, inside and out. We use professional squeegees, microfibre cloths, and streak-free cleaning solutions to leave every window crystal clear. No drips, no streaks, no smudges.

Our window cleaning service includes: all interior window panes, all exterior window panes (where safely accessible from ground level), sliding door tracks (one of the most neglected areas in bond inspections), window frames and sills, flyscreen cleaning (removal, wash, and reinstall), and balcony glass panels.

We pay special attention to window tracks — those narrow channels at the bottom of sliding windows and doors where dirt, dead insects, and moisture build up over months and years. Agents routinely check window tracks, and a dirty track can leave a bad impression even if the glass is clean.

Our team uses extendable water-fed poles for hard-to-reach upper-floor windows, ensuring safety and a thorough result without the need for ladders inside the property.

Clean windows dramatically improve the overall feel of a property. Natural light floods in properly, rooms look brighter, and the property presents as well-maintained. This is exactly the impression you want to create for your exit inspection.

We can complete window cleaning as a standalone service or bundle it with our end of lease or full bond cleaning package. Bundling is the most convenient option because our team handles everything in one visit — no need to coordinate multiple tradespeople.

Average time for window cleaning on a two-bedroom unit is around one hour. Larger homes with more windows take longer, but we always give you an accurate time estimate in your quote.

Ready to walk out of your rental with clean windows and your bond intact? Book Tru Bond Cleaning Melbourne online today. We service all Melbourne suburbs and offer same-day and next-day availability.`,
  },
  {
    title: "Oven & Kitchen Deep Clean",
    slug: "oven-kitchen-cleaning",
    image: "/assets/generated/oven-kitchen-cleaning-melbourne.dim_800x500.jpg",
    imageAlt:
      "Professional oven and kitchen deep cleaning Melbourne — Tru Bond Cleaning Melbourne degreasing service",
    tagline: "The toughest kitchen clean in Melbourne",
    highlights: [
      "Full Oven Degreasing",
      "Rangehood & Filter",
      "Cupboards Inside & Out",
      "REIV Checklist Standard",
    ],
    intro:
      "The kitchen is the hardest room to clean in any rental property — and the oven is the hardest thing in the kitchen. Baked-on grease, charred food residue, and years of cooking build-up turn the oven into one of the most common causes of bond disputes in Melbourne. Real estate agents always check the oven during exit inspections, and a dirty one is almost guaranteed to cost you bond money.",
    body: `At Tru Bond Cleaning Melbourne, we give kitchens the deep clean they deserve. Our team uses professional degreasers, specialised oven cleaning products, and hours of careful work to restore your kitchen to a condition that impresses even the strictest property manager.

Our oven and kitchen deep clean service includes: oven interior (racks, fan, door glass, seals, cavity walls), stovetop and burners (all grates, caps, and drip pans removed and cleaned), rangehood (filter, grease trap, fan blades, exterior), microwave (interior, door, exterior), dishwasher (filter, door seals, interior drum), all kitchen cupboards inside and out (shelves, doors, handles), benchtops and splashback, sink and tapware, and kitchen exhaust fan.

Our oven cleaning process involves applying a professional-grade caustic cleaner, allowing it to break down the grease and carbon deposits, then carefully removing all residue by hand. We take out oven racks and soak them separately to restore them to a near-new condition.

The rangehood is another area that often gets overlooked in DIY cleans. Grease builds up in the filter and on the fan blades over months of cooking. We remove and degrease every component so the rangehood looks and functions as it should.

Cupboard interiors are inspected closely by agents. Crumbs, grease, and sticky residue inside cupboards are common bond deduction triggers. We wipe every shelf and drawer — inside, outside, and around the hinges.

Whether your kitchen is mildly dirty or seriously neglected, Tru Bond Cleaning Melbourne has the products and the patience to get it spotless. We work to REIV checklist standards and back every clean with our 100% Bond Back Guarantee.

Book your oven and kitchen deep clean today — and let us take the most stressful part of your move off your hands.`,
  },
  {
    title: "Bathroom & Toilet Cleaning",
    slug: "bathroom-cleaning",
    image: "/assets/generated/bathroom-cleaning-melbourne.dim_800x500.jpg",
    imageAlt:
      "Professional bathroom and toilet cleaning Melbourne — Tru Bond Cleaning Melbourne sparkling clean bathrooms",
    tagline: "Spotless bathrooms for a smooth bond inspection",
    highlights: [
      "Mould Treatment",
      "Shower Screen Restoration",
      "Grout Brightening",
      "Full Toilet Clean",
    ],
    intro:
      "Bathrooms and toilets need to be spotless for a successful bond inspection in Melbourne. Soap scum, mould, hard water stains, and grime can build up quickly in bathrooms — especially in properties that haven't been professionally cleaned during the tenancy. Real estate agents inspect bathrooms closely, and any visible mould or limescale can lead to immediate bond deductions.",
    body: `At Tru Bond Cleaning Melbourne, we give every bathroom and ensuite the deep clean it needs to pass even the toughest inspection. Our team tackles everything from the ceiling to the floor drain, using commercial-grade cleaning products that cut through soap scum and mineral deposits without damaging tiles or fixtures.

Our bathroom and toilet cleaning service includes: shower recess (tiles, grout, glass, screen, taps, and drain), bathtub (bowl, taps, overflow, and surround), toilet (bowl, cistern, seat, lid, base, and pedestal), vanity (basin, taps, cabinet inside and out, mirror), tiles and grout (full scrub and mould treatment), floors (mopped and dried), towel rails and toilet roll holder, exhaust fan (cover removed and cleaned), light fitting, and door tracks and frames.

Mould in the shower and on ceiling tiles is one of the most common complaints from property managers. We treat mould with anti-fungal products, scrub affected areas thoroughly, and leave surfaces clean and mould-free. Where mould has penetrated the grout deeply, we can apply a grout cleaner and brightener to restore a near-white finish.

Soap scum on shower screens is another inspection trigger. Our team uses professional glass cleaner and a hard water stain remover to restore shower screens to a crystal-clear shine. No streaks, no cloudy residue.

We clean both the inside and outside of toilet cisterns, under the rim of the toilet bowl, and around the base of the toilet — areas that DIY cleaners frequently miss but that agents inspect during exit reviews.

How many bathrooms do you have? We service properties with any number of bathrooms and ensuites. Multi-bathroom homes simply take more time, which is reflected in our transparent, upfront pricing.

Book Tru Bond Cleaning Melbourne for bathroom and toilet cleaning — and get those bathrooms sparkling for your inspection day.`,
  },
  {
    title: "Walls & Skirting Board Cleaning",
    slug: "walls-skirting-cleaning",
    image:
      "/assets/generated/walls-skirting-cleaning-melbourne.dim_800x500.jpg",
    imageAlt:
      "Professional walls and skirting board cleaning Melbourne — Tru Bond Cleaning Melbourne removing scuffs and marks",
    tagline: "Every mark, scuff, and fingerprint removed",
    highlights: [
      "Sugar Soap Treatment",
      "Paint-Safe Technique",
      "Light Switch Plates",
      "Every Room Covered",
    ],
    intro:
      "Walls and skirting boards tell the story of how a property has been lived in. Fingerprints near light switches, scuff marks at furniture height, crayon or pencil marks in kids' rooms, and general grime that accumulates over a tenancy — all of these are visible to property managers during exit inspections. Dirty walls are a surprisingly common reason for bond deductions in Melbourne.",
    body: `At Tru Bond Cleaning Melbourne, we carefully clean walls and skirting boards throughout your entire property using the right techniques to remove marks without damaging paint. We know the difference between a scuff that wipes off easily and one that requires more careful treatment, and we work accordingly.

Our walls and skirting board cleaning service includes: full wipe-down of all walls in every room, treatment of marks, scuffs, fingerprints, and light stains, skirting board cleaning (top, face, and behind where accessible), door frames and architraves, light switch plates and power point covers, and cornice (where practical and accessible).

We use sugar soap solution and microfibre cloths for most wall cleaning, which lifts grime without dulling paint finishes. For more stubborn marks, we use a targeted spot-treatment approach to remove the mark without causing paint damage. Our team is trained to recognise the difference between general cleaning and areas that may require touching up with paint — and we'll advise you honestly if we find anything that looks like it may need a paint repair rather than a clean.

Skirting boards are often the last thing people think about when cleaning a property, but they're one of the first things a property manager checks. Dust and grime build up on the top edge of skirting boards over months and years. Our team cleans every skirting board in every room — including the backs of doors and inside wardrobes.

Light switch plates and power points are another frequently missed area. These small plastic surfaces attract fingerprints and grease over time. We wipe every switch plate clean, restoring a fresh, well-maintained appearance.

Ready to tick walls and skirting boards off your bond cleaning checklist? Book Tru Bond Cleaning Melbourne today and let our experienced team handle every detail so you can move out with confidence.`,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Bond Cleaning Services Melbourne | End of Lease, Carpet, Windows | Tru
          Bond
        </title>
        <meta
          name="description"
          content="Full range of bond cleaning services in Melbourne: end of lease cleaning, carpet steam cleaning, window cleaning, oven cleaning, bathroom cleaning, and more. Free quotes."
        />
        <meta
          name="keywords"
          content="bond cleaning services Melbourne, end of lease cleaning Melbourne, carpet steam cleaning Melbourne, window cleaning Melbourne, oven cleaning Melbourne, bathroom cleaning Melbourne"
        />
        <meta
          property="og:title"
          content="Bond Cleaning Services Melbourne | Tru Bond Cleaning Melbourne"
        />
        <meta
          property="og:description"
          content="Professional bond cleaning services covering every area of your Melbourne rental property. 100% Bond Back Guarantee."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/services`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/generated/end-of-lease-cleaning-melbourne.dim_800x500.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bond Cleaning Services Melbourne | Tru Bond Cleaning Melbourne"
        />
        <meta
          name="twitter:description"
          content="Professional bond cleaning services covering every area of your Melbourne rental property. 100% Bond Back Guarantee."
        />
        <link rel="canonical" href={`${SITE_URL}/services`} />
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
              What We Do
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              Our Bond Cleaning Services
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We cover every area of your Melbourne rental property — all backed
              by our 100% Bond Back Guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                data-ocid={`services.item.${i + 1}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full rounded-2xl shadow-card object-cover aspect-[16/10]"
                    loading="lazy"
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green mb-2">
                    {service.tagline}
                  </span>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                    {service.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="flex items-center gap-1.5 text-xs font-medium green-badge rounded-full px-3 py-1"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {h}
                      </span>
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-4 font-medium">
                    {service.intro}
                  </p>

                  <div className="text-foreground/70 leading-relaxed text-sm space-y-3 mb-6">
                    {service.body
                      .split("\n\n")
                      .slice(0, 2)
                      .map((para) => (
                        <p key={para.substring(0, 40)}>{para}</p>
                      ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold shadow-brand"
                    >
                      <Link
                        to={
                          `/services/${service.slug}` as "/services/end-of-lease-cleaning"
                        }
                      >
                        Read Full Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue/5"
                    >
                      <Link to="/contact">Get a Free Quote</Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="brand-gradient py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to Book Your Melbourne Bond Clean?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Same-day bookings available. Free quotes. 100% Bond Back Guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
