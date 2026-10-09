export type MenuCategory =
  | "Jollof Packs"
  | "Proteins & Add-ons"
  | "Pies & Sides"
  | "Catering Trays";

export type MenuItem = {
  id: number;
  name: string;
  category: MenuCategory;
  serving: string;
  desc: string;
  badge: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  { id: 1, name: "Jollof, Chicken & Egg", category: "Jollof Packs", serving: "Individual pack", desc: "Smoky Ghanaian jollof, grilled chicken, boiled egg and fresh garnish.", badge: "Most loved", image: "/images/jollof-chicken-eggs.webp" },
  { id: 2, name: "Assorted Jollof", category: "Jollof Packs", serving: "Loaded pack", desc: "Jollof tossed with chicken, beef, sausage, peppers and onions.", badge: "Fully loaded", image: "/images/assorted-jollof.webp" },
  { id: 3, name: "Jollof & Goat Meat", category: "Jollof Packs", serving: "Individual pack", desc: "Rich party jollof with seasoned goat meat, plantain and shito.", badge: "Ghana favourite", image: "/images/goat-jollof.webp" },
  { id: 4, name: "Jollof Vibes Pack", category: "Jollof Packs", serving: "Ready to go", desc: "Jollof, grilled chicken, fried plantain, fresh salad and egg.", badge: "Lunch ready", image: "/images/individual-pack.webp" },
  { id: 5, name: "Family Jollof Tray", category: "Catering Trays", serving: "Made for sharing", desc: "A generous tray with chicken, plantain, egg, salad and shito.", badge: "Family tray", image: "/images/jollof-hero.webp" },
  { id: 6, name: "Event Catering Spread", category: "Catering Trays", serving: "Events & occasions", desc: "Jollof, chicken, sausages, meat pies, eggs, plantain and salad.", badge: "Celebration", image: "/images/catering-spread.webp" },
  { id: 7, name: "Golden Meat Pies", category: "Pies & Sides", serving: "Single or bulk order", desc: "Flaky, golden pastry filled with savoury seasoned minced meat.", badge: "Freshly baked", image: "/images/meat-pies-sausages.webp" },
  { id: 8, name: "Fresh Garden Salad", category: "Pies & Sides", serving: "Side bowl", desc: "Crisp lettuce, cucumber, tomato, onion, carrot and sliced egg.", badge: "Fresh", image: "/images/fresh-salad.webp" },
  { id: 9, name: "Grilled Chicken", category: "Proteins & Add-ons", serving: "Pieces or platter", desc: "Deeply seasoned chicken with caramelised, smoky grilled skin.", badge: "Hot off the grill", image: "/images/grilled-chicken.webp" },
  { id: 10, name: "Sausage, Egg & Plantain", category: "Proteins & Add-ons", serving: "Add-on platter", desc: "Grilled sausages, boiled eggs and sweet fried ripe plantain.", badge: "Mix & match", image: "/images/sausage-egg-plantain.webp" }
];

export const categories = ["All", "Jollof Packs", "Proteins & Add-ons", "Pies & Sides", "Catering Trays"] as const;
