// import Features from "@components/components/Features";
import Footer from "@components/components/Footer";
// import Hero from "@components/components/Hero";
// import Highlights from "@components/components/Highlights";
// import HowItWorks from "@components/components/HowItWorks";
// import Model from "@components/components/Model";
import Navbar from "@components/components/Navbar";
import dynamic from 'next/dynamic';


const Highlights = dynamic(() => import('../components/Highlights'), {
  ssr: false
});
const Hero = dynamic(() => import('../components/Hero'), {
  ssr: false
});

const Model = dynamic(() => import('../components/Model'), {
  ssr: false
});

const Features = dynamic(() => import('../components/Features'), {
  ssr: false
});

const HowItWorks = dynamic(() => import('../components/HowItWorks'), {
  ssr: false
});


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
