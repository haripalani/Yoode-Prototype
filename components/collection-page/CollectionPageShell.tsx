import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CollectionClient } from "./CollectionClient";

/** The frame every collection page shares: header over the dark hero, the page, footer. */
export function CollectionPageShell({ slug }: { slug: string }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip font-sans selection:bg-yoode-coral selection:text-white">
      <Header />
      <main className="flex-1">
        <CollectionClient slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
