import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import solar from "../../public/solar.svg"

 const Hero = () => {
    return (
      <div className="hero-banner relative bg-cover bg-center overflow-x-hidden">
        <div className="pt-24 pb-20"  style={{ backgroundImage: "url('/bg.png')" }}>
          <div className="w-11/12 lg:w-11/12 mx-auto">
              <div className="flex gap-5 flex-col lg:flex-row">
                  <div className="w-full lg:w-3/3 space-y-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold font-inter">
                      <span className="text-white mb-1">Step into the Future of Energy with EcowattX</span>
                    </h2>

                    <p className="text-normal font-light lg:text-xl tracking-widest text-white">
                      Discover a new era of clean, affordable, and sustainable energy solutions, Experience <br /> 
                      cutting-edge technology and innovation in the world of energy, Take control of your <br /> 
                      energy consumption and help build a brighter future for all.
                    </p>

                    <div className="w-1/3 mx-auto">
                      <div className="flex-col lg:flex-row flex gap-6 justify-center text-center mt-20">
                          <a href="#!" target="_blank" rel="noreferrer" className="flex-1 bg-[transparent] border-2 border-[#EAEAEA] dark:border-[#99999966] text-black dark:text-white py-3 px-5 rounded transition-all">Staking</a>
                          
                          <a href="#!" target="_blank" rel="noreferrer" className="flex-1 bg-[#51A64C] text-white py-3 px-5 rounded transition-all">Get started</a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;