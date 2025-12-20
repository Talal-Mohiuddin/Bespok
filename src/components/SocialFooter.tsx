import Image from "next/image";
import Link from "next/link";

export function SocialFooter() {
  return (
    <footer className="w-full">
      {/* Social Media Section */}
      <div className="bg-black">
        <div className="mx-auto w-full px-6">
          <div className="grid grid-cols-4 gap-0 h-full">
            <Link
              href="#"
              className="flex items-center justify-center border-r border-white hover:opacity-80 transition-opacity py-20 px-12 min-h-[200px]"
            >
              <Image
                src="/socials/instagram.png"
                alt="Instagram"
                width={96}
                height={96}
                className="w-24 h-24"
              />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center border-r border-white hover:opacity-80 transition-opacity py-20 px-12 min-h-[200px]"
            >
              <Image
                src="/socials/tiktok.png"
                alt="TikTok"
                width={96}
                height={96}
                className="w-24 h-24"
              />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center border-r border-white hover:opacity-80 transition-opacity py-20 px-12 min-h-[200px]"
            >
              <Image
                src="/socials/facebook.png"
                alt="Facebook"
                width={96}
                height={96}
                className="w-24 h-24"
              />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center hover:opacity-80 transition-opacity py-20 px-12 min-h-[200px]"
            >
              <Image
                src="/socials/youtube.png"
                alt="YouTube"
                width={96}
                height={96}
                className="w-24 h-24"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
