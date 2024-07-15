import Features from "@components/components/Features";
import Footer from "@components/components/Footer";
import Hero from "@components/components/Hero";
import Highlights from "@components/components/Highlights";
import HowItWorks from "@components/components/HowItWorks";
import Model from "@components/components/Model";
import Navbar from "@components/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar></Navbar> 
      <Hero></Hero>
      <Highlights></Highlights>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  );
}
