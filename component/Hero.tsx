"use client";

import React from "react";
import Button from "@/component/ui/button";
const img = "/assets/bg.png";

export default function Hero() {
  return (
    <section className="relative w-full 
      h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] xl:h-[95vh] 
      overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] ease-linear transform hover:translate-x-[-20%]"
        style={{ backgroundImage: `url('${img}')` }}
      />

      
{/* Strong Gradient Overlay */}
<div className="absolute inset-0 
  bg-gradient-to-r 
  from-white/80 
  via-white/20 
  to-transparent" />



      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          
          <div className="max-w-2xl text-left">
            <h1 className="text-black 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-light leading-tight">
              Unlock the full potential of your
              <br />
              <span className="font-normal">supply chain</span>
            </h1>

            <p className="mt-6 text-black-200 
              text-base sm:text-lg md:text-lg leading-relaxed">
              This is logistics the simple way: Convenient and connected across
              ocean, land, and air — and with all your needs covered from end to end.
            </p>

            <Button label="Access now" />
          </div>
        </div>
      </div>
    </section>
  );
}
