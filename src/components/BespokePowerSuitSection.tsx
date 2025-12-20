"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD = "#A66242";

export default function BespokePowerSuitSection() {
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
      question:
        "What makes a power suit different from a regular business suit?",
      answer:
        "A power suit is specifically designed to project authority and confidence. It features stronger shoulders, precise tailoring, and premium fabrics that maintain their structure throughout long days. Every element is engineered to make you look commanding in any business setting.",
    },
    {
      question: "How long does it take to create a bespoke power suit?",
      answer:
        "Our bespoke power suits typically require 4-6 weeks to complete. This includes multiple fittings to ensure perfect fit, hand-finishing details, and quality checks at every stage of construction.",
    },
    {
      question: "Can I customize every aspect of my power suit?",
      answer:
        "Absolutely. From fabric selection and lining to button style and pocket placement, every detail of your power suit can be customized to your preferences. Our tailors will guide you through all options to create your ideal suit.",
    },
    {
      question: "What fabrics work best for power suits?",
      answer:
        "We recommend premium wool, wool-silk blends, and fine worsted fabrics for power suits. These materials hold their shape well, resist wrinkles, and project the professional image essential for leadership roles.",
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
              className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-2 tracking-wide  font-bold"
              style={{ color: "#1a1a1a" }}
            >
              AUTHORITY TAILORED TO PERFECTION
            </h2>
            <h3
              className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-6 tracking-wide italic"
              style={{ color: "#333" }}
            >
              When Leadership Demands Luxury
            </h3>
            <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 max-w-4xl mx-auto mb-6">
              Power isn't just about position—it's about presence. A true power
              suit transcends ordinary business attire, commanding attention and
              respect in every setting. When you need to make an indelible
              impression, when the stakes are highest, when your presence must
              speak before you do, our bespoke power suits deliver unmatched
              authority.
            </p>
            <p className="font-serif text-[20px] sm:text-[24px] leading-relaxed text-gray-800 max-w-4xl mx-auto italic">
              We don't create power suits; we forge legends.
            </p>
          </div>

          {/* Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="border-2 border-dashed border-gray-400 p-4">
              <img
                src="https://bespoke.ae/wp-content/uploads/2025/09/power-suits.webp"
                alt="Bespoke Power Suit"
                className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] object-cover"
                draggable={false}
              />
            </div>

            <div>
              <h3
                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-2 tracking-wide font-bold"
                style={{ color: "#1a1a1a" }}
              >
                MORE THAN EXECUTIVE WEAR
              </h3>
              <h4 className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-4 text-gray-800 italic">
                Your Leadership Signature
              </h4>
              <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600">
                The power suit is for the executive who shapes industries, the
                entrepreneur who disrupts markets, the leader who doesn't just
                participate in the conversation—they direct it. Our master
                tailors understand that power dressing is an art form, one that
                requires exceptional materials, flawless construction, and an
                understanding of how true authority is expressed through
                impeccable style.
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
                style={{ color: "#1a1a1a" }}
              >
                THE SCIENCE OF POWER DRESSING
              </h3>
              <h4 className="font-serif text-[16px] sm:text-[18px] mb-4 text-gray-800 italic">
                Consultation: Defining Your Leadership Style
              </h4>
              <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-6">
                Our consultation goes beyond measurements—we explore your
                leadership philosophy. Are you the visionary CEO? The strategic
                investor? The influential board member? Understanding your role
                in the power landscape allows us to create a suit that amplifies
                your natural authority and enhances your leadership presence.
              </p>

              <h4 className="font-serif text-[18px] sm:text-[20px] mb-3 text-gray-800">
                Premium Fabric Selection: Materials of Influence
              </h4>
              <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
                Power demands the finest fabrics:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Super 160s to 200s Wool:
                    </strong>{" "}
                    The pinnacle of luxury with incomparable drape and finish
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Cashmere Blends:</strong>{" "}
                    Ultimate luxury with unmatched softness and sophistication
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Silk Touches:</strong>{" "}
                    Subtle luxury details that catch light and attention
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Exclusive Weaves:</strong>{" "}
                    Rare fabrics that ensure exclusivity and distinction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Commanding Colors:
                    </strong>{" "}
                    Deep navy, sophisticated charcoal, and rich midnight blue
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Right */}
            <div className="border-2 border-dashed border-gray-400 p-4 order-1 lg:order-2">
              <img
                src="https://bespoke.ae/wp-content/uploads/2025/09/Power-suit_bespoke.webp"
                alt="Power Suit Tailoring"
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
            {/* Box 1 - Engineering Executive Presence */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                ENGINEERING EXECUTIVE PRESENCE
              </h3>
              <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed mb-4">
                Our power suits are architected for influence:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Commanding Shoulders:
                    </strong>{" "}
                    Structured to create an imposing yet refined silhouette
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Strategic Proportions:
                    </strong>{" "}
                    Every measurement calculated to enhance your natural
                    authority
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Impeccable Lines:</strong>{" "}
                    Clean, sharp tailoring that projects competence and control
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Premium Construction:
                    </strong>{" "}
                    Canvas work and hand-finishing that ensures the suit
                    maintains its power over time
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 2 - The Psychology of Power Dressing */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                THE PSYCHOLOGY OF POWER DRESSING
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Instant Credibility
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    A power suit immediately establishes your status and
                    competence. From the moment you enter a room, the quality of
                    construction, perfect fit, and luxury materials communicate
                    success and authority.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Confidence Amplification
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    When you know you look exceptional, you perform
                    exceptionally. The confidence boost from wearing a perfectly
                    crafted power suit translates directly into enhanced
                    leadership presence and decision-making authority.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Respect Command
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    Power suits command respect not through ostentation, but
                    through understated excellence. The subtle luxury, perfect
                    fit, and impeccable details earn automatic recognition from
                    peers and subordinates alike.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 - Occasions That Demand Power */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                OCCASIONS THAT DEMAND POWER
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Board Meetings:</strong>{" "}
                    When million-dollar decisions are made, your appearance must
                    match the gravity of the moment.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Investment Presentations:
                    </strong>{" "}
                    First impressions with investors often determine funding
                    success—make yours count.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Industry Conferences:
                    </strong>{" "}
                    Standing out among industry leaders requires exceptional
                    presence.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      High-Stakes Negotiations:
                    </strong>{" "}
                    When closing the deal of a lifetime, every advantage
                    matters.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Award Ceremonies:</strong>{" "}
                    Recognition events deserve attire that matches your
                    achievements.
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 4 - Investment in Influence */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                INVESTMENT IN INFLUENCE
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Unparalleled Quality
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    Power suits represent the apex of tailoring craftsmanship.
                    Every stitch, every seam, every detail is executed to
                    perfection, ensuring your investment maintains its impact
                    for years.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Exclusive Materials
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    We source fabrics exclusively from the world's most
                    prestigious mills, ensuring your power suit is truly
                    distinctive.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Lifetime Relationship
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    Your power suit comes with our commitment to maintaining its
                    perfection through professional care guidance and expert
                    adjustments.
                  </p>
                </div>
              </div>
            </div>
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

      {/* Section: Command Your Industry */}
      <section className="py-12 md:py-16 ">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 md:px-10 text-center">
          <h2
            className="font-serif text-[24px] sm:text-[32px] md:text-[38px] mb-6 tracking-widest font-bold"
            style={{ color: "#1a1a1a" }}
          >
            COMMAND YOUR INDUSTRY
          </h2>
          <p className="font-serif text-[18px] sm:text-[20px] text-gray-600 leading-relaxed mb-6">
            Ready to project the authority your position demands? Contact our
            master tailors to begin creating your signature power suit. Located
            at The Gate in Dubai International Financial Centre (DIFC), we serve
            leaders who understand that exceptional presence requires
            exceptional tailoring.
          </p>
          <p className="font-serif text-[18px] sm:text-[20px] text-gray-600 leading-relaxed">
            <strong className="text-gray-800">
              Book Your Executive Consultation
            </strong>{" "}
            WhatsApp us to schedule your private consultation and ensure you
            project the commanding presence your role demands.
          </p>
        </div>
      </section>

      {/* Section: Form */}
      <section className="py-18 md:py-16 ">
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
