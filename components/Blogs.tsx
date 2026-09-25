import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const posts = [
  {
    id: 1,
    title: "How to Choose the Right Fabric for Your Custom T-Shirts",
    category: "Guides",
    date: "Sep 15, 2026",
    image: "/mens-polo.jpg"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Corporate Gifting in 2026",
    category: "Corporate",
    date: "Sep 10, 2026",
    image: "/gift-box.jpg"
  },
  {
    id: 3,
    title: "DTG vs DTF Printing: Which is Better for Your Brand?",
    category: "Printing",
    date: "Sep 05, 2026",
    image: "/polo-jersey.jpg"
  }
];

export function Blogs() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 text-yoode-onyx">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subHeading="Our Journal"
          title="Latest from the Blog"
          description="Insights, guides, and updates from the Yoode team."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E53935]">{post.category}</span>
                  <span className="text-xs text-yoode-onyx/50 font-medium">{post.date}</span>
                </div>
                <h3 className="font-bold text-xl leading-tight group-hover:text-[#E53935] transition-colors">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center justify-center gap-2 font-bold text-sm hover:text-[#E53935] transition-colors group">
            View All Posts
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
