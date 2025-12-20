"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD = "#A66242";

export default function BespokeWeddingSuitSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        message: "",
    });

    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const faqItems = [
        {
            question: "Are there any limitations on the design or style of a bespoke wedding suit?",
            answer: "There are virtually no limitations. Our bespoke process allows complete customization—from fabric selection and lapel styles to button choices and lining designs. We work with you to create a suit that perfectly matches your vision."
        },
        {
            question: "Is there a specific timeline for the creation of bespoke wedding suits?",
            answer: "We recommend starting the bespoke process 3-4 months before your wedding. This allows time for consultations, multiple fittings, and any adjustments to ensure perfection on your special day."
        },
        {
            question: "Do you offer fittings during the creation process?",
            answer: "Yes, multiple fittings are an essential part of our bespoke process. We typically conduct 2-3 fittings to ensure your suit fits perfectly and meets all your expectations before the final completion."
        },
        {
            question: "Can I incorporate sentimental elements into my bespoke wedding suit?",
            answer: "Absolutely. We can personalize your suit with sentimental touches such as custom embroidery with your wedding date, initials, or a special message on the lining. These details make your suit a treasured keepsake."
        },
        {
            question: "Can I make changes to my bespoke wedding suit after it is completed?",
            answer: "Yes, we offer alteration services even after completion. If your body changes or you want minor adjustments, our tailors can make modifications to ensure your suit continues to fit perfectly."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="bg-white">
           

            {/* Section 1: Bespoke Wedding Suits for Men */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
                    {/* Title */}
                    <div className="text-center mb-10">
                        <h2
                            className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-2 tracking-wide font-bold"
                            style={{ color: '#1a1a1a' }}
                        >
                            BESPOKE WEDDING SUITS FOR MEN:
                        </h2>
                        <h3
                            className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-6 tracking-wide italic"
                            style={{ color: '#333' }}
                        >
                            A Tailored Expression of Your Love Story
                        </h3>
                        <p className="font-serif text-[16px] sm:text-[18px] leading-relaxed text-gray-600 max-w-4xl mx-auto mb-6">
                            Your wedding day is an unforgettable milestone, and wearing a bespoke wedding suit makes it more exceptional. Created for gentlemen who value excellence, our bespoke wedding suits combine craftsmanship, refined style, and an unrivaled fit to align perfectly with the occasion's significance.
                        </p>
                        <p className="font-serif text-[16px] sm:text-[18px] leading-relaxed text-gray-600 max-w-4xl mx-auto">
                            At Bespoke Tailoring, our master craftsmen make bespoke wedding suits that reflect your personality, heritage, and the elegance your special day deserves. Whether you're envisioning a lavish ceremony in Dubai or an intimate celebration at a destination, our bespoke wedding suits ensure you look and feel your absolute best.
                        </p>
                    </div>

                    {/* Image Left, Text Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="border-2 border-dashed border-gray-400 p-4">
                            <img
                                src="https://bespoke.ae/wp-content/uploads/2024/05/7-wedding-suit-01.jpg"
                                alt="Bespoke Wedding Suit"
                                className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] object-cover"
                                draggable={false}
                            />
                        </div>

                        <div>
                            <h3
                                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-2 tracking-wide font-bold"
                                style={{ color: '#1a1a1a' }}
                            >
                                WHY CHOOSE BESPOKE WEDDING SUITS?
                            </h3>
                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-6">
                                Bespoke wedding suits are more than just attire—their defining statement reflects who you are on one of life's most significant days. Unlike off-the-rack options, a bespoke wedding suit is tailored to fit your unique body shape, style preferences, and the occasion's ambiance.
                            </p>

                            <h4 className="font-serif text-[16px] sm:text-[18px] mb-3 text-gray-800 font-semibold">
                                A Collaborative Process to Tailor Modern Men's Wedding Suits
                            </h4>
                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600">
                                At Bespoke, crafting bespoke wedding suits is highly collaborative and deeply personal. We'll listen to your vision, guide you through our extensive collection of the finest fabrics, discuss details like lapels, linings, buttons, and much more, and bring your dream suit to life. The result is a suit made exclusively for you—a reflection of your identity and the perfect complement to your wedding day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Text Left, Image Right */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Text Left */}
                        <div className="order-2 lg:order-1">
                            <h3
                                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-2 tracking-wide font-bold"
                                style={{ color: '#1a1a1a' }}
                            >
                                It's All in the Details: Beyond the Bespoke Wedding Suit
                            </h3>
                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-6">
                                Bespoke wedding suits from Bespoke embody timeless elegance and meticulous craftsmanship crafted to perfection at our atelier in Dubai. From the first stitch to the finishing touch, every element of our custom wedding suits reflects our commitment to excellence, ensuring you feel confident and refined on your special day.
                            </p>

                            <h4 className="font-serif text-[16px] sm:text-[18px] mb-3 text-gray-800 font-semibold">
                                Perfectly Hand-made: The Essence of Bespoke Tailoring
                            </h4>
                            <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600">
                                The hallmark of a true bespoke wedding suit lies in the precision of its creation. At Bespoke, we follow a rigorous process that takes more than 80 hours to create a perfectly structured jacket. Through initial consultation, multiple fittings, and detailed adjustments, we craft a suit that complements your physique and fits you impeccably. From full canvas construction that molds to your body over time to hand-stitched buttonholes and pick stitching, every detail is crafted with precision and care.
                            </p>
                        </div>

                        {/* Image Right */}
                        <div className="border-2 border-dashed border-gray-400 p-4 order-1 lg:order-2">
                            <img
                                src="https://bespoke.ae/wp-content/uploads/2024/05/7-wedding-suit.jpg"
                                alt="Wedding Suit Tailoring"
                                className="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Additional Content Sections */}
            <section className="py-12 md:py-16 bg-white">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">

                    {/* A Wedding Suit That's An Heirloom to Treasure */}
                    <div className="mb-12">
                        <h3 className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-4 tracking-wide font-bold" style={{ color: '#1a1a1a' }}>
                            A Wedding Suit That's An Heirloom to Treasure
                        </h3>
                        <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                            Bespoke wedding suits are more than clothing—they're keepsakes that tell a story. By following your wedding suit's tailoring journey from start to finish, it's easy to gain an appreciation and sentimental attachment. The custom lining can be personalized with your wedding date, initials, or even a special message. Whether displayed or passed on, our custom wedding suits become a cherished memento of your love story.
                        </p>
                    </div>

                    {/* The Bespoke Experience */}
                    <div className="mb-12">
                        <h3 className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-4 tracking-wide font-bold" style={{ color: '#1a1a1a' }}>
                            The Bespoke Experience: A Journey of Discovery
                        </h3>
                        <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                            Creating your bespoke wedding suit with us is an experience in itself. Your journey begins with a detailed consultation at our atelier in Dubai's DIFC. Here, you'll meet our expert tailors, explore a curated selection of the finest fabrics, and discuss every nuance of your suit—from lapel styles and pocket designs to linings and buttons. As the creation progresses, you'll see your vision come to life, with fittings ensuring a perfect fit that feels as good as it looks.
                        </p>
                    </div>

                    {/* The Versatility of Our Bespoke Tailoring Services */}
                    <div className="mb-12">
                        <h3 className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-4 tracking-wide font-bold" style={{ color: '#1a1a1a' }}>
                            The Versatility of Our Bespoke Tailoring Services
                        </h3>
                        <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                            We also pride ourselves on a personal bespoke experience for any major life event with our bespoke service. We can design a stunning wedding mandala or a Sherwani that showcases traditional elegance with modern style. We are continually evolving our range of services, including catering for Black Tie events and exclusive day wear, so you can always find what you're looking for with Bespoke.
                        </p>
                    </div>

                    {/* Investing in Bespoke Tailoring */}
                    <div className="mb-12">
                        <h3 className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-4 tracking-wide font-bold" style={{ color: '#1a1a1a' }}>
                            Investing in Bespoke Tailoring: A Celebration of You
                        </h3>
                        <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed mb-4">
                            Our bespoke wedding suits are an investment in yourself, your love story, and attire you'll cherish forever. Unlike off-the-rack options, bespoke suiting encompasses a more refined experience that makes you feel empowered, confident, and impeccably dressed. Order online or visit us at the Atelier in Dubai. We are happy to walk you through the tailoring process, styles, and fitting procedures to find what you are looking for.
                        </p>
                        <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                            Because your wedding isn't just an event—it's the beginning of your story; you and your attire deserve nothing less than the very best.
                        </p>
                    </div>

                    {/* FAQ's Section */}
                    <div className="mt-12">
                        <h3 className="font-serif text-[20px] sm:text-[24px] md:text-[26px] font-medium mb-6" style={{ color: '#333' }}>
                            FAQ'S
                        </h3>
                        <div className="space-y-2">
                            {faqItems.map((item, index) => (
                                <div key={index} className={`bg-white ${openFAQ === index ? '' : 'border border-gray-300'}`}>
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className={`w-full flex items-center gap-3 py-3 px-4 text-left hover:bg-gray-50 transition-colors ${openFAQ === index ? 'border border-gray-300' : ''}`}
                                    >
                                        <span className="text-xl font-black text-black">{openFAQ === index ? '−' : '+'}</span>
                                        <span className="font-serif text-[15px] sm:text-[16px] text-gray-700">
                                            {item.question}
                                        </span>
                                    </button>
                                    {openFAQ === index && (
                                        <div className="px-4 py-4 pl-10">
                                            <p className="font-serif text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
