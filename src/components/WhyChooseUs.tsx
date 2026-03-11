const features = [
  { icon: "💎", title: "Certified Jewellery", desc: "BIS hallmarked gold" },
  { icon: "✨", title: "Premium Craftsmanship", desc: "Handcrafted perfection" },
  { icon: "🏆", title: "Trusted Local Brand", desc: "Nanded's finest since decades" },
  { icon: "🛡️", title: "Quality Assurance", desc: "100% genuine guarantee" },
];

const WhyChooseUs = () => (
  <section className="bg-luxury-gold-gradient px-6 py-14">
    <div className="text-center mb-8">
      <p className="font-body text-luxury-dark text-xs tracking-[0.3em] uppercase mb-2">Why Us</p>
      <h2 className="font-heading text-foreground text-2xl font-bold mb-3">Why Choose Us</h2>
      <div className="w-12 h-0.5 bg-luxury-dark mx-auto" />
    </div>

    <div className="grid grid-cols-2 gap-4">
      {features.map((f) => (
        <div key={f.title} className="bg-luxury-black/90 rounded-xl p-5 text-center shadow-gold">
          <span className="text-3xl block mb-3">{f.icon}</span>
          <h3 className="font-heading text-luxury-gold text-sm font-semibold mb-1">{f.title}</h3>
          <p className="font-body text-luxury-cream/60 text-[10px]">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
