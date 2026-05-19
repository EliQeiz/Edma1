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
    image: "https://i.ytimg.com/vi/8tJeNDiSXiw/maxresdefault.jpg"
  },
  {
    id: 2,
    name: "Jollof Rice & Chicken",
    category: "Rice & Noodles",
    price: 70,
    desc: "Party jollof with perfectly seasoned chicken",
    badge: "🔥 Popular",
    image: "https://canadiancookingadventures.com/wp-content/uploads/2023/03/337127429_2157767654416168_5393424319079533313_n-735x850.jpg"
  },
  {
    id: 3,
    name: "Banku & Tilapia",
    category: "Local Dishes",
    price: 75,
    desc: "Classic Ghanaian banku with grilled whole tilapia",
    badge: "🇬🇭 Local",
    image: "https://i0.wp.com/www.jamrock.com.gh/wp-content/uploads/2023/02/grilled_tilapia_regular_with_banku_a.jpg?fit=500%2C510&ssl=1"
  },
  {
    id: 4,
    name: "Yam Chips & Chicken Wings",
    category: "Local Dishes",
    price: 90,
    desc: "Crispy yam chips paired with spiced wings",
    badge: "❤️ Favourite",
    image: "https://thumbs.dreamstime.com/b/delicious-fried-chicken-wings-served-crispy-french-fries-side-salad-white-background-savor-irresistible-taste-399492728.jpg"
  },
  {
    id: 5,
    name: "Braised Rice",
    category: "Rice & Noodles",
    price: 65,
    desc: "Slow-cooked rice infused with rich local spices",
    badge: "🍲 Homestyle",
    image: "https://styleafrique.com/wp-content/uploads/2022/12/Ghanaian-Braised-Rice-960x694.jpeg"
  },
  {
    id: 6,
    name: "Assorted Fried Rice",
    category: "Rice & Noodles",
    price: 75,
    desc: "Smoky fried rice loaded with assorted proteins",
    badge: "🔥 Popular",
    image: "https://business-inventory.s3.eu-central-1.amazonaws.com/b21e390b-64fd-59dd-9447-df18f5f3bdd6"
  },
  {
    id: 7,
    name: "Banku & Okro",
    category: "Local Dishes",
    price: 100,
    desc: "Silky banku with rich, thick okro stew",
    badge: "🇬🇭 Local",
    image: "https://decapitalgrille.com/wp-content/uploads/2023/09/okro-soup-1.jpg"
  },
  {
    id: 8,
    name: "Assorted Spicy Noodles",
    category: "Rice & Noodles",
    price: 80,
    desc: "Fiery noodles loaded with assorted meats",
    badge: "🌶️ Spicy",
    image: "https://images.bolt.eu/store/2023/2023-08-02/514372a0-ffa1-4ecd-bf72-679a1787e330.jpeg"
  },
  {
    id: 9,
    name: "Chef's Special Salad",
    category: "Sides & Salads",
    price: 60,
    desc: "Fresh garden salad with house dressing",
    badge: "🥗 Fresh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxnk3lXcJmPiF9cCTwN6yRSnO4QFNHGviHQ&s"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyccVhImK06-PjaTqJuxEaOhg_UBMRn0byw&s"
  }
];

export const categories = [
  "All",
  "Local Dishes",
  "Rice & Noodles",
  "Sides & Salads",
  "Continental"
] as const;
