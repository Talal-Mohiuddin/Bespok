'use client'
import React from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const GOLD = "#A66242";

export default function ContactSection() {
  return (
    <section className="bg-white">
      {/* outer spacing like reference */}
      <div className="mx-auto max-w-[1400px] px-10 py-20">
        {/* 2 equal halves on lg+ */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT HALF: IMAGE - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 w-full lg:order-1">
            <div className="overflow-hidden border border-black/10 bg-white">
              <img
                src="/Contact.webp"
                alt="Bespoke suit"
                className="h-[520px] w-full object-cover object-center"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT HALF: CONTENT - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 pt-1 lg:order-2">
            <p className="max-w-[520px] font-serif text-[17px] leading-[1.75] text-[#8A8A8A]">
              Begin your Bespoke Tailoring experience today. Contact us for a
              personalized one-on-one consultation with our bespoke master tailor.
            </p>

            <div className="mt-14 space-y-14 text-center lg:text-left">
              <Row
                icon={<Phone className="h-6 w-6" strokeWidth={1.5} />}
                title="Call Us"
                value="+92 51 2342222"
                href="tel:+92512342222"
              />

              <Row
                icon={<Mail className="h-6 w-6" strokeWidth={1.5} />}
                title="Email Us"
                value="info@bespoketailorsislamabad.com"
                href="mailto:info@bespoketailorsislamabad.com"
              />

              <Row
                icon={<MessageCircle className="h-6 w-6" strokeWidth={1.5} />}
                title="WhatsApp Us"
                value="+92 51 2342222"
                href="https://wa.me/92512342222"
              />

              <Row
                icon={<MapPin className="h-6 w-6" strokeWidth={1.5} />}
                title="Get Direction"
                value="7–8 Madni Plaza, Jinnah Avenue, Blue Area, Islamabad"
                href="https://www.google.com/maps/search/?api=1&query=7-8%20Madni%20Plaza%2C%20Jinnah%20Avenue%2C%20Blue%20Area%2C%20Islamabad"
                multiline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  title,
  value,
  href,
  multiline,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  multiline?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-6">
      {/* icon: same visual weight, no box */}
      <div className="pt-[2px]" style={{ color: GOLD }}>
        {icon}
      </div>

      <div className="min-w-0">
        <p className="font-serif text-[18px] leading-[1.2]" style={{ color: GOLD }}>
          {title}
        </p>

        <a
          href={href}
          className={[
            "mt-2 block font-serif text-[15px] leading-[1.75] text-[#A87457] hover:underline",
            multiline ? "max-w-[440px]" : "",
          ].join(" ")}
        >
          {value}
        </a>
      </div>
    </div>
  );
}