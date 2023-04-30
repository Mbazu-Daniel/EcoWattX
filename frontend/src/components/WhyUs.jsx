import React from 'react';

const WhyUs = () => {
  return (
    <div className="overflow-x-hidden">
        <div className="w-10/12 mx-auto pt-10" id="why_us">
            <h3 className="text-center mb-10 text-4xl mt-24">Why us?</h3>
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
                <div className="w-full lg:w-3/5 space-y-6">
                    <p className="tracking-wide font-light text-lg leading-8 dark:text-[#999999]">
                        EcoWattX provides a secure and transparent energy trading platform using blockchain technology, promotes decentralized energy generation and sharing, cuts energy costs for low-income households and incentivizes sustainable behavior through a token reward program, empowers households to adopt renewable energy sources and sell excess energy back to the grid, and ultimately creates a more equitable and sustainable energy future for all.

                        <br />
                        <br />
                    </p>
                </div>

                <div className="w-full lg:w-2/5">
                    <img src="/why_us.png" alt="Why Us" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs;