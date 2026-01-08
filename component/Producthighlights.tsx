"use client";
import Button from "@/component/ui/button";
import Link from "next/link";

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
];

export default function IndustrySectors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h4 className="font-heading text-xl font-medium text-orange-600">
          Our Products
        </h4>

        <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">
          Products <span className="font-medium">We Offer</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mb-12">
          Regardless of your industry, your commodity, or your key markets,
          Maersk offers global and local logistics solutions that enable small
          and large businesses to grow.
        </p>

        {/* 5 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded p-6 flex flex-col items-center justify-center transition-all hover:border-blue-500 hover:shadow-sm"
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="h-28 w-28 object-contain mb-6"
              />
              <p className="text-gray-800 font-medium text-center text-sm">
                {sector.title}
              </p>
            </div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="flex justify-center mt-10">
          <Link href="/products"><Button label="View More" /></Link>
        </div>
      </div>
    </section>
  );
}
