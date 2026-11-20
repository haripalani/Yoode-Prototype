import Link from "next/link";
import type { DirectoryLink } from "@/data/footerDirectory";

/** A footer link, or muted text with a "URL to add" tag when its page doesn't exist yet. */
export function FooterLink({ link, className = "" }: { link: DirectoryLink; className?: string }) {
  if (link.href) {
    return (
      <Link href={link.href} className={`text-white/60 hover:text-white transition-colors ${className}`}>
        {link.label}
      </Link>
    );
  }
  return (
    <span className={`inline-flex flex-wrap items-center gap-1.5 text-white/30 ${className}`}>
      {link.label}
      <span className="rounded border border-dashed border-white/20 px-1 text-[9px] leading-4 uppercase tracking-wide text-white/35">
        URL to add
      </span>
    </span>
  );
}
