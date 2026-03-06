import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CarpetSteamCleaningPage() {
  return (
    <ServicePageTemplate
      meta={{
        title:
          "Carpet Steam Cleaning Melbourne | Hot Water Extraction | Tru Bond Cleaning",
        description:
          "Professional carpet steam cleaning in Melbourne. Hot water extraction removes stains, odours & allergens. Pet stain specialist. Book your bond carpet clean today.",
        keywords:
          "carpet steam cleaning Melbourne, carpet cleaning Melbourne, hot water extraction Melbourne, carpet bond cleaning Melbourne, pet stain removal Melbourne",
        canonical: "/services/carpet-steam-cleaning",
        ogImage:
          "/assets/generated/carpet-steam-cleaning-melbourne.dim_800x500.jpg",
      }}
      heading="Carpet Steam Cleaning Melbourne"
      tagline="Deep clean that removes stains, odours & allergens"
      image="/assets/generated/carpet-steam-cleaning-melbourne.dim_800x500.jpg"
      imageAlt="Professional carpet steam cleaning Melbourne — Tru Bond Cleaning Melbourne hot water extraction service"
      highlights={[
        "Hot Water Extraction",
        "Pet Stain Specialist",
        "Dries in 2–4 Hours",
        "Industry-Grade Equipment",
        "Bond Inspection Ready",
      ]}
      intro="Dirty carpets are one of the most common reasons tenants lose bond money in Melbourne. Real estate agents notice stained, smelly, or matted carpets immediately during exit inspections. If the carpets aren't in the condition described in the original lease, you're looking at a bond deduction — sometimes a big one."
      paragraphs={[
        "At Tru Bond Cleaning Melbourne, we use professional hot water extraction (steam cleaning) equipment to deep clean every carpet fibre. This isn't the same as running a hire machine from the supermarket. Our commercial-grade equipment injects hot water and cleaning solution deep into the carpet pile, then extracts all the dirt, bacteria, allergens, and moisture in one powerful pass.",
        "We use Prochem, Chemspec, and other industry-leading carpet cleaning solutions that are safe for children, pets, and people with allergies. Our products are biodegradable and leave no toxic residue in your carpet fibres.",
        "Steam cleaning is the method recommended by most carpet manufacturers and required by many Melbourne real estate agents and property managers. It removes more dirt and bacteria than dry cleaning methods, extends the life of your carpet, and leaves it looking and smelling fresh.",
        "We often bundle carpet steam cleaning with our end of lease package at a discounted rate — it's the most cost-effective way to tackle both services in one visit. Our team coordinates the cleaning schedule so carpets are done after all other cleaning is complete, ensuring they stay spotless for the final inspection.",
        "Got pets? We have a specialised pet treatment that breaks down the proteins in urine and eliminates odour at the source — not just masking it with fragrance. This is critical for passing bond inspections in pet-friendly rentals.",
        "Book Tru Bond Cleaning Melbourne for carpet steam cleaning today. Fast, effective, and backed by our 100% Bond Back Guarantee. Your carpets will look better than they have in years — and your real estate agent will have nothing to complain about.",
      ]}
      includes={[
        "All carpeted rooms, hallways, and stairways",
        "Pre-treatment of stubborn stains (pet, food, wine, mud)",
        "Hot water extraction — deep cleaning every fibre",
        "Deodorising treatment for pet and musty odours",
        "Rapid drying (usually dry within 2–4 hours)",
        "Post-clean inspection to bond-standard",
        "Specialised pet urine protein treatment",
        "Safe, biodegradable cleaning solutions",
      ]}
      relatedServices={[
        {
          title: "End of Lease Cleaning",
          to: "/services/end-of-lease-cleaning",
        },
        { title: "Window Cleaning", to: "/services/window-cleaning" },
        { title: "Bathroom Cleaning", to: "/services/bathroom-cleaning" },
      ]}
    />
  );
}
