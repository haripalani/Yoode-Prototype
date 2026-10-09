"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Star, 
  Upload, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Box, 
  Package, 
  ArrowRight, 
  ArrowUpRight,
  Minus, 
  Plus, 
  Tag, 
  Zap, 
  Shield, 
  HelpCircle, 
  Truck, 
  Ruler, 
  Check,
  ChevronDown,
  RefreshCcw,
  Headphones,
  Award,
  Users,
  Building,
  Briefcase
} from "lucide-react";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(10);
  const [selectedColor, setSelectedColor] = useState('#111827');
  const [selectedSize, setSelectedSize] = useState('38');

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const colors = [
    { name: 'Navy Blue', hex: '#111827' },
    { name: 'Yoode Coral', hex: '#E53935' },
    { name: 'Forest Green', hex: '#2E4A3E' },
    { name: 'Royal Blue', hex: '#2563EB' },
    { name: 'Amber', hex: '#D97706' },
    { name: 'Pink', hex: '#DB2777' },
    { name: 'Emerald', hex: '#10B981' }
  ];

  const sizes = ['38', '40', '42', '44', '46', '48', '50', '52'];

  const faqs = [
    { q: "Can I order just one customized polo?", a: "Yes, we have no minimum order quantity. You can order just 1 customized piece." },
    { q: "What logo file formats can I upload?", a: "We recommend high-resolution PNG, JPG, or vector formats like SVG and AI." },
    { q: "Will I receive a mockup before production?", a: "Yes! Our design team will send you a free digital mockup for approval before we start production." },
    { q: "Can you embroider my company logo?", a: "Absolutely. We offer high-quality embroidery, DTF, and DTG printing options based on your logo design." },
    { q: "Can I mix different sizes in the same order?", a: "Yes, you can mix and match sizes as needed within your order." },
    { q: "How long does customization take?", a: "Standard customized orders take 5-7 working days to dispatch after mockup approval." },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white text-[#111827] font-sans overflow-x-hidden pt-28 pb-0">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8 font-medium">
          <span className="hover:text-gray-900 cursor-pointer">Home</span> <ChevronRight size={14} /> 
          <span className="hover:text-gray-900 cursor-pointer">Women</span> <ChevronRight size={14} /> 
          <span className="hover:text-gray-900 cursor-pointer">Polos</span> <ChevronRight size={14} /> 
          <span className="font-semibold text-gray-900">Women's Performance Zipper Polo</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Images */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-24 shrink-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
              {[1,2,3,4,5].map(i => (
                 <div key={i} className={`aspect-[3/4] w-20 md:w-full bg-gray-100 rounded-lg cursor-pointer border-2 transition-all ${i === 1 ? 'border-yoode-coral' : 'border-transparent hover:border-gray-300'}`}>
                   <img src="/womens-tshirt.jpg" alt="Thumbnail" className="w-full h-full object-cover rounded-md" />
                 </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 shadow-sm aspect-[4/5] md:aspect-auto">
              <img src="/womens-tshirt.jpg" alt="Product" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-3">
              <span className="bg-red-100 text-yoode-coral text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest">
                Bestseller
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-gray-900 mb-3 tracking-tight leading-tight">
              Women's Performance<br/>Zipper Polo
            </h1>
            <p className="text-gray-600 mb-5 text-sm md:text-base font-medium">
              Smart, comfortable performance polo for corporate teams, events and everyday workwear.
            </p>
            
            <div className="flex items-center gap-2 mb-6 text-sm">
              <div className="flex text-amber-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill={i===5?"none":"currentColor"} className={i===5 ? "text-gray-300" : ""} />)}
              </div>
              <span className="font-bold">4.9/5</span>
              <span className="text-gray-500 hidden md:inline">| (Yoode Customer Rating) | No Minimum Order</span>
            </div>

            <div className="mb-8 pb-6 border-b border-gray-100">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-4xl font-black text-gray-900 tracking-tight">₹450</span>
                <span className="text-gray-500 mb-1.5 font-medium">/ piece</span>
                <span className="text-gray-400 line-through mb-1.5 text-sm font-medium">MRP ₹599</span>
              </div>
              <div className="text-emerald-600 font-bold text-sm bg-emerald-50 w-max px-2 py-1 rounded">
                You save ₹149 (25%)
              </div>
              <p className="text-xs text-gray-500 mt-3 font-medium">
                Plain garment price. Customization calculated based on logo, method and quantity.
              </p>
            </div>

            {/* Color */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-sm">
                  Colour: <span className="text-gray-600 font-normal">{colors.find(c => c.hex === selectedColor)?.name}</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button 
                    key={c.hex} 
                    onClick={() => setSelectedColor(c.hex)}
                    className={`w-9 h-9 rounded-full border-2 transition-all ${
                      selectedColor === c.hex ? 'border-gray-900 p-[2px] scale-110 shadow-md' : 'border-transparent hover:scale-105 shadow-sm'
                    }`} 
                    style={{backgroundColor: selectedColor === c.hex ? 'white' : c.hex}}
                    title={c.name}
                  >
                    {selectedColor === c.hex && (
                      <div className="w-full h-full rounded-full" style={{backgroundColor: c.hex}}></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-sm">Size:</span>
                <button className="text-[#2563EB] text-sm font-semibold flex items-center gap-1 hover:underline">
                  <Ruler size={16}/> Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {sizes.map((s) => (
                  <button 
                    key={s} 
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-11 flex items-center justify-center border rounded-md font-semibold text-sm transition-all ${
                      selectedSize === s 
                        ? 'border-gray-900 bg-bg-gray-900 text-white shadow-md' 
                        : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white hover:bg-gray-50'
                    }`}
                    style={selectedSize === s ? { backgroundColor: '#111827', color: 'white' } : {}}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="font-semibold text-sm block mb-3">Quantity:</span>
              <div className="flex items-center gap-0 w-36 border border-gray-300 rounded-md overflow-hidden h-11 bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex items-center justify-center hover:bg-gray-100 transition-colors h-full text-gray-600"
                >
                  <Minus size={18}/>
                </button>
                <div className="w-14 flex items-center justify-center font-bold text-base border-x border-gray-300 h-full">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 flex items-center justify-center hover:bg-gray-100 transition-colors h-full text-gray-600"
                >
                  <Plus size={18}/>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mb-8">
              <button className="w-full bg-[#111827] text-white py-4 rounded-lg font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                CUSTOMIZE & ORDER 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="border-2 border-[#111827] text-[#111827] font-bold py-3.5 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base">
                  Get Free Design Mockup
                </button>
                <button className="border-2 border-transparent bg-blue-50 text-blue-700 font-bold py-3.5 rounded-lg hover:bg-blue-100 transition-colors text-sm md:text-base">
                  Get Bulk Quote (25+)
                </button>
              </div>
            </div>

            {/* Dispatch Info */}
            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Truck className="text-gray-700" size={24}/>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Estimated Dispatch</div>
                <div className="text-xs text-gray-600 mb-2 font-medium">Plain Polo: 2-4 working days | Customized: 5-7 working days</div>
                <a href="#" className="text-xs text-yoode-coral font-bold hover:underline flex items-center gap-1 group">
                  Need it sooner? Rush Order Available 
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 border-y border-gray-100 py-10">
          {[
            {icon: Package, title: "No Minimum Order", desc: "Order from 1 piece"},
            {icon: Upload, title: "Free Design Mockup", desc: "See your logo before production"},
            {icon: ShieldCheck, title: "Secure Payments", desc: "Safe & encrypted checkout"},
            {icon: Award, title: "Bulk Discounts", desc: "Better pricing for larger orders"},
            {icon: Star, title: "4.9/5 Customer Rating", desc: "Trusted by 10,000+ businesses"},
          ].map((t,i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-[#2563EB] mb-1">
                <t.icon size={24} strokeWidth={2} />
              </div>
              <div className="font-bold text-sm text-gray-900 leading-tight">{t.title}</div>
              <div className="text-xs text-gray-500 font-medium max-w-[150px]">{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Customize Journey */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black text-gray-900 tracking-tight">Customize Your Polo</h2>
            <p className="text-gray-500 font-medium pb-1">Create your perfect polo in 4 simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-gray-200 z-0"></div>
            {[
              {
                step: 1, title: "Choose Your Polo", desc: "Select colour, size and quantity.", 
                icon: (
                  <div className="flex gap-2">
                    <div className="w-10 h-10 border-2 border-gray-300 rounded-lg flex flex-col pt-1 items-center">
                       <div className="w-4 h-3 bg-gray-200 rounded-sm"></div>
                    </div>
                    <div className="w-10 h-10 border-2 border-gray-300 rounded-lg flex flex-col pt-1 items-center">
                       <div className="w-4 h-3 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>
                )
              },
              {
                step: 2, title: "Add Your Branding", desc: "Upload your logo or artwork. Get a free mockup.", 
                icon: <Upload size={36} strokeWidth={1.5} className="text-gray-400" />
              },
              {
                step: 3, title: "Choose Customization", desc: "Select the best method for your logo.", 
                icon: (
                  <div className="flex gap-3 items-center">
                    <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 rounded-full border-4 border-amber-400"></div></div>
                    <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 rounded-full border-4 border-yoode-coral"></div></div>
                    <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 rounded-md bg-gray-200 font-bold text-[10px] flex items-center justify-center text-gray-500">DTF</div></div>
                  </div>
                )
              },
              {
                step: 4, title: "Approve & We Produce", desc: "We send a digital proof for approval before production.", 
                icon: (
                  <div className="relative">
                    <div className="w-16 h-12 border-2 border-gray-300 rounded-md bg-white z-0"></div>
                    <CheckCircle2 size={24} className="text-emerald-500 absolute -bottom-2 -right-2 bg-white rounded-full z-10" />
                  </div>
                )
              },
            ].map((s,i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white p-4 group">
                <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold text-base mb-6 border-4 border-white shadow-sm ring-1 ring-gray-100 group-hover:scale-110 group-hover:bg-[#1E40AF] transition-all">
                  {s.step}
                </div>
                <div className="font-bold text-base text-gray-900 mb-3">{s.title}</div>
                <div className="h-24 w-full max-w-[200px] flex items-center justify-center border border-dashed border-gray-200 bg-gray-50 rounded-xl mb-4 group-hover:border-blue-200 transition-colors">
                  {s.icon}
                </div>
                <div className="text-xs text-gray-500 font-medium px-4 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-24 md:mt-32">
          <h2 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-10 tracking-tight text-center md:text-left">
            Why You'll Love This Polo
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 border-b border-gray-100 pb-16">
            {[
              {icon: Zap, title: "Lightweight\n& Breathable"},
              {icon: Tag, title: "Moisture Wicking\nPerformance Fabric"},
              {icon: Ruler, title: "Smart Zipper Collar\nModern & Professional"},
              {icon: CheckCircle2, title: "Comfortable\nAll-Day Wear"},
              {icon: Building, title: "Perfect for\nWork, Events & Teams"},
            ].map((b,i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <b.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="font-semibold text-sm text-gray-900 whitespace-pre-line leading-snug">{b.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs, Size, Fabric */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <h3 className="text-xl font-black text-gray-900 mb-6">Product Specifications</h3>
            <div className="flex flex-col text-sm border-t border-gray-100">
              {[
                {l: "Fabric", v: "100% Performance Polyester"},
                {l: "Weight", v: "200 GSM"},
                {l: "Fit", v: "Regular Fit"},
                {l: "Feel", v: "Lightweight & Breathable"},
                {l: "Collar", v: "Premium Zipper Collar"},
                {l: "Sizes", v: "38 - 52"},
                {l: "Suitable For", v: "Corporate Teams, Events, Staff Uniforms"},
              ].map((s,i) => (
                <div key={i} className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                  <span className="text-gray-500 font-semibold">{s.l}</span>
                  <span className="col-span-2 text-gray-900 font-medium">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-xl font-black text-gray-900 mb-6">Size Guide</h3>
            <div className="flex flex-col">
              <div className="w-full bg-gray-50 border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm">
                 <table className="w-full text-center text-xs">
                   <thead>
                     <tr className="bg-gray-100 border-b border-gray-200 text-gray-600">
                       <th className="py-2.5 font-bold">Size</th>
                       <th className="py-2.5 font-bold">Chest (in)</th>
                       <th className="py-2.5 font-bold">Length (in)</th>
                     </tr>
                   </thead>
                   <tbody className="text-gray-800 font-medium">
                     {[
                       {s: '38', c: '38', l: '26'},
                       {s: '40', c: '40', l: '27'},
                       {s: '42', c: '42', l: '28'},
                       {s: '44', c: '44', l: '29'},
                       {s: '46', c: '46', l: '30'},
                     ].map((r, i) => (
                       <tr key={i} className="border-b border-gray-100 last:border-0">
                         <td className="py-2 font-bold bg-white/50">{r.s}</td>
                         <td className="py-2">{r.c}</td>
                         <td className="py-2">{r.l}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>
              <a href="#" className="text-[#2563EB] font-bold text-sm hover:underline flex items-center gap-1 group w-max">
                View Detailed Size Guide <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform"/>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xl font-black text-gray-900 mb-6">Fabric Close-up</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 mb-5 aspect-square bg-gray-100 shadow-sm relative">
               <img src="/womens-tshirt.jpg" alt="Fabric Texture" className="w-full h-full object-cover brightness-75 scale-150 origin-bottom" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-wider font-bold text-gray-500">
              <div className="flex flex-col items-center gap-1.5"><Zap size={22} className="text-gray-700"/>Breathable</div>
              <div className="flex flex-col items-center gap-1.5"><Zap size={22} className="text-gray-700"/>Quick Dry</div>
              <div className="flex flex-col items-center gap-1.5"><Shield size={22} className="text-gray-700"/>Durable</div>
            </div>
          </div>
        </div>

        {/* See It Customized & Logo Placement */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 border-t border-gray-100 pt-16">
          <div>
            <h3 className="text-2xl font-display font-black text-gray-900 mb-8">See It Customized</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-[3/4] bg-gray-100 rounded-lg border border-gray-200 overflow-hidden group cursor-pointer shadow-sm">
                  <img src="/womens-tshirt.jpg" alt="Customized Example" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium mt-4">Real examples of how logos look on this polo.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-black text-gray-900 mb-8">Logo Placement Guide</h3>
            <div className="flex flex-wrap md:flex-nowrap justify-between items-end bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
               <div className="flex flex-col items-center w-1/2 md:w-auto mb-6 md:mb-0">
                 <div className="h-28 w-24 border-[3px] border-gray-300 rounded-t-xl border-b-0 relative bg-white">
                   <div className="absolute top-6 left-14 w-5 h-5 border-2 border-dashed border-[#2563EB] bg-blue-50 text-[9px] font-bold flex items-center justify-center text-blue-700">Logo</div>
                 </div>
                 <span className="text-xs font-bold text-gray-900 mt-4 text-center">Left Chest<br/><span className="text-gray-500 font-medium">3" x 3"</span></span>
               </div>
               <div className="flex flex-col items-center w-1/2 md:w-auto mb-6 md:mb-0">
                 <div className="h-28 w-24 border-[3px] border-gray-300 rounded-t-xl border-b-0 relative bg-white">
                   <div className="absolute top-6 left-4 w-5 h-5 border-2 border-dashed border-[#2563EB] bg-blue-50 text-[9px] font-bold flex items-center justify-center text-blue-700">Logo</div>
                 </div>
                 <span className="text-xs font-bold text-gray-900 mt-4 text-center">Right Chest<br/><span className="text-gray-500 font-medium">3" x 3"</span></span>
               </div>
               <div className="flex flex-col items-center w-1/2 md:w-auto">
                 <div className="h-28 w-24 border-[3px] border-gray-300 rounded-t-xl border-b-0 relative bg-white">
                   <div className="absolute top-8 left-6 w-10 h-12 border-2 border-dashed border-[#2563EB] bg-blue-50 text-[9px] font-bold flex items-center justify-center text-blue-700">Logo</div>
                 </div>
                 <span className="text-xs font-bold text-gray-900 mt-4 text-center">Back<br/><span className="text-gray-500 font-medium">8" x 10"</span></span>
               </div>
               <div className="flex flex-col items-center w-1/2 md:w-auto">
                 <div className="h-20 w-10 border-[3px] border-gray-300 rounded-xl relative bg-white">
                   <div className="absolute top-4 left-2 w-5 h-5 border-2 border-dashed border-[#2563EB] bg-blue-50 text-[9px] font-bold flex items-center justify-center text-blue-700">Logo</div>
                 </div>
                 <span className="text-xs font-bold text-gray-900 mt-4 text-center">Sleeve<br/><span className="text-gray-500 font-medium">2" x 2"</span></span>
               </div>
            </div>
          </div>
        </div>

        {/* Perfect For */}
        <div className="mt-24 md:mt-32">
          <h3 className="text-2xl font-display font-black text-gray-900 mb-8 text-center md:text-left">Perfect For</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {[
              {icon: Building, label: "Corporate Uniforms"},
              {icon: Users, label: "Event Teams"},
              {icon: Briefcase, label: "Retail Staff"},
              {icon: Star, label: "Hospitality Teams"},
              {icon: Award, label: "Promotional Events"},
              {icon: CheckCircle2, label: "Sports Teams"},
              {icon: ShieldCheck, label: "Conferences & Exhibitions"},
            ].map((p,i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 hover:bg-white px-6 py-5 rounded-xl w-36 md:w-44 text-center border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all cursor-default">
                 <p.icon className="text-[#111827] mb-3" size={28} strokeWidth={1.5}/>
                 <span className="text-xs md:text-sm font-bold leading-tight text-gray-900">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ordering for a Team? */}
        <div className="mt-24 bg-[#111827] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="relative z-10 w-full md:w-auto text-center md:text-left">
            <h3 className="text-3xl font-display font-black mb-3">Ordering for a Team?</h3>
            <p className="text-gray-300 font-medium mb-8 md:mb-0 text-lg">Get special pricing for 25+ pieces.</p>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-4 text-sm font-bold text-gray-200">
              <span className="flex items-center gap-2"><Check size={18} className="text-yoode-coral"/> Volume Discounts</span>
              <span className="flex items-center gap-2"><Check size={18} className="text-yoode-coral"/> Mix Sizes & Colours</span>
              <span className="flex items-center gap-2"><Check size={18} className="text-yoode-coral"/> On-Time Delivery</span>
              <span className="flex items-center gap-2"><Check size={18} className="text-yoode-coral"/> Dedicated Support</span>
            </div>
            <button className="w-full md:w-auto bg-yoode-coral text-white font-bold py-4 px-8 rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap shadow-lg flex items-center justify-center gap-2 group">
              Get Bulk Pricing <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
        </div>

        {/* Delivery & Returns + FAQs */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-gray-100 pt-16">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-display font-black text-gray-900 mb-8">Delivery & Support</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <Truck className="text-gray-700 shrink-0" size={28}/>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Standard Delivery</h4>
                  <p className="text-sm text-gray-600 font-medium">5-7 working days dispatch for custom orders. Plain orders dispatch in 2-4 days.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <RefreshCcw className="text-gray-700 shrink-0" size={28}/>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Easy Returns</h4>
                  <p className="text-sm text-gray-600 font-medium">Hassle-free replacement for any manufacturing defects or print issues.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <Headphones className="text-gray-700 shrink-0" size={28}/>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
                  <p className="text-sm text-gray-600 font-medium">Our team is here to help with your design or order queries anytime.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-6">
              <h3 className="text-2xl font-display font-black text-gray-900">Frequently Asked Questions</h3>
              <a href="#" className="text-[#2563EB] font-bold text-sm hover:underline hidden md:block">View All FAQs &rarr;</a>
            </div>
            
            <div className="w-full h-px bg-gray-200" />
            <div className="flex flex-col">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="border-b border-gray-200">
                    <button
                      className="w-full py-5 flex items-center gap-4 md:gap-6 text-left group focus:outline-none"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                    >
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Plus className="w-4 h-4" strokeWidth={2.5} />
                        </motion.div>
                      </span>

                      <span className="flex-1 text-sm md:text-base font-bold text-gray-900 leading-snug group-hover:text-black transition-colors duration-300">
                        {faq.q}
                      </span>

                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-yoode-coral text-white"
                            : "bg-white text-yoode-coral border border-yoode-coral/20 group-hover:bg-yoode-coral group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pl-[40px] md:pl-[48px] pr-10 pb-6 text-sm text-gray-500 leading-relaxed font-medium">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <a href="#" className="text-[#2563EB] font-bold text-sm hover:underline block md:hidden mt-6 text-center">View All FAQs &rarr;</a>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h3 className="text-2xl font-display font-black text-gray-900 mb-3">Customer Reviews</h3>
              <div className="flex items-center gap-4">
                <div className="flex text-amber-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="font-bold text-lg">4.9/5</span>
              </div>
              <p className="text-sm text-gray-500 font-medium mt-1">Trusted by 10,000+ businesses</p>
            </div>
            <button className="border-2 border-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
              Write a Review
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "Priya S.", r: "HR Manager, Tech Company", t: "Great quality and excellent service. Our team loved the polos!" },
              { n: "Rahul K.", r: "Event Coordinator", t: "The fabric is highly breathable and perfect for our outdoor events. Logos were printed perfectly." },
              { n: "Anita M.", r: "Retail Owner", t: "Very prompt delivery and great customer support. Will order again." }
            ].map((r, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex text-amber-400 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-800 font-medium mb-6 text-sm">"{r.t}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {r.n.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">{r.n}</div>
                    <div className="text-xs text-gray-500 font-medium">{r.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 border-t border-gray-100 pt-16 pb-12">
          <h3 className="text-2xl font-display font-black text-gray-900 mb-8">Related Products</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar">
            {[
              { n: "Women's Classic Polo", p: "₹399" },
              { n: "Women's Dry-Fit Polo", p: "₹450" },
              { n: "Women's V-Neck Polo", p: "₹450" },
              { n: "Men's Performance Polo", p: "₹450" },
            ].map((p, i) => (
              <div key={i} className="min-w-[180px] md:min-w-[220px] group cursor-pointer">
                <div className="aspect-[4/5] bg-gray-100 rounded-xl mb-4 overflow-hidden">
                  <img src="/womens-tshirt.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-yoode-coral transition-colors">{p.n}</h4>
                <div className="text-gray-600 font-semibold">{p.p}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
