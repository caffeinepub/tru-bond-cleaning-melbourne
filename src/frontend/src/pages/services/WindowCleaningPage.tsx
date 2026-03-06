import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WindowCleaningPage() {
  return (
    <ServicePageTemplate
      meta={{
        title:
          "Window Cleaning Melbourne | Bond Clean Windows | Tru Bond Cleaning Melbourne",
        description:
          "Professional window cleaning in Melbourne for bond inspections. Streak-free glass, tracks, frames, flyscreens and balcony panels. Book your window clean today.",
        keywords:
          "window cleaning Melbourne, bond clean windows Melbourne, streak-free window cleaning Melbourne, window cleaning end of lease Melbourne",
        canonical: "/services/window-cleaning",
        ogImage: "/assets/generated/window-cleaning-melbourne.dim_800x500.jpg",
      }}
      heading="Window Cleaning Melbourne"
      tagline="Crystal clear windows inside and out"
      image="/assets/generated/window-cleaning-melbourne.dim_800x500.jpg"
      imageAlt="Professional window cleaning Melbourne — streak-free glass by Tru Bond Cleaning Melbourne"
      highlights={[
        "Streak-Free Guarantee",
        "Tracks & Frames Cleaned",
        "Flyscreen Cleaning",
        "Inside & Outside",
        "Upper Floors Accessible",
      ]}
      intro="Dirty windows are easy to overlook when you're packing up and moving out — but real estate agents notice them straight away. Streaky, grimy windows can lead to bond deductions even if the rest of your property is spotless. It's not worth the risk."
      paragraphs={[
        "At Tru Bond Cleaning Melbourne, our window cleaning service covers every pane of glass in your rental property, inside and out. We use professional squeegees, microfibre cloths, and streak-free cleaning solutions to leave every window crystal clear. No drips, no streaks, no smudges.",
        "We pay special attention to window tracks — those narrow channels at the bottom of sliding windows and doors where dirt, dead insects, and moisture build up over months and years. Agents routinely check window tracks, and a dirty track can leave a bad impression even if the glass is clean.",
        "Our team uses extendable water-fed poles for hard-to-reach upper-floor windows, ensuring safety and a thorough result without the need for ladders inside the property.",
        "Clean windows dramatically improve the overall feel of a property. Natural light floods in properly, rooms look brighter, and the property presents as well-maintained. This is exactly the impression you want to create for your exit inspection.",
        "We can complete window cleaning as a standalone service or bundle it with our end of lease or full bond cleaning package. Bundling is the most convenient option because our team handles everything in one visit — no need to coordinate multiple tradespeople.",
        "Ready to walk out of your rental with clean windows and your bond intact? Book Tru Bond Cleaning Melbourne online today. We service all Melbourne suburbs and offer same-day and next-day availability.",
      ]}
      includes={[
        "All interior window panes — every room",
        "All exterior window panes (safely accessible)",
        "Sliding door tracks — inside and out",
        "Window frames and sills — fully wiped",
        "Flyscreen removal, wash, and reinstall",
        "Balcony glass panels and sliding doors",
        "Streak-free professional squeegee technique",
        "Extendable pole for upper-floor windows",
      ]}
      relatedServices={[
        {
          title: "End of Lease Cleaning",
          to: "/services/end-of-lease-cleaning",
        },
        {
          title: "Carpet Steam Cleaning",
          to: "/services/carpet-steam-cleaning",
        },
        {
          title: "Walls & Skirting Boards",
          to: "/services/walls-skirting-cleaning",
        },
      ]}
    />
  );
}
