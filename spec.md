# Tru Bond Cleaning Melbourne

## Current State
- Full-stack Caffeine app with Motoko backend and React + TanStack Router frontend
- 10 pages: Home, Services, About, Contact, and 6 service sub-pages (End of Lease, Carpet Steam, Window, Oven & Kitchen, Bathroom, Walls & Skirting)
- ServicePageTemplate component used across all service pages
- SEO: Helmet meta tags, JSON-LD schemas, alt text on all images
- 9 branded generated images in /assets/generated/
- No suburb-specific pages exist yet

## Requested Changes (Diff)

### Add
- 10 Melbourne suburb pages:
  1. South Yarra — /suburbs/south-yarra
  2. Richmond — /suburbs/richmond
  3. St Kilda — /suburbs/st-kilda
  4. Carlton — /suburbs/carlton
  5. Fitzroy — /suburbs/fitzroy
  6. Brunswick — /suburbs/brunswick
  7. Prahran — /suburbs/prahran
  8. Docklands — /suburbs/docklands
  9. Box Hill — /suburbs/box-hill
  10. Frankston — /suburbs/frankston
- Each suburb page:
  - SEO title tag: "Bond Cleaning [Suburb] | Tru Bond Cleaning Melbourne"
  - Meta description (~155 chars, suburb-specific)
  - Meta keywords (suburb + service keywords)
  - Canonical URL
  - Open Graph tags
  - JSON-LD LocalBusiness schema with suburb area
  - 1 branded hero image per suburb with descriptive alt text
  - ~500-700 words of suburb-specific content (suburb character, rental market, what agents check locally, CTA)
  - What's Included checklist
  - WhatsApp + Get Quote CTAs
- SuburbPageTemplate component (reusable, mirrors ServicePageTemplate pattern)
- routeTree.ts updated with all 10 suburb routes
- HomePage updated: new "Areas We Serve" section with grid of suburb links above the FAQ section
- 10 suburb branded images in /assets/generated/

### Modify
- HomePage.tsx: add "Areas We Serve in Melbourne" section with links to all suburb pages (improves internal linking for SEO)
- routeTree.ts: register all 10 suburb routes

### Remove
- Nothing removed
