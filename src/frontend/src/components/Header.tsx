import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", ocid: "nav.home.link" },
    { to: "/services", label: "Services", ocid: "nav.services.link" },
    { to: "/about", label: "About", ocid: "nav.about.link" },
    { to: "/contact", label: "Contact", ocid: "nav.contact.link" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue shadow-brand">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-[1.05rem] text-brand-blue tracking-tight">
                Tru Bond Cleaning
              </span>
              <span className="text-[0.65rem] font-medium text-brand-green uppercase tracking-widest -mt-0.5">
                Melbourne
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-brand-blue rounded-md hover:bg-secondary transition-colors"
                activeProps={{ className: "text-brand-blue bg-secondary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              data-ocid="nav.quote.primary_button"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold shadow-brand"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground/70 hover:text-brand-blue hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-brand-blue rounded-md hover:bg-secondary transition-colors"
                  activeProps={{ className: "text-brand-blue bg-secondary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <Button
                  asChild
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
                  data-ocid="nav.quote.primary_button"
                  onClick={() => setMobileOpen(false)}
                >
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
