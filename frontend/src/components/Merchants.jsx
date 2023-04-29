import React from 'react'

const Merchants = () => {
  return (
    <div className='overflow-x-hidden'>
        <div className="w-10/12 mx-auto pb-10" id="why_us">
            <h3 className="text-center mb-10 text-4xl mt-24">Potential merchants</h3>

            <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
                <div className="w-full lg:w-1/5">
                    <img src="/siemens.png" alt="Why Us" />
                </div>

                <div className="w-full lg:w-1/5">
                    <img src="/ritar.png" alt="Why Us" />
                </div>

                <div className="w-full lg:w-1/5">
                    <img src="/ibedc.png" alt="Why Us" />
                </div>

                <div className="w-full lg:w-1/5">
                    <img src="/aedc.png" alt="Why Us" />
                </div>

                <div className="w-full lg:w-1/5">
                    <img src="/ekedc.png" alt="Why Us" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Merchants