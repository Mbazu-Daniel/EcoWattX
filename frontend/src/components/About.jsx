import React from 'react';

const About = () => {
  return (
    <div>
        <h3 className="text-center mb-10 text-4xl mt-24">About us</h3>

        <div className="bg-[#F5FFF6]">
            <div className="w-10/12 mx-auto pt-20 pb-32" id="about">
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
                    <div className="w-full lg:w-3/5 space-y-6">
                        <h3 className="text-3xl font-semibold tracking-wider text-black">Decentralized Energy Generation and Sharing</h3>
                        <p className="tracking-wide font-light text-lg leading-8 dark:text-[#999999]">
                            EcowattX is a blockchain-powered platform that allows households to generate energy from renewable sources and sell their excess energy back to the grid. It promotes decentralized energy sharing, cuts energy costs for low-income households, and encourages sustainable practices.

                            <br />
                            <br />
                        </p>
                    </div>

                    <div className="w-full lg:w-2/5">
                        <img src="/undraw_wind_turbine_x-2-k4.png" alt="Decentralized Energy" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
                    <div className="w-full lg:w-2/5">
                        <img src="/mask_group.png" alt="Token Reward" />
                    </div>

                    <div className="w-full lg:w-3/5 space-y-6">
                        <h3 className="text-3xl font-semibold tracking-wider text-black">Token Reward Program for Sustainable Behavior</h3>
                        <p className="tracking-wide font-light text-lg leading-8 dark:text-[#999999]">
                            The EcowattX platform incentivizes sustainable behavior by offering token rewards to households that adopt renewable energy sources or use less energy. It aims to encourage energy efficiency, promote community resilience, and foster the adoption of renewable energy sources.

                            <br />
                            <br />
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-3/5 space-y-6">
                        <h3 className="text-3xl font-semibold tracking-wider text-black">Reducing Energy Costs for Low-Income Households</h3>
                        <p className="tracking-wide font-light text-lg leading-8 dark:text-[#999999]">
                            We seek to promote sustainability, reduce energy costs for low-income households, and empower them to adopt renewable energy sources. Its goal is to create a more equitable and sustainable energy future for all.

                            <br />
                            <br />
                        </p>
                    </div>

                    <div className="w-full lg:w-2/5">
                        <img src="/undraw_nakamoto_-2-iv6.png" alt="Reducing Energy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;