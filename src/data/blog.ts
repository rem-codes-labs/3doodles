export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "materials-that-age-well",
    title: "Materials that age well in sunlight",
    excerpt: "How we choose resilient, eco-forward materials for everyday light and heat.",
    date: "Feb 8, 2026",
    readingTime: "4 min",
  },
  {
    slug: "designing-for-personalization",
    title: "Designing for personalization at scale",
    excerpt: "Behind the scenes on how we make custom colorways feel intentional.",
    date: "Jan 22, 2026",
    readingTime: "5 min",
  },
  {
    slug: "shipping-with-intention",
    title: "Shipping with intention",
    excerpt: "Our approach to low-impact packaging and local fulfillment.",
    date: "Jan 4, 2026",
    readingTime: "3 min",
  },
];
