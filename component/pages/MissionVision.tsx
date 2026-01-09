"use client";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="font-heading text-xl font-medium text-orange-600">
            MARENEX SERVICES
          </h4>
          <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">
            Mission, Vision & Our Approach
          </h2>
        </div>

        {/* OUR MISSION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Marenex Services is committed to delivering innovative, reliable,
              and customer-centric solutions. We aim to enhance efficiency,
              sustainability, and growth by providing top-quality services that
              exceed expectations and drive lasting success.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/m1.png"
              alt="Our Mission"
              width={520}
              height={340}
              className="rounded shadow-md transition-transform duration-300 hover:-translate-y-1"
            />
          </div>
        </div>

        {/* OUR VISION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/assets/m2.png"
              alt="Our Vision"
              width={520}
              height={340}
              className="rounded shadow-md transition-transform duration-300 hover:-translate-y-1"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Marenex Services, we strive to revolutionize service excellence
              with innovation, reliability, and customer satisfaction. Our goal
              is to create sustainable solutions that empower businesses and
              individuals worldwide.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Our Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Marenex Services, we prioritize innovation, efficiency, and
              customer satisfaction. Our strategic, data-driven methods ensure
              tailored solutions, seamless execution, and long-term value,
              fostering growth and success for our clients.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/m3.png"
              alt="Our Approach"
              width={520}
              height={340}
              className="rounded shadow-md transition-transform duration-300 hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
