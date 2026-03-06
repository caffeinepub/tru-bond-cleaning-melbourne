import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function BathroomCleaningPage() {
  return (
    <ServicePageTemplate
      meta={{
        title:
          "Bathroom & Toilet Cleaning Melbourne | Bond Bathroom Clean | Tru Bond",
        description:
          "Professional bathroom and toilet cleaning in Melbourne. We remove mould, soap scum and hard water stains. Sparkling bathrooms for your bond inspection.",
        keywords:
          "bathroom cleaning Melbourne, toilet cleaning Melbourne, bond bathroom clean Melbourne, mould removal bathroom Melbourne, shower screen cleaning Melbourne",
        canonical: "/services/bathroom-cleaning",
        ogImage:
          "/assets/generated/bathroom-cleaning-melbourne.dim_800x500.jpg",
      }}
      heading="Bathroom & Toilet Cleaning Melbourne"
      tagline="Spotless bathrooms for a smooth bond inspection"
      image="/assets/generated/bathroom-cleaning-melbourne.dim_800x500.jpg"
      imageAlt="Sparkling clean bathroom in Melbourne rental property — professional bathroom cleaning by Tru Bond Cleaning Melbourne"
      highlights={[
        "Mould Treatment",
        "Shower Screen Restoration",
        "Grout Brightening",
        "Full Toilet Clean",
        "Anti-Fungal Products",
      ]}
      intro="Bathrooms and toilets need to be spotless for a successful bond inspection in Melbourne. Soap scum, mould, hard water stains, and grime can build up quickly in bathrooms — especially in properties that haven't been professionally cleaned during the tenancy. Real estate agents inspect bathrooms closely, and any visible mould or limescale can lead to immediate bond deductions."
      paragraphs={[
        "At Tru Bond Cleaning Melbourne, we give every bathroom and ensuite the deep clean it needs to pass even the toughest inspection. Our team tackles everything from the ceiling to the floor drain, using commercial-grade cleaning products that cut through soap scum and mineral deposits without damaging tiles or fixtures.",
        "Mould in the shower and on ceiling tiles is one of the most common complaints from property managers. We treat mould with anti-fungal products, scrub affected areas thoroughly, and leave surfaces clean and mould-free. Where mould has penetrated the grout deeply, we can apply a grout cleaner and brightener to restore a near-white finish.",
        "Soap scum on shower screens is another inspection trigger. Our team uses professional glass cleaner and a hard water stain remover to restore shower screens to a crystal-clear shine. No streaks, no cloudy residue.",
        "We clean both the inside and outside of toilet cisterns, under the rim of the toilet bowl, and around the base of the toilet — areas that DIY cleaners frequently miss but that agents inspect during exit reviews.",
        "How many bathrooms do you have? We service properties with any number of bathrooms and ensuites. Multi-bathroom homes simply take more time, which is reflected in our transparent, upfront pricing.",
        "Book Tru Bond Cleaning Melbourne for bathroom and toilet cleaning — and get those bathrooms sparkling for your inspection day.",
      ]}
      includes={[
        "Shower recess — tiles, grout, glass, screen, taps, drain",
        "Bathtub — bowl, taps, overflow, and surround",
        "Toilet — bowl, cistern, seat, lid, base, and pedestal",
        "Vanity — basin, taps, cabinet inside and out, mirror",
        "Tiles and grout — full scrub and mould treatment",
        "Floors — mopped and thoroughly dried",
        "Exhaust fan — cover removed and cleaned",
        "Towel rails and toilet roll holder",
        "Door tracks, frames, and light fittings",
      ]}
      relatedServices={[
        {
          title: "End of Lease Cleaning",
          to: "/services/end-of-lease-cleaning",
        },
        {
          title: "Oven & Kitchen Cleaning",
          to: "/services/oven-kitchen-cleaning",
        },
        {
          title: "Walls & Skirting Boards",
          to: "/services/walls-skirting-cleaning",
        },
      ]}
    />
  );
}
