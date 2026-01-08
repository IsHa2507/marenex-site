// LatestInsights.tsx
import React from "react";

interface Insight {
  title: string;
  tag: string;
  image: string;
  large?: boolean;
}

const insights: Insight[] = [
  {
    title:
      "Power behind the brand: why lifestyle companies need technological advancement",
    tag: "Resilience · 5 Jan 2026",
    image: "/images/insight-1.jpg",
    large: true,
  },
  {
    title:
      "From cost to catalyst: Why retailers must make logistics a resilience lever",
    tag: "Resilience · 30 Dec 2025",
    image: "/images/insight-2.jpg",
  },
  {
    title:
      "Tech supply chains: collaboration is the next resilience frontier",
    tag: "Resilience · 22 Dec 2025",
    image: "/images/insight-3.jpg",
  },
  {
    title:
      "What to expect in 2026 – 2 trends that will shape ecommerce logistics",
    tag: "Digitalisation · 18 Dec 2025",
    image: "/images/insight-4.jpg",
  },
];

const LatestInsights: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Latest insights
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Access the latest articles, trends and research to guide your
              strategy and keep you updated on what's new in the supply chain world.
            </p>
          </div>

          <select className="border rounded-md px-4 py-2 text-sm">
            <option>All categories</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Card */}
          <div className="lg:row-span-2 relative rounded-2xl overflow-hidden">
            <img
              src={insights[0].image}
              className="w-full h-full object-cover"
              alt={insights[0].title}
            />
            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
              <span className="text-xs text-gray-200 mb-2">
                {insights[0].tag}
              </span>
              <h3 className="text-white text-xl font-medium">
                {insights[0].title}
              </h3>
            </div>
          </div>

          {/* Small Cards */}
          {insights.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden h-[220px]"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                <span className="text-xs text-gray-200 mb-1">
                  {item.tag}
                </span>
                <h3 className="text-white text-sm font-medium">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border px-6 py-2 rounded-md text-sm hover:bg-gray-100">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
