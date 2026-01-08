import Image from "next/image";
import Button from "@/component/ui/button";
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <div className="mx-auto max-w-[1300px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <h4 className="font-heading text-xl font-medium text-orange-600">
              About Us
            </h4>

            <h2 className="font-heading text-4xl font-medium leading-tight text-gray-900 md:text-5xl">
              Setting Sail Towards <br />
              <span className="text-blue-600">Innovation</span> and Reliability
            </h2>

            <p className="mt-6 max-w-xl font-body text-lg text-gray-600">
              At Marenex Services, we are dedicated to setting a new standard in ship
              repair and maintenance of navigation equipment. As a newly established
              entity, we are poised to make significant contributions to the
              maritime industry through our unwavering commitment to quality and
              innovation.
            </p>

            <p className="mt-6 max-w-xl font-body text-lg text-gray-600">
              Our team of seasoned professionals leverages extensive experience and
              state-of-the-art technology to provide comprehensive and reliable
              services for all types of vessels.
            </p>

            <div>
              <Button label="Read More"/> 
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center">

            {/* Rings */}
            <div className="absolute h-full w-full rounded-full border border-blue-300/40" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-blue-400/40" />
            <div className="absolute h-[220px] w-[220px] rounded-full border border-blue-500/40" />

            {/* COMPANY LOGO (CENTER & LARGE) */}
            <div className="z-10 relative h-40 w-40 md:h-48 md:w-48">
              <Image
                src="/logo/logo.png"   // 👈 your company logo
                alt="Marenex Services Logo"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Floating Icons */}
            {/* {["🚀", "💡", "📊", "🤝", "🔒", "⚙️"].map((icon, index) => (
              <div
                key={index}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md text-xl"
                style={{
                  transform: `rotate(${index * 60}deg) translate(180px) rotate(-${index * 60}deg)`,
                }}
              >
                {icon}
              </div>
            ))} */}

          </div>
        </div>
      </div>
    </section>
  );
}
