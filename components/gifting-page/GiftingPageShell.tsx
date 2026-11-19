import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GiftingClient } from "./GiftingClient";

/** The frame every corporate-gifting city page shares: header over the dark hero, the page, footer. */
export function GiftingPageShell({ slug }: { slug: string }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip font-sans selection:bg-yoode-coral selection:text-white">
      <Header />
      <main className="flex-1">
        <GiftingClient slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
