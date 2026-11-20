// Link directory shown when the footer's "Explore Yoode" toggle is opened.
// An entry with `href: null` has no page yet: it renders as muted text with a
// "URL to add" tag. Give it a real destination once its page exists, or remove
// it. Never point it at "#" or a placeholder page.

export type DirectoryLink = { label: string; href: string | null };
export type DirectoryGroup = { title: string; links: DirectoryLink[] };

const pending = (label: string): DirectoryLink => ({ label, href: null });

// The footer's main link columns, in the order of the SEO Footer sheet.
export const footerColumns: DirectoryGroup[] = [
  {
    title: "Shop",
    links: [
      { label: "Corporate", href: "/category?type=corporate-apparel" },
      { label: "Sportswear", href: "/custom-sports-jerseys" },
      { label: "Trendz", href: "/trenz" },
      { label: "Streetwear", href: "/trenz" },
      { label: "Accessories", href: "/accessories" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Redbolt", href: "/category?brand=redbolt" },
      { label: "Jack & Jones", href: "/category?brand=jack-and-jones" },
      { label: "Rare Rabbit", href: "/category?brand=rare-rabbit" },
      { label: "Vero Moda", href: "/category?brand=vero-moda" },
      { label: "Turtle", href: "/category?brand=turtle" },
    ],
  },
  {
    title: "Company",
    links: [pending("About Us"), pending("Case Studies"), { label: "Blog", href: "/blogs" }, pending("Gallery")],
  },
  {
    title: "Our Stores",
    links: [pending("Bangalore"), pending("Chennai"), pending("Marthandam"), pending("Trivandrum")],
  },
  {
    title: "Support & Policies",
    links: [pending("Refund Policy"), pending("Privacy Policy"), pending("Terms of Service"), pending("Shipping Policy")],
  },
];

export const footerDirectory: DirectoryGroup[] = [
  {
    title: "Explore Yoode",
    links: [
      { label: "Shop All", href: "/category" },
      { label: "All Clothing", href: "/category?type=clothing" },
      { label: "Sportswear", href: "/custom-sports-jerseys" },
      { label: "Trendz", href: "/trenz" },
      { label: "Streetwear", href: "/trenz" },
      { label: "Accessories", href: "/accessories" },
      { label: "Corporate Essentials", href: "/category?type=corporate-apparel" },
      { label: "Custom T-Shirts", href: "/custom-t-shirt-printing" },
      { label: "Polo T-Shirts", href: "/custom-polos" },
      { label: "Hoodies & Sweatshirts", href: "/custom-hoodies" },
      { label: "Christmas Shirts", href: "/christmas-shirts-for-men-and-women" },
      { label: "Onam Shirts", href: "/onam-shirt" },
    ],
  },
  {
    title: "Men's Clothing",
    links: [
      pending("Men's T-Shirts"),
      pending("Men's Polo Shirts"),
      pending("Men's Oversized T-Shirts"),
      pending("Men's Full Sleeve T-Shirts"),
      pending("Men's Hoodies & Sweatshirts"),
      pending("Men's Jackets"),
    ],
  },
  {
    title: "Women's Clothing",
    links: [
      pending("Women's T-Shirts"),
      pending("Women's Polo Shirts"),
      pending("Women's Oversized T-Shirts"),
      pending("Women's Full Sleeve T-Shirts"),
      pending("Women's Hoodies & Sweatshirts"),
      pending("Women's Jackets"),
    ],
  },
  {
    title: "Kids' Clothing",
    links: [
      { label: "Kids Clothing", href: "/category?type=kids" },
      pending("Kids' T-Shirts"),
      pending("Kids' Polo Shirts"),
      pending("Kids' Oversized T-Shirts"),
      pending("Kids' Full Sleeve T-Shirts"),
      pending("Kids' Hoodies & Sweatshirts"),
      pending("Kids' Jackets"),
    ],
  },
  {
    title: "Custom Sports Jerseys",
    links: [
      { label: "All Jerseys", href: "/custom-sports-jerseys" },
      { label: "Custom Sports Jerseys", href: "/custom-sports-jerseys" },
      { label: "Cricket Jerseys", href: "/custom-cricket-jerseys" },
      { label: "Football Jerseys", href: "/custom-sports-jerseys" },
      { label: "Basketball Jerseys", href: "/custom-sports-jerseys" },
      pending("Badminton Jerseys"),
      { label: "Volleyball Jerseys", href: "/custom-sports-jerseys" },
      pending("Cycling Jerseys"),
      pending("Running Jerseys"),
      pending("Esports Jerseys"),
      pending("Baseball Jerseys"),
      pending("Pickleball Jerseys"),
      pending("Golf Shirts"),
    ],
  },
  {
    title: "Custom Caps",
    links: [
      { label: "Custom Caps", href: "/accessories" },
      { label: "Embroidered Caps", href: "/accessories" },
      { label: "Printed Caps", href: "/accessories" },
    ],
  },
  {
    title: "Printing & Branding Services",
    links: [
      { label: "DTG Printing", href: "/dtg-printing" },
      { label: "DTF Printing", href: "/dtf-printing" },
      { label: "Embroidery Digitizing", href: "/embroidery" },
      { label: "Coloreel Digitizing", href: "/coloreel-embroidery" },
      { label: "Screen Printing", href: "/screen-printing" },
      { label: "UV Printing", href: "/uv-printing" },
      { label: "Engraving", href: "/laser-engraving" },
    ],
  },
  {
    title: "Shop by Brand",
    links: [
      { label: "Brands", href: "/category?type=brands" },
      { label: "RedBolt", href: "/category?brand=redbolt" },
      { label: "Jack & Jones", href: "/category?brand=jack-and-jones" },
      { label: "Vero Moda", href: "/category?brand=vero-moda" },
      { label: "Turtle", href: "/category?brand=turtle" },
      { label: "Rare Rabbit", href: "/category?brand=rare-rabbit" },
      { label: "Kombans Official Store", href: "/category?brand=kombans" },
    ],
  },
  {
    title: "Corporate Gifts · Products",
    links: [
      { label: "Corporate Apparel", href: "/category?type=corporate-apparel" },
      pending("Custom Drinkware"),
      pending("Bags & Travel"),
      pending("Corporate Gift Hampers"),
      pending("Tech Gadgets"),
      pending("Stationery & Office Supplies"),
      pending("Promotional Products"),
      pending("Eco-Friendly Gifts"),
    ],
  },
  {
    title: "Corporate Gifts · Occasions",
    links: [
      pending("Employee Welcome Kits / New Joiners"),
      pending("Employee Appreciation Gifts"),
      pending("Employee Work Anniversary Gifts"),
      pending("Corporate Event Gifts"),
      pending("Employee Farewell Gifts"),
      pending("Retirement Gifts"),
    ],
  },
  {
    title: "Corporate Gifts · Festivals",
    links: [
      pending("Diwali Corporate Gifts"),
      pending("Christmas Corporate Gifts"),
      pending("New Year Corporate Gifts"),
      pending("Onam Corporate Gifts"),
      pending("Pongal Corporate Gifts"),
      pending("Holi Corporate Gifts"),
      pending("Women's Day Corporate Gifts"),
    ],
  },
  {
    title: "Corporate Gifts · Recipients",
    links: [
      pending("Gifts for Employees"),
      pending("Gifts for Clients"),
      pending("Gifts for Executives"),
      pending("Gifts for Event Attendees"),
      pending("Gifts for Business Partners"),
    ],
  },
  {
    title: "Corporate Gifts · Budget",
    links: [
      pending("Corporate Gifts Under ₹500"),
      pending("Corporate Gifts ₹500–₹1,000"),
      pending("Corporate Gifts ₹1,000–₹2,500"),
      pending("Corporate Gifts ₹2,500–₹5,000"),
      pending("Premium Gifts Above ₹5,000"),
    ],
  },
  {
    title: "Custom & Bulk Gifting",
    links: [
      pending("Bulk Corporate Gifts"),
      pending("Custom Logo Gifts"),
      pending("Personalised Gift Boxes"),
      pending("Build Your Own Gift Kit"),
      pending("Custom Gift Boxes"),
    ],
  },
  {
    title: "Corporate Gifting by City",
    links: [
      { label: "Corporate Gifting in Bangalore", href: "/corporate-gifting-company-in-bangalore" },
      { label: "Corporate Gifting in Chennai", href: "/corporate-gifting-company-in-chennai" },
      { label: "Corporate Gifting in Trivandrum", href: "/corporate-gifting-company-in-trivandrum" },
    ],
  },
  {
    title: "Company",
    links: [
      pending("About Us"),
      pending("Case Studies"),
      { label: "Blog", href: "/blogs" },
      pending("Gallery"),
      { label: "Design Studio", href: "/design-studio" },
    ],
  },
  {
    title: "Visit Our Stores",
    links: [
      pending("All Stores"),
      pending("Bangalore"),
      pending("Chennai"),
      pending("Marthandam"),
      pending("Trivandrum"),
    ],
  },
  {
    title: "Support & Policies",
    links: [
      pending("Refund Policy"),
      pending("Privacy Policy"),
      pending("Terms of Service"),
      pending("Shipping Policy"),
    ],
  },
];
