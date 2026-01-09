"use client";

import { useEffect, useState } from "react";

const achievements = [
  { value: 3000, label: "No. of Vessels", suffix: "+" },
  { value: 10000, label: "No. of Jobs", suffix: "+" },
  { value: 50, label: "Satisfied Companies", suffix: "+" },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-blue-900">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="w-full bg-blue-50 border-y border-blue-100">
      {/* Inner content centered */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="transition-transform duration-300 "
            >
              <Counter end={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm md:text-base text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
