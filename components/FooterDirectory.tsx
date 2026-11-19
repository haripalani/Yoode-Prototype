"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { footerDirectory } from "@/data/footerDirectory";

/**
 * Collapsible link directory for the footer: a centred "Explore Yoode" toggle
 * that opens every collection, service and gifting page grouped by heading.
 */
export function FooterDirectory() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-t border-white/5 pt-8">
      <div className="flex justify-center">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yoode-coral/60"
        >
          Explore Yoode
          <ChevronDown
            size={18}
            strokeWidth={2.5}
            className={`text-yoode-coral transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-10 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
              <h3 className="text-xl font-bold text-white">Explore Yoode</h3>
              <p className="text-xs text-white/50">
                Find products, customisation services and helpful information
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
              {footerDirectory.map((group) => (
                <nav key={group.title} aria-label={group.title}>
                  <h4 className="text-sm font-bold text-white mb-4 pb-3 border-b border-white/10">
                    {group.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        {link.href ? (
                          <Link
                            href={link.href}
                            className="text-[13px] text-white/60 hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <span className="inline-flex flex-wrap items-center gap-1.5 text-[13px] text-white/30">
                            {link.label}
                            <span className="rounded border border-dashed border-white/20 px-1 text-[9px] leading-4 uppercase tracking-wide text-white/35">
                              URL to add
                            </span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
