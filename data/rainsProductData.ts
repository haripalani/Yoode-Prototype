// Yoode Product Data: Performance Zipper Polo Shirt
export interface ColorVariant {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  swatchImage: string;
  images: string[];
  sizes: { size: string; available: boolean }[];
}

export const RAINS_JACKET_DATA = {
  title: "Performance Zipper Polo",
  subtitle: "Men's & Women's / Corporate, Events & Streetwear",
  shortDescription: "Smart, comfortable 220 GSM combed compact cotton performance polo with anti-rust YKK silver zipper.",
  fullDescription: "Crafted from heavy-duty 220 GSM combed compact pique cotton in Tirupur, the Yoode Performance Zipper Polo elevates the classic corporate uniform into modern luxury streetwear. Featuring an anti-rust YKK silver quarter-zip placket, reinforced structured collar that never curls, and precision double-stitched hems. Engineered for seamless custom branding with high-density tone-on-tone embroidery, waterproof DTF prints, or silicone badges. Breathable, pre-shrunk, bio-washed, and colorfast up to 50+ industrial washes.",
  rating: 4.9,
  ratingCount: 348,
  sku: "YD-POLO-ZIP-01",
  waterproofRating: "Quick-Dry Moisture-Wicking · 220 GSM Bio-Washed Pique",
  temperatureRating: "All-Day Climate Comfort (Breathable All-Season)",
  genders: [
    { label: "Men's", active: true, href: "/products/polo-tshirt" },
    { label: "Women's", active: false, href: "/products/polo-tshirt" }
  ],
  colors: [
    {
      id: "navy",
      name: "Navy Blue",
      price: 480,
      priceFormatted: "₹480",
      swatchImage: "/polo/navy-front.jpg",
      images: [
        "/polo/navy-front.jpg",
        "/polo/navy-model.jpg",
        "/polo/navy-collar.jpg",
        "/polo/navy-back.jpg"
      ],
      sizes: [
        { size: "38 (S)", available: true },
        { size: "40 (M)", available: true },
        { size: "42 (L)", available: true },
        { size: "44 (XL)", available: true },
        { size: "46 (2XL)", available: true },
        { size: "48 (3XL)", available: true }
      ]
    },
    {
      id: "black",
      name: "Onyx Black",
      price: 480,
      priceFormatted: "₹480",
      swatchImage: "/polo/black-front.jpg",
      images: [
        "/polo/black-front.jpg",
        "/polo/navy-model.jpg",
        "/polo/navy-collar.jpg",
        "/polo/navy-back.jpg"
      ],
      sizes: [
        { size: "38 (S)", available: true },
        { size: "40 (M)", available: true },
        { size: "42 (L)", available: true },
        { size: "44 (XL)", available: true },
        { size: "46 (2XL)", available: true },
        { size: "48 (3XL)", available: true }
      ]
    },
    {
      id: "green",
      name: "Forest Green",
      price: 480,
      priceFormatted: "₹480",
      swatchImage: "/polo/green-front.jpg",
      images: [
        "/polo/green-front.jpg",
        "/polo/navy-model.jpg",
        "/polo/navy-collar.jpg",
        "/polo/navy-back.jpg"
      ],
      sizes: [
        { size: "38 (S)", available: true },
        { size: "40 (M)", available: true },
        { size: "42 (L)", available: true },
        { size: "44 (XL)", available: true },
        { size: "46 (2XL)", available: true },
        { size: "48 (3XL)", available: true }
      ]
    },
    {
      id: "white",
      name: "Optic White",
      price: 480,
      priceFormatted: "₹480",
      swatchImage: "/polo/white-front.jpg",
      images: [
        "/polo/white-front.jpg",
        "/polo/navy-model.jpg",
        "/polo/navy-collar.jpg",
        "/polo/navy-back.jpg"
      ],
      sizes: [
        { size: "38 (S)", available: true },
        { size: "40 (M)", available: true },
        { size: "42 (L)", available: true },
        { size: "44 (XL)", available: true },
        { size: "46 (2XL)", available: true },
        { size: "48 (3XL)", available: true }
      ]
    }
  ],
  sizeGuide: [
    { size: '38 (S)', chestCm: '96', chestIn: '38.0', hipCm: '96', hipIn: '38.0', lengthCm: '68', lengthIn: '26.8', sleeveCm: '21', sleeveIn: '8.3' },
    { size: '40 (M)', chestCm: '102', chestIn: '40.0', hipCm: '102', hipIn: '40.0', lengthCm: '70', lengthIn: '27.5', sleeveCm: '22', sleeveIn: '8.7' },
    { size: '42 (L)', chestCm: '107', chestIn: '42.0', hipCm: '107', hipIn: '42.0', lengthCm: '72', lengthIn: '28.3', sleeveCm: '23', sleeveIn: '9.1' },
    { size: '44 (XL)', chestCm: '112', chestIn: '44.0', hipCm: '112', hipIn: '44.0', lengthCm: '74', lengthIn: '29.1', sleeveCm: '24', sleeveIn: '9.4' },
    { size: '46 (2XL)', chestCm: '117', chestIn: '46.0', hipCm: '117', hipIn: '46.0', lengthCm: '76', lengthIn: '29.9', sleeveCm: '25', sleeveIn: '9.8' },
    { size: '48 (3XL)', chestCm: '122', chestIn: '48.0', hipCm: '122', hipIn: '48.0', lengthCm: '78', lengthIn: '30.7', sleeveCm: '26', sleeveIn: '10.2' },
  ],
  stores: [
    { city: 'Bengaluru', address: '100ft Road, Indiranagar, Bengaluru 560038', status: 'In Stock', distance: 'Karnataka Hub' },
    { city: 'Chennai', address: 'Nungambakkam High Road, Chennai 600034', status: 'In Stock', distance: 'Tamil Nadu Hub' },
    { city: 'Trivandrum', address: 'MG Road, Statue, Thiruvananthapuram 695001', status: 'In Stock', distance: 'Kerala Hub' },
    { city: 'Marthandam', address: '1st Floor, Adhesh Tower, Eraviputhoorkadai, Marthandam 629155', status: 'In Stock', distance: 'South Hub' }
  ]
};
