import Image from "next/image";
import React from "react";

function BuyHistory() {
    const tableHeaders = ['#', 'First', 'Last', 'Handle'];
    const tableData = [
      { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
      { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { id: 3, first: 'Larry', last: '', handle: '@twitter' },
      { id: 4, first: 'Whitney', last: 'Austin', handle: '@mdo' },
      { id: 5, first: 'Ted', last: 'Obama', handle: '@fat' },
    ];
  
    return (
      <div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center space-x-3">
            <Image src={'/t-icon.png'} alt="Transaction Icon" width={20} height={17} />
            <p className="text-[24px]">Transaction history</p>
          </div>
          <div className="flex justify-end items-center w-5/12 space-x-3">
            <input className="outline-[#858585] border border-[#858585] rounded-xl w-full h-full p-3" />
            <button className="bg-[#4CAF50] text-white text-[16px] py-3 px-12 rounded-xl">Search</button>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      {tableHeaders.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="text-sm font-medium text-[#003E02] px-6 py-4 text-left"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data) => (
                      <tr
                        key={data.id}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {data.id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.first}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.last}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.handle}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default BuyHistory;