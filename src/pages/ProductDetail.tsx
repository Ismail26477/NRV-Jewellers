import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [currentImg, setCurrentImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-luxury-cream font-heading text-xl mb-4">Product not found</p>
          <Link to="/" className="text-luxury-gold font-body text-sm underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const nextImg = () => setCurrentImg((c) => (c + 1) % product.gallery.length);
  const prevImg = () => setCurrentImg((c) => (c - 1 + product.gallery.length) % product.gallery.length);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-luxury-black relative shadow-2xl">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-luxury-gold/20 flex items-center justify-between px-4 h-14">
        <Link to="/#collection" className="text-luxury-gold p-2 -ml-2">
          <ArrowLeft size={22} />
        </Link>
        <h1 className="font-heading text-luxury-gold text-sm font-bold tracking-wider">
          {product.category}
        </h1>
        <a href="tel:9657333301" className="bg-luxury-gold text-luxury-black p-2 rounded-full">
          <Phone size={16} />
        </a>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          {product.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${product.title} ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out`}
              style={{
                transform: `translateX(${(i - currentImg) * 100}%)`,
              }}
            />
          ))}
        </div>

        <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 bg-luxury-black/50 text-luxury-gold p-2 rounded-full border border-luxury-gold/30">
          <ChevronLeft size={18} />
        </button>
        <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 bg-luxury-black/50 text-luxury-gold p-2 rounded-full border border-luxury-gold/30">
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {product.gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImg(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentImg ? "bg-luxury-gold w-5" : "bg-luxury-cream/40"}`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 px-4 py-3 bg-luxury-dark">
          {product.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImg(i)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === currentImg ? "border-luxury-gold" : "border-transparent"}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-6 py-6">
        <ScrollReveal>
          <p className="font-body text-luxury-gold text-xs tracking-[0.3em] uppercase mb-1">{product.category}</p>
          <h2 className="font-heading text-luxury-cream text-2xl font-bold mb-2">{product.title}</h2>
          <p className="font-body text-luxury-cream/60 text-sm mb-4">{product.desc}</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-luxury-dark rounded-xl p-5 mb-5">
            <p className="font-heading text-luxury-gold text-xl font-bold mb-4">{product.price}</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="font-body text-luxury-cream/40 text-[10px] uppercase tracking-wider">Weight</p>
                <p className="font-body text-luxury-cream text-sm">{product.weight}</p>
              </div>
              <div>
                <p className="font-body text-luxury-cream/40 text-[10px] uppercase tracking-wider">Purity</p>
                <p className="font-body text-luxury-cream text-sm">{product.purity}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h3 className="font-heading text-luxury-gold text-base font-semibold mb-2">About This Collection</h3>
          <p className="font-body text-luxury-cream/60 text-sm leading-relaxed mb-6">{product.details}</p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/919657333301?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-luxury-cream font-body font-semibold text-sm py-3.5 rounded-full shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Inquire on WhatsApp
            </a>
            <a href="tel:9657333301" className="border border-luxury-gold text-luxury-gold font-body font-medium text-sm py-3.5 rounded-full text-center tracking-wide">
              Call Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProductDetail;
