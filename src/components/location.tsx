"use client";

import React from "react";

export default function Location() {
  // Your shop address (Islamabad). Keep or change.
  const ADDRESS =
    "7–8 Madni Plaza, Jinnah Avenue, Blue Area, Islamabad";

  // Google Maps embed URL (no API key required)
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&z=15&output=embed`;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-0 py-10">
        <div className="w-full overflow-hidden bg-white">
          <iframe
            title="Shop location"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[520px] w-full"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
