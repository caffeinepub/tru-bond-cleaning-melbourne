import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function EndOfLeaseCleaningPage() {
  return (
    <ServicePageTemplate
      meta={{
        title:
          "End of Lease Cleaning Melbourne | Bond Clean Specialists | Tru Bond",
        description:
          "Professional end of lease cleaning in Melbourne. REIV-standard checklist, 100% Bond Back Guarantee. We clean everything — oven, carpets, windows, bathrooms & more.",
        keywords:
          "end of lease cleaning Melbourne, bond cleaning Melbourne, end of tenancy cleaning Melbourne, exit cleaning Melbourne, bond clean Melbourne",
        canonical: "/services/end-of-lease-cleaning",
        ogImage:
          "/assets/generated/end-of-lease-cleaning-melbourne.dim_800x500.jpg",
      }}
      heading="End of Lease Cleaning Melbourne"
      tagline="Melbourne's #1 Bond Clean Specialists"
      image="/assets/generated/end-of-lease-cleaning-melbourne.dim_800x500.jpg"
      imageAlt="Professional end of lease cleaning service in a Melbourne rental property — Tru Bond Cleaning Melbourne team at work"
      highlights={[
        "REIV-Standard Checklist",
        "Every Room Covered",
        "100% Bond Back Guarantee",
        "Same Day Available",
        "Fixed Price Quotes",
      ]}
      intro="End of lease cleaning is the most important clean you'll ever do in a rental property. When you move out in Melbourne, your real estate agent inspects the property against the original condition report. If the property isn't clean enough, they'll deduct money from your bond — and in some cases, you might lose hundreds or even thousands of dollars."
      paragraphs={[
        "At Tru Bond Cleaning Melbourne, we know exactly what agents look for. We've completed thousands of end of lease cleans across Melbourne, from Southbank apartments to suburban family homes in Ringwood, Dandenong, and Geelong. Our team follows a comprehensive REIV-standard checklist so nothing gets missed.",
        "We bring all our own equipment and eco-friendly cleaning products. You don't need to buy or supply anything. Our team arrives on time and works efficiently, usually completing a standard two-bedroom clean in under four hours.",
        "What makes our service different? We offer a 100% Bond Back Guarantee. If your real estate agent finds any issues with our work, contact us within 72 hours and we'll come back and fix it — completely free. No arguments, no excuses. We want you to get every dollar of your bond back.",
        "Pricing is transparent and based on the size of your property. We give you a fixed quote upfront so there are no nasty surprises on the day. Same-day and next-day bookings are available, and we work seven days a week including public holidays.",
        "Whether you're moving out of a studio in the CBD or a five-bedroom house in the outer suburbs, Tru Bond Cleaning Melbourne has the experience, equipment, and drive to get the job done right. Book online today, or message us on WhatsApp for an instant quote.",
        "Tru Bond Cleaning Melbourne — we make moving out easy.",
      ]}
      includes={[
        "Full kitchen clean (oven, stovetop, rangehood, microwave)",
        "Cupboards inside and out — every shelf and drawer",
        "All bathrooms and ensuites — floor to ceiling",
        "Shower screens, tiles, grout, and toilet",
        "All bedrooms and living areas — vacuumed and mopped",
        "Windows inside and outside (where accessible)",
        "Walls and skirting boards — marks and scuffs removed",
        "Light fittings, switches, and door tracks",
        "Laundry area including tub and appliances",
        "Balcony or courtyard sweep and mop",
      ]}
      relatedServices={[
        {
          title: "Carpet Steam Cleaning",
          to: "/services/carpet-steam-cleaning",
        },
        { title: "Window Cleaning", to: "/services/window-cleaning" },
        {
          title: "Oven & Kitchen Deep Clean",
          to: "/services/oven-kitchen-cleaning",
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
