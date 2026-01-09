import Image from "next/image";
import Achievements from "@/component/pages/Achievements";
import CoreValues from "@/component/pages/CoreValues";
import MissionVision from "@/component/pages/MissionVision";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function AboutUs() {
  return (
    <>
    <Navbar variant="light"/>
     
      

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mt-20 mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/assets/aboutus.jpg"
              alt="Marine Control Room"
              width={600}
              height={450}
              className="rounded-xl object-cover"
            />
          </div>

          <div>
            <h4 className="font-heading text-xl font-medium text-orange-600">
              Welcome to Marenex Services
            </h4>
            <h2 className="font-heading text-4xl font-light leading-tight text-gray-900 md:text-5xl">
              We Are Expert In Marine Industry Works
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              At Marenex Services, we are dedicated to setting a new standard in
              ship repair and maintenance of navigation equipment. Our seasoned
              professionals leverage advanced technology to deliver reliable
              and compliant services worldwide.
            </p>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              We prioritize precision, safety, and customer satisfaction—building
              long-term partnerships rooted in trust and excellence.
            </p>
          </div>
        </div>
      </section>
      <Achievements />
    
      {/* Core Values */}
      <CoreValues />
      <MissionVision />
      <Footer />
    </>
  );
}
