import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F6FFF7]'>
        <div className="w-11/12 lg:w-10/12 mx-auto pt-20 pb-20" id="contact">
            <div className="flex flex-col sm:flex-row gap-10">
            <div className="mb-14 lg:mb-0 w-full lg:w-2/5 space-y-4">
                <div className="flex gap-5">
                    <img src="/logo.svg" alt="" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                        EcoWattX
                    </span>
                </div>

                <p className="leading-8 text-[#999999]">
                    Join us in promoting a sustainable energy future. Contact EcowattX to learn more
                </p>

                <div className="flex gap-6">
                    <a href="!#" className="w-8 h-8 border-2 border-[#5E5E5E] dark:text-white flex justify-center items-center">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>

                    <a href="#!" target="_blank" rel="noreferrer" className="w-8 h-8 border-2 border-[#5E5E5E] dark:text-white flex justify-center items-center">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>

                    <a href="#!" target="_blank" rel="noreferrer" className="w-8 h-8 border-2 border-[#5E5E5E] dark:text-white flex justify-center items-center">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>
            </div>

            <div className="mb-14 lg:mb-0 w-full lg:w-2/5">
                <div className="flex gap-5">
                    <div className="w-1/2 space-y-8">
                    <h4 className="font-semibold text-black">Company</h4>

                    <ul className="leading-8 text-sm lg:text-normal">
                        <li className="text-gray-600 dark:text-[#999999]"><a href="#!" target="_blank" rel="noreferrer">About</a></li>
                        <li className="text-gray-600 dark:text-[#999999]">Features</li>
                        <li className="text-gray-600 dark:text-[#999999]">Work</li>
                    </ul>
                    </div>

                    <div className="w-1/2 space-y-8">
                    <h4 className="font-semibold text-black">SUPPORT</h4>

                    <ul className="leading-8 text-sm lg:text-normal">
                        <li className="text-gray-600 dark:text-[#999999]"><a href="#faq">FAQ</a></li>
                        <li className="text-gray-600 dark:text-[#999999]"><a href="!#">Privacy and Policy</a></li>
                        <li className="text-gray-600 dark:text-[#999999]"><a href="!#">Terms & Conditions</a></li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/5">
                <div className="flex">
                <div className="space-y-8">
                    <h4 className="font-semibold text-black">CONTACT US</h4>

                    <ul className="leading-8 text-sm lg:text-normal">
                    <li className="text-gray-600 dark:text-[#999999]"><a href="mailto:support@help.com">support@help.com</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer