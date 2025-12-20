"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// Country codes data with flag image URLs
const countries = [
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "AF", name: "Afghanistan", dialCode: "+93" },
  { code: "AX", name: "Åland Islands", dialCode: "+358" },
  { code: "AL", name: "Albania", dialCode: "+355" },
  { code: "DZ", name: "Algeria", dialCode: "+213" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "QA", name: "Qatar", dialCode: "+974" },
  { code: "KW", name: "Kuwait", dialCode: "+965" },
  { code: "BH", name: "Bahrain", dialCode: "+973" },
  { code: "OM", name: "Oman", dialCode: "+968" },
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "JO", name: "Jordan", dialCode: "+962" },
  { code: "LB", name: "Lebanon", dialCode: "+961" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "IT", name: "Italy", dialCode: "+39" },
];

// Helper function to get flag URL
const getFlagUrl = (countryCode: string) =>
  `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;

export default function CareersSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    cv: null as File | null,
  });

  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === "PK") || countries[0]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.dialCode.includes(searchTerm)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, "Country:", selectedCountry);
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
          {/* IMAGE - Shows first on mobile, first on desktop */}
          <div className="overflow-hidden order-1 lg:order-1">
            <img
              src="https://bespoke.ae/wp-content/uploads/2025/09/careers.webp"
              alt="Bespoke tailor crafting"
              className="h-auto w-full object-cover lg:h-[650px]"
              draggable={false}
            />
          </div>

          {/* FORM SECTION - Shows second on mobile, second on desktop */}
          <div className="flex flex-col justify-center order-2 lg:order-2">
            {/* Intro Text */}
            <div className="text-center mb-8">
              <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
                Do you have passion for fashion? Are you an artisan of bespoke
                and custom tailoring? Then join the luxury legacy of tailoring
                and have the opportunity to work and lean with master tailors in
                Dubai.
              </p>
              <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed text-gray-700 mt-4">
                Send your application by filling up the form and sending your
                CV.
              </p>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-800 bg-transparent py-3 font-serif text-[16px] font-medium text-gray-900 placeholder:text-gray-900 placeholder:font-medium focus:border-[#A66242] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-800 bg-transparent py-3 font-serif text-[16px] font-medium text-gray-900 placeholder:text-gray-900 placeholder:font-medium focus:border-[#A66242] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-800 bg-transparent py-3 font-serif text-[16px] font-medium text-gray-900 placeholder:text-gray-900 placeholder:font-medium focus:border-[#A66242] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="relative" ref={dropdownRef}>
                  <div className="flex items-center border-b-2 border-gray-800">
                    {/* Country Selector */}
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-1 py-3 pr-2 hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={getFlagUrl(selectedCountry.code)}
                        alt={selectedCountry.name}
                        className="w-6 h-4 object-cover"
                      />
                      <ChevronDown className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="text-[16px] font-medium text-gray-900 mr-2">
                      {selectedCountry.dialCode}
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 bg-transparent py-3 font-serif text-[16px] font-medium text-gray-900 placeholder:text-gray-900 placeholder:font-medium focus:outline-none"
                      required
                    />
                  </div>

                  {/* Country Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-[280px] bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-[300px] overflow-hidden">
                      {/* Search Input */}
                      <div className="p-2 border-b border-gray-200">
                        <input
                          type="text"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded text-[14px] focus:outline-none focus:border-[#A66242]"
                          autoFocus
                        />
                      </div>
                      {/* Country List */}
                      <div className="max-h-[220px] overflow-y-auto">
                        {filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsDropdownOpen(false);
                              setSearchTerm("");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-left"
                          >
                            <img
                              src={getFlagUrl(country.code)}
                              alt={country.name}
                              className="w-6 h-4 object-cover"
                            />
                            <span className="font-serif text-[14px] text-gray-800">
                              {country.name}
                            </span>
                            <span className="font-serif text-[14px] text-gray-500 ml-auto">
                              {country.dialCode}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Position */}
              <div>
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-800 bg-transparent py-3 font-serif text-[16px] font-medium text-gray-900 placeholder:text-gray-900 placeholder:font-medium focus:border-[#A66242] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* CV Upload */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <label className="cursor-pointer w-full sm:w-auto">
                    <span className="block sm:inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white font-serif text-[12px] sm:text-[13px] tracking-wide hover:bg-gray-800 transition-colors">
                      Choose File
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="font-serif text-[13px] text-gray-500 text-center sm:text-left">
                    {formData.cv ? formData.cv.name : "No file chosen"}
                  </span>
                </div>
                <p className="mt-2 font-serif text-[13px] text-[#A66242]">
                  Attach CV*
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white font-serif text-[12px] sm:text-[13px] tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
