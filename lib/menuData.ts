export type MenuCategory =
  | "Continental"
  | "Rice & Noodles"
  | "Local Dishes"
  | "Sides & Salads";

export type MenuItem = {
  id: number;
  name: string;
  category: MenuCategory;
  price: number;
  desc: string;
  badge: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "The Most Wanted",
    category: "Continental",
    price: 130,
    desc: "EDMA's legendary signature dish — a crowd-stopper",
    badge: "🏆 Signature",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600"
  },
  {
    id: 2,
    name: "Jollof Rice & Chicken",
    category: "Rice & Noodles",
    price: 70,
    desc: "Party jollof with perfectly seasoned chicken",
    badge: "🔥 Popular",
    image: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=600"
  },
  {
    id: 3,
    name: "Banku & Tilapia",
    category: "Local Dishes",
    price: 75,
    desc: "Classic Ghanaian banku with grilled whole tilapia",
    badge: "🇬🇭 Local",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600"
  },
  {
    id: 4,
    name: "Yam Chips & Chicken Wings",
    category: "Local Dishes",
    price: 90,
    desc: "Crispy yam chips paired with spiced wings",
    badge: "❤️ Favourite",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600"
  },
  {
    id: 5,
    name: "Braised Rice",
    category: "Rice & Noodles",
    price: 65,
    desc: "Slow-cooked rice infused with rich local spices",
    badge: "🍲 Homestyle",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
  },
  {
    id: 6,
    name: "Assorted Fried Rice",
    category: "Rice & Noodles",
    price: 75,
    desc: "Smoky fried rice loaded with assorted proteins",
    badge: "🔥 Popular",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
  },
  {
    id: 7,
    name: "Banku & Okro",
    category: "Local Dishes",
    price: 100,
    desc: "Silky banku with rich, thick okro stew",
    badge: "🇬🇭 Local",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600"
  },
  {
    id: 8,
    name: "Assorted Spicy Noodles",
    category: "Rice & Noodles",
    price: 80,
    desc: "Fiery noodles loaded with assorted meats",
    badge: "🌶️ Spicy",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600"
  },
  {
    id: 9,
    name: "Chef's Special Salad",
    category: "Sides & Salads",
    price: 60,
    desc: "Fresh garden salad with house dressing",
    badge: "🥗 Fresh",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
  },
  {
    id: 10,
    name: "Russian Salad",
    category: "Sides & Salads",
    price: 60,
    desc: "Creamy classic with vegetables and mayo",
    badge: "🥗 Fresh",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600"
  },
  {
    id: 11,
    name: "Pizza",
    category: "Continental",
    price: 120,
    desc: "EDMA's take on a loaded stone-baked pizza",
    badge: "🍕 Continental",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
  },
  {
    id: 12,
    name: "Soup of the Day",
    category: "Local Dishes",
    price: 100,
    desc: "Fresh-made Ghanaian soup — ask your server",
    badge: "🍲 Daily Special",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600"
  }
];

export const categories = [
  "All",
  "Local Dishes",
  "Rice & Noodles",
  "Sides & Salads",
  "Continental"
] as const;
