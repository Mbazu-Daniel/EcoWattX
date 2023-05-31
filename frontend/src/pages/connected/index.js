import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Merchants from "@/components/Merchants";
import Footer from "@/components/Footer";
import TeamContainer from "@/components/teamCard";
import FAQ from "@/components/faq";
import ConnectedNav from "./connectedNav";

export default function Home() {
  return (
    <>
      <ConnectedNav />
      <Hero />
      <About />
      <WhyUs />
      <TeamContainer />
      <Merchants />
      <FAQ />
      <Footer />
    </>
  );
}
