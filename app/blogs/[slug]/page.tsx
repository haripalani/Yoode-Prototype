import { ArrowLeft, Share2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  
  if (!blog) {
    notFound();
  }

  // Pick two random related posts or default ones
  const relatedPosts = blogs.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow bg-white">
        
        {/* Full Screen Banner matching Blog List Page */}
        <div className="relative w-full overflow-hidden bg-[#111827] text-white min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-24 pb-20 md:pb-32">
          <div className="absolute inset-0 z-0">
            {/* Fallback to a stunning unsplash image for the hero */}
            <img src={blog.image || "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80"} alt={blog.title} className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-[#111827]/20" />
          </div>
          
          <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto mt-12">
            <span className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-6">
              <span className="w-8 h-[1px] bg-white/40"></span>
              {blog.category}
              <span className="w-8 h-[1px] bg-white/40"></span>
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-display font-black tracking-tight drop-shadow-2xl text-white leading-[1.05] uppercase">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8 text-[11px] font-bold uppercase tracking-widest text-gray-300">
              <span>{blog.date}</span>
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Overlapping Content Section */}
        <div className="relative z-40 bg-white w-full rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-16 pt-10 md:pt-16 pb-16 md:pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-[1000px] mx-auto px-4 md:px-8">

            {/* Back & Breadcrumbs & Share */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-4">
                <Link href="/blogs" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0 cursor-pointer group">
                  <ArrowLeft className="w-4 h-4 text-gray-600 transition-transform group-hover:-translate-x-0.5" />
                </Link>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <Link href="/blogs" className="hover:text-black transition-colors cursor-pointer">Blogs</Link>
                  <span>/</span>
                  <span className="text-black">{blog.category}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-2">SHARE</span>
                 <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-black transition-colors text-gray-500 hover:text-black">
                   <Share2 className="w-4 h-4" />
                 </button>
              </div>
            </div>

            {/* Article Content */}
            <article className="max-w-[800px] mx-auto prose prose-lg prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase" dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
            
            <div className="max-w-[800px] mx-auto mt-16 pt-8 border-t border-gray-100 flex items-center flex-wrap gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">TAGS:</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">{blog.category}</span>
            </div>
            
          </div>
        </div>
        
        {/* Related Posts Section matching Bento Grid styles */}
        <div className="bg-[#F8F8F8] py-20 md:py-32 rounded-t-[40px] md:rounded-t-[60px] -mt-[40px] relative z-30">
           <div className="max-w-[1400px] mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
                    <span className="w-8 h-[1px] bg-gray-300"></span>
                    Keep Reading
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-black uppercase">Related Posts</h2>
                </div>
                <Link href="/blogs" className="px-8 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-yoode-onyx transition-colors">
                  View All Posts
                </Link>
              </div>
              
              {/* Using the Bento grid for related posts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                
                {/* Related Post 1 */}
                {relatedPosts[0] && (
                  <Link href={`/blogs/${relatedPosts[0].slug}`} className="col-span-1 md:col-span-2 rounded-[32px] h-[450px] md:h-[520px] relative group overflow-hidden bg-gray-100 block">
                    <img src={relatedPosts[0].image || '/gift-box.jpg'} alt={relatedPosts[0].title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
                      <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] w-full">{relatedPosts[0].title}</h3>
                    </div>
                  </Link>
                )}
                
                {/* Related Post 2 */}
                {relatedPosts[1] && (
                  <Link href={`/blogs/${relatedPosts[1].slug}`} className={`col-span-1 rounded-[32px] flex flex-col h-[450px] md:h-[520px] relative group overflow-hidden ${relatedPosts[1].bgColor || 'bg-[#EB6F3D]'} block`}>
                    <div className="p-8 pb-6 flex flex-col">
                      <div className="flex justify-between items-start">
                        <span className="border border-white/30 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white">
                          {relatedPosts[1].category}
                        </span>
                        <div className="w-6 h-4 bg-white/90 rounded-t-full" />
                      </div>
                      <h3 className="text-[1.75rem] md:text-3xl font-bold leading-[1.05] tracking-tight text-white mt-8 mb-3">
                        {relatedPosts[1].title}
                      </h3>
                    </div>
                    <div className="flex-1 relative w-full min-h-0">
                      <img src={relatedPosts[1].image || '/polo-jersey.jpg'} alt={relatedPosts[1].title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </Link>
                )}
                
              </div>
           </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
