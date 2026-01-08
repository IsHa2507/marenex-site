"use client";
import Button from "@/component/ui/button";
import { useRef, useState } from "react";

const services = [
  {
    title: "Repair & Programming",
    desc: "Get fixed prices and guaranteed loading when booking shipments.",
    img: "/assets/2.svg",
  },
  {
    title: "GMDSS Radio Survey",
    desc: "Stable rates with assured space allocation.",
    img: "/assets/4.svg",
  },
  {
    title: "VDR Annual Survey",
    desc: "Freight quote for standard, oversized, and LCL shipments.",
    img: "/assets/1.svg",
  },
  {
    title: "Magnetic Compass Calibration",
    desc: "Book and manage door-to-door deliveries online.",
    img: "/assets/6.svg",
  },
    {
    title: "Calibration Services",
    desc: "Stable rates with assured space allocation.",
    img: "/assets/3.svg",
  },
  {
    title: "Marine Services",
    desc: "Freight quote for standard, oversized, and LCL shipments.",
    img: "/assets/5.svg",
  },
  
];

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const DOTS = 3; // subtle indicators, not per-card

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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
            <h4 className="font-heading text-xl font-medium text-orange-600">
              Our Services 
            </h4>
          <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            Logistics <span className="font-medium">Services</span> and Solutions
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Regardless of your industry or market, we offer logistics solutions
            that help businesses grow.
          </p>
        </div>

        {/* Tabs */}
        {/* <div className="flex justify-center gap-8 mb-10 text-sm font-medium">
          {[
            "Transport",
            "Store",
            "Clear & Protect",
            "Logistics Management",
            "Solutions",
          ].map((tab, i) => (
            <button
              key={i}
              className={`pb-2 ${
                i === 0
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        {/* Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white border border-gray-200 rounded p-4 hover:border-blue-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded mb-4"
              />
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
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
        <div className="flex justify-center mt-6"><Button label="Learn More"/></div>

      </div>
    </section>
  );
}
