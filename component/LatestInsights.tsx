"use client";
import Button from "@/component/ui/button";
import React from "react";

interface Insight {
  title: string;
  tag: string;
  image: string;
}

const insights: Insight[] = [
  {
    title:
      "Power behind the brand: why lifestyle companies need technological advancement",
    tag: "Resilience · 5 Jan 2026",
    image: "/Blog/blog1.jpg",
  },
  {
    title:
      "From cost to catalyst: Why retailers must make logistics a resilience lever",
    tag: "Resilience · 30 Dec 2025",
    image: "/Blog/blog2.jpg",
  },
  {
    title:
      "Tech supply chains: collaboration is the next resilience frontier",
    tag: "Resilience · 22 Dec 2025",
    image: "/Blog/blog3.jpg",
  },
  {
    title:
      "What to expect in 2026 – 2 trends that will shape ecommerce logistics",
    tag: "Digitalisation · 18 Dec 2025",
    image: "/Blog/blog4.jpeg",
  },
];

const LatestInsights = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-4xl font-medium leading-tight text-gray-900 md:text-5xl">
              Latest insights
            </h2>
            <p className="max-w-2xl text-gray-600">
              Access the latest articles, trends and research to guide your
              strategy and keep you updated on what's new in the supply chain
              world.
            </p>
          </div>

          {/* <select className="w-fit rounded-md border px-4 py-2 text-sm">
            <option>All categories</option>
          </select> */}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div
          className="hidden lg:grid h-[720px] gap-[12px]"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(10, 1fr)",
          }}
        >
          {/* LEFT BIG CARD */}
          <InsightCard
            insight={insights[0]}
            large
            style={{ gridArea: "1 / 1 / 11 / 7" }}
          />

          {/* RIGHT TOP */}
          <InsightCard
            insight={insights[1]}
            style={{ gridArea: "1 / 7 / 6 / 13" }}
          />

          {/* RIGHT BOTTOM LEFT */}
          <InsightCard
            insight={insights[2]}
            style={{ gridArea: "6 / 7 / 11 / 10" }}
          />

          {/* RIGHT BOTTOM RIGHT */}
          <InsightCard
            insight={insights[3]}
            style={{ gridArea: "6 / 10 / 11 / 13" }}
          />
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="grid gap-6 lg:hidden">
          {insights.map((item, index) => (
            <InsightCard key={index} insight={item} />
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 flex justify-center">
          <Button label="Veiw All Insights"/>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;

/* ===================================================== */
/* ================== CARD COMPONENT =================== */
/* ===================================================== */

interface InsightCardProps {
  insight: Insight;
  style?: React.CSSProperties;
  large?: boolean;
}

const InsightCard = ({ insight, style, large }: InsightCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl"
      style={style}
    >
      {/* IMAGE */}
      <img
        src={insight.image}
        alt={insight.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
        <span className="mb-2 text-xs text-gray-200">
          {insight.tag}
        </span>

        <h3
          className={`text-white ${
            large ? "text-2xl font-medium" : "text-sm font-medium"
          }`}
        >
          {insight.title}
        </h3>
      </div>
    </div>
  );
};
