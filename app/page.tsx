import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Features from "@/component/Features";
import Aboutushighlight from "@/component/Aboutushighlight";
import NeedandSection from "@/component/NeedandSatisfaction";
import Footer from "@/component/Footer";
import FloatingWhatsApp from "@/component/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />  
      <Aboutushighlight />
      <Features />
      <NeedandSection />
      <Footer />
      
      {/* Floating WhatsApp Icon */}
      <FloatingWhatsApp />
    </>
  );
}
