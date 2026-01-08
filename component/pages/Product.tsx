"use client";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";

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
  { title: "Lifebuoy (2.5 KGs)", image: "/assets/p16.jpg" },
  { title: "Multigas Detector Entry RAE", image: "/assets/p17.jpg" },
  { title: "Radar Transponder (SART)", image: "/assets/p18.jpg" },
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

export default function ProductGrid() {
  return (
    <>
    <Navbar variant="light" />
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mt-20 mb-14">
          <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            Our Safety & Marine Products
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of certified safety, firefighting, and marine
            equipment designed for industrial and maritime environments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {sectors.map((item, index) => (
            <div
              key={index}
              className="group rounded border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="flex items-center justify-center h-36 mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <h3 className="text-center text-sm font-semibold text-gray-800 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
