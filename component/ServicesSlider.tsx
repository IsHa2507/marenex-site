"use client";

const services = [
  {
    title: "Marenex Spot",
    desc: "Get fixed prices and guaranteed loading when booking shipments.",
    img: "/card1.png",
  },
  {
    title: "Ocean Contract",
    desc: "Stable rates with assured space allocation.",
    img: "/card2.png",
  },
  {
    title: "Ocean Quote Request",
    desc: "Freight quote for standard, oversized, and LCL shipments.",
    img: "/card3.png",
  },
  {
    title: "Marenex Go",
    desc: "Book and manage door-to-door deliveries online.",
    img: "/card4.png",
  },
];

export default function ServicesSlider() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light">
            Logistics services and solutions
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Regardless of your industry or market, we offer logistics solutions
            that help businesses grow.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-10 text-sm font-medium">
          {["Transport", "Store", "Clear & Protect", "Logistics Management", "Solutions"].map(
            (tab, i) => (
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
            )
          )}
        </div>

        {/* Slider */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {services.map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white rounded-xl shadow p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-4"
              />
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 gap-2">
          <span className="w-6 h-2 rounded-full bg-black"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>

      </div>
    </section>
  );
}
