"use client";
import Button from "@/component/ui/button";
import React from "react";

interface Insight {
  title: string;
  tag: string;
  image: string;
  desc: string;
}

const insights: Insight[] = [
  {
    title:"The Versatile Workhorses of Global Trade",
    desc:"General cargo ships are some of the most adaptable and widely used vessels in the...",
    tag: "23-05-2025 11:11:34 AM ",
    image: "/Blog/blog1.jpg",
  },
  {
    title:
      "The Future of Ship Technology: Innovations Shaping the Maritime Industry",
    desc:"The global maritime industry is undergoing a significant transformation, driven by advancements in ship technology....",
    tag: " 23-05-2025 10:39:18 AM",
    image: "/Blog/blog2.jpg",
  },
  {
    title:
      "Essential Navigation Equipment for Safe and Accurate Travel",
    desc:"Navigation is the process of determining one’s position and planning and following a route. Navigation..",
    tag: "Resilience · 22 Dec 2025",
    image: "/Blog/blog3.jpg",
  },
  {
    title:
      "A Game Changer In Sustainable Shipping",
    desc:"The Yara Birkeland is a testament to the shipping industry's commitment to reducing its environmental...",
    tag: "29-03-2025 15:11:17 PM",
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
            <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">
              Latest <span className="font-medium">Insights</span>
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
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 flex flex-col justify-end bg-black/40 transition-colors duration-500 group-hover:bg-black/70">
        
        {/* CONTENT WRAPPER */}
        <div className="translate-y-6 p-6 transition-all duration-500 group-hover:translate-y-0">
          <span className="mb-2 block text-xs text-gray-300">
            {insight.tag}
          </span>

          <h3
            className={`text-white ${
              large ? "text-2xl font-medium" : "text-sm font-medium"
            }`}
          >
            {insight.title}
          </h3>

          {/* DESCRIPTION (HOVER ONLY) */}
          <p
            className={`mt-3 text-sm text-gray-200 opacity-0 transition-all duration-500 group-hover:opacity-100 ${
              large ? "max-w-lg" : "max-w-xs"
            }`}
          >
            {insight.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
