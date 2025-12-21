"use client";

import React from "react";

type Card = {
  title: string;
  desc: string;
  img: string;
};

const CARDS: Card[] = [
  {
    title: "Ermenegildo Zegna",
    desc: "Zegna fabrics epitomize Italian luxury. Manufactured in Italy, Zegna textiles are celebrated for their innovation, quality, and commitment to sustainability. Zegna suits showcase the epitome of Italian style, ensuring a sophisticated and contemporary look.",
    img: "/fabricType1.jpg",
  },
  {
    title: "Loro Piana",
    desc: "Immerse yourself in the luxury of Loro Piana fabrics, crafted in Italy. Synonymous with the finest cashmere and wool, Loro Piana suits represent the pinnacle of Italian textile craftsmanship. The brand's commitment to quality and sustainability ensures a suit of unparalleled elegance.",
    img: "/fabricType2.jpg",
  },
  {
    title: "Scabal",
    desc: "Indulge in the refinement of Scabal fabrics, expertly woven in England. With a legacy dating back to 1938, Scabal suits are a symbol of British elegance. The brand's commitment to quality and innovation has made it a trusted choice for discerning individuals worldwide.",
    img: "/fabricType3.jpg",
  },
  {
    title: "Caccioppoli",
    desc: "Caccioppoli fabrics, crafted in Italy, are a testament to Neapolitan tailoring excellence. With a rich history dating back to the 1920s, Caccioppoli suits showcase the brand's commitment to quality and authenticity, making them a choice for those who appreciate timeless style.",
    img: "/fabricType4.jpg",
  },
  {
    title: "Imparato Ariston",
    desc: "Immerse yourself in the elegance of Imparato Ariston fabrics, proudly manufactured in Italy. Known for their exquisite wool and blend textiles, Imparato Ariston suits represent the pinnacle of Italian craftsmanship, capturing a perfect balance between tradition and modernity.",
    img: "/fabricType5.jpg",
  },
  {
    title: "Thomas Mason",
    desc: "Step into a world of sartorial excellence with Thomas Mason fabrics. Crafted in Italy, each fabric reflects a legacy of craftsmanship and attention to detail. Thomas Mason suits embody a perfect fusion of Italian style and traditional English tailoring.",
    img: "/fabricType6.jpg",
  },
  {
    title: "Huddersfield",
    desc: "Experience British craftsmanship with Huddersfield fabrics, woven in England. With a history dating back to the 1920s, Huddersfield suits showcase the brand's commitment to producing premium quality textiles. Each fabric reflects the rich heritage of British tailoring.",
    img: "/fabricType7.jpg",
  },
  {
    title: "Carnet",
    desc: "Carnet fabrics, manufactured in Italy, are a symbol of luxury and sophistication. With a heritage dating back to the 1960s, Carnet suits showcase the brand's dedication to quality and innovation, making them a timeless choice for the modern gentleman.",
    img: "/fabricType8.jpg",
  },
  {
    title: "Delfino",
    desc: "Indulge in the luxury of Delfino fabrics, proudly made in Italy. With a heritage spanning over 100 years, Delfino suits are synonymous with Italian elegance and craftsmanship. The brand's dedication to quality ensures a suit that stands the test of time.",
    img: "/fabricType9.jpg",
  },
  {
    title: "Stylebiella",
    desc: "Experience the artistry of Italian tailoring with Stylebiella fabrics, crafted in Italy. Stylebiella suits embody the essence of Italian style, characterized by a perfect combination of tradition and contemporary design. Each fabric reflects a commitment to excellence.",
    img: "/fabricType10.jpg",
  },
  {
    title: "Lanificio F.lli Cerruti",
    desc: "In the mid 1700s, the Cerruti family name appeared in communal lists under \"Arti et Negotij,\" a term for those who made or commissioned clothing. From the late 1700s to 1881, several generations worked as self employed and skilled weavers in local factories, building the cultural and economic capital that sparked one of modern history's most remarkable business and personal ventures.",
    img: "/fabricType11.jpg",
  },
  {
    title: "Liberty",
    desc: "Discover elegance with Liberty fabrics, renowned for their timeless designs and impeccable craftsmanship. Liberty fabrics are manufactured in Italy, where tradition meets innovation. The brand's commitment to quality is evident in every thread, making it a choice for those who appreciate sophistication in their suits.",
    img: "/fabricType12.jpg",
  },
  {
    title: "Alumo",
    desc: "Swiss precision defines Alumo fabrics. Meticulously woven in Switzerland, Alumo fabrics are synonymous with luxury and comfort. Known for their exceptional cotton materials, Alumo brings a touch of Swiss excellence to suits, ensuring a perfect blend of style and substance.",
    img: "/fabricType13.jpg",
  },
  {
    title: "Piacenza",
    desc: "Elevate your wardrobe with Piacenza fabrics, crafted in Italy. With a focus on innovation and sustainability, Piacenza suits embody the essence of Italian style. The brand's commitment to quality and craftsmanship ensures a suit that combines tradition with modernity.",
    img: "/fabricType14.jpg",
  },
  {
    title: "Mileta",
    desc: "For generations, MILETA has been a leading European manufacturer of handkerchiefs and batistes. We've recently added shirting fabrics to our offerings, designed by top Italian talents. These new designs have been a hit with international customers.",
    img: "/fabricType15.jpg",
  },
  {
    title: "S.I.C Tess",
    desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting. From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS's products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics.",
    img: "/fabricType16.jpg",
  },
  {
    title: "Cotonificio Albini",
    desc: "Made in Italy design and manufacturing with cutting edge machinery and state of the art technology, the Albini 1876 fabrics have a history of pure excellence. The essence of the brand is brought to life by the research conducted on the rarest and most precious cottons and linens across the world, combining tradition, elegance and craftsmanship.",
    img: "/fabricType17.jpg",
  },
];

export default function FabricCardsGrid() {
  return (
    <section className="w-full bg-[#F5F3EF]">
      <div className="mx-auto max-w-[1400px] px-8 py-20">
        {/* 3 fixed columns, no centering */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <FabricCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FabricCard({ card }: { card: Card }) {
  return (
    <article className="bg-[#F3F1EC] border border-black/10 shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
      {/* Image */}
      <div className="px-8 pt-8">
        <div className="border border-dotted border-black/40 bg-white">
          <img
            src={card.img}
            alt={card.title}
            className="h-[230px] w-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Text */}
      <div className="px-10 pb-10 pt-8 text-center">
        <h3 className="font-serif text-[30px] text-black/80">
          {card.title}
        </h3>

        <p className="mx-auto mt-6 max-w-[360px] text-[16px] leading-[1.9] text-black/60">
          {card.desc}
        </p>
      </div>
    </article>
  );
}
