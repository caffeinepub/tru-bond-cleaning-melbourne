import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function OvenKitchenCleaningPage() {
  return (
    <ServicePageTemplate
      meta={{
        title:
          "Oven & Kitchen Deep Cleaning Melbourne | Bond Kitchen Clean | Tru Bond",
        description:
          "Professional oven and kitchen deep cleaning in Melbourne. We degrease ovens, rangehoods, stovetops, cupboards and more. Bond inspection guaranteed.",
        keywords:
          "oven cleaning Melbourne, kitchen deep cleaning Melbourne, rangehood cleaning Melbourne, oven bond clean Melbourne, kitchen cleaning end of lease Melbourne",
        canonical: "/services/oven-kitchen-cleaning",
        ogImage:
          "/assets/generated/oven-kitchen-cleaning-melbourne.dim_800x500.jpg",
      }}
      heading="Oven & Kitchen Deep Cleaning Melbourne"
      tagline="The toughest kitchen clean in Melbourne"
      image="/assets/generated/oven-kitchen-cleaning-melbourne.dim_800x500.jpg"
      imageAlt="Professional oven and kitchen deep cleaning Melbourne — Tru Bond Cleaning Melbourne degreasing and restoring rental kitchens"
      highlights={[
        "Full Oven Degreasing",
        "Rangehood & Filter",
        "Cupboards Inside & Out",
        "Benchtops & Splashback",
        "REIV Standard",
      ]}
      intro="The kitchen is the hardest room to clean in any rental property — and the oven is the hardest thing in the kitchen. Baked-on grease, charred food residue, and years of cooking build-up turn the oven into one of the most common causes of bond disputes in Melbourne. Real estate agents always check the oven during exit inspections, and a dirty one is almost guaranteed to cost you bond money."
      paragraphs={[
        "At Tru Bond Cleaning Melbourne, we give kitchens the deep clean they deserve. Our team uses professional degreasers, specialised oven cleaning products, and hours of careful work to restore your kitchen to a condition that impresses even the strictest property manager.",
        "Our oven cleaning process involves applying a professional-grade caustic cleaner, allowing it to break down the grease and carbon deposits, then carefully removing all residue by hand. We take out oven racks and soak them separately to restore them to a near-new condition.",
        "The rangehood is another area that often gets overlooked in DIY cleans. Grease builds up in the filter and on the fan blades over months of cooking. We remove and degrease every component so the rangehood looks and functions as it should.",
        "Cupboard interiors are inspected closely by agents. Crumbs, grease, and sticky residue inside cupboards are common bond deduction triggers. We wipe every shelf and drawer — inside, outside, and around the hinges.",
        "Whether your kitchen is mildly dirty or seriously neglected, Tru Bond Cleaning Melbourne has the products and the patience to get it spotless. We work to REIV checklist standards and back every clean with our 100% Bond Back Guarantee.",
        "Book your oven and kitchen deep clean today — and let us take the most stressful part of your move off your hands.",
      ]}
      includes={[
        "Oven interior — racks, fan, door glass, seals, cavity",
        "Stovetop and burners — grates, caps, drip pans",
        "Rangehood — filter, grease trap, fan blades, exterior",
        "Microwave — interior, door seals, exterior",
        "Dishwasher — filter, door seals, interior drum",
        "All kitchen cupboards inside and out",
        "Benchtops and splashback — fully degreased",
        "Sink, tapware, and drain",
        "Kitchen exhaust fan",
      ]}
      relatedServices={[
        {
          title: "End of Lease Cleaning",
          to: "/services/end-of-lease-cleaning",
        },
        { title: "Bathroom Cleaning", to: "/services/bathroom-cleaning" },
        {
          title: "Walls & Skirting Boards",
          to: "/services/walls-skirting-cleaning",
        },
      ]}
    />
  );
}
