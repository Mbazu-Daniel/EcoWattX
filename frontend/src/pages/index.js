import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <WhyUs />
    </>
  );
}
