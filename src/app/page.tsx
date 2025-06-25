import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import MarketInsight from "@/components/Home/MarketInsight";
import Testimonial from "@/components/Home/Testimonial";
import WhyChoose from "@/components/Home/WhyChoose";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
     <Navbar/>
    
       <Hero/>
     
      
        <WhyChoose/>

        <Testimonial/>
        <MarketInsight/>

        <Footer/>

    
    </div>
  );
}
