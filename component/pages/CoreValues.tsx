import {
  FaMedal,
  FaUsers,
  FaBalanceScale,
  FaChartLine,
  FaLeaf,
} from "react-icons/fa";

const values = [
  {
    icon: <FaMedal size={24} />,
    title: "Quality & Reliability",
    desc: "We are steadfast in delivering superior ship repair and maintenance services, ensuring the highest standards and dependability.",
  },
  {
    icon: <FaUsers size={24} />,
    title: "Customer-Centricity",
    desc: "Our clients’ needs are at the forefront. We provide bespoke solutions tailored to each requirement.",
  },
  {
    icon: <FaBalanceScale size={24} />,
    title: "Integrity",
    desc: "We conduct our business with honesty, transparency, and ethical standards, ensuring long-term trust.",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Excellence & Cost",
    desc: "We continuously refine our services to exceed expectations while maintaining cost-effective solutions.",
  },
  {
    icon: <FaLeaf size={24} />,
    title: "Environmental Responsibility & Safety",
    desc: "We are committed to protecting the marine environment and ensuring safety through strict protocols.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h4 className="font-heading text-xl font-medium text-orange-600">
          Marenex Services
        </h4>
        <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">
          Core Values of Marenex Services
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition hover:-translate-y-1 duration-300 hover:border-blue-300"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-900 text-white flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-blue-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
