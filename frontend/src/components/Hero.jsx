'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      backgroundImage: "/Images/bg-1.png",
      title: "Step into the Future of Energy with EcoWattX",
      description: "Discover a new era of clean, affordable, and sustainable energy solutions, Experience cutting-edge technology and innovation in the world of energy, Take control of your energy consumption and help build a brighter future for all."
    },
    {
      backgroundImage: "/Images/bg-2.png",
      title: "Trade Energy and Save the Planet with EcowattX",
      description: "Reduce your carbon footprint and save money by trading energy on our platform. Connect with other energy producers and consumers to maximize savings and efficiency. Make a positive impact on the environment and support global efforts to combat climate change"
    },
    {
      backgroundImage: "/Images/bg-3.png",
      title: "Join the EcowattX Community",
      description: "Become part of a global network of individuals and organizations dedicated to sustainability, Collaborate with others to create innovative solutions and drive positive change, Join forces with EcowattX to shape a more sustainable and equitable future for all."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-banner relative grid place-items-center md:h-[500px] sm:h-[600px] bg-cover mt-3 bg-center overflow-x-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`lg:w-[85%] md:w-[95%] h-full grid place-items-center ${index === activeSlide ? '' : 'hidden'} bg-no-repeat bg-center bg-cover`}
          style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
        >
          <div className="w-11/12 lg:w-11/12 mx-auto">
            <div className="flex gap-5 flex-col lg:flex-row items-center">
              <div className="w-full grid place-items-center text-center">
                <h1 className="md:text-3xl lg:text-4xl sm:text-3xl font-bold font-inter">
                  <span className="text-white mb-1">{slide.title}</span>
                </h1>

                <p className="text-normal text-center font-light md:text-xl sm:text-[.8rem] w-[90%] tracking-widest text-white mt-6">
                  {slide.description}
                </p>

                <div className="md:w-1/3 sm:w-1/2 mx-auto">
                  <div className="flex-col lg:flex-row flex md:gap-6 sm:gap-3 justify-center text-center mt-12">
                    <a
                      href="#!"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-[transparent] font-space-grotesk border-2 border-[#EAEAEA] dark:border-[#99999966] text-white dark:text-white py-3 px-5 rounded transition-all"
                    >
                      Staking
                    </a>

                    <a
                      href="#!"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-[#51A64C] text-white py-3 font-space-grotesk px-5 rounded transition-all"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-2">
          {slides.map((_, index) => (
            <li
              key={index}
              className={`sm:w-2 sm:h-2 md:w-2 md:h-2 rounded-full ${
                index === activeSlide ? 'bg-[#FFC107]' : 'bg-[#FFC1075E]'
              }`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
