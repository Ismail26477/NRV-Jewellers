import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Best jewellery shop in Nanded. Excellent designs and trusted service.",
    name: "Priya Sharma",
    role: "Loyal Customer",
  },
  {
    text: "Bought my wedding set from NRV Jewellers. Absolutely stunning craftsmanship and fair pricing!",
    name: "Rahul Deshmukh",
    role: "Happy Groom",
  },
  {
    text: "The diamond ring collection is amazing. Highly recommend for engagement shopping.",
    name: "Sneha Patil",
    role: "Engaged Customer",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="bg-luxury-cream px-6 py-14">
    <div className="text-center mb-8">
      <p className="font-body text-luxury-gold text-xs tracking-[0.3em] uppercase mb-2">Reviews</p>
      <h2 className="font-heading text-foreground text-2xl font-bold mb-3">What Our Customers Say</h2>
      <div className="w-12 h-0.5 bg-luxury-gold mx-auto" />
    </div>

    <div className="flex flex-col gap-4">
      {testimonials.map((t) => (
        <div key={t.name} className="bg-luxury-black rounded-xl p-5 shadow-gold">
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />
            ))}
          </div>
          <p className="font-body text-luxury-cream/80 text-sm italic mb-4">"{t.text}"</p>
          <div>
            <p className="font-heading text-luxury-gold text-sm font-semibold">{t.name}</p>
            <p className="font-body text-luxury-cream/50 text-xs">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
