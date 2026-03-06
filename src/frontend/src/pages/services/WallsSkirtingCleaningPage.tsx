import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WallsSkirtingCleaningPage() {
  return (
    <ServicePageTemplate
      meta={{
        title:
          "Walls & Skirting Board Cleaning Melbourne | Bond Wall Clean | Tru Bond",
        description:
          "Professional walls and skirting board cleaning in Melbourne. We remove scuffs, marks and fingerprints with paint-safe techniques. Bond inspection ready.",
        keywords:
          "wall cleaning Melbourne, skirting board cleaning Melbourne, bond wall clean Melbourne, scuff mark removal Melbourne, end of lease wall cleaning Melbourne",
        canonical: "/services/walls-skirting-cleaning",
        ogImage:
          "/assets/generated/walls-skirting-cleaning-melbourne.dim_800x500.jpg",
      }}
      heading="Walls & Skirting Board Cleaning Melbourne"
      tagline="Every mark, scuff, and fingerprint removed"
      image="/assets/generated/walls-skirting-cleaning-melbourne.dim_800x500.jpg"
      imageAlt="Professional walls and skirting board cleaning Melbourne — Tru Bond Cleaning Melbourne removing marks and scuffs"
      highlights={[
        "Sugar Soap Treatment",
        "Paint-Safe Technique",
        "Every Room Covered",
        "Light Switch Plates",
        "Door Frames & Architraves",
      ]}
      intro="Walls and skirting boards tell the story of how a property has been lived in. Fingerprints near light switches, scuff marks at furniture height, crayon or pencil marks in kids' rooms, and general grime that accumulates over a tenancy — all of these are visible to property managers during exit inspections. Dirty walls are a surprisingly common reason for bond deductions in Melbourne."
      paragraphs={[
        "At Tru Bond Cleaning Melbourne, we carefully clean walls and skirting boards throughout your entire property using the right techniques to remove marks without damaging paint. We know the difference between a scuff that wipes off easily and one that requires more careful treatment, and we work accordingly.",
        "We use sugar soap solution and microfibre cloths for most wall cleaning, which lifts grime without dulling paint finishes. For more stubborn marks, we use a targeted spot-treatment approach to remove the mark without causing paint damage.",
        "Our team is trained to recognise the difference between general cleaning and areas that may require touching up with paint — and we'll advise you honestly if we find anything that looks like it may need a paint repair rather than a clean.",
        "Skirting boards are often the last thing people think about when cleaning a property, but they're one of the first things a property manager checks. Dust and grime build up on the top edge of skirting boards over months and years. Our team cleans every skirting board in every room — including the backs of doors and inside wardrobes.",
        "Light switch plates and power points are another frequently missed area. These small plastic surfaces attract fingerprints and grease over time. We wipe every switch plate clean, restoring a fresh, well-maintained appearance.",
        "Ready to tick walls and skirting boards off your bond cleaning checklist? Book Tru Bond Cleaning Melbourne today and let our experienced team handle every detail so you can move out with confidence.",
      ]}
      includes={[
        "Full wall wipe-down — every room in the property",
        "Mark, scuff, and fingerprint removal",
        "Skirting boards — top, face, and behind (accessible)",
        "Door frames and architraves — inside and out",
        "Light switch plates and power point covers",
        "Cornice (where practical and accessible)",
        "Inside wardrobe walls and backs of doors",
        "Sugar soap treatment — paint-safe technique",
      ]}
      relatedServices={[
        {
          title: "End of Lease Cleaning",
          to: "/services/end-of-lease-cleaning",
        },
        { title: "Bathroom Cleaning", to: "/services/bathroom-cleaning" },
        { title: "Window Cleaning", to: "/services/window-cleaning" },
      ]}
    />
  );
}
