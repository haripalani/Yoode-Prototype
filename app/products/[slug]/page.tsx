import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return [
    { slug: "polo-tshirt" },
    { slug: "performance-zipper-polo" },
    { slug: "womens-performance-polo" },
    { slug: "womens-polo" },
    { slug: "custom-polo" },
    { slug: "jacket-female" }
  ];
}

export default function ProductDetailPage() {
  return <ProductClient />;
}
