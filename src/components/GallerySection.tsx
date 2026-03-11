import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/assets/bridal-set.png";
import img2 from "@/assets/diamond-ring.png";
import img3 from "@/assets/diamond-necklace.png";
import img4 from "@/assets/gold-bangles.png";
import img5 from "@/assets/gold-bangles-stack.png";
import img6 from "@/assets/gold-detail.png";
import img7 from "@/assets/gold-necklace-set.png";
import img8 from "@/assets/store-display.png";
import img9 from "@/assets/luxury-bg.png";

const images = [
  { src: img1, alt: "Bridal Set" },
  { src: img2, alt: "Diamond Ring" },
  { src: img3, alt: "Diamond Necklace" },
  { src: img4, alt: "Gold Bangles" },
  { src: img5, alt: "Gold Bangles Stack" },
  { src: img6, alt: "Gold Detail" },
  { src: img7, alt: "Gold Necklace Set" },
  { src: img8, alt: "Store Display" },
  { src: img9, alt: "Luxury Jewellery" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const next = useCallback(() => setLightbox((c) => (c !== null ? (c + 1) % images.length : 0)), []);
  const prev = useCallback(() => setLightbox((c) => (c !== null ? (c - 1 + images.length) % images.length : 0)), []);

  return (
    <section id="gallery" className="bg-luxury-black px-4 py-14">
      <div className="text-center mb-8">
        <p className="font-body text-luxury-gold text-xs tracking-[0.3em] uppercase mb-2">Gallery</p>
        <h2 className="font-heading text-luxury-cream text-2xl font-bold mb-3">Jewellery Gallery</h2>
        <div className="w-12 h-0.5 bg-luxury-gold mx-auto" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group aspect-square rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-luxury-black/95 backdrop-blur-md flex flex-col items-center justify-center animate-fade-up"
          onClick={close}
        >
          {/* Close */}
          <button onClick={close} className="absolute top-5 right-5 text-luxury-gold p-2 z-10">
            <X size={28} />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-md px-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={prev} className="absolute left-2 bg-luxury-dark/60 text-luxury-gold p-2 rounded-full border border-luxury-gold/30 z-10">
              <ChevronLeft size={20} />
            </button>

            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            <button onClick={next} className="absolute right-2 bg-luxury-dark/60 text-luxury-gold p-2 rounded-full border border-luxury-gold/30 z-10">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Caption & Counter */}
          <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="font-heading text-luxury-gold text-sm font-semibold">{images[lightbox].alt}</p>
            <p className="font-body text-luxury-cream/40 text-xs mt-1">{lightbox + 1} / {images.length}</p>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 px-4 overflow-x-auto max-w-full" onClick={(e) => e.stopPropagation()}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`w-12 h-12 rounded-md overflow-hidden shrink-0 border-2 transition-colors ${
                  i === lightbox ? "border-luxury-gold" : "border-transparent opacity-50"
                }`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
