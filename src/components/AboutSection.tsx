import storeImg from "@/assets/store-display.png";

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "5000+", label: "Happy Customers" },
  { number: "1000+", label: "Jewellery Designs" },
];

const AboutSection = () => (
  <section id="about" className="bg-luxury-cream px-6 py-14">
    <div className="text-center mb-8">
      <p className="font-body text-luxury-gold text-xs tracking-[0.3em] uppercase mb-2">Our Story</p>
      <h2 className="font-heading text-foreground text-2xl font-bold mb-4">
        Legacy of Trust &<br />Craftsmanship
      </h2>
      <div className="w-12 h-0.5 bg-luxury-gold mx-auto mb-6" />
    </div>

    <div className="rounded-xl overflow-hidden mb-6 shadow-gold">
      <img src={storeImg} alt="Nandlal Ratanlal Varma Jewellers Store" className="w-full h-48 object-cover" />
    </div>

    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8 text-center">
      Nandlal Ratanlal Varma Jewellers in Nanded is known for its premium quality gold and diamond jewellery. With years of trust and craftsmanship, we bring elegant designs that celebrate tradition and modern beauty.
    </p>

    <div className="grid grid-cols-3 gap-3">
      {stats.map((s) => (
        <div key={s.label} className="text-center bg-luxury-black rounded-xl py-4 px-2 shadow-gold">
          <p className="font-heading text-luxury-gold text-xl font-bold">{s.number}</p>
          <p className="font-body text-luxury-cream/70 text-[10px] mt-1 leading-tight">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
