import { Link } from "@tanstack/react-router";
import { Award, MessageCircle, Shield, Sparkles } from "lucide-react";

const WA_LINK = "https://wa.me/61488841883";

const serviceAreas = [
  "Melbourne CBD",
  "Fitzroy",
  "Collingwood",
  "Richmond",
  "Southbank",
  "Docklands",
  "St Kilda",
  "South Yarra",
  "Prahran",
  "Hawthorn",
  "Camberwell",
  "Box Hill",
  "Dandenong",
  "Ringwood",
  "Werribee",
  "Footscray",
  "Brunswick",
  "Carlton",
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const services = [
  { to: "/services/end-of-lease-cleaning", label: "End of Lease Cleaning" },
  { to: "/services/carpet-steam-cleaning", label: "Carpet Steam Cleaning" },
  { to: "/services/window-cleaning", label: "Window Cleaning" },
  { to: "/services/oven-kitchen-cleaning", label: "Oven & Kitchen Cleaning" },
  { to: "/services/bathroom-cleaning", label: "Bathroom Cleaning" },
  { to: "/services/walls-skirting-cleaning", label: "Walls & Skirting Boards" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/80">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-base text-white">
                  Tru Bond Cleaning
                </span>
                <span className="text-[0.65rem] font-medium text-brand-green uppercase tracking-widest -mt-0.5">
                  Melbourne
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Melbourne's bond cleaning specialists. We help you get your full
              bond back — guaranteed.
            </p>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Shield className="w-4 h-4 text-brand-green shrink-0" />
                <span>Fully Insured &amp; Police Checked</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Award className="w-4 h-4 text-brand-green shrink-0" />
                <span>100% Bond Back Guarantee</span>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-brand-green font-medium hover:text-brand-green/80 transition-colors mt-1"
              >
                <MessageCircle className="w-4 h-4" />
                0488 841 883
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs text-white/60 bg-white/5 border border-white/10 rounded px-2 py-0.5"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} Tru Bond Cleaning Melbourne. All rights reserved.</p>
          <p>
            Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
