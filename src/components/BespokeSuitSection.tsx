"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD = "#A66242";

export default function BespokeSuitSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
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
      question: "What materials are best for bespoke tailoring?",
      answer:
        "The best materials for bespoke tailoring include premium wool, cashmere, silk, and linen. We source our fabrics from the finest mills in Italy and England, ensuring exceptional quality, durability, and comfort. Our consultants will guide you in selecting the perfect fabric based on your preferences, climate, and intended use.",
    },
    {
      question: "How long does it take to make bespoke suits?",
      answer:
        "A bespoke suit typically takes 6-8 weeks to complete, depending on the complexity of the design and fabric availability. This timeframe includes multiple fittings to ensure a perfect fit. Rush orders may be accommodated for an additional fee.",
    },
    {
      question: "Can I request specific details in my tailored suits?",
      answer:
        "Absolutely! That's the beauty of bespoke tailoring. You can customize every detail including lapel style, button configuration, pocket designs, lining fabric, monogramming, and more. Our consultants will walk you through all available options.",
    },
    {
      question: "Are alterations included in the price of a bespoke suit?",
      answer:
        "Yes, alterations during the fitting process are included in the price of your bespoke suit. We conduct multiple fittings to ensure your suit fits perfectly. Minor adjustments after delivery are also covered within the first year.",
    },
    {
      question: "Do you offer other bespoke clothing besides suits?",
      answer:
        "Yes, we offer a complete range of bespoke clothing including shirts, trousers, coats, jackets, waistcoats, and formal wear. We can create a fully coordinated wardrobe tailored specifically to your measurements and style preferences.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Section 1: Sophisticate Your Style - Text Above, Image Below */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          {/* Text Above */}
          <div className="text-center mb-10">
            <h2
              className="font-serif text-[18px] sm:text-[22px] md:text-[26px] mb-2 tracking-wide"
              style={{ color: GOLD }}
            >
              Sophisticate Your Style:
            </h2>
            <h3
              className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-6 tracking-wide"
              style={{ color: GOLD }}
            >
              Suit Tailoring in Dubai that Promises a Perfect Fit, Every Time
            </h3>
            <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 max-w-4xl mx-auto">
              At our luxury tailoring house in Dubai, we craft bespoke jackets
              with over 9,000 meticulous hand stitches, ensuring exceptional
              quality and precision. Each bespoke suit is thoughtfully designed
              to complement your unique style and fit, enhancing your
              sophistication and individuality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image Left with dotted border */}
            <div className="border-2 border-dashed border-gray-400 p-4">
              <img
                src="/works.png"
                alt="Bespoke Suit Tailoring"
                className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[450px] object-cover"
                draggable={false}
              />
            </div>

            {/* Text Right */}
            <div>
              <h3
                className="font-serif text-[16px] sm:text-[18px] md:text-[20px] mb-4 tracking-wide"
                style={{ color: GOLD }}
              >
                What are Bespoke Tailored Suits?
              </h3>
              <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 mb-4">
                Bespoke suits are made entirely to your preference. At our
                facility, the process begins with a one-on-one consultation with
                our bespoke Style consultant. He will discuss your preferences,
                from the fabric and style to the finer details like lapel style,
                buttons, button holes, stitching, and lining.
              </p>
              <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600">
                We'll then take comprehensive measurements to ensure a flawless
                fit. We make an average of 9,000 hand stitches into one bespoke
                suit for one client. Our bespoke clothing lines are 100%
                completely hand-stitched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: THE BESPOKE TAILORING PROCESS */}
      <section className="py-12 md:py-16 border-t border-gray-200">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <h2
            className="font-serif text-[20px] sm:text-[24px] md:text-[28px] text-center mb-4 tracking-wide"
            style={{ color: GOLD }}
          >
            The Bespoke Tailoring Process:
          </h2>
          <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 text-center max-w-4xl mx-auto mb-10">
            The bespoke tailoring process is a collaborative journey, each step
            designed to bring your vision to life. Here's a glimpse into what
            you can expect:
          </p>

          {/* Process Steps - 4 columns, 2 rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                1
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Consultation
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed mb-4">
                  We'll learn your style and needs during this initial meeting.
                </p>
                <button
                  className="font-serif text-[17px] sm:text-[18px] underline"
                  style={{ color: GOLD }}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                2
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Design Collaboration
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                  Discuss your style preferences, fabric desires, and unique
                  details with our bespoke style consultant.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                3
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Precise Measurements
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                  Our tailors take meticulous measurements to ensure a perfect
                  fit.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                4
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Baste Fitting
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed mb-4">
                  A preliminary version of your suit using a different fabric,
                  basted together, allows for initial adjustments and feedback.
                </p>
                <button
                  className="font-serif text-[17px] sm:text-[18px] underline"
                  style={{ color: GOLD }}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Step 5 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                5
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Forward Fitting
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                  A more refined suit is presented for further fit evaluation
                  and customization. This is also known as the second fitting.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                6
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Finalization
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                  The completed suit is ready for a final fitting to ensure
                  everything is perfect.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                7
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Delivery
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                  Your bespoke masterpiece arrives, ready for you to cherish for
                  many years to come.
                </p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="border-2 border-dashed border-gray-400 px-4 sm:px-6 py-6 sm:py-8 relative min-h-[180px] sm:min-h-[220px]">
              <span
                className="absolute top-4 left-4 font-serif text-[22px] sm:text-[26px] font-bold"
                style={{ color: GOLD }}
              >
                8
              </span>
              <div className="text-center pt-6 sm:pt-8">
                <h3
                  className="font-serif text-[18px] sm:text-[22px] italic mb-4"
                  style={{ color: "#333" }}
                >
                  Final Touches
                </h3>
                <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                  We'll also discuss any finishing touches, such as ties, pocket
                  squares or cufflinks, to complete your polished look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Invest in Bespoke Clothing? - Text Left, Image Right */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text Left */}
            <div className="order-2 lg:order-1">
              <h2
                className="font-serif text-[18px] sm:text-[22px] md:text-[26px] mb-6 tracking-wide"
                style={{ color: GOLD }}
              >
                Why Invest in Bespoke Clothing?
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <div>
                    <span className="font-serif text-[18px] sm:text-[20px] font-medium text-gray-800">
                      Perfect Fit:
                    </span>
                    <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                      {" "}
                      Bespoke suits are made to fit your body perfectly,
                      eliminating any discomfort or awkward bunching. This
                      attention to detail ensures a polished and perfectly
                      tailored appearance.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <div>
                    <span className="font-serif text-[18px] sm:text-[20px] font-medium text-gray-800">
                      Unrivaled Quality:
                    </span>
                    <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                      {" "}
                      Made from the finest materials and built with traditional
                      tailoring techniques, hand stitched suits stand the test
                      of time. Many of our clients still wear suits tailored a
                      decade ago.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <div>
                    <span className="font-serif text-[18px] sm:text-[20px] font-medium text-gray-800">
                      Personalized Style:
                    </span>
                    <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                      {" "}
                      Whether you prefer classic elegance or bold, modern
                      designs, handmade suits allow you to express your
                      individuality in every detail.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A66242] mt-1.5">•</span>
                  <div>
                    <span className="font-serif text-[18px] sm:text-[20px] font-medium text-gray-800">
                      Increased Confidence:
                    </span>
                    <span className="font-serif text-[18px] sm:text-[20px] text-gray-600">
                      {" "}
                      A suit that fits flawlessly and reflects your personal
                      style naturally boosts your confidence. Bespoke men's
                      designer suits empower you to make a strong, lasting
                      impression.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Image Right with dotted border */}
            <div className="border-2 border-dashed border-gray-400 p-4 order-1 lg:order-2">
              <img
                src="https://bespoke.ae/wp-content/uploads/2025/09/Why-Invest-in-Bespoke-Clothing.webp"
                alt="Why Invest in Bespoke Clothing"
                className="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Beyond Designer Suits */}
      <section className="py-12 md:py-16 border-t border-gray-200">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <h2
            className="font-serif text-[18px] sm:text-[22px] md:text-[26px] text-center mb-12 tracking-wide"
            style={{ color: GOLD }}
          >
            Beyond Designer Suits for Men: Explore Our Bespoke Clothing
            Expertise
          </h2>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Trousers */}
            <div className="border-2 border-dashed border-gray-300 p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  viewBox="0 0 128 128"
                  fill="#A66242"
                >
                  <path d="m43.111 120.559c-.035 0-.07 0-.107 0a1.5 1.5 0 0 1 -1.391-1.6l5.032-71.891a1.5 1.5 0 0 1 2.993.21l-5.032 71.891a1.5 1.5 0 0 1 -1.495 1.39z"></path>
                  <path d="m50.083 14.212a1.5 1.5 0 0 1 -1.5-1.5v-6.312a1.5 1.5 0 1 1 3 0v6.312a1.5 1.5 0 0 1 -1.5 1.5z"></path>
                  <path d="m92.445 127.119h-14.436a3.517 3.517 0 0 1 -3.465-3.008l-10.544-74.16-10.544 74.16a3.517 3.517 0 0 1 -3.465 3.008h-14.436a3.5 3.5 0 0 1 -3.5-3.49c-.022-12.1-.089-73.4.753-92.189.559-12.488 4.254-20.363 5.16-22.118v-4.941a3.5 3.5 0 0 1 3.5-3.5h45.064a3.5 3.5 0 0 1 3.5 3.5v4.941c.905 1.755 4.6 9.63 5.16 22.118.842 18.784.775 80.09.753 92.189a3.5 3.5 0 0 1 -3.5 3.49zm-26.663-85.947 11.732 82.517a.5.5 0 0 0 .5.43h14.431a.5.5 0 0 0 .5-.5c.022-12.087.089-73.331-.75-92.049-.59-13.178-4.927-21.065-4.97-21.143a1.5 1.5 0 0 1 -.193-.735v-5.311a.5.5 0 0 0 -.5-.5h-45.064a.5.5 0 0 0 -.5.5v5.319a1.5 1.5 0 0 1 -.194.737c-.042.076-4.379 7.963-4.969 21.141-.839 18.718-.772 79.962-.75 92.049a.5.5 0 0 0 .5.5h14.436a.5.5 0 0 0 .495-.43l11.732-82.525a1.8 1.8 0 0 1 3.564 0z"></path>
                  <path d="m84.889 120.559a1.5 1.5 0 0 1 -1.495-1.395l-5.032-71.891a1.5 1.5 0 0 1 2.993-.21l5.032 71.891a1.5 1.5 0 0 1 -1.391 1.6c-.036.004-.072.005-.107.005z"></path>
                  <path d="m84.532 8.2h-41.064a1.5 1.5 0 0 0 0 3h15.039v20.322a3.5 3.5 0 0 0 3.5 3.5h3.993a1.5 1.5 0 0 0 0-3h-4a.5.5 0 0 1 -.5-.5v-20.322h4.986v18.65a1.5 1.5 0 1 0 3 0v-18.65h15.046a1.5 1.5 0 0 0 0-3z"></path>
                  <path d="m77.917 14.212a1.5 1.5 0 0 1 -1.5-1.5v-6.312a1.5 1.5 0 0 1 3 0v6.312a1.5 1.5 0 0 1 -1.5 1.5z"></path>
                  <circle cx="64" cy="14.156" r="1.719"></circle>
                </svg>
              </div>
              <h3
                className="font-serif text-[16px] sm:text-[18px] font-medium mb-4 tracking-wide"
                style={{ color: GOLD }}
              >
                Trousers
              </h3>
              <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                From classic dress pants to comfortable chinos, we can create{" "}
                <Link
                  href="/bespoke-trousers"
                  className="underline"
                  style={{ color: GOLD }}
                >
                  bespoke trousers
                </Link>{" "}
                that complement your suits and style.
              </p>
            </div>

            {/* Coats & Jackets */}
            <div className="border-2 border-dashed border-gray-300 p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  viewBox="0 0 100 100"
                  fill="#A66242"
                >
                  <path d="m77.361 24.592c-3.1-2.3-8.917-4.218-10.11-4.6l-6.091-5.36c-.007-.006-.018 0-.025-.007a.986.986 0 0 0 -.635-.242h-21c-.008 0-.014.01-.022.01a.99.99 0 0 0 -.638.239l-6.091 5.368c-1.193.378-7.009 2.295-10.11 4.6-4.339 3.21-11.488 49.042-12.877 58.2a1 1 0 0 0 .778 1.127l7.75 1.667a1 1 0 0 0 1.186-.759l8.667-38.786 2.1 16.633-2.821 26.436a1 1 0 0 0 .992 1.106l17.586.026h8l17.584-.026a1 1 0 0 0 .992-1.106l-2.819-26.439 2.1-16.633 8.667 38.787a1 1 0 0 0 1.186.759l7.75-1.667a1 1 0 0 0 .778-1.127c-1.389-9.156-8.538-54.988-12.877-58.206zm-17.823-2.5-5 4.311-2.932-2.847 7.932-5c.008.991.009 2.181 0 3.538zm-12.538 45.849 2.2 2.976a1 1 0 0 0 1.609 0l2.191-2.976v4.809h-6zm0 6.809h6v1.25h-6zm3-6.111-3.292-4.462 2.044-32.77h2.5l2.044 32.77zm-9.54-50.083 7.932 5-2.932 2.844-5-4.311c-.007-1.357-.006-2.542 0-3.533zm10.924 10.851h-2.768l-.594-2.7 1.978-1.923 1.977 1.92zm-1.384-7.199-9.233-5.822h18.47zm-5.153 6.309a1 1 0 0 0 1.35-.04l.138-.134.471 2.142-1.984 31.805c-3.348-9.93-4.167-26.953-4.33-37.529zm2.153 49.483h6v10.25h-6zm8.178-15.707-1.984-31.809.471-2.142.139.135a1 1 0 0 0 1.35.04l4.355-3.756c-.164 10.576-.982 27.601-4.331 37.532zm-37.438 21.135-5.86-1.261c3.626-23.715 8.524-49.3 11.246-54.921a43 43 0 0 1 4.274 12.954zm13.3-9.344h6.546a1 1 0 0 0 0-2h-6.335l.993-9.309a.966.966 0 0 0 0-.231l-2.834-22.43a43.923 43.923 0 0 0 -4.854-14.414 46.291 46.291 0 0 1 8.988-3.863 1 1 0 0 0 .366-.206l4.551-4c-.1 8.652.04 39.016 6.539 50v20.618l-15.472-.023zm36.72-11.54a.966.966 0 0 0 0 .231l.993 9.309h-6.336a1 1 0 0 0 0 2h6.546l1.509 14.142-15.472.023v-20.619c6.5-10.987 6.639-41.354 6.539-50l4.55 4a.993.993 0 0 0 .366.206 46.175 46.175 0 0 1 8.989 3.864 43.942 43.942 0 0 0 -4.852 14.41zm14.5 20.884-9.66-43.228a43.011 43.011 0 0 1 4.275-12.949c2.722 5.619 7.62 31.206 11.246 54.921z"></path>
                </svg>
              </div>
              <h3
                className="font-serif text-[16px] sm:text-[18px] font-medium mb-4 tracking-wide"
                style={{ color: GOLD }}
              >
                Coats & Jackets
              </h3>
              <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                Whether you need a warm winter coat or a timeless sports jacket,
                our tailors can design a piece that seamlessly integrates into
                your wardrobe.
              </p>
            </div>

            {/* Shirts */}
            <div className="border-2 border-dashed border-gray-300 p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  viewBox="0 0 512 512"
                  fill="#A66242"
                >
                  <path d="m504.31 289.98-29.45-191.58c-3.64-23.68-21.08-42.45-44.46-47.8l-54.11-11.8-24.65-32.61c-1.3-1.71-3.3-2.73-5.44-2.78h-180.4c-2.14.05-4.14 1.07-5.44 2.78l-24.65 32.61-54.11 11.8c-23.38 5.35-40.82 24.12-44.46 47.8l-29.45 191.58c-1.54 10.64-.07 21.51 4.26 31.46l75.7 173.57c1.71 7.92 8.63 13.58 16.84 13.58h303.02c8.21 0 15.13-5.66 16.84-13.58l75.7-173.57c4.33-9.95 5.8-20.82 4.26-31.46zm-417.04 169.12-62.48-143.26c-3.29-7.55-4.41-15.79-3.25-23.79l29.44-191.53c2.32-15.12 12.06-27.6 25.66-33.6l10.63 204.38zm258.38-437.62 17.59 23.28c-23 25.63-51.3 47.32-73.03 62.15l-23.32-29.72c16.23-8.11 53.33-28.39 78.76-55.71zm-15.61-4.07c-26.47 25.69-63.56 44.47-74.04 49.51-10.48-5.04-47.57-23.82-74.04-49.51zm-163.69 4.07c25.43 27.32 62.53 47.6 78.76 55.71l-23.32 29.72c-21.73-14.83-50.03-36.52-73.03-62.15zm-65.08 469.89v-220.25c0-.12 0-.24-.01-.36l-10.8-207.77 46.72-10.18c26.12 29.49 58.93 53.89 82.22 69.37 1.19.79 2.54 1.17 3.87 1.17 2.09 0 4.14-.92 5.51-2.68l20.22-25.76v399.68h-144.51c-1.54 0-3.22-.99-3.22-3.22zm309.47-220.61c-.01.12-.01.24-.01.36v220.25c0 2.23-1.68 3.22-3.22 3.22h-144.51v-399.68l20.22 25.76c1.37 1.76 3.42 2.68 5.51 2.68 1.33 0 2.68-.38 3.87-1.17 23.29-15.48 56.1-39.88 82.22-69.37l46.72 10.18zm76.47 45.08-62.48 143.26v-187.8l10.63-204.38c13.6 6 23.34 18.48 25.66 33.6l29.44 191.53c1.16 8 .04 16.24-3.25 23.79zm-186.422-114.76c0 6.573-5.328 11.901-11.901 11.901s-11.901-5.328-11.901-11.901 5.328-11.901 11.901-11.901 11.901 5.328 11.901 11.901zm0 103.119c0 6.573-5.328 11.901-11.901 11.901s-11.901-5.328-11.901-11.901 5.328-11.901 11.901-11.901 11.901 5.328 11.901 11.901zm0 103.119c0 6.573-5.328 11.901-11.901 11.901s-11.901-5.328-11.901-11.901 5.328-11.901 11.901-11.901 11.901 5.328 11.901 11.901z"></path>
                </svg>
              </div>
              <h3
                className="font-serif text-[16px] sm:text-[18px] font-medium mb-4 tracking-wide"
                style={{ color: GOLD }}
              >
                Shirts
              </h3>
              <p className="font-serif text-[17px] sm:text-[18px] text-gray-600 leading-relaxed">
                A well-tailored{" "}
                <Link
                  href="/bespoke-shirt"
                  className="underline"
                  style={{ color: GOLD }}
                >
                  bespoke shirt
                </Link>{" "}
                forms the foundation of any polished look. We offer a variety of
                fabrics and styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Experience the Difference */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <h2
            className="font-serif text-[18px] sm:text-[22px] md:text-[26px] text-center mb-6 tracking-wide"
            style={{ color: GOLD }}
          >
            Experience the Difference of Bespoke Tailoring
          </h2>
          <p className="font-serif text-[18px] sm:text-[20px] leading-relaxed text-gray-600 text-center max-w-4xl mx-auto">
            A bespoke suit is more than just an article of clothing; it's a
            canvas for your individuality, a masterpiece of a tailor. At our
            tailor shop, we are passionate about helping you build a wardrobe
            that shows your individuality and empowers you to make a lasting
            impression with bespoke tailor suits in Dubai. Contact us today to
            schedule a consultation.
          </p>
        </div>
      </section>

      {/* Section 6: Enquire Now Form */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: "#E8E4DF" }}
      >
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-10">
          <h2
            className="font-serif text-[22px] sm:text-[28px] md:text-[32px] text-center mb-12 italic"
            style={{ color: GOLD }}
          >
            Enquire Now
          </h2>

          <form className="space-y-8 animate-fadeIn">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block font-serif text-[18px] sm:text-[20px] text-gray-800 mb-2 transition-all duration-300">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2 font-serif text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none transition-all duration-300 hover:border-[#A66242]"
                />
              </div>
              <div>
                <label className="block font-serif text-[18px] sm:text-[20px] text-gray-800 mb-2 transition-all duration-300">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2 font-serif text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none transition-all duration-300 hover:border-[#A66242]"
                />
              </div>
            </div>

            {/* Email Address & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block font-serif text-[18px] sm:text-[20px] text-gray-800 mb-2 transition-all duration-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2 font-serif text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none transition-all duration-300 hover:border-[#A66242]"
                />
              </div>
              <div>
                <label className="block font-serif text-[18px] sm:text-[20px] text-gray-800 mb-2 transition-all duration-300">
                  Phone
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2 font-serif text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none transition-all duration-300 hover:border-[#A66242]"
                />
              </div>
            </div>

            {/* What are you looking for? & Choose Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
              <div className="relative">
                <select
                  name="lookingFor"
                  className="w-full border-0 border-b-2 border-[#A66242] bg-transparent px-0 py-3 pr-12 font-serif text-[16px] text-gray-700 focus:border-[#8B4513] focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">What are you looking for?</option>
                  <option value="bespoke-suit">Bespoke Suit</option>
                  <option value="bespoke-shirt">Bespoke Shirt</option>
                  <option value="bespoke-trousers">Bespoke Trousers</option>
                  <option value="coat-jacket">Coat & Jacket</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#5C4033"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block font-serif text-[18px] sm:text-[20px] text-gray-800 mb-2 transition-all duration-300">
                  Choose Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2 font-serif text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none transition-all duration-300 hover:border-[#A66242]"
                />
              </div>
            </div>

            {/* Message (Optional) */}
            <div>
              <label className="block font-serif text-[18px] sm:text-[20px] text-gray-800 mb-2 transition-all duration-300">
                Message(Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={1}
                className="w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2 font-serif text-[16px] text-gray-900 focus:border-[#A66242] focus:outline-none transition-all duration-300 hover:border-[#A66242] resize-none"
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy-policy"
                className="h-5 w-5 border-2 border-gray-400 mt-0.5 flex-shrink-0"
              />
              <label
                htmlFor="privacy-policy"
                className="font-serif text-[14px] text-gray-700"
              >
                I agree to the{" "}
                <Link
                  href="/privacy-policy"
                  className="underline"
                  style={{ color: GOLD }}
                >
                  Privacy Policy
                </Link>{" "}
                and consent to the use of my data.
              </label>
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="newsletter"
                className="h-5 w-5 border-2 border-gray-400 mt-0.5 flex-shrink-0"
              />
              <label
                htmlFor="newsletter"
                className="font-serif text-[14px] text-gray-700"
              >
                Yes, I'd like to receive styling tips, fashion advice, and
                exclusive updates from Bespoke Tailoring. I understand I'll
                receive no more than two emails per month.
              </label>
            </div>

            <div className="text-right text-[10px] text-gray-400 -mt-6">
              Privacy - Terms
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-10 py-3 bg-black text-white font-serif text-[14px] tracking-wide hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Section 7: FAQ's */}
      <section className="py-6 md:py-8 bg-white">
        <div className="px-4 sm:px-6 md:px-10">
          <h2
            className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-4"
            style={{ color: "#333" }}
          >
            FAQ'S
          </h2>

          <div>
            {faqItems.map((item, index) => (
              <div key={index} className="mb-1">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center gap-3 py-2 px-3 text-left border border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-light" style={{ color: GOLD }}>
                    {openFAQ === index ? "−" : "+"}
                  </span>
                  <span className="font-serif text-[17px] sm:text-[19px] text-gray-800">
                    {item.question}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-3 py-2 pl-10">
                    <p className="font-serif text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
