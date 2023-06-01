import React, { useState, useContext } from 'react';
import { toast } from 'react-hot-toast';
import CustomButton from './common/button.js';
import UAuth from '@uauth/js'
import Link from 'next/link';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import { AppContext } from './context/AppContext';
import Profile from './common/profile.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { collectedData, setCollectedData } = useContext(AppContext);

  const uauth = new UAuth({
    clientID: "a296cd8b-f405-4108-8fb0-45267f5f7e8d",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet email profile:optional social:optional"
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    setLoading(true);
    uauth
      .loginWithPopup()
      .then((authorization) => {
        const walletAddress = authorization['idToken']['wallet_address'];
        const profilePicture = authorization['idToken']['picture'];
        setCollectedData({
          ...authorization,
          isAuthenticated: true,
          walletAddress: walletAddress,
          profilePicture: profilePicture,
        });
      })
      .catch((error) => {
        console.error('login error:', error);
        toast.error('Authentication not successful.');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <nav className="bg-white">
      <div className="w-full flex items-center justify-center py-4 mt-2">
        <div className="flex lg:w-[90%] md:w-[95%] sm:w-[90%] justify-between font-['Space_Grotesk']">
          <div className="flex">
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="EcoWattX"
                title="EcoWattX"
                className="inline-flex items-center"
              >
                <Image
                  src={logo}
                  alt="EcoWattX Logo"
                  width={56}
                  height={28}
                  className="w-[56px] h-[28px] object-contain"
                />
                <span className="ml-2 text-xl tracking-wide text-black">
                  EcoWattX
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:justify-between">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline lg:space-x-8 md:space-x-6">
                <Link
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-[#000000] md:text-sm lg:text-[1rem]"
                >
                  Product
                </Link>
                <Link
                  href="/"
                  aria-label="Features"
                  title="Features"
                  className="font-medium tracking-wide text-[#000000] md:text-sm lg:text-[1rem]"
                >
                  Features
                </Link>
                <Link
                  href="/"
                  aria-label="Pricing"
                  title="Pricing"
                  className="font-medium tracking-wide text-[#000000] md:text-sm lg:text-[1rem]"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-[#000000] md:text-sm lg:text-[1rem]"
                >
                  About us
                </Link>
              </div>
            </div>
            <div className="hidden md:block ml-8">
              {collectedData && collectedData.isAuthenticated ? (
                <Profile collectedData={collectedData} />
              ) : (
                <CustomButton
                  padding="0rem 1.7rem"
                  backgroundColor="#4CAF50"
                  textColor="#FFF"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? 'Authenticating...' : 'Connect wallet'}
                </CustomButton>
              )}
            </div>
            <div className="md:hidden grid place-items-center">
              <button
                onClick={handleMenuToggle}
                type="button"
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-8 w-8 text-[#4CAF50]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#4CAF50] absolute top-0 left-0 right-0 w-full z-50 font-['Space_Grotesk'] pb-12" id="mobile-menu">
          <div className="flex justify-end mr-4 mt-6">
            <button
              onClick={handleCloseMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-5 pt-2 pb-3 space-y-4 sm:px-3 flex flex-col">
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="text-white  text-base font-medium"
            >
              Product
            </Link>
            <Link
              href="/"
              aria-label="Features"
              title="Features"
              className="text-white text-base font-medium"
            >
              Features
            </Link>
            <Link
              href="/"
              aria-label="Pricing"
              title="Pricing"
              className="text-white text-base font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/"
              aria-label="About us"
              title="About us"
              className="text-white  text-base font-medium"
            >
              About us
            </Link>
          </div>
          <div className="my-6">
            <div className="flex items-center px-3">
            {collectedData && collectedData.isAuthenticated ? (
                <Profile collectedData={collectedData} />
              ) : (
                <CustomButton
                  padding="0rem 1.7rem"
                  backgroundColor="#FFF"
                  textColor="#4CAF50"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? 'Authenticating...' : 'Connect wallet'}
                </CustomButton>
              )}
            </div>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
