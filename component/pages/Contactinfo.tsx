"use client";

import { Mail, AtSign, MapPin } from "lucide-react";

const contacts = [
  {
    title: "Email Address",
    value: "technical@marenexservices.com",
    icon: Mail,
  },
  {
    title: "Services",
    value: "info@marenexservices.com",
    icon: AtSign,
  },
  {
    title: "Office Address",
    value: `1st Floor, Shop No-145,
R G Mall, Sector-9,
Rohini, West Delhi,
India - 110085`,
    icon: MapPin,
  },
];

export default function ContactInfoSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mt-20 mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-light text-slate-900 mb-14">
          Contact Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
  key={index}
  className="max-h-[200px] rounded border border-gray-200 bg-white px-6 py-6 text-center
             flex flex-col items-center"
>
  {/* Icon */}
  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
    <Icon className="h-6 w-6 text-blue-900" />
  </div>

  {/* Title */}
  <h3 className="text-base font-semibold text-slate-900 mb-2">
    {item.title}
  </h3>

  {/* Content */}
  <p className="text-sm text-slate-600 leading-snug overflow-auto">
    {item.value}
  </p>
</div>

             
            );
          })}
        </div>
      </div>
    </section>
  );
}
