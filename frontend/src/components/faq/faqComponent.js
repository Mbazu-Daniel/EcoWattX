import { useState } from "react";
import PropTypes from 'prop-types';
import Image from 'next/image';
import arrowDown from '/public/svg/arrowDown.svg';

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-white w-full flex flex-col border-b-[#E7E7E7] border-b">
      <button className="flex justify-between w-full align-center py-6" onClick={toggleOpen}>
        <span className="text-[#343434] font-medium text-left text-[1.2rem]">{question}</span>
        <Image src={arrowDown} alt='arrowDown' className={`my-auto transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <p className="md:text-[1rem] sm:text-[.8rem] py-2 pb-4 md:w-1/2 sm:w-full text-[#343434]">{answer}</p>
      </div>
    </div>
  );
}

FaqItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}