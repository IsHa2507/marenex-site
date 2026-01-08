"use client";

import React from "react";

const img = "/assets/bg.png";

export default function Hero() {
  return (
    <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[70vh] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] ease-linear transform hover:translate-x-[-20%]"
        style={{ backgroundImage: `url('${img}')` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light leading-snug md:leading-tight">
            Unlock the full potential of your
            <br />
            <span className="font-normal">supply chain</span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-gray-200 text-base sm:text-lg md:text-lg lg:text-lg">
            Convenient and connected across ocean, land, and air — end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
