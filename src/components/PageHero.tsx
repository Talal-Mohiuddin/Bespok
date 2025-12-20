"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatSegment(seg: string) {
  const decoded = decodeURIComponent(seg);
  return decoded
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default function PageHero() {
  const pathname = usePathname(); // e.g. "/contact" or "/about/team"
  const segments = pathname.split("?")[0].split("#")[0].split("/").filter(Boolean);

  const title = segments.length ? formatSegment(segments[segments.length - 1]) : "Home";
  
  // Determine if title is long (more than 15 characters)
  const isLongTitle = title.length > 15;

  return (
    <section className="w-full bg-[#A9ACA7]">
      <div className="mx-auto flex h-[120px] sm:h-[150px] max-w-[1400px] flex-col items-center justify-center px-4 sm:px-10">
        <h1 
          className={`font-serif tracking-wide text-white text-center ${
            isLongTitle 
              ? "text-[24px] sm:text-[32px]" 
              : "text-[32px] sm:text-[40px]"
          }`}
        >
          {title.toUpperCase()}
        </h1>

        {/* Hide breadcrumbs on mobile, show on desktop */}
        <div className="mt-2 sm:mt-3 hidden sm:flex items-center gap-2 font-serif text-[16px] sm:text-[18px] text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          {segments.map((seg, idx) => {
            const href = "/" + segments.slice(0, idx + 1).join("/");
            const label = formatSegment(seg);
            const isLast = idx === segments.length - 1;

            return (
              <span key={href} className="flex items-center gap-2">
                <span className="text-white/60">›</span>
                {isLast ? (
                  <span>{label}</span>
                ) : (
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}