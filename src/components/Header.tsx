import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collection", href: "#collection" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="flex items-center justify-between px-4 h-16">
        {/* Menu */}
        <button onClick={() => setOpen(!open)} className="text-luxury-gold p-2 -ml-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="text-center">
          <h1 className="font-heading text-luxury-gold text-sm font-bold tracking-wider leading-tight">
            NRV
          </h1>
          <p className="text-luxury-gold-light text-[8px] tracking-[0.2em] font-body uppercase">
            Jewellers
          </p>
        </div>

        {/* Call */}
        <a
          href="tel:9657333301"
          className="bg-luxury-gold text-luxury-black p-2 rounded-full -mr-1"
        >
          <Phone size={18} />
        </a>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="bg-luxury-black/98 border-t border-luxury-gold/10 px-6 py-4 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-luxury-cream font-body text-sm tracking-wide border-b border-luxury-gold/10 last:border-0 hover:text-luxury-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
