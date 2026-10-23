"use client";

import React, { useState, useEffect } from "react";
import { 
  Star, 
  Check, 
  X, 
  ThumbsUp, 
  MessageSquarePlus, 
  Sparkles, 
  ShieldCheck, 
  Filter, 
  ChevronRight, 
  Award,
  Send,
  Building,
  CheckCircle2
} from "lucide-react";

export interface ReviewItem {
  id: string;
  author: string;
  role?: string;
  location?: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
  color: string;
  size: string;
  recommend: boolean;
  helpfulCount: number;
}

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Karthik S.",
    role: "Founder, PeakStack",
    location: "Bengaluru",
    rating: 5,
    date: "October 18, 2026",
    title: "Flawless embroidery on our startup team polos",
    body: "The YKK silver zipper elevates it completely from regular button polos. The 220 GSM combed cotton feels premium, substantial and breathes effortlessly in our Bengaluru weather. Embroidered logo stitching is super crisp with zero loose threads.",
    verified: true,
    color: "Navy Blue",
    size: "40 (M)",
    recommend: true,
    helpfulCount: 24
  },
  {
    id: "rev-2",
    author: "Priya N.",
    role: "Event Director",
    location: "Chennai",
    rating: 5,
    date: "October 02, 2026",
    title: "Washed 15+ times with zero collar curling",
    body: "Ordered 120 custom branded polos for our tech summit in Chennai. The structured collar with Lycra core stays perfectly crisp without folding or curling. No color bleeding or shrinking whatsoever. Best company merch we've ever done.",
    verified: true,
    color: "Onyx Black",
    size: "38 (S)",
    recommend: true,
    helpfulCount: 18
  },
  {
    id: "rev-3",
    author: "Rohan M.",
    role: "Managing Partner",
    location: "Mumbai",
    rating: 5,
    date: "September 19, 2026",
    title: "Substantial 220 GSM weight, sleek tailored drape",
    body: "Not your average cheap giveaway polo. The double-knit pique fabric has a rich luxury handfeel. Looks sharp both with tailored chinos at client meetings and relaxed with jeans on Fridays. Quick 6-day dispatch to Mumbai was fantastic.",
    verified: true,
    color: "Forest Green",
    size: "42 (L)",
    recommend: true,
    helpfulCount: 15
  },
  {
    id: "rev-4",
    author: "Arjun V.",
    role: "Sports Club Captain",
    location: "Hyderabad",
    rating: 5,
    date: "September 08, 2026",
    title: "Perfect team travel polo for our badminton squad",
    body: "Moisture-wicking yet feels 100% like combed luxury cotton. Custom silicone sleeve emblems stayed pristine through intense interstate travel. Ordered 35 pieces with individual player initial digitizations.",
    verified: true,
    color: "Navy Blue",
    size: "44 (XL)",
    recommend: true,
    helpfulCount: 11
  },
  {
    id: "rev-5",
    author: "Deepa R.",
    role: "HR Operations Lead",
    location: "Pune",
    rating: 4,
    date: "August 27, 2026",
    title: "Impressive unboxing and presentation packaging",
    body: "Delivered in unified custom presentation packaging with pre-sorted department sizing tags. Sizing runs true to size. Fabric handfeel is dense and breathable.",
    verified: true,
    color: "Burgundy",
    size: "40 (M)",
    recommend: true,
    helpfulCount: 9
  }
];

