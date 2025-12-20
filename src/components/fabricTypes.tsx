"use client";

import React from "react";

type Card = {
  title: string;
  desc: string;
  img: string;
};

const CARDS: Card[] = [
  { title: "Stylebiella", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },
  { title: "Lanificio F.lli Cerruti", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },
  { title: "Liberty", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },

  { title: "Alumo", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },
  { title: "Piacenza", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },
  { title: "Mileta", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },

  { title: "S.I.C Tess", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },
  { title: "Cotonificio Albini", desc: "Since 1924 our aim has never changed: to produce nothing but the best fabrics for shirting.From the year of its foundation, S.I.C.TESS has always chosen quality without compromise. S.I.C.TESS’s products are the result of almost a century of history, and loyal to our since tradition, we offer on every new collection a wide variety of high quality fabrics", img: "/fabric_types.jpg" },
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
