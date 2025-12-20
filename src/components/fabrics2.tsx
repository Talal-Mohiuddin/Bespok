// BespokeFabricsSplitSection.tsx
"use client";

export default function FabricsSection2() {
  return (
    <section className="w-full bg-[#F3F2F0]">
      {/* Equal top/bottom spacing */}
      <div className="mx-auto max-w-[1400px] px-8 py-24 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_620px]">
          {/* TEXT */}
          <div className="order-1 flex justify-center lg:order-1">
            <div className="w-full max-w-[640px] text-center">
              <h2 className="font-serif text-[40px] leading-[1.15] text-black/80 sm:text-[44px]">
                Bespoke Fabrics
              </h2>

              <p className="mt-8 text-[16px] leading-[2.05] text-black/60 sm:text-[17px]">
                In the mid-1700s, the Cerruti family name appeared in communal
                lists under “Arti et Negotij,” a term for those who made or
                commissioned clothing. From the late 1700s to 1881, several
                generations worked as self-employed and skilled weavers in local
                factories, building the cultural and economic capital that
                sparked one of modern history’s most remarkable business and
                personal ventures.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-2 flex justify-center lg:order-2">
            <div className="w-full max-w-[720px]">
              {/* dotted border like the reference */}
              <div className="border border-dotted border-black/40 p-0">
                <div className="overflow-hidden bg-white">
                  <img
                    src="/fabrics2.webp"
                    alt="Bespoke fabrics book"
                    className="h-[520px] w-full object-cover sm:h-[560px] lg:h-[600px]"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: keep same feel, text first then image */}
      </div>
    </section>
  );
}
