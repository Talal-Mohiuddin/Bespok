"use client";

export default function ServicesSection() {
  return (
    <section className="bg-white">
      {/* Match the generous top/bottom whitespace */}
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8">
        {/* Title */}
        <h2 className="text-center font-serif text-[34px] leading-[1.2] text-[#A66242]">
          Services We Offer as Tailors in Islamabad
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          <ServiceCard
            img="/customTailoring.jpg"
            crop="object-[15%_55%]"
            title="Custom Tailoring"
            desc={
              <>
                Every suit, jacket, shirt or traditional attire
                <br />
                is handcrafted to your exact measurements
                <br />
                and preferences.
              </>
            }
          />

          <ServiceCard
            img="/formalOcassional.jpg"
            crop="object-[50%_40%]"
            title="Formal &amp; Occasion Wear"
            desc={
              <>
                From business suits to wedding ensembles
                <br />
                such as sherwanis and three-piece suits
                <br />
                design perfection meets your vision.
              </>
            }
          />

          <ServiceCard
            img="/traditionalTailoring.jpg"
            crop="object-[85%_40%] scale-225"
            title="Traditional &amp; Cultural Wear"
            desc={
              <>
                Celebrate heritage with style from
                <br />
                perfectly tailored kurta pajama to
                <br />
                bespoke waistcoats.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  img,
  crop,
  title,
  desc,
}: {
  img: string;
  crop: string;
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image frame */}
      <div className="w-full max-w-[420px] overflow-hidden rounded-md border border-[#A66242]">
        <img
          src={img}
          alt={title}
          className={`h-[320px] w-full object-cover ${crop}`}
          draggable={false}
        />
      </div>

      {/* Title under image */}
      <h3 className="mt-8 font-serif text-[26px] leading-none text-[#A66242]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 max-w-[340px] font-serif text-[16px] leading-[1.7] text-[#1A1A1A]/90">
        {desc}
      </p>
    </div>
  );
}