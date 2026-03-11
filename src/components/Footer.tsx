import { Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Gallery", href: "#gallery" },
];

const Footer = () => (
  <footer className="bg-luxury-black px-6 py-10 border-t border-luxury-gold/20">
    <div className="text-center mb-6">
      <h3 className="font-heading text-luxury-gold text-xl font-bold">NRV Jewellers</h3>
      <p className="font-body text-luxury-cream/50 text-xs mt-1 tracking-wider">Nandlal Ratanlal Varma</p>
    </div>

    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {footerLinks.map((link) => (
        <a key={link.href} href={link.href} className="font-body text-luxury-cream/60 text-xs hover:text-luxury-gold transition-colors">
          {link.label}
        </a>
      ))}
    </div>

    <div className="flex justify-center gap-4 mb-6">
      <a href="#" className="bg-luxury-dark p-2.5 rounded-full text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors">
        <Instagram size={18} />
      </a>
      <a href="#" className="bg-luxury-dark p-2.5 rounded-full text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors">
        <Facebook size={18} />
      </a>
    </div>

    <div className="w-12 h-0.5 bg-luxury-gold/30 mx-auto mb-4" />
    <p className="font-body text-luxury-cream/30 text-[10px] text-center">
      © 2026 NRV Jewellers. All rights reserved.
    </p>
  </footer>
);

export default Footer;
