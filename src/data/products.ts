import necklaceImg from "@/assets/bridal-set.png";
import banglesImg from "@/assets/gold-bangles.png";
import ringImg from "@/assets/diamond-ring.png";
import necklaceSetImg from "@/assets/gold-necklace-set.png";
import banglesStackImg from "@/assets/gold-bangles-stack.png";
import detailImg from "@/assets/gold-detail.png";
import diamondNecklaceImg from "@/assets/diamond-necklace.png";
import storeImg from "@/assets/store-display.png";

export interface Product {
  id: string;
  img: string;
  gallery: string[];
  title: string;
  desc: string;
  category: string;
  price: string;
  weight: string;
  purity: string;
  details: string;
}

export const products: Product[] = [
  {
    id: "gold-necklaces",
    img: necklaceImg,
    gallery: [necklaceImg, detailImg, storeImg],
    title: "Gold Necklaces",
    desc: "Elegant bridal & festive designs",
    category: "Necklaces",
    price: "₹85,000 – ₹3,50,000",
    weight: "15g – 80g",
    purity: "22K / 24K Gold",
    details: "Our gold necklace collection features intricately crafted pieces perfect for weddings, festivals, and special occasions. Each piece is handcrafted by master artisans with generations of expertise.",
  },
  {
    id: "gold-bangles",
    img: banglesImg,
    gallery: [banglesImg, banglesStackImg, detailImg],
    title: "Gold Bangles",
    desc: "Traditional handcrafted bangles",
    category: "Bangles",
    price: "₹25,000 – ₹1,50,000",
    weight: "10g – 50g",
    purity: "22K Gold",
    details: "Our bangles are a celebration of Indian tradition. From delicate daily-wear to heavy bridal sets, each bangle is crafted with precision and adorned with exquisite detailing.",
  },
  {
    id: "diamond-rings",
    img: ringImg,
    gallery: [ringImg, diamondNecklaceImg, storeImg],
    title: "Diamond Rings",
    desc: "Perfect for engagements",
    category: "Rings",
    price: "₹45,000 – ₹5,00,000",
    weight: "3g – 12g",
    purity: "18K Gold + VVS Diamonds",
    details: "Explore our stunning collection of certified diamond rings. From solitaires to designer bands, find the perfect symbol of your love. Every diamond is GIA/IGI certified.",
  },
  {
    id: "designer-earrings",
    img: necklaceSetImg,
    gallery: [necklaceSetImg, detailImg, banglesImg],
    title: "Designer Earrings",
    desc: "Modern & classic designs",
    category: "Earrings",
    price: "₹15,000 – ₹1,20,000",
    weight: "5g – 25g",
    purity: "22K Gold",
    details: "From jhumkas to chandbalis, our earring collection blends traditional Indian aesthetics with contemporary design. Perfect for every occasion from casual to bridal.",
  },
];
