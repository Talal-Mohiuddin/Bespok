"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD = "#A66242";

export default function BespokeBusinessSuitSection() {
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
      question: "How many business suits should I own?",
      answer:
        "We recommend a minimum of three business suits in different colors—navy, charcoal, and a lighter gray. This provides versatility for different occasions and ensures you always have a fresh option.",
    },
    {
      question: "Can you create matching separates?",
      answer:
        "Yes, we can create matching separates including extra trousers, waistcoats, and coordinating blazers. This gives you more versatility to mix and match your professional wardrobe.",
    },
    {
      question: "How do I care for my bespoke business suit?",
      answer:
        "We recommend professional dry cleaning sparingly, regular brushing after each wear, proper hanging on quality wooden hangers, and allowing your suit to rest between wearings. We can provide detailed care instructions tailored to your specific fabrics.",
    },
    {
      question: "What's the turnaround time for a business suit?",
      answer:
        "A bespoke business suit typically takes 4-6 weeks from initial consultation to final delivery. This includes multiple fittings to ensure perfect fit and hand-finishing of all details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Section 1: Crafting Success */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          {/* Title */}
          <div className="text-center mb-10">
            <h2
              className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-2 tracking-wide font-bold"
              style={{ color: "#1a1a1a" }}
            >
              CRAFTING SUCCESS, ONE STITCH AT A TIME
            </h2>
            <h3
              className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-6 tracking-wide italic"
              style={{ color: "#333" }}
            >
              Command Your Boardroom with Confidence
            </h3>
            <p className="font-serif text-[16px] sm:text-[18px] leading-relaxed text-gray-600 max-w-4xl mx-auto mb-6">
              In the world of business, your suit is your armor. It speaks
              before you do, commands respect before you enter the room, and
              builds confidence from within. Our bespoke business suits aren't
              just tailored clothing—they're your competitive advantage crafted
              in the finest fabrics.
            </p>
            <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-800 max-w-4xl mx-auto italic">
              We don't just make business suits; we architect careers.
            </p>
          </div>

          {/* Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="border-2 border-dashed border-gray-400 p-4">
              <img
                src="https://bespoke.ae/wp-content/uploads/2025/09/Business-suits.webp"
                alt="Bespoke Business Suit"
                className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] object-cover"
                draggable={false}
              />
            </div>

            <div>
              <h3
                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-2 tracking-wide font-bold"
                style={{ color: "#1a1a1a" }}
              >
                MORE THAN PROFESSIONAL ATTIRE:
              </h3>
              <h4 className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-4 text-gray-800 italic">
                Your Success Statement
              </h4>
              <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600">
                Every successful professional understands that details matter.
                From the boardroom to client meetings, from presentations to
                networking events, your business suit is working as hard as you
                are. Our master tailors in Dubai understand the language of
                corporate success and translate it into every cut, every seam,
                every carefully chosen button.
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
                className="font-serif text-[18px] sm:text-[22px] md:text-[24px] mb-4 tracking-wide font-bold"
                style={{ color: "#1a1a1a" }}
              >
                THE ART OF BUSINESS TAILORING
              </h3>

              <h4 className="font-serif text-[16px] sm:text-[18px] mb-3 text-gray-800 font-semibold">
                Consultation: Understanding Your Professional Vision
              </h4>
              <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-6">
                We begin with a comprehensive consultation to understand not
                just your measurements, but your professional world. What
                industry do you dominate? What meetings define your week? What
                image do you want to project? Our style consultant works with
                you to create a suit that amplifies your professional presence.
              </p>

              <h4 className="font-serif text-[18px] sm:text-[20px] mb-3 text-gray-800 italic">
                Fabric Selection: Premium Materials for Premium Performance
              </h4>
              <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
                Choose from our curated collection of the world's finest
                business fabrics:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Super 120s to 180s Wool:
                    </strong>{" "}
                    Lightweight, breathable, and wrinkle-resistant for long
                    business days
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Year-Round Weights:
                    </strong>{" "}
                    Versatile fabrics perfect for Dubai's climate and
                    international travel
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Performance Blends:
                    </strong>{" "}
                    Modern fabrics that maintain their sharp appearance
                    throughout demanding schedules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Classic Colors:</strong>{" "}
                    Navy, charcoal, and sophisticated grays that command respect
                  </span>
                </li>
              </ul>

              <h4 className="font-serif text-[18px] sm:text-[20px] mb-3 text-gray-800 italic">
                Design Details That Define Excellence
              </h4>
              <p className="font-serif text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
                Every element is carefully considered:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Lapel Styles:</strong>{" "}
                    From classic notched to sophisticated peaked lapels
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Button Configurations:
                    </strong>{" "}
                    Two or three-button designs to complement your physique
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Pocket Details:</strong>{" "}
                    Functional and aesthetic choices that enhance your
                    professional image
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Lining Options:</strong>{" "}
                    Personalized with colors or patterns that reflect your
                    personality
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Right */}
            <div className="border-2 border-dashed border-gray-400 p-4 order-1 lg:order-2">
              <img
                src="https://bespoke.ae/wp-content/uploads/2025/09/bussiness-suit_bespoke.webp"
                alt="Business Suit Tailoring"
                className="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Two Feature Boxes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 - The Perfect Professional Fit */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                THE PERFECT PROFESSIONAL FIT
              </h3>
              <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed mb-4">
                A business suit must fit impeccably to project the right image:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Shoulder Precision:
                    </strong>{" "}
                    Clean lines that communicate confidence without being
                    constrictive
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Tailored Torso:</strong> A
                    silhouette that flatters while allowing full range of motion
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">Sleeve Length:</strong>{" "}
                    Perfectly positioned to show just the right amount of shirt
                    cuff
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span className="font-serif text-[16px] sm:text-[17px] text-gray-600">
                    <strong className="text-gray-800">
                      Comfort Engineering:
                    </strong>{" "}
                    Allows freedom of movement for presentations and client
                    meetings
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 2 - Why Choose Bespoke for Business */}
            <div className="bg-[#F5F5F5] p-8">
              <h3
                className="font-serif text-[20px] sm:text-[24px] font-medium mb-4 tracking-wide"
                style={{ color: "#333" }}
              >
                WHY CHOOSE BESPOKE FOR BUSINESS?
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Image Investment
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    Your appearance directly impacts how clients and colleagues
                    perceive you. A bespoke suit is an investment in your
                    professional reputation.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Long-Term Value
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    Quality construction means your suit maintains its
                    appearance and fit for years, making it more economical than
                    replacing off-the-rack options.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-[16px] sm:text-[17px] font-semibold text-gray-800 mb-1">
                    Confidence Boost
                  </h4>
                  <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                    When you know your suit fits perfectly and looks
                    exceptional, you carry yourself with greater confidence in
                    every business situation.
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

      {/* Section: Your Professional Success Starts Here */}
      <section className="py-12 md:py-16 ">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 md:px-10 text-center">
          <h2
            className="font-serif text-[24px] sm:text-[32px] md:text-[38px] mb-6 tracking-widest font-bold"
            style={{ color: "#1a1a1a" }}
          >
            YOUR PROFESSIONAL SUCCESS STARTS HERE
          </h2>
          <p className="font-serif text-[16px] sm:text-[18px] text-gray-600 leading-relaxed mb-6">
            Ready to elevate your professional image? Contact our master tailors
            in Dubai to begin creating your bespoke business wardrobe. Whether
            you need a single signature suit or a complete professional
            collection, we're here to help you dress for the success you
            deserve.
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
                    and exclusive updates from Bespoke Tailors! You'll hear from
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
