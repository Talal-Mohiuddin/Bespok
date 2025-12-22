"use client";

import { Button } from "@/components/ui/button";

type FabricItem = {
  image: string;
  alt: string;
};

export default function FabricsSection() {
  const items: FabricItem[] = [
    { image: "/fabric1.jpg", alt: "Premium fabric 1" },
    { image: "/fabric2.jpg", alt: "Premium fabric 2" },
    { image: "/fabric3.jpg", alt: "Premium fabric 3" },
  ];

  return (
    <section className="bg-[#F7F2ED]">
      {/* Header */}
      <div className="mx-auto max-w-[1400px] pt-20">
        <h2 className="text-center font-serif text-[44px] leading-[1.1] text-[#111111]">
          Discover Our World of Premium Fabrics
        </h2>

        <p className="mx-auto mt-6 max-w-[760px] text-center font-serif text-[20px] leading-[1.7] text-[#111111]">
          From classic elegance to modern luxury our fabrics reflect unparalleled
          <br />
          craftsmanship, rich heritage and enduring style.
        </p>
      </div>

      {/* FULL-WIDTH image strip */}
      <div className="mt-14 border-t border-black/20">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {items.map((it, i) => (
              <div
                key={it.alt}
                className={[
                  "group relative overflow-hidden",
                  "h-[680px]", // ⬅ increased height
                  "border-black/25",
                  i === 0 ? "" : "md:border-l",
                  "border-b md:border-b-0",
                ].join(" ")}
              >
                {/* Image */}
                <img
                  src={it.image}
                  alt={it.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  draggable={false}
                />

                {/* Dark hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/45" />

                {/* Center hover content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex flex-col items-center">
                      <p className="font-serif text-[22px] text-white">
                        Start&apos;s From 5000 PKR / meter
                      </p>

                      {/* <Button
                        className="mt-4 h-[44px] w-[170px] rounded-md bg-[#A66242] font-serif text-[16px] text-white hover:bg-[#532f26]"
                      >
                        Explore Now
                      </Button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
9