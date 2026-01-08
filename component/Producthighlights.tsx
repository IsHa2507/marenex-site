"use client";

import { useRef, useState } from "react";

const sectors = [
  { title: "Daylight Signaling Lamp (Aldis)", image: "/assets/p1.jpg" },
  { title: "Epirb", image: "/assets/p2.jpg" },
  { title: "Fire Fighting Suit Nomex", image: "/assets/p3.jpg" },
  { title: "Gas Chemical Protective Suite (Heavy Duty)", image: "/assets/p4.jpg" },

  { title: "Immersion Suit", image: "/assets/p5.jpg" },
  { title: "Multigas Detector Shipsurveyor", image: "/assets/p6.jpg" },
  { title: "Oil Spill Kit", image: "/assets/p7.jpg" },
  { title: "Oxygen Respirator", image: "/assets/p8.jpg" },

  { title: "Safety Helmet", image: "/assets/p9.jpg" },
  { title: "Warning Tape (Red / White)", image: "/assets/p10.jpg" },
  { title: "Chemical Protective Suit (Light Duty)", image: "/assets/p11.jpg" },
  { title: "Daylight Signaling Lamp (Francis)", image: "/assets/p12.jpg" },

  { title: "Fire Fighting Suit Aluminized", image: "/assets/p13.jpg" },
  { title: "First Aid Kit (Boxed)", image: "/assets/p14.jpg" },
  { title: "Full Harness", image: "/assets/p15.jpg" },
  { title: "Lifebuoy (2,5 KGs)", image: "/assets/p16.jpg" },

  { title: "Multigas Detector Entry RAE", image: "/assets/p17.jpg" },
  { title: "Radar Transponder (Sart)", image: "/assets/p18.jpg" },
  { title: "Shovel Non-Spark", image: "/assets/p19.jpg" },
  { title: "Warning Tape (Yellow / Black)", image: "/assets/p20.jpg" },

  { title: "Breathing Apparatus Set", image: "/assets/p21.jpg" },
  { title: "Ex-Proof Lantern Lamp (Mica)", image: "/assets/p22.jpg" },
  { title: "First Aid Kit (Bag)", image: "/assets/p23.jpg" },
  { title: "Gloves for Acid Protective", image: "/assets/p24.jpg" },

  { title: "Jet Spray for Dispersant", image: "/assets/p25.jpg" },
  { title: "Lifebuoy (4 KGs)", image: "/assets/p26.jpg" },
  { title: "Multigas Detector Entry QRAE II", image: "/assets/p27.jpg" },
  { title: "VHF Hand Held Marine Radio 1", image: "/assets/p28.jpg" },

  { title: "VHF Hand Held Marine Radio 2", image: "/assets/p29.jpg" },
  { title: "Waist Belt with Rope", image: "/assets/p30.jpg" },
  { title: "Warning Vest", image: "/assets/p31.jpg" },
  { title: "Aquabreak Dispersant", image: "/assets/p32.jpg" },

  { title: "Baton", image: "/assets/p33.jpg" },
  { title: "Boots for Acid Protective", image: "/assets/p34.jpg" },
  { title: "Compressed Air Cylinder", image: "/assets/p35.jpg" },
  { title: "Personal Gas Detector Toxirae", image: "/assets/p36.jpg" },

  { title: "Stretcher (Neil Robertson Type)", image: "/assets/p37.jpg" },
  { title: "Working Gloves", image: "/assets/p38.jpg" },
  { title: "Cloth Sealing Tape", image: "/assets/p39.jpg" },
  { title: "Lifejacket Inflatable", image: "/assets/p40.jpg" },
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
        <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">Products<span className="font-medium"> We Offer</span>
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
              className="min-w-[220px] bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center hover:border-blue-500"
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
