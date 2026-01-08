"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "Comprehensive Marine Solutions",
    desc:
      "From vessel maintenance and repair to offshore logistics and marine consulting, we offer a wide range of services to ensure the seamless operation of your maritime activities.",
    image: "/images/about-1.jpg",
  },
  {
    title: "Commitment to Safety & Compliance",
    desc:
      "We adhere to the highest industry safety standards and regulatory guidelines, ensuring that all our operations meet international maritime laws and best practices.",
    image: "/images/about-2.jpg",
  },
  {
    title: "Advanced Technology & Equipment",
    desc:
      "Equipped with state-of-the-art technology and modern marine equipment, we ensure efficiency, precision, and superior service delivery in all our projects.",
    image: "/images/about-3.jpg",
  },
  {
    title: "24/7 Customer Support & Reliability",
    desc:
      "Our dedicated team is available round the clock to provide support and assistance whenever you need it, ensuring smooth and uninterrupted operations.",
    image: "/images/about-4.jpg",
  },
];

export default function HoverImageSection() {
  // Default open: Comprehensive Marine Solutions
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IMAGE SECTION */}
          <div className="relative h-[600px] w-full overflow-hidden rounded shadow-lg">
            <Image
              key={items[activeIndex].image}
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>

          {/* CONTENT SECTION */}
          <div>
            <h4 className="font-heading text-xl font-medium text-orange-600">
              Why Choose Us?
            </h4>

            <h2 className="mt-2 font-heading text-4xl font-light text-gray-900">
              Focused on Your Needs and <span className="font-medium">Satisfaction</span>
            </h2>

            <div className="mt-10 space-y-4">
              {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`cursor-pointer rounded border p-6 transition-all duration-300 ${
                      isActive
                        ? "border-blue-500 bg-blue-50 shadow-sm"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        {isActive && (
                          <p className="mt-3 text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      <span
                        className={`text-2xl font-bold transition-transform duration-300 ${
                          isActive
                            ? "rotate-45 text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
