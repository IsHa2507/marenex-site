"use client";

import { useRef, useState } from "react";

const sectors = [
  { title: "FMCG", image: "/assets/product1.jpg" },
  { title: "Retail", image: "/assets/product1.jpg" },
  { title: "Fashion & Lifestyle", image: "/assets/product1.jpg" },
  { title: "Chemicals", image: "/assets/product1.jpg" },
  { title: "Retail", image: "/assets/product1.jpg" },
  { title: "Fashion & Lifestyle", image: "/assets/product1.jpg" },
  { title: "Chemicals", image: "/assets/product1.jpg" },
];

export default function IndustrySectors() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const DOTS = 2; // subtle, not per-card

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setActiveDot(Math.round(progress * (DOTS - 1)));
  };

  const scrollToDot = (index: number) => {
    if (!sliderRef.current) return;

    const { scrollWidth, clientWidth } = sliderRef.current;
    const target =
      ((scrollWidth - clientWidth) / (DOTS - 1)) * index;

    sliderRef.current.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h4 className="font-heading text-xl font-medium text-orange-600">
              Our Products
            </h4>
        <h2 className="font-heading text-4xl font-medium leading-tight text-gray-900 md:text-5xl">Products We Offer
        </h2>

        <p className="text-gray-600 max-w-3xl mb-12">
          Regardless of your industry, your commodity, or your key markets,
          Maersk offers global and local logistics solutions that enable small
          and large businesses to grow.
        </p>

        {/* Scrollable Cards */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-6"
        >
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="min-w-[220px] bg-[#bfe6f8] rounded-2xl p-6 flex flex-col items-center justify-center "
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="h-50 w-50 mb-6"
              />
              <p className="text-gray-800 font-medium">
                {sector.title}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: DOTS }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              className={`transition-all duration-300 rounded-full ${
                activeDot === i
                  ? "w-6 h-2 bg-black"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
