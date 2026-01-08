const sectors = [
  { title: "FMCG", image: "/icons/fmcg.svg" },
  { title: "Retail", image: "/icons/retail.svg" },
  { title: "Fashion & Lifestyle", image: "/icons/fashion.svg" },
  { title: "Chemicals", image: "/icons/chemicals.svg" },
];

export default function IndustrySectors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light text-gray-900 mb-4">
          Industry sectors
        </h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Regardless of your industry, your commodity, or your key markets,
          Maersk offers global and local logistics solutions that enable small
          and large businesses to grow.
        </p>

        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-6">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="min-w-[220px] bg-[#bfe6f8] rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition"
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="h-24 mb-6"
              />
              <p className="text-gray-800 font-medium">
                {sector.title}
              </p>
            </div>
          ))}
        </div>

        {/* Slider dots */}
        <div className="flex justify-center mt-6 gap-2">
          <span className="w-6 h-1 bg-black rounded-full"></span>
          <span className="w-2 h-1 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
