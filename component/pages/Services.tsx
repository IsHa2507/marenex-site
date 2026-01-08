"use client";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";
import { useState,useEffect } from "react";
import { useSearchParams } from "next/navigation"; 

const services = [
  {
    slug: "repair-programming",
    title: "Repair & Programming",
    desc: "",
   para: (
  <>
    <p className="mb-3">
      We specialize in providing top-notch repairs, commissioning, and
      maintenance for marine electronic systems. Our expert Service Engineers are skilled in troubleshooting and
      fixing a wide range of equipment.
    </p>

    <p className="mb-2">
      <strong>Navigation Equipment:</strong> RADAR, GPS, AIS, ECDIS, GYRO Compass,
      NAVTEX, Speed Log, Echo Sounder, VDR, and BNWAS.
    </p>

    <p className="mb-2">
      <strong>Communication Equipment:</strong> SATCOM, GMDSS, DSC, Intercom
      Systems, LRIT, UHF Radio, SSB Radio, Antennas, Telephone Exchange Systems,
      and Portable Radios.
    </p>

    <p className="mb-2">
      <strong>Reprogrammable Equipment:</strong> GMDSS equipment including VDR,
      EPIRB, SART, VHF, MF-HF, AIS, and SSAS.
    </p>

    <p>
      Count on us for all your marine electronics needs, delivering reliable and
      efficient service to keep your vessels operating at their best.
    </p>
  </>
),

    img: "/assets/2.svg",
  },
  {
    slug: "gmdss-radio-survey",
    title: "GMDSS Radio Survey",
    desc: "",
   para: (
  <>
    <p className="mb-3">
      The Global Maritime Distress and Safety System (GMDSS) is a set of safety procedures, equipment, and communication protocols developed by the International Maritime Organization (IMO) and mandated by the International Convention for the Safety of Life at Sea (SOLAS). Here are the key requirements:
    </p>

    <p className="mb-2">
      <strong>Radio Equipment:</strong> All SOLAS ships must be equipped with GMDSS-compliant radio equipment, including VHF, MF/HF radios, EPIRBs, SARTs, and AIS.
    </p>

    <p className="mb-2">
      <strong>Certification and Surveys:</strong> Ships must undergo initial and annual GMDSS radio surveys to ensure compliance with SOLAS regulations. These surveys must be conducted by qualified radio surveyors.
    </p>

    <p className="mb-2">
      <strong>Performance Standards:</strong> The radio equipment must meet IMO performance standards and ITU Radio Regulations.
    </p>
     <p className="mb-2">
      <strong>Maintenance and Inspections: </strong>  Regular maintenance and inspections of radio equipment are required to ensure it remains operational and compliant with SOLAS standards.
    </p>

    <p>
     The requirements for GMDSS radio surveys are outlined in Chapter IV of the International Convention for the Safety of Life at Sea (SOLAS), which specifically addresses radio communications.
    </p>
    <p>Our company is authorized by international classification societies to carry out GMDSS radio surveys according to the latest IMO regulations. We are certified by all major classification societies and are one of the most certified companies in the world. Our GMDSS services are performed by highly qualified and certified technicians, ensuring the highest standards of safety and compliance.</p>
  </>
),

    img: "/assets/4.svg",
  },
  {
    slug: "vdr-annual-survey",
    title: "VDR Annual Survey",
    desc: "",
   para: (
  <>
    <p className="mb-4">
      To ensure compliance with <strong>SOLAS regulation V/20</strong>, it is
      essential to conduct an <strong>Annual Performance Test (APT)</strong> for{" "}
      <strong>Voyage Data Recorders (VDR)</strong> and{" "}
      <strong>Simplified Voyage Data Recorders (S-VDR)</strong>. This test
      verifies the functionality and accuracy of the VDR system, including all
      associated sensors.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Key Points of the Annual Performance Test:
    </p>

    <p className="mb-2">
      <strong>Authorised Testing:</strong> The test must be carried out by the
      manufacturer or an individual authorized by the manufacturer to ensure
      the highest standards of accuracy and reliability.
    </p>

    <p className="mb-2">
      <strong>Comprehensive Check:</strong> The APT includes a thorough
      inspection of the equipment’s overall condition, verification of the
      power supply alarm, and confirmation of the acoustic beacon’s
      functionality.
    </p>

    <p className="mb-2">
      <strong>Data Verification:</strong> The test ensures that all recorded
      data is accurate and can be successfully recovered. It also checks that
      the equipment remains operational even if external power is lost.
    </p>

    <p>
      <strong>Certification:</strong> Upon successful completion of the test, a
      certificate of compliance is issued. This certificate must be kept on
      board the vessel as proof of compliance.
    </p>
  </>
),

    img: "/assets/1.svg",
  },
  {
    slug: "magnetic-compass-calibration",
    title: "Magnetic Compass Calibration",
    desc: "",
   para: (
  <>
    <p className="mb-4">
      <strong>Magnetic compass calibration</strong> is vital for ensuring the accuracy of a ship's navigational equipment. Over time, compasses can develop errors due to the ship's magnetic field and external influences. Regular calibration, as required by <strong>SOLAS Chapter V</strong>, is essential to maintain compass accuracy.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Importance of Calibration:
    </p>

    <p className="mb-2">
      <strong>Safety at Sea:</strong> Provides a reliable backup when electronic navigation systems fail.
    </p>

    <p className="mb-2">
      <strong>Regulatory Compliance:</strong> Meets international regulations including <strong>SOLAS V/19.2.1</strong>, <strong>IMO Resolution A.382(X)</strong>, and <strong>ISO 25862:2019</strong>.
    </p>

    <p className="mb-2">
      <strong>Prevents Navigational Errors:</strong> Corrects deviations that could cause significant navigation issues.
    </p>

    <p className="mb-2">
      <strong>Operational Efficiency:</strong> Ensures accurate readings, reducing unnecessary course corrections and delays.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      When to Calibrate:
    </p>

    <p className="mb-2">
      After structural modifications or new equipment installations.
    </p>

    <p className="mb-2">
      Following prolonged exposure to external magnetic fields.
    </p>

    <p className="mb-2">
      During routine maintenance checks.
    </p>

    <p>
      Routine maintenance ensures your vessel’s <strong>Standard Magnetic Compass</strong> remains reliable in any situation.
    </p>
  </>
),

    img: "/assets/6.svg",
  },
  {
    slug: "calibration-services",
    title: "Calibration Services",
    desc: "",
   para: (
  <>
    <p className="mb-4">
      We specialize in providing <strong>expert shipboard calibration services</strong>. Our team of skilled calibration engineers is equipped with advanced portable instrument standards to ensure precise and reliable calibration of your vessel’s critical systems. Our comprehensive range of services includes:
    </p>

    <p className="mb-2">
      <strong>Tank Level Gauges:</strong> Precise calibration for accurate measurement of liquid levels in tanks.
    </p>

    <p className="mb-2">
      <strong>15 ppm Bilge Alarm:</strong> Ensuring compliance with environmental regulations by monitoring bilge water discharge levels.
    </p>

    <p className="mb-2">
      <strong>Oil Discharge Monitoring System (ODME):</strong> Adhering to MARPOL regulations by accurately monitoring oil discharge.
    </p>

    <p className="mb-2">
      <strong>Oily Water Separator (OWS):</strong> Efficient separation of oil and water in bilge water to prevent marine pollution.
    </p>

    <p className="mb-2">
      <strong>Cargo Tank Monitoring System:</strong> Maintaining the integrity and safety of cargo tanks through precise calibration.
    </p>

    <p className="mb-2">
      <strong>Gas Sampling System:</strong> Detection and analysis of gas samples to ensure safety and regulatory compliance.
    </p>

    <p>
      Our calibration engineers are committed to delivering <strong>exceptional service</strong> to enhance the safety, efficiency, and compliance of your shipboard operations.
    </p>
  </>
),

    img: "/assets/3.svg",
  },
  {
    slug: "marine-services",
    title: "Marine Services",
    desc: "",
    para: (
  <>
    <p className="mb-4">
      We specialize in supplying and servicing a full spectrum of <strong>IMO-compliant equipment</strong> for cargo ships, ensuring operational safety, environmental protection, and regulatory adherence across global waters:
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Medical Equipment
    </p>
    <p className="mb-2">
      WHO-recommended medical kits per the International Medical Guide for Ships. Compliance with <strong>SOLAS</strong> and <strong>MLC</strong> standards for onboard treatment and emergency care.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Signal & Safety Lights
    </p>
    <p className="mb-2">
      Navigation and distress lighting systems per <strong>COLREGs</strong> and <strong>IALA</strong> standards. Type-approved LED and halogen fixtures for all vessel classes.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Ship Security Systems
    </p>
    <p className="mb-2">
      <strong>ISPS Code</strong>-compliant surveillance, access control, and alert systems. Cybersecurity integration per <strong>IMO MSC.428(98)</strong> and <strong>ISM Code</strong>.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Oil Pollution Control
    </p>
    <p className="mb-2">
      <strong>SOPEP</strong> & <strong>SMPEP</strong> kits per <strong>MARPOL Annex I & II</strong>. Spill containment, dispersants, and absorbents for emergency response.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Measuring Equipment
    </p>
    <p className="mb-2">
      Radar and float-based tank gauging systems. Certified UTI tapes and sensors for cargo, ballast, and fuel monitoring.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Life-Saving Appliances
    </p>
    <p className="mb-2">
      Lifeboats, liferafts, immersion suits, and distress signals per <strong>LSA Code</strong>. SOLAS-approved evacuation systems and PPE.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Fire Fighting Equipment
    </p>
    <p className="mb-2">
      Fixed and portable systems per <strong>SOLAS Chapter II-2</strong> and <strong>FSS Code</strong>. CO₂, foam, and water mist systems for cargo and engine spaces.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Chemical Protection Gear
    </p>
    <p className="mb-2">
      IBC Code-compliant suits, gloves, goggles, and footwear. Locker-stored gear for hazardous cargo handling and spill response.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Automation Systems
    </p>
    <p className="mb-2">
      Integrated Alarm & Monitoring Systems (IAS) with remote diagnostics. IMO-compliant automation for propulsion, cargo, and safety systems.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Occupational Safety
    </p>
    <p className="mb-2">
      Confined space entry kits, gas detectors, and fall protection. Compliance with <strong>ISM Code</strong> and <strong>ISO 45001</strong> standards.
    </p>

    <p className="mb-2 font-semibold text-gray-700">
      Communication Equipment
    </p>
    <p>
      GMDSS, VHF/DSC, EPIRBs, and AIS systems per <strong>SOLAS Chapter IV</strong>. LRIT, SSAS, and onboard public address systems for global coverage.
    </p>
  </>
),

    img: "/assets/5.svg",
  },
];



