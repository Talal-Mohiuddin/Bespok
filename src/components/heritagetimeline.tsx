"use client";

import { useState } from "react";

const GOLD = "#A66242";

export default function HeritageTimeline() {
    const [activeIndex, setActiveIndex] = useState(0);

    const timelineData = [
        {
            year: "1956",
            title: "THE FOUNDING JOURNEY",
            image: "https://bespoke.ae/wp-content/uploads/2025/08/1956-The-Founding-Journey.jpg",
            description: "On June 10, 1956, at just 23 years old, Mr. Pitamber Parmar set out on a 5-day boat journey from Mumbai to Dubai, a trip that would change his life forever. When he arrived, he opened the very first Parmar Tailors store in the old Dubai Souq, now called Souq al Kabeer, right by the historic Dubai Creek. The shop quickly became a go-to for royalty, the British Army stationed in the UAE, visiting merchants, and the growing business community."
        },
        {
            year: "1986",
            title: "LEGACY CONTINUES",
            image: "https://bespoke.ae/wp-content/uploads/2025/08/1956-The-Founding-Journey.jpg",
            description: "By 1986, the second generation had fully embraced the family legacy. The tailoring house had become renowned throughout the Gulf region for its exceptional craftsmanship and attention to detail. This era marked significant growth as the reputation for quality spread across borders."
        },
        {
            year: "1996",
            title: "STRATEGIC EXPANSION",
            image: "https://bespoke.ae/wp-content/uploads/2025/08/1996-Strategic-Expansion.jpg",
            description: "The year 1996 brought strategic expansion as the business evolved to meet the demands of a rapidly growing Dubai. New techniques were incorporated while staying true to the traditional methods that had made the brand famous. The clientele expanded to include international business leaders and dignitaries."
        },
        {
            year: "2006",
            title: "PREMIUM LUXURY DEBUT",
            image: "https://bespoke.ae/wp-content/uploads/2025/08/Premium-Luxury-Debut.png",
            description: "Celebrating 50 years of excellence, 2006 marked the debut of the premium luxury line. The golden jubilee was celebrated with the introduction of exclusive fabrics and designs that catered to the most discerning clientele. This milestone reinforced the commitment to unparalleled quality."
        },
        {
            year: "2010",
            title: "PRESTIGIOUS GROWTH",
            image: "https://bespoke.ae/wp-content/uploads/2025/08/Prestigious-Growth.png",
            description: "The decade of 2010 saw prestigious growth with the brand becoming a symbol of luxury tailoring in the Middle East. International clients from Europe, Asia, and the Americas sought out the unique craftsmanship. The atelier became a destination for those seeking true bespoke excellence."
        },
        {
            year: "2013",
            title: "GLOBAL RECOGNITION",
            image: "https://bespoke.ae/wp-content/uploads/2025/08/Prestigious-Growth.png",
            description: "By 2013, the brand had achieved global recognition. Features in international fashion publications and word-of-mouth from satisfied clients brought visitors from around the world. The commitment to excellence had created a legacy that transcended generations."
        },
        {
            year: "2017",
            title: "PRODUCTION EXCELLENCE",
            image: "https://bespoke.ae/wp-content/uploads/2025/08/Production-Excellence.png",
            description: "Today, we continue to uphold the traditions established over six decades ago. Our production excellence combines time-honored techniques with modern innovation. Each garment tells a story of dedication, craftsmanship, and an unwavering commitment to perfection that has defined our journey since 1956."
        }
    ];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : prev));
    };

    return (
        <div className="bg-white">
            {/* Section 1: A Legacy of Excellence */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-[1200px] px-8 sm:px-12 md:px-16 lg:px-20">
                    {/* Title */}
                    <h2
                        className="font-serif text-[22px] sm:text-[28px] md:text-[32px] text-center mb-12 italic"
                        style={{ color: GOLD }}
                    >
                        A Legacy of Excellence Since 1956
                    </h2>

                    {/* The Beginning of a Legacy - Text Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                            <h3
                                className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-4 italic"
                                style={{ color: GOLD }}
                            >
                                The Beginning of a Legacy
                            </h3>
                            <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed text-gray-600 mb-4">
                                The former dynasty's tailoring legacy begun back in 1945 when a Royal Scindia Silkworms named it the gift to the Duke of Edinburgh on his marriage. Driven with a vision that was not yet clearly understood, he learned his trade like 90 percent Muslims of Mumbai, born at Kolaba, Maharasthra but it would become much more. And this would later bloom into a renowned bespoke tailoring experience.
                            </p>
                        </div>

                        {/* Image Right */}
                        <div className="border-2 border-dashed border-gray-400 p-4">
                            <img
                                src="https://bespoke.ae/wp-content/uploads/2025/07/Bespoke-Wedding-Suits.jpg"
                                alt="Bespoke Heritage"
                                className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] object-cover"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Timeline */}
            <section className="py-8 md:py-12">
                <div className="mx-auto max-w-[1200px] px-8 sm:px-12 md:px-16 lg:px-20">
                    {/* Timeline Navigation */}
                    <div className="relative mb-12">
                        {/* Years Above */}
                        <div className="flex justify-between items-center mb-4 px-8">
                            {timelineData.map((item, index) => (
                                <button
                                    key={item.year}
                                    onClick={() => setActiveIndex(index)}
                                    className={`font-serif text-[14px] sm:text-[16px] md:text-[18px] transition-colors ${activeIndex === index
                                        ? "font-bold"
                                        : "text-gray-400 hover:text-gray-600"
                                        }`}
                                    style={{ color: activeIndex === index ? GOLD : undefined }}
                                >
                                    {item.year}
                                </button>
                            ))}
                        </div>

                        {/* Timeline Line with Dots */}
                        <div className="relative flex items-center">
                            {/* Left Arrow */}
                            <button
                                onClick={handlePrev}
                                className="z-10 w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-[#A66242] transition-colors flex-shrink-0"
                                style={{ borderColor: activeIndex === 0 ? '#ccc' : GOLD }}
                                disabled={activeIndex === 0}
                            >
                                <svg className="w-4 h-4" fill="none" stroke={activeIndex === 0 ? '#ccc' : GOLD} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Timeline Line */}
                            <div className="flex-1 relative h-[2px] mx-4">
                                {/* Background Line */}
                                <div className="absolute top-0 left-0 right-0 h-full bg-gray-300"></div>
                                {/* Active Line */}
                                <div
                                    className="absolute top-0 left-0 h-full transition-all duration-300"
                                    style={{
                                        backgroundColor: GOLD,
                                        width: `${(activeIndex / (timelineData.length - 1)) * 100}%`
                                    }}
                                ></div>

                                {/* Dots */}
                                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between">
                                    {timelineData.map((item, index) => (
                                        <button
                                            key={item.year}
                                            onClick={() => setActiveIndex(index)}
                                            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${index <= activeIndex
                                                ? 'border-[#A66242]'
                                                : 'border-gray-300'
                                                }`}
                                            style={{
                                                backgroundColor: index <= activeIndex ? GOLD : 'white'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={handleNext}
                                className="z-10 w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full hover:border-[#A66242] transition-colors flex-shrink-0"
                                style={{ borderColor: activeIndex === timelineData.length - 1 ? '#ccc' : GOLD }}
                                disabled={activeIndex === timelineData.length - 1}
                            >
                                <svg className="w-4 h-4" fill="none" stroke={activeIndex === timelineData.length - 1 ? '#ccc' : GOLD} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Dynamic Content Based on Selected Year */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-[1200px] px-8 sm:px-12 md:px-16 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Image Left */}
                        <div className="p-4">
                            <img
                                key={activeIndex}
                                src={timelineData[activeIndex].image}
                                alt={timelineData[activeIndex].title}
                                className="w-full h-auto min-h-[300px] md:min-h-[350px] object-cover transition-all duration-300"
                                draggable={false}
                            />
                        </div>

                        {/* Text Right */}
                        <div className="text-center lg:text-left">
                            <h3
                                className="font-serif text-[22px] sm:text-[26px] md:text-[30px] mb-2 tracking-wide"
                                style={{ color: '#1a1a1a' }}
                            >
                                {timelineData[activeIndex].title}
                            </h3>
                            <h4
                                className="font-serif text-[24px] sm:text-[28px] md:text-[32px] mb-6 italic"
                                style={{ color: GOLD }}
                            >
                                {timelineData[activeIndex].year}
                            </h4>
                            <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                                {timelineData[activeIndex].description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Our Legacy Today */}
            <section className="py-12 md:py-16 pb-20 md:pb-28" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="mx-auto max-w-[1200px] px-8 sm:px-12 md:px-16 lg:px-20">
                    <h2
                        className="font-serif text-[22px] sm:text-[26px] md:text-[30px] mb-6 italic"
                        style={{ color: GOLD }}
                    >
                        Our Legacy Today
                    </h2>
                    <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed text-gray-600 max-w-4xl">
                        When we started re-establishing our shop in old-world bespoke traditions in the era of fast fashion, we chose to go a different route, to dedicate our lives to curating the finest bespoke clothes, quality and personalized service. Today, we're proud to carry on this tradition. Merging centuries of tailoring techniques into the modern world, was and still is our most noble of offerings.
                    </p>
                </div>
            </section>

            {/* White Spacer */}
            <div className="h-8 md:h-10 bg-white"></div>
        </div>
    );
}