export default function YoodeCustomerReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [isWritingReview, setIsWritingReview] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [likedReviewIds, setLikedReviewIds] = useState<string[]>([]);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  // New review form state
  const [formRating, setFormRating] = useState<number>(5);
  const [formHoverRating, setFormHoverRating] = useState<number>(5);
  const [formAuthor, setFormAuthor] = useState<string>("");
  const [formRole, setFormRole] = useState<string>("");
  const [formTitle, setFormTitle] = useState<string>("");
  const [formBody, setFormBody] = useState<string>("");
  const [formColor, setFormColor] = useState<string>("Navy Blue");
  const [formSize, setFormSize] = useState<string>("40 (M)");
  const [formRecommend, setFormRecommend] = useState<boolean>(true);

  // Close overlay on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen]);

  const handleToggleLike = (id: string) => {
    if (likedReviewIds.includes(id)) {
      setLikedReviewIds((prev) => prev.filter((i) => i !== id));
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount - 1 } : r))
      );
    } else {
      setLikedReviewIds((prev) => [...prev, id]);
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
      );
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formAuthor.trim() || !formTitle.trim() || !formBody.trim()) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: formAuthor.trim(),
      role: formRole.trim() || "Verified Buyer",
      location: "India",
      rating: formRating,
      date: "Just now",
      title: formTitle.trim(),
      body: formBody.trim(),
      verified: true,
      color: formColor,
      size: formSize,
      recommend: formRecommend,
      helpfulCount: 0
    };

    setReviews([newReview, ...reviews]);
    setSubmittedSuccess(true);
    setFormAuthor("");
    setFormRole("");
    setFormTitle("");
    setFormBody("");
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsWritingReview(false);
    }, 2500);
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === "5-star") return r.rating === 5;
    if (activeFilter === "navy") return r.color === "Navy Blue";
    return true;
  });

  return (
    <section 
      id="customer-reviews" 
      className="w-full bg-[#f4f4f4] text-black border-t border-black/10 py-12 lg:py-16 select-none scroll-mt-24"
    >
      {/* Aligned container: starts with Logo on left, ends with icons on right */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:pl-[98px] lg:pr-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-500 mb-1.5 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-700" />
              Verified Team &amp; Client Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-black">
              Reviews &amp; Ratings
            </h2>
          </div>

          {/* Quick Rating Summary & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-black/10 shadow-xs">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-black">4.9</span>
                <span className="text-xs text-gray-400 font-bold">/5</span>
              </div>
              <div className="flex items-center gap-0.5 text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs font-bold text-gray-600">348 Orders</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsOverlayOpen(true);
                setIsWritingReview(true);
              }}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-neutral-50 text-black border-2 border-black/15 hover:border-black font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-xs"
            >
              <MessageSquarePlus size={14} />
              <span>Write a Review</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOverlayOpen(true);
                setIsWritingReview(false);
              }}
              className="px-5 py-2.5 rounded-2xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
            >
              <span>View All 348 Reviews</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* 3 Top Featured Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {reviews.slice(0, 3).map((rev) => (
            <div 
              key={rev.id} 
              className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center font-black text-xs text-black">
                      {rev.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-black leading-tight">{rev.author}</h4>
                      {rev.role && (
                        <p className="text-[10px] text-gray-500 font-medium">{rev.role}</p>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] text-gray-400 font-medium">{rev.date}</span>
                </div>

                {/* Stars & Verified pill */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-0.5 text-black">
                    {[...Array(rev.rating)].map((_, j) => (
                      <Star key={j} size={13} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="text-[9px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Check size={10} strokeWidth={3} /> Verified Order
                    </span>
                  )}
                </div>

                {/* Title & Body */}
                <h5 className="font-extrabold text-sm text-black mb-1.5 leading-snug">
                  {rev.title}
                </h5>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {rev.body}
                </p>
              </div>

              {/* Footer info: Variant & Like button */}
              <div className="pt-3 mt-4 border-t border-black/5 flex items-center justify-between text-[11px]">
                <span className="text-gray-500 font-medium">
                  Variant: <strong className="text-black">{rev.color} / {rev.size}</strong>
                </span>

                <button
                  type="button"
                  onClick={() => handleToggleLike(rev.id)}
                  className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                    likedReviewIds.includes(rev.id)
                      ? "text-blue-700 bg-blue-50 border border-blue-200"
                      : "text-gray-500 hover:text-black bg-neutral-100 hover:bg-neutral-200/80"
                  }`}
                >
                  <ThumbsUp size={11} />
                  <span>{rev.helpfulCount}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Big Interactive "Show More Reviews" Trigger Bar */}
        <div className="w-full bg-white rounded-2xl p-4 sm:p-5 border border-black/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-black">
                99.4% Customer Satisfaction Across 348 Corporate Teams
              </h4>
              <p className="text-xs text-gray-500">
                Detailed feedback on embroidery accuracy, bio-washed cotton softness, and Tirupur production turnaround.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => {
                setIsOverlayOpen(true);
                setIsWritingReview(false);
              }}
              className="py-2.5 px-5 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm whitespace-nowrap"
            >
              <span>Show More Reviews (348)</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* =========================================================================
          SIDE OVERLAY DRAWER (Slide-over from the right)
      ========================================================================= */}
      {isOverlayOpen && (
        <div className="fixed inset-0 z-[150] overflow-hidden select-text">
          {/* Backdrop blur overlay */}
          <div 
            onClick={() => setIsOverlayOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          />

          <div className="fixed inset-y-0 right-0 max-w-2xl w-full bg-white shadow-2xl flex flex-col z-[160] border-l border-black/10 animate-in slide-in-from-right duration-300">
            
            {/* Overlay Header */}
            <div className="p-5 sm:p-6 border-b border-black/10 flex items-center justify-between bg-[#FAF9F7] shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                    Customer Reviews
                  </h3>
                  <span className="text-xs font-extrabold text-gray-500 bg-black/5 px-2.5 py-0.5 rounded-full">
                    348
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsWritingReview(!isWritingReview)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isWritingReview
                      ? "bg-black text-white"
                      : "bg-white text-black border border-black/20 hover:border-black"
                  }`}
                >
                  <MessageSquarePlus size={14} />
                  <span>{isWritingReview ? "Close Form" : "Write a Review"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsOverlayOpen(false)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-neutral-100 text-black flex items-center justify-center border border-black/10 transition-colors cursor-pointer"
                  aria-label="Close review overlay"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              
              {/* Write Review Form Card (Collapsible) */}
              {isWritingReview && (
                <div className="bg-[#FAF9F7] rounded-3xl p-5 sm:p-6 border-2 border-black shadow-md animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-base font-black text-black">Write a Product Review</h4>
                      <p className="text-xs text-gray-500 font-medium">Share your experience with the Performance Zipper Polo.</p>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                      Verified Review
                    </span>
                  </div>

                  {submittedSuccess ? (
                    <div className="py-8 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-emerald-300 p-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                        <CheckCircle2 size={28} />
                      </div>
                      <h4 className="font-extrabold text-base text-black mb-1">Review Submitted Successfully!</h4>
                      <p className="text-xs text-gray-500">Thank you for helping the teamwear community with your genuine feedback.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      {/* Star Rating Picker */}
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                          Overall Rating *
                        </label>
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setFormRating(star)}
                              onMouseEnter={() => setFormHoverRating(star)}
                              onMouseLeave={() => setFormHoverRating(formRating)}
                              className="p-1 text-neutral-300 hover:text-black transition-colors cursor-pointer"
                            >
                              <Star 
                                size={24} 
                                className={star <= (formHoverRating || formRating) ? "text-black fill-black" : "text-neutral-300"} 
                              />
                            </button>
                          ))}
                          <span className="text-xs font-bold text-gray-600 ml-2">
                            {formRating === 5 && "5 - Exceptional Quality"}
                            {formRating === 4 && "4 - Great Fit & Finish"}
                            {formRating === 3 && "3 - Average Quality"}
                            {formRating === 2 && "2 - Below Expectation"}
                            {formRating === 1 && "1 - Poor"}
                          </span>
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formAuthor}
                            onChange={(e) => setFormAuthor(e.target.value)}
                            placeholder="e.g. Anand Kumar"
                            className="w-full px-3 py-2 bg-white rounded-xl border border-black/15 text-xs text-black focus:outline-none focus:border-black"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Company / Role (Optional)
                          </label>
                          <input
                            type="text"
                            value={formRole}
                            onChange={(e) => setFormRole(e.target.value)}
                            placeholder="e.g. Lead Designer, Zoho"
                            className="w-full px-3 py-2 bg-white rounded-xl border border-black/15 text-xs text-black focus:outline-none focus:border-black"
                          />
                        </div>
                      </div>

                      {/* Variant & Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Color Ordered
                          </label>
                          <select
                            value={formColor}
                            onChange={(e) => setFormColor(e.target.value)}
                            className="w-full px-3 py-2 bg-white rounded-xl border border-black/15 text-xs text-black focus:outline-none focus:border-black cursor-pointer"
                          >
                            <option value="Navy Blue">Navy Blue</option>
                            <option value="Onyx Black">Onyx Black</option>
                            <option value="Forest Green">Forest Green</option>
                            <option value="Burgundy">Burgundy</option>
                            <option value="Optic White">Optic White</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Size Ordered
                          </label>
                          <select
                            value={formSize}
                            onChange={(e) => setFormSize(e.target.value)}
                            className="w-full px-3 py-2 bg-white rounded-xl border border-black/15 text-xs text-black focus:outline-none focus:border-black cursor-pointer"
                          >
                            <option value="38 (S)">38 (S)</option>
                            <option value="40 (M)">40 (M)</option>
                            <option value="42 (L)">42 (L)</option>
                            <option value="44 (XL)">44 (XL)</option>
                            <option value="46 (2XL)">46 (2XL)</option>
                            <option value="48 (3XL)">48 (3XL)</option>
                          </select>
                        </div>
                      </div>

                      {/* Review Title */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Review Headline *
                        </label>
                        <input
                          type="text"
                          required
                          value={formTitle}
                          onChange={(e) => setFormTitle(e.target.value)}
                          placeholder="e.g. Crisp collar and exceptional embroidery precision"
                          className="w-full px-3 py-2 bg-white rounded-xl border border-black/15 text-xs text-black focus:outline-none focus:border-black"
                        />
                      </div>

                      {/* Review Body */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Detailed Review *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formBody}
                          onChange={(e) => setFormBody(e.target.value)}
                          placeholder="How did the fabric feel? How was the collar structure after washing? Would you recommend this for team uniforms?"
                          className="w-full px-3 py-2 bg-white rounded-xl border border-black/15 text-xs text-black focus:outline-none focus:border-black resize-none"
                        />
                      </div>

                      {/* Recommendation */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-gray-700">
                          Would you recommend this polo?
                        </span>
                        <div className="flex items-center gap-3">
                          <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                            <input
                              type="radio"
                              name="recommend"
                              checked={formRecommend === true}
                              onChange={() => setFormRecommend(true)}
                              className="accent-black"
                            />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1.5 text-xs font-bold cursor-pointer">
                            <input
                              type="radio"
                              name="recommend"
                              checked={formRecommend === false}
                              onChange={() => setFormRecommend(false)}
                              className="accent-black"
                            />
                            <span>No</span>
                          </label>
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3 bg-black hover:bg-neutral-800 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm"
                        >
                          <Send size={14} />
                          <span>Submit Verified Review</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {/* Rating Overview Breakdown in Overlay */}
              <div className="bg-[#FAF9F7] rounded-3xl p-5 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-black">4.9</span>
                    <span className="text-sm text-gray-400 font-bold">/ 5.0</span>
                  </div>
                  <div className="flex items-center gap-1 text-black my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    348 Verified Ratings
                  </span>
                </div>

                {/* Rating Distribution Bars */}
                <div className="w-full max-w-xs space-y-1.5 text-xs font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-gray-500">5★</span>
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-black rounded-full" style={{ width: "94%" }} />
                    </div>
                    <span className="w-8 text-right text-gray-500 font-bold">94%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-gray-500">4★</span>
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-black/70 rounded-full" style={{ width: "5%" }} />
                    </div>
                    <span className="w-8 text-right text-gray-500 font-bold">5%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-gray-500">3★</span>
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-black/40 rounded-full" style={{ width: "1%" }} />
                    </div>
                    <span className="w-8 text-right text-gray-500 font-bold">1%</span>
                  </div>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === "all"
                      ? "bg-black text-white"
                      : "bg-neutral-100 hover:bg-neutral-200 text-gray-700"
                  }`}
                >
                  All ({reviews.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("5-star")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === "5-star"
                      ? "bg-black text-white"
                      : "bg-neutral-100 hover:bg-neutral-200 text-gray-700"
                  }`}
                >
                  5 Stars Only
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("navy")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeFilter === "navy"
                      ? "bg-black text-white"
                      : "bg-neutral-100 hover:bg-neutral-200 text-gray-700"
                  }`}
                >
                  Navy Blue Orders
                </button>
              </div>

              {/* All Reviews Feed */}
              <div className="space-y-4">
                {filteredReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-3xl border border-black/10 bg-white shadow-xs flex flex-col gap-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center font-black text-xs text-black">
                          {rev.author.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-black leading-tight">{rev.author}</h4>
                          {rev.role && (
                            <p className="text-[10px] text-gray-500 font-medium">
                              {rev.role} {rev.location && `• ${rev.location}`}
                            </p>
                          )}
                        </div>
                      </div>

                      <span className="text-[10px] text-gray-400 font-medium">{rev.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-black">
                        {[...Array(rev.rating)].map((_, j) => (
                          <Star key={j} size={12} fill="currentColor" stroke="none" />
                        ))}
                      </div>

                      {rev.verified && (
                        <span className="text-[9px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check size={10} strokeWidth={3} /> Verified Buyer
                        </span>
                      )}
                    </div>

                    <h5 className="font-extrabold text-xs sm:text-sm text-black">
                      {rev.title}
                    </h5>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {rev.body}
                    </p>

                    <div className="pt-2 mt-1 border-t border-black/5 flex items-center justify-between text-[11px]">
                      <span className="text-gray-400 text-[10px]">
                        Ordered: <strong className="text-gray-700">{rev.color} / {rev.size}</strong>
                      </span>

                      <button
                        type="button"
                        onClick={() => handleToggleLike(rev.id)}
                        className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                          likedReviewIds.includes(rev.id)
                            ? "text-blue-700 bg-blue-50 border border-blue-200"
                            : "text-gray-500 hover:text-black bg-neutral-100 hover:bg-neutral-200/80"
                        }`}
                      >
                        <ThumbsUp size={10} />
                        <span>Helpful ({rev.helpfulCount})</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Overlay Footer */}
            <div className="p-4 border-t border-black/10 bg-[#FAF9F7] flex items-center justify-between shrink-0">
              <span className="text-xs text-gray-500 font-medium">
                Showing {filteredReviews.length} of 348 reviews
              </span>
              <button
                type="button"
                onClick={() => setIsOverlayOpen(false)}
                className="px-4 py-2 bg-black text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