export default function Services() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type"); // ✅ get ?type=slug

  // find index based on URL slug
  const defaultIndex =
    typeParam && services.findIndex((s) => s.slug === typeParam) !== -1
      ? services.findIndex((s) => s.slug === typeParam)
      : 0;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // update activeIndex if URL changes (so it works on page load or refresh)
  useEffect(() => {
    if (typeParam) {
      const idx = services.findIndex((s) => s.slug === typeParam);
      if (idx !== -1) setActiveIndex(idx);
    }
  }, [typeParam]);

  return (
    <>
      <Navbar variant="light" />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mt-20 mx-auto px-4">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Key Services We Provide
            </h2>
            <p className="mt-4 text-gray-600">
              A complete range of certified marine and technical services
              designed to meet international safety and compliance standards.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-2 rounded text-sm font-medium transition ${
                  activeIndex === index
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Highlight Card */}
          <div className="mt-16 rounded border border-gray-200 p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={services[activeIndex].img}
                alt={services[activeIndex].title}
                width={360}
                height={360}
                className="rounded"
              />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium mb-4">
                #Our Services
              </span>

              <h3 className="text-3xl font-bold text-gray-900">
                {services[activeIndex].title}
              </h3>

              <p className="mt-4 text-gray-600">{services[activeIndex].desc}</p>

              <div className="mt-3 text-gray-500 text-sm">
                {services[activeIndex].para}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded border border-gray-200 cursor-pointer hover:border-blue-500 transition"
                onClick={() => setActiveIndex(index)}
              >
                <Image src={service.img} alt={service.title} width={60} height={60} />
                <h4 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h4>
                <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}