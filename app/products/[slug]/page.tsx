import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return [
    { slug: "womens-performance-polo" },
    { slug: "womens-polo" },
    { slug: "custom-polo" }
  ];
}

export default function ProductDetailPage() {
  return <ProductClient />;
}
