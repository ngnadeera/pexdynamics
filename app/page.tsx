"use client";
import Image from "next/image";
import Hero from "./Homepage/Hero";
import IntroToPexd from "./Homepage/IntroToPexd";
import Process from "./Homepage/Process";
import Section1 from "./Homepage/Section1";
import Section2 from "./Homepage/Section2";
import Footer from "./Components/Layout/Footer";
import Cta from "./Components/Layout/Cta";


export default function Home() {
  return (
    <div>

        <Hero/>
        <IntroToPexd/>
        <Process/>
        <Section1/>
        <Section2/>
        <Cta/>
        <Footer/>
        
      
      

    </div>
  );
}
