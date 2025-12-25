"use client"


import React from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = "+923341544232"; // Format: country code + number (no spaces or special chars)
  const message = 'Hello! I would like to get in touch.'; // Optional pre-filled message
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/whatsapp.webp"
        alt="WhatsApp"
        width={40}
        height={40}
        className="scale-150 transition-transform"
      />
    
    </button>
  );
}