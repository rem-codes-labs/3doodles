export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: string[];
  materials: string[];
  sizes: string[];
  stock: number;
  leadTimeDays: number;
};

export const products: Product[] = [
  {
    id: "aurora-lamp",
    name: "Aurora Ripple Lamp",
    description:
      "A sculptural ambient lamp with wave textures. Designed for calm spaces and warm light.",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1200&q=80&fm=webp",
    ],
    colors: ["Sand", "Clay", "Onyx"],
    materials: ["Recycled PLA", "Bio-resin"],
    sizes: ["Small", "Medium", "Large"],
    stock: 24,
    leadTimeDays: 4,
  },
  {
    id: "bloom-vase",
    name: "Bloom Spiral Vase",
    description:
      "A tall statement vase with spiral ridges, perfect for dried botanicals.",
    price: 74,
    images: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80&fm=webp",
    ],
    colors: ["Moss", "Ivory", "Ochre"],
    materials: ["Recycled PLA", "Stone composite"],
    sizes: ["Tall", "Grande"],
    stock: 42,
    leadTimeDays: 3,
  },
  {
    id: "orbit-desk",
    name: "Orbit Desk Organizer",
    description:
      "Modular trays and rings that keep a calm, clutter-free workspace.",
    price: 52,
    images: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80&fm=webp",
    ],
    colors: ["Slate", "Sand", "Fog"],
    materials: ["Recycled PLA"],
    sizes: ["Standard"],
    stock: 68,
    leadTimeDays: 2,
  },
  {
    id: "halo-wall",
    name: "Halo Wall Art",
    description:
      "Lightweight geometric wall art designed to float with subtle shadow play.",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&fm=webp",
    ],
    colors: ["Linen", "Midnight", "Terracotta"],
    materials: ["Bio-resin", "Recycled PLA"],
    sizes: ["20 cm", "30 cm", "40 cm"],
    stock: 19,
    leadTimeDays: 5,
  },
  {
    id: "petal-tray",
    name: "Petal Jewelry Tray",
    description:
      "Organic petal-inspired tray for jewelry, keys, or entryway styling.",
    price: 34,
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80&fm=webp",
    ],
    colors: ["Rose", "Oat", "Charcoal"],
    materials: ["Recycled PLA"],
    sizes: ["One size"],
    stock: 92,
    leadTimeDays: 1,
  },
  {
    id: "lumen-sconce",
    name: "Lumen Sconce",
    description:
      "Minimal wall sconce with a soft glow and hidden LED channel.",
    price: 116,
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80&fm=webp",
    ],
    colors: ["Warm White", "Sage", "Coal"],
    materials: ["Bio-resin"],
    sizes: ["Single", "Pair"],
    stock: 31,
    leadTimeDays: 6,
  },
];

export const sampleImportCsv = `id,name,description,price,colors,materials,sizes,stock,leadTimeDays\nclassic-vessel,Classic Vessel,"Minimal vase for dried stems",64,"Ivory|Sage","Recycled PLA","Tall|Grande",45,3`;

export const sampleImportJson = {
  id: "classic-vessel",
  name: "Classic Vessel",
  description: "Minimal vase for dried stems",
  price: 64,
  colors: ["Ivory", "Sage"],
  materials: ["Recycled PLA"],
  sizes: ["Tall", "Grande"],
  stock: 45,
  leadTimeDays: 3,
};
