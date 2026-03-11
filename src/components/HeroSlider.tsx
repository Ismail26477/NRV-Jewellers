import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg1 from "@/assets/gold-necklace-set.png";
import heroImg2 from "@/assets/bridal-set.png";
import heroImg3 from "@/assets/gold-detail.png";
import heroImg4 from "@/assets/diamond-ring.png";

const slides = [
  { img: heroImg1, alt: "Gold Necklace Set" },
  { img: heroImg2, alt: "Bridal Jewellery Set" },
  { img: heroImg3, alt: "Gold Craftsmanship Detail" },
  { img: heroImg4, alt: "Diamond Ring" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const next = useCallback(() => {
    setDirection("right");
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = () => {
    setDirection("left");
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative pt-16 bg-luxury-black overflow-hidden">
      {/* Slider */}
      <div className="relative h-[60vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-transform duration-600 ease-in-out ${
              i === current
                ? "translate-x-0"
                : direction === "right"
                ? i === (current + 1) % slides.length
                  ? "translate-x-full"
                  : "-translate-x-full"
                : i === (current - 1 + slides.length) % slides.length
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            style={{
              transform:
                i === current
                  ? "translateX(0)"
                  : i > current || (current === slides.length - 1 && i === 0)
                  ? "translateX(100%)"
                  : "translateX(-100%)",
              transition: "transform 0.6s ease-in-out",
            }}
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
          </div>
        ))}

        {/* Arrows */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-luxury-black/50 text-luxury-gold p-2 rounded-full border border-luxury-gold/30 z-10">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-luxury-black/50 text-luxury-gold p-2 rounded-full border border-luxury-gold/30 z-10">
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? "right" : "left"); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-luxury-gold w-6" : "bg-luxury-cream/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text Overlay */}
      <div className="px-6 py-10 text-center">
        <h2 className="font-heading text-luxury-gold text-3xl font-bold leading-tight mb-3">
          Timeless Jewellery.<br />
          <span className="text-luxury-cream">Crafted With Tradition.</span>
        </h2>
        <p className="font-body text-luxury-cream/70 text-sm mb-8 max-w-xs mx-auto">
          Discover exquisite gold and diamond jewellery designed to celebrate every special moment.
        </p>
        <div className="flex flex-col gap-3 px-4">
          <a href="#collection" className="bg-luxury-gold text-luxury-black font-body font-semibold text-sm py-3.5 rounded-full text-center tracking-wide shadow-gold">
            View Collection
          </a>
          <a href="#contact" className="border border-luxury-gold text-luxury-gold font-body font-medium text-sm py-3.5 rounded-full text-center tracking-wide hover:bg-luxury-gold/10 transition-colors">
            Visit Our Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
