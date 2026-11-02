import CategoryClient from "./CategoryClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { category: 'custom-sports-jerseys' },
    { category: 'polos' },
    { category: 't-shirts' },
    { category: 'hoodies-sweatshirts-jackets' },
    { category: 'accessories' },
    { category: 'stationery-gifting-drinkware' },
    { category: 'trenz' }
  ];
}

export default function CategoryPage() {
  return <CategoryClient />;
}
