import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Features from "@/component/Features";
import Aboutushighlight from "@/component/Aboutushighlight";
import NeedandSection from "@/component/NeedandSatisfaction";
import ServicesSlider from "@/component/ServicesSlider";
import Producthighlights from "@/component/Producthighlights";
import LatestInsights from "@/component/LatestInsights";
import BlogHighlight from "@/component/BlogHighlight";
import Footer from "@/component/Footer";
import FloatingWhatsApp from "@/component/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Features /> 
      <Aboutushighlight /> 
      <ServicesSlider/>
      <NeedandSection />
      <Producthighlights/>
      <LatestInsights />
      {/* <BlogHighlight/> */}
      <Footer />
      
      {/* Floating WhatsApp Icon */}
      <FloatingWhatsApp />

      
    </>
  );
}
