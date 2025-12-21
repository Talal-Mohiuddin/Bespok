"use client";

import { useState } from 'react';

export function LocationSection() {
  const [activeLocation, setActiveLocation] = useState<'diplomatic' | 'blue-area'>('blue-area');

  const locations = {
    "blue-area": {
      name: "Blue Area Showroom",
      address1: "7-8 Madni Plaza, Jinnah Avenue",
      address2: "Near Kulsum Hospital, G 6/2 Blue Area",
      city: "Islamabad, 44000, Pakistan",
      phone: "+92 51 2342222",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.481366236532!2d73.07089227500829!3d33.71848483528128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9c9b3fef09%3A0x9747200de64c4d46!2sBespoke%20Tailors!5e1!3m2!1sen!2sus!4v1766305466763!5m2!1sen!2sus",
    },
    diplomatic: {
      name: "Diplomatic Enclave",
      address1: "Ramna 5 Diplomatic Enclave",
      address2: "P4C4+HJR",
      city: "Islamabad, Pakistan",
      phone: "+92 51 2342222",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.3798161771156!2d73.10394437500842!3d33.72149153512372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc1001c9bb453%3A0x70299b413795967b!2sBespoke%20Tailors!5e1!3m2!1sen!2sus!4v1766305524844!5m2!1sen!2sus",
    },
  };

  const currentLocation = locations[activeLocation];

  return (
    <section className="bg-[#f5f1ed] py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#9d5d3f] leading-tight mb-4">
            Visit Our Showrooms
          </h2>
          <p className="text-lg text-[#6b5d54]">Experience bespoke tailoring at its finest</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-md">
            <button
              onClick={() => setActiveLocation('blue-area')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeLocation === 'blue-area'
                  ? 'bg-[#9d5d3f] text-white shadow-lg'
                  : 'text-[#6b5d54] hover:bg-[#f5f1ed]'
              }`}
            >
              Blue Area
            </button>
            <button
              onClick={() => setActiveLocation('diplomatic')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeLocation === 'diplomatic'
                  ? 'bg-[#9d5d3f] text-white shadow-lg'
                  : 'text-[#6b5d54] hover:bg-[#f5f1ed]'
              }`}
            >
              Diplomatic Enclave
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-6 transition-all duration-500">
            <h3 className="font-serif text-3xl text-[#9d5d3f]">
              {currentLocation.name}
            </h3>
            <div className="space-y-2 text-[#6b5d54]">
              <p className="text-lg flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 text-[#9d5d3f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {currentLocation.address1}<br />
                  {currentLocation.address2}<br />
                  {currentLocation.city}
                </span>
              </p>
            </div>
            <p className="text-lg text-[#9d5d3f] flex items-center">
              <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {currentLocation.phone}
            </p>
            <div className="pt-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(currentLocation.address1 + ', ' + currentLocation.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#9d5d3f] text-white rounded-lg hover:bg-[#8a4e33] transition-colors duration-300 shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              key={activeLocation}
              src={currentLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentLocation.name} Location`}
              className="transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
