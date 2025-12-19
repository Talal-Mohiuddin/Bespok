import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  return (
    <div className="bg-[#E8E3DC] ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">
          {/* Logo */}
          <div className="flex items-start justify-center md:justify-start">
            <Image
              src="/hero.png"
              alt="Bespoke Tailors Logo"
              width={300}
              height={400}
              className="w-60 h-80 object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(42%) sepia(45%) saturate(632%) hue-rotate(338deg) brightness(92%) contrast(88%)",
              }}
            />
          </div>

          {/* Bespoke Tailoring Links */}
          <div className="mt-16">
            <h3 className="font-serif text-xl text-[#8B6B47] mb-6">
              Bespoke Tailoring
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="#"
                className="text-[#8B6B47] hover:underline underline-offset-4"
              >
                Bespoke Suit
              </Link>
              <Link
                href="#"
                className="text-[#8B6B47] hover:underline underline-offset-4"
              >
                Bespoke Wedding Suit
              </Link>
              <Link
                href="#"
                className="text-[#8B6B47] hover:underline underline-offset-4"
              >
                Bespoke Business Suit
              </Link>
              <Link
                href="#"
                className="text-[#8B6B47] hover:underline underline-offset-4"
              >
                Bespoke Power Suit
              </Link>
              <Link
                href="#"
                className="text-[#8B6B47] hover:underline underline-offset-4"
              >
                Bespoke Gala Suit
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="mt-16">
            <h3 className="font-serif text-xl text-[#8B6B47] mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8B6B47] flex-shrink-0 mt-0.5" />
                <p className="text-[#8B6B47]">
                  7–8 Madni Plaza, Jinnah Avenue, Blue Area, Islamabad
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8B6B47]" />
                <a
                  href="tel:+925123422222"
                  className="text-[#8B6B47] hover:underline"
                >
                  +92 51 2342222
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#8B6B47]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href="tel:+925123422222"
                  className="text-[#8B6B47] hover:underline"
                >
                  +92 51 2342222
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8B6B47]" />
                <a
                  href="mailto:info@bespoketailorsislamabad.com"
                  className="text-[#8B6B47] hover:underline"
                >
                  info@bespoketailorsislamabad.com
                </a>
              </div>
            </div>
          </div>

          {/* Timings */}
          <div className="mt-16">
            <h3 className="font-serif text-xl text-[#8B6B47] mb-6">Timings</h3>
            <div className="flex flex-col gap-2 text-[#8B6B47]">
              <p>Mon–Sat: 10:00 AM – 10:00 PM</p>
              <p>Sun: 1:00 PM – 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#8B6B47]/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-[#8B6B47]">
            <p>© Copyright 2025</p>
            <span className="hidden md:inline">|</span>
            <Link href="#" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Refund and Returns Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}