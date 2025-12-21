"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SocialFooter() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <footer className="w-full min-h-[400px]">
      {/* Social Media Section */}
      <div className="bg-black min-h-[400px]">
        <div className="mx-auto w-full h-full px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 min-h-[400px]">
            <Link
              href="https://www.instagram.com/bespoketailorsislamabad/?hl=en"
              className="flex items-center justify-center border-r border-b md:border-b-0 border-white transition-opacity px-6 sm:px-8 md:px-12 relative overflow-hidden"
              onMouseEnter={() => isDesktop && setHoveredSocial("instagram")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {hoveredSocial === "instagram" ? (
                <Image
                  src="/socials/instagram2.png"
                  alt="Instagram"
                  fill
                  className="object-cover opacity-100 animate-in fade-in zoom-in-95 duration-300"
                />
              ) : (
                <Image
                  src="/socials/instagram.png"
                  alt="Instagram"
                  width={96}
                  height={96}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-80"
                />
              )}
            </Link>
            <Link
              href="https://www.tiktok.com/@bespoke.tailors"
              className="flex items-center justify-center border-b md:border-b-0 md:border-r border-white transition-opacity px-6 sm:px-8 md:px-12 relative overflow-hidden"
              onMouseEnter={() => isDesktop && setHoveredSocial("tiktok")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {hoveredSocial === "tiktok" ? (
                <Image
                  src="/socials/tiktok2.png"
                  alt="TikTok"
                  fill
                  className="object-cover opacity-100 animate-in fade-in zoom-in-95 duration-300"
                  priority
                />
              ) : (
                <Image
                  src="/socials/tiktok.png"
                  alt="TikTok"
                  width={96}
                  height={96}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-80"
                />
              )}
            </Link>
            <Link
              href="https://www.facebook.com/BespokeTailors.ISB/"
              className="flex items-center justify-center border-r md:border-r border-white transition-opacity px-6 sm:px-8 md:px-12 relative overflow-hidden"
              onMouseEnter={() => isDesktop && setHoveredSocial("facebook")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {hoveredSocial === "facebook" ? (
                <Image
                  src="/socials/facebook2.png"
                  alt="Facebook"
                  fill
                  className="object-cover opacity-100 animate-in fade-in zoom-in-95 duration-300"
                />
              ) : (
                <Image
                  src="/socials/facebook.png"
                  alt="Facebook"
                  width={96}
                  height={96}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-80"
                />
              )}
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center transition-opacity px-6 sm:px-8 md:px-12 relative overflow-hidden"
              onMouseEnter={() => isDesktop && setHoveredSocial("youtube")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {hoveredSocial === "youtube" ? (
                <span className="text-white text-lg sm:text-xl md:text-2xl font-bold animate-in fade-in zoom-in-95 duration-300">
                  Follow Us
                </span>
              ) : (
                <Image
                  src="/socials/youtube.png"
                  alt="YouTube"
                  width={96}
                  height={96}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-80"
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
