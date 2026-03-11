import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";

const CollectionSection = () => (
  <section id="collection" className="bg-luxury-black px-6 py-14">
    <ScrollReveal>
      <div className="text-center mb-8">
        <p className="font-body text-luxury-gold text-xs tracking-[0.3em] uppercase mb-2">Our Collection</p>
        <h2 className="font-heading text-luxury-cream text-2xl font-bold mb-3">
          Featured Jewellery
        </h2>
        <div className="w-12 h-0.5 bg-luxury-gold mx-auto" />
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-2 gap-4">
      {products.map((item, i) => (
        <ScrollReveal key={item.id} delay={i * 100}>
          <Link to={`/product/${item.id}`} className="group relative block rounded-xl overflow-hidden shadow-gold">
            <div className="aspect-square overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="font-heading text-luxury-gold text-sm font-semibold">{item.title}</h3>
              <p className="font-body text-luxury-cream/60 text-[10px] mt-0.5">{item.desc}</p>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default CollectionSection;
