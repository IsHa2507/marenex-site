"use client";
import Button from "@/component/ui/button";
import { LifeBuoy, Headphones, Settings } from "lucide-react";

const services = [
  {
    title: "Repair And Reprogramming",
    desc: "We specialize in expert repair and reprogramming of ship navigation and automation systems, ensuring optimal performance, reliability, and safety for maritime operations.",
    icon: LifeBuoy,
  },
  {
    title: "Customer Support",
    desc: "We pride ourselves on delivering exceptional customer service, offering prompt support, tailored solutions, and unwavering commitment to ensuring your satisfaction and operational success at sea.",
    icon: Headphones,
  },
  {
    title: "Equipment Calibration",
    desc: "We offer precise calibration services for ship automation systems, ensuring optimal performance and accuracy.",
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex flex-col rounded border border-gray-200 bg-white p-8 transition hover:shadow-lg hover:border-blue-500"
              >
                {/* Header: Icon + Title */}
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 -mt-2 shrink-0 items-center justify-center rounded-full border border-gray-300">
                    <Icon className="h-6 w-6  text-gray-900" />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-8 text-sm leading-relaxed text-gray-600">
                  {service.desc}
                </p>

                {/* Button */}
                <div>
                  <Button label="Read More" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
