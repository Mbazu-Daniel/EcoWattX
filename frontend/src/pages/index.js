import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Merchants from "@/components/Merchants";
import Footer from "@/components/Footer";
import TeamContainer from "@/components/teamCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <WhyUs />
      <TeamContainer />
      <Merchants />
      <Footer />
    </>
  );
}
