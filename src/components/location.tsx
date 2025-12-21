"use client";

import { useState } from 'react';

export default function Location() {
  const [activeLocation, setActiveLocation] = useState<'blue-area' | 'diplomatic'>('blue-area');

  const locations = {
    "blue-area": {
      name: "Blue Area Showroom",
      address: "7–8 Madni Plaza, Jinnah Avenue, Blue Area, Islamabad",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.481366236532!2d73.07089227500829!3d33.71848483528128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9c9b3fef09%3A0x9747200de64c4d46!2sBespoke%20Tailors!5e1!3m2!1sen!2sus!4v1766305466763!5m2!1sen!2sus",
    },
    diplomatic: {
      name: "Diplomatic Enclave",
      address: "Ramna 5 Diplomatic Enclave, P4C4+HJR, Islamabad",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.3798161771156!2d73.10394437500842!3d33.72149153512372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc1001c9bb453%3A0x70299b413795967b!2sBespoke%20Tailors!5e1!3m2!1sen!2sus!4v1766305524844!5m2!1sen!2sus",
    },
  };

  const currentLocation = locations[activeLocation];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-10">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveLocation('blue-area')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeLocation === 'blue-area'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blue Area
            </button>
            <button
              onClick={() => setActiveLocation('diplomatic')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeLocation === 'diplomatic'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Diplomatic Enclave
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden bg-white">
          <iframe
            key={activeLocation}
            title={currentLocation.name}
            src={currentLocation.mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[520px] w-full"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
