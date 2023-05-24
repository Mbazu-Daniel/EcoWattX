import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-[#F6FFF7]'>
        <div className="w-11/12 lg:w-10/12 mx-auto pt-20 pb-20" id="contact">
            <div className="flex sm:flex-col lg:flex-row gap-10">
                <div className="lg:mb-0 w-full lg:w-[30%] space-y-6">
                    <div className="flex gap-3">
                        <Image src="/logo.svg" width={70} height={70} alt="logo" />
                        <span className="text-xl font-bold tracking-wide font-space-grotesk uppercase text-gray-800 my-auto">
                            EcoWattX
                        </span>
                    </div>

                    <p className="text-[#999999] text-sm mb-3 w-[80%]">
                        Join us in promoting a sustainable energy future. Contact EcoWattX to learn more
                    </p>
                    <a href="mailto:support@help.com" className="text-gray-600 hover:text-[#4CAF50] text-sm">support@help.com</a>
                </div>

                <div className="mb-14 lg:mb-0 w-full lg:w-[60%]">
                    <div className="flex md:flex-row sm:flex-col gap-5">
                        <div className="w-1/2 space-y-8">
                            <h4 className="font-semibold text-black">COMPANY</h4>

                            <ul className="leading-8 text-sm lg:text-normal">
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="#!" target="_blank" rel="noreferrer">About</a></li>
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="#!" target="_blank" rel="noreferrer">Features</a></li>
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="#!" target="_blank" rel="noreferrer">Work</a></li>
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="#!" target="_blank" rel="noreferrer">Career</a></li>
                            </ul>
                        </div>

                        <div className="w-1/2 space-y-8">
                            <h4 className="font-semibold text-black">HELP</h4>

                            <ul className="leading-8 text-sm lg:text-normal">
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="#faq">Customer Support</a></li>
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="!#">Delivery Details</a></li>
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="!#">Terms & Conditions</a></li>
                                <li className="text-gray-600 hover:text-[#4CAF50]"><a href="!#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="font-semibold text-black">SUBSCRIBE</h4>

                            <form className="flex flex-col gap-3">
                                <input type='email' placeholder='Enter your email' className='py-3 pl-4 font-space-grotesk outline-[#4CAF50] border rounded-lg border-[#E4E4E7]'/>
                                <button className='py-3 text-white cursor-pointer font-space-grotesk bg-[#4CAF50] border text-sm rounded-lg border-[#E4E4E7]'>Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer