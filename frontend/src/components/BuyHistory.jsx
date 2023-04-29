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
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    {tableHeaders.map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
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
    );
  }

  export default BuyHistory;