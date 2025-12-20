"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD = "#A66242";

export default function BespokeGalaSuitSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const faqItems = [
    {
      question: "What's the difference between a gala suit and a tuxedo?",
      answer:
        "A gala suit is a formal evening attire designed for special occasions. While similar to a tuxedo, gala suits offer more flexibility in styling and can range from classic black-tie to more contemporary interpretations. Tuxedos typically follow stricter traditional conventions with satin lapels and side stripes.",
    },
    {
      question: "Can I wear my gala suit to business events?",
      answer:
        "While gala suits are primarily designed for formal evening events, certain styles can be adapted for high-end business occasions. However, we recommend having a dedicated business suit for regular professional settings to preserve your gala suit for special occasions.",
    },
    {
      question: "How do I know which formal accessories to choose?",
      answer:
        "Our expert tailors will guide you through selecting the perfect accessories based on your event's dress code, your personal style, and the specific design of your gala suit. We consider factors like bow tie style, cufflinks, pocket squares, and footwear to create a cohesive look.",
    },
    {
      question: "What if I attend different types of formal events?",
      answer:
        "We can create a versatile gala suit that works across multiple formal occasions, or design separate pieces tailored to specific events. During your consultation, we'll discuss your social calendar to ensure your wardrobe meets all your formal wear needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Section 1: Where Sophistication Meets Celebration */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          {/* Title */}
          <div className="text-center mb-10">
            <h2
              className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-2 tracking-wide"
              style={{ color: GOLD }}
            >
              WHERE SOPHISTICATION MEETS CELEBRATION
            </h2>
            <h3
              className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-6 tracking-wide"
              style={{ color: GOLD }}
            >
              Elegance Redefined: Our Bespoke Wedding Gala Suits
            </h3>
            <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 max-w-4xl mx-auto">
              From the moment you step into the venue of your event to your last
              dance, your bespoke gala suit will make a statement of refined
              elegance and impeccable taste. This bespoke suit isn't just an
              outfit; it's an extension of your personality, carefully crafted
              to help you make an unforgettable impression on your special day.
            </p>
          </div>

          {/* Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="border-2 border-dashed border-gray-400 p-4">
              <img
                src="https://bespoke.ae/wp-content/uploads/2025/09/Gala-suits.webp"
                alt="Bespoke Gala Suit"
                className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] object-cover"
                draggable={false}
              />
            </div>

            <div>
              <h3
                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-4 tracking-wide"
                style={{ color: GOLD }}
              >
                MAKE HEADS TURN AT GALA GATHERINGS
              </h3>
              <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 mb-4">
                Looking for a bespoke gala suit that exudes elegance and class?
                With a gala suit from Bespoke Tailoring, you will stand out at
                any formal gathering in Dubai. Our expert tailors work directly
                with you to create a custom suit that fits your body perfectly
                and reflects your unique style.
              </p>
              <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600">
                Every detail, from the fabric selection to the final stitch, is
                carefully considered to ensure you look and feel your best on
                your special occasion.
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
                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-4 tracking-wide"
                style={{ color: GOLD }}
              >
                THE ART OF GALA SUIT TAILORING
              </h3>
              <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 mb-4">
                At Bespoke Tailoring, we understand that a gala event requires
                attire that makes a statement. Our bespoke gala suits are
                crafted with the finest materials and exceptional attention to
                detail, ensuring you stand out at any prestigious event.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                    Premium fabrics including silk, velvet, and fine wool
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                    Expert craftsmanship with over 9,000 hand stitches
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                    Personalized design consultation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                    Multiple fittings for perfect fit
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Right */}
            <div className="border-2 border-dashed border-gray-400 p-4 order-1 lg:order-2">
              <img
                src="https://bespoke.ae/wp-content/uploads/2025/09/Gala-Tailoring_gala-suits.webp"
                alt="Gala Suit Tailoring"
                className="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Four Feature Boxes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 - Engineering Formal Perfection */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                ENGINEERING FORMAL PERFECTION
              </h3>
              <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed mb-4">
                Our gala suits are crafted for ceremonial excellence:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Structured Elegance:
                    </strong>{" "}
                    Creating a distinguished silhouette appropriate for formal
                    presentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Perfect Proportions:
                    </strong>{" "}
                    Every measurement ensures optimal formal appearance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Movement Accommodation:
                    </strong>{" "}
                    Designed for formal dining, dancing, and ceremonial
                    activities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Traditional Construction:
                    </strong>{" "}
                    Hand-padded canvas and traditional techniques ensuring
                    longevity
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 2 - The Occasions of Excellence */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                THE OCCASIONS OF EXCELLENCE
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Charity Galas:</strong>{" "}
                    Supporting worthy causes while maintaining impeccable style
                    standards.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Embassy Events:</strong>{" "}
                    Diplomatic occasions that require respect for protocol and
                    tradition.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Award Ceremonies:</strong>{" "}
                    Recognition events where your appearance honors both
                    achievement and tradition.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Cultural Celebrations:
                    </strong>{" "}
                    Events celebrating arts, music, and cultural heritage demand
                    appropriate formal respect.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Private Celebrations:
                    </strong>{" "}
                    Exclusive parties and milestone celebrations among
                    distinguished company.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      International Events:
                    </strong>{" "}
                    Formal occasions that require understanding of global dress
                    code expectations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 3 - Accessories and Coordination */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                ACCESSORIES AND COORDINATION
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Formal Shirt Selection:
                    </strong>{" "}
                    We coordinate with formal shirt options including wing
                    collar and pleated front styles.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Bow Tie Coordination:
                    </strong>{" "}
                    Traditional black tie or white tie coordination based on
                    event requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Formal Footwear Guidance:
                    </strong>{" "}
                    Recommendations for appropriate formal shoe styles and
                    coordination.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Pocket Square Artistry:
                    </strong>{" "}
                    Elegant pocket square options to complement your gala
                    ensemble.
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 4 - Investment in Elegance */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                INVESTMENT IN ELEGANCE
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1 underline">
                    Timeless Design
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    Gala suits are created with classical proportions and
                    timeless design elements that remain appropriate across
                    decades of formal events.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1 underline">
                    Exceptional Construction
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    The most formal occasions demand the highest quality
                    construction. Every stitch is executed to perfection,
                    ensuring your gala suit maintains its elegance through
                    countless celebrations.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1 underline">
                    Versatile Formality
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Dress Codes */}
          <div className="mt-12 bg-[#F5F5F5] p-8 md:p-12 -mx-4 sm:-mx-6 md:-mx-10 px-4 sm:px-6 md:px-10">
            <h3
              className="font-serif text-[20px] sm:text-[24px] md:text-[26px] font-medium mb-6 tracking-widest text-center"
              style={{ color: "#333" }}
            >
              UNDERSTANDING DRESS CODES
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gray-600 mt-0.5">•</span>
                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                  <strong className="text-gray-800">Black Tie Optional:</strong>{" "}
                  Perfect for most charity galas and formal dinners.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 mt-0.5">•</span>
                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                  <strong className="text-gray-800">Black Tie Required:</strong>{" "}
                  Traditional formal events with specific protocol requirements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 mt-0.5">•</span>
                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                  <strong className="text-gray-800">
                    White Tie Occasions:
                  </strong>{" "}
                  The most formal events requiring specific traditional
                  elements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 mt-0.5">•</span>
                <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                  <strong className="text-gray-800">Creative Black Tie:</strong>{" "}
                  Modern formal events allowing some contemporary
                  interpretation.
                </span>
              </li>
            </ul>
          </div>

          {/* FAQ's Section */}
          <div className="mt-12">
            <h3
              className="font-serif text-[20px] sm:text-[24px] md:text-[26px] font-medium mb-6"
              style={{ color: "#333" }}
            >
              FAQ'S
            </h3>
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white ${
                    openFAQ === index ? "" : "border border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex items-center gap-3 py-3 px-4 text-left hover:bg-gray-50 transition-colors ${
                      openFAQ === index ? "border border-gray-300" : ""
                    }`}
                  >
                    <span className="text-xl font-black text-black">
                      {openFAQ === index ? "−" : "+"}
                    </span>
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

      {/* Section: Celebrate In Style */}
      <section className="py-12 md:py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 md:px-10 text-center">
          <h2
            className="font-serif text-[24px] sm:text-[32px] md:text-[38px] mb-6 tracking-widest"
            style={{ color: GOLD }}
          >
            CELEBRATE IN STYLE
          </h2>
          <p className="font-serif text-[18px] sm:text-[20px] text-gray-600 leading-relaxed mb-6">
            Ready to make every gala unforgettable? Contact our master tailors
            to begin creating your signature gala suit. Located at The Gate in
            Dubai International Financial Centre (DIFC), we serve gentlemen who
            understand that life's greatest celebrations deserve exceptional
            tailoring.
          </p>
          <p className="font-serif text-[18px] sm:text-[20px] text-gray-600 leading-relaxed">
            <strong className="text-gray-800">
              Book Your Gala Consultation
            </strong>{" "}
            WhatsApp us to schedule your private consultation and ensure you're
            perfectly dressed for every celebration that matters.
          </p>
        </div>
      </section>

      {/* Section: Form */}
      <section className="py-18 md:py-16 bg-[#F5F5F5]">
        <div className="mx-auto max-w-[900px] px-4 sm:px-10 md:px-15">
          <div className="bg-[#E8E4DF] p-8 md:p-12">
            <h3
              className="font-serif text-[18px] sm:text-[22px] md:text-[24px] text-center mb-2  text-gray-700"
              style={{ color: GOLD }}
            >
              Experience True Bespoke Tailoring .
            </h3>
            <h3
              className="font-serif text-[18px] sm:text-[22px] md:text-[24px] text-center mb-10  text-gray-700"
              style={{ color: GOLD }}
            >
              Book Your Appointment Today
            </h3>

            <form className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-serif text-[15px] sm:text-[18px] text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-0 border-b-2 border-black bg-transparent px-0 py-2 font-serif text-[15px] sm:text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-serif text-[15px] sm:text-[18px] text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-0 border-b-2 border-black bg-transparent px-0 py-2 font-serif text-[15px] sm:text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Address & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-serif text-[15px] sm:text-[18px] text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-0 border-b-2 border-black bg-transparent px-0 py-2 font-serif text-[15px] sm:text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-serif text-[15px] sm:text-[18px] text-gray-700 mb-2 invisible">
                    Phone
                  </label>
                  <div className="flex items-center border-b-2 border-black gap-2">
                    <div className="flex items-center gap-1">
                      <img
                        src="https://flagcdn.com/w20/pk.png"
                        alt="Pakistan"
                        className="w-5 h-4 object-cover"
                      />
                      <select
                        className="bg-transparent border-0 font-serif text-[18px] text-gray-700 focus:outline-none cursor-pointer appearance-none pr-4"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0 center",
                          backgroundSize: "12px",
                        }}
                      >
                        <option value="+92">+92</option>
                        <option value="+971">+971</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        <option value="+966">+966</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="contactNumber"
                      placeholder="Phone"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full border-0 bg-transparent px-2 py-2 font-serif text-[18px] sm:text-[18px] text-gray-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Choose Date & Choose Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-serif text-[17px] sm:text-[18px] text-gray-700 mb-2">
                    Choose Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full border-0 border-b-2 border-black bg-transparent px-0 py-2 font-serif text-[15px] sm:text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <label className="block font-serif text-[15px] sm:text-[18px] text-gray-700 mb-2 invisible">
                    Choose Time
                  </label>
                  <select
                    name="time"
                    className="w-full border-0 border-b-2 border-black bg-transparent px-0 py-2 pr-8 font-serif text-[15px] sm:text-[16px] text-gray-600 focus:border-[#A66242] focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Choose Time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  <div className="absolute right-0 top-1/2 translate-y-1 pointer-events-none">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#666"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 pt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 min-w-[16px] min-h-[16px] border border-gray-400 rounded-sm"
                  />
                  <span className="font-serif text-[13px] sm:text-[14px] text-gray-600">
                    I agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline"
                      style={{ color: GOLD }}
                    >
                      Privacy Policy
                    </Link>{" "}
                    and consent to the use of my data.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 min-w-[16px] min-h-[16px] border border-gray-400 rounded-sm"
                  />
                  <span className="font-serif text-[13px] sm:text-[14px] text-gray-600">
                    Yes, send me styling tips, fashion advice, special offers,
                    and exclusive updates from Parmar Tailors! You'll hear from
                    us no more than twice a month.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1a1a1a] text-white font-serif text-[13px] tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
