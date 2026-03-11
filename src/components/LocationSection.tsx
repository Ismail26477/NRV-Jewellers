import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => (
  <section id="contact" className="bg-luxury-black px-6 py-14">
    <div className="text-center mb-8">
      <p className="font-body text-luxury-gold text-xs tracking-[0.3em] uppercase mb-2">Find Us</p>
      <h2 className="font-heading text-luxury-cream text-2xl font-bold mb-3">Visit Our Store</h2>
      <div className="w-12 h-0.5 bg-luxury-gold mx-auto" />
    </div>

    <div className="flex flex-col gap-4 mb-6">
      <div className="flex items-start gap-3 bg-luxury-dark rounded-xl p-4">
        <MapPin className="text-luxury-gold shrink-0 mt-0.5" size={20} />
        <div>
          <p className="font-heading text-luxury-gold text-sm font-semibold">Store Location</p>
          <p className="font-body text-luxury-cream/70 text-xs mt-1">Nanded, Maharashtra</p>
        </div>
      </div>
      <div className="flex items-start gap-3 bg-luxury-dark rounded-xl p-4">
        <Phone className="text-luxury-gold shrink-0 mt-0.5" size={20} />
        <div>
          <p className="font-heading text-luxury-gold text-sm font-semibold">Phone</p>
          <a href="tel:9657333301" className="font-body text-luxury-cream/70 text-xs mt-1 block">9657333301</a>
        </div>
      </div>
      <div className="flex items-start gap-3 bg-luxury-dark rounded-xl p-4">
        <Clock className="text-luxury-gold shrink-0 mt-0.5" size={20} />
        <div>
          <p className="font-heading text-luxury-gold text-sm font-semibold">Business Hours</p>
          <p className="font-body text-luxury-cream/70 text-xs mt-1">Mon – Sun: 10AM – 9PM</p>
        </div>
      </div>
    </div>

    {/* Map */}
    <div className="rounded-xl overflow-hidden mb-6 border border-luxury-gold/20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60424.94896834!2d77.27!3d19.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7a6e3e2b1f1%3A0x3e1c5a0b0b0b0b0b!2sNanded%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Store Location"
      />
    </div>

    <a
      href="https://maps.google.com/?q=Nanded,Maharashtra"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-luxury-gold text-luxury-black font-body font-semibold text-sm py-3.5 rounded-full text-center tracking-wide shadow-gold"
    >
      Get Directions
    </a>
  </section>
);

export default LocationSection;
