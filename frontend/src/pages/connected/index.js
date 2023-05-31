import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Merchants from "@/components/Merchants";
import Footer from "@/components/Footer";
import TeamContainer from "@/components/teamCard";
import FAQ from "@/components/faq";
import ConnectedNav from "./connectedNav";
import { Toaster, toast } from 'react-hot-toast';

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
      <Toaster />
    </>
  );
}
