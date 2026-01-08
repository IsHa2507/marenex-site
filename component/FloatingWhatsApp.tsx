"use client"; // Needed if using Next.js 13+ App Router

import { FaWhatsapp } from "react-icons/fa";
import React from "react";

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/9211369292" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
