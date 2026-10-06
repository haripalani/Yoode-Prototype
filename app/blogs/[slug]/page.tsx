import { ArrowLeft, Share2, Mail, CheckCircle2, Tag, Calendar, Clock, User, List } from "lucide-react";
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

const defaultAuthor = {
  name: "Aria Vanguard",
  role: "Lead UI/UX Architect",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  bio: "Aria is the world's foremost UI/UX designer and frontend developer, an expert in crafting experiences with intent, emotion, and purpose."
};

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  
  if (!blog) {
    notFound();
  }

  // Pick two random related posts or default ones
  const relatedPosts = blogs.filter(b => b.id !== blog.id).slice(0, 2);

  // Generate some dummy tags based on the category
  const tags = [blog.category, "DESIGN", "TRENDS", "CORPORATE", "STYLE"].filter((v, i, a) => a.indexOf(v) === i);

  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans bg-[#F8F9FA]">
      <Header />
      
      <main className="flex-grow">
        
        {/* Full Screen Banner matching Product Listing Page */}
        <div className="relative w-full overflow-hidden bg-[#111827] text-white min-h-[400px] md:min-h-[500px] flex items-center justify-center flex-col pt-24 pb-16 md:pb-24">
          <div className="absolute inset-0 z-0">
            <img src={blog.image || "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80"} alt={blog.title} className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-[#111827]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none" />
          </div>
          
          {/* Mid-Background: Outline Text */}
          <div className="absolute z-10 w-full flex justify-center pointer-events-none overflow-hidden select-none opacity-40">
            <h1 
              className="text-[28vw] font-display font-black leading-none tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)" }}
            >
              BLOG
            </h1>
          </div>
          
          <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto mt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/80 mb-6">
              <span className="w-8 h-[1px] bg-white/40"></span>
              {blog.category}
              <span className="w-8 h-[1px] bg-white/40"></span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tight drop-shadow-2xl text-white leading-[1.05] uppercase">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8 text-[11px] font-bold uppercase tracking-widest text-gray-300 flex-wrap">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {defaultAuthor.name}</span>
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full hidden sm:block" />
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full hidden sm:block" />
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Overlapping Content Section (Two Column Layout) */}
        <div className="relative z-40 bg-white w-full rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-16 pt-10 md:pt-16 pb-16 md:pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start justify-center">
            
            {/* Left Column: Sticky Sidebar for Table of Contents & CTAs */}
            <aside className="hidden lg:block w-[260px] shrink-0 sticky top-32 max-h-[calc(100vh-8rem)]">
              <div className="flex flex-col gap-6 h-full overflow-y-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="bg-gray-50/50 border border-gray-100 p-8 rounded-[32px]">
                <div className="flex items-center gap-2 mb-6">
                  <List className="w-4 h-4 text-gray-800" />
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-800">Table of Contents</h4>
                </div>
                <nav className="flex flex-col gap-4">
                  <a href="#section-1" className="text-sm font-bold text-black hover:text-[#EB6F3D] transition-colors leading-relaxed">1. The Power of Premium Corporate Gifting</a>
                  <a href="#section-2" className="text-sm font-medium text-gray-500 hover:text-[#EB6F3D] transition-colors leading-relaxed">2. Cotton vs. Blends</a>
                  <a href="#section-3" className="text-sm font-medium text-gray-500 hover:text-[#EB6F3D] transition-colors leading-relaxed">3. Curating with Intent</a>
                  <a href="#section-4" className="text-sm font-medium text-gray-500 hover:text-[#EB6F3D] transition-colors leading-relaxed">4. The Athleisure Revolution</a>
                </nav>
              </div>
              
              {/* Promo / CTA 1 */}
              <Link href="/custom-sports-jerseys" className="bg-black text-white p-8 rounded-[32px] flex flex-col items-start relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                <h4 className="text-xl font-display font-black uppercase tracking-tight mb-2 relative z-10">Custom Team Jerseys</h4>
                <p className="text-xs text-gray-400 mb-8 relative z-10 leading-relaxed">Elevate your team's spirit with premium quality custom apparel.</p>
                <div className="mt-auto relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                    Start Designing <ArrowLeft className="w-3 h-3 rotate-180" />
                  </span>
                </div>
              </Link>

              {/* Promo / CTA 2 */}
              <Link href="/collections/corporate-gifting" className="bg-gray-100 text-black p-8 rounded-[32px] flex flex-col items-start relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200">
                <h4 className="text-xl font-display font-black uppercase tracking-tight mb-2 relative z-10">Corporate Gifting</h4>
                <p className="text-xs text-gray-500 mb-8 relative z-10 leading-relaxed">Curated, high-quality merchandise for your best clients and employees.</p>
                <div className="mt-auto relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#EB6F3D] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Catalog <ArrowLeft className="w-3 h-3 rotate-180" />
                  </span>
                </div>
              </Link>
              </div>
            </aside>

            {/* Main Article Content */}
            <div className="flex-1 w-full max-w-[1000px]">
              {/* Back & Breadcrumbs & Share */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-4">
                  <Link href="/blogs" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0 cursor-pointer group shadow-sm">
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
                   <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-black transition-colors text-gray-500 hover:text-black shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                     <Share2 className="w-4 h-4" />
                   </button>
                </div>
              </div>



              {/* Article Content */}
              <article 
                className="prose prose-lg prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase prose-p:text-gray-700 max-w-none hover:prose-a:text-[#EB6F3D] transition-all" 
                dangerouslySetInnerHTML={{ __html: blog.content || '' }} 
              />
              
              {/* Post Footer: Tags and Author */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col gap-12">
                {/* Tags */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Tags & Topics</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag, idx) => (
                      <span key={idx} className="px-5 py-2.5 bg-white rounded-xl text-[10px] font-bold uppercase tracking-widest text-black shadow-sm border border-gray-100 hover:border-[#EB6F3D] hover:text-[#EB6F3D] transition-colors cursor-pointer text-center">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Profile */}
                {/* Author Profile */}
                <Link href="#" className="bg-gray-50/80 border border-gray-100 p-6 rounded-[24px] flex flex-col sm:flex-row sm:items-center justify-between gap-5 group hover:bg-gray-100 hover:border-gray-200 transition-all cursor-pointer shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-5">
                    <img src={defaultAuthor.avatar} alt={defaultAuthor.name} className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-white shrink-0 group-hover:scale-105 transition-transform duration-300" />
                    <div>
                      <h3 className="text-lg font-display font-black uppercase tracking-tight text-black group-hover:text-[#EB6F3D] transition-colors">{defaultAuthor.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#EB6F3D] mb-1">{defaultAuthor.role}</p>
                      <p className="text-xs text-gray-500 line-clamp-2 sm:line-clamp-1">{defaultAuthor.bio}</p>
                    </div>
                  </div>
                  <div className="shrink-0 flex sm:block justify-end mt-2 sm:mt-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black group-hover:text-[#EB6F3D] flex items-center gap-2 transition-colors">
                      Read Bio <ArrowLeft className="w-3 h-3 rotate-180" />
                    </span>
                  </div>
                </Link>
              </div>
              
              {/* Newsletter Subscription */}
              <div className="mt-16 bg-black text-white p-8 md:p-12 rounded-[32px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-700"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
                  <div className="max-w-sm text-center md:text-left">
                    <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-2">Never Miss an Update</h3>
                    <p className="text-sm text-gray-400">Get the latest insights on design, merchandise, and branding straight to your inbox.</p>
                  </div>
                  <div className="w-full md:w-auto flex-1 max-w-md">
                    <form className="flex w-full relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input type="email" placeholder="Enter your email address" className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-32 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all text-sm" required />
                      <button type="submit" className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-lg">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>

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
                  <Link href={`/blogs/${relatedPosts[0].slug}`} className="col-span-1 md:col-span-2 rounded-[32px] h-[450px] md:h-[520px] relative group overflow-hidden bg-gray-100 block shadow-sm hover:shadow-xl transition-all duration-500">
                    <img src={relatedPosts[0].image || '/gift-box.jpg'} alt={relatedPosts[0].title} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
                      <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] w-full transform group-hover:-translate-y-2 transition-transform duration-500">{relatedPosts[0].title}</h3>
                    </div>
                  </Link>
                )}
                
                {/* Related Post 2 */}
                {relatedPosts[1] && (
                  <Link href={`/blogs/${relatedPosts[1].slug}`} className={`col-span-1 rounded-[32px] flex flex-col h-[450px] md:h-[520px] relative group overflow-hidden ${relatedPosts[1].bgColor || 'bg-[#EB6F3D]'} block shadow-sm hover:shadow-xl transition-all duration-500`}>
                    <div className="p-8 pb-6 flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500 z-10">
                      <div className="flex justify-between items-start">
                        <span className="border border-white/30 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white backdrop-blur-md bg-white/10">
                          {relatedPosts[1].category}
                        </span>
                        <div className="w-6 h-4 bg-white/90 rounded-t-full" />
                      </div>
                      <h3 className="text-[1.75rem] md:text-3xl font-bold leading-[1.05] tracking-tight text-white mt-8 mb-3">
                        {relatedPosts[1].title}
                      </h3>
                    </div>
                    <div className="flex-1 relative w-full min-h-0">
                      <img src={relatedPosts[1].image || '/polo-jersey.jpg'} alt={relatedPosts[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
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
