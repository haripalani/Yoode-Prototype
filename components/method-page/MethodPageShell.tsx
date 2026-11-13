import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MethodClient } from "./MethodClient";

/** The page frame every method page shares: header (dark text over a light hero), the method page, footer. */
export function MethodPageShell({ slug, lightHero }: { slug: string; lightHero: boolean }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip font-sans selection:bg-yoode-coral selection:text-white">
      <Header lightHero={lightHero} />
      {/* no top padding: the hero runs under the transparent header, as on the home page */}
      <main className="flex-1">
        <MethodClient slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
