"use client";
import Image from "next/image";
import Hero from "./Homepage/Hero";
import IntroToPexd from "./Homepage/IntroToPexd";
import Process from "./Homepage/Process";
import Section1 from "./Homepage/Section1";
import Section2 from "./Homepage/Section2";


export default function Home() {
  return (
    <div>

        <Hero/>
        <IntroToPexd/>
        <Process/>
        <Section1/>
        <Section2/>
        
      
      

    </div>
  );
}
