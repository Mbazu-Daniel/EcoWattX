import React from 'react';

const BuyForm = () => {
  return (
    <div className='border-none'>
      <div className="mb-2">
        <label htmlFor="merchant" className="block mb-2 text-sm font-medium  text-[#333333] ">
        Who do you want to buy your energy from?
        </label>
        <select id="merchant" className="block w-[400px] p-2  border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 text-[#333333]  dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="option-1">EEDC</option>
          <option value="option-2">AEDC</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="dropdown-2" className="block mb-2 text-sm font-medium  text-[#333333] ">
        What type of energy do you want to buy?
        </label>
        <select id="dropdown-2" className="block w-full p-2  border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 text-[#333333]  dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="option-1">Renewable </option>
          <option value="option-2">Non-Renewable</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="large-input" className="block mb-2 text-sm font-medium  text-[#333333] placeholder-[#333333]" >
        How much worth of energy do you want to to purchase?
        </label>
        <input
          type="text"
          id="large-input"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 text-[#333333]  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter amount here"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium  text-red placeholder-[#333333] " >
        What is your meter number?
        </label>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 text-[#333333]  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter meter number"
        />
      </div>

      <div className="mb-2">
        <button
          className="bg-[#4CAF50] border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        > Pay </button>
      </div>
    
    </div>
  );
};

export default BuyForm;
