import { useState } from "react";
import BuyForm from "./BuyForm";
import BuyReciept from "./BuyReciept";

export default function BuyContainer() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-12 flex justify-center">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <ul className="flex ">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-[#FFC107] text-white" : ""
                } flex px-20 py-2 text-gray-600 bg-white  shadow`}
              >
                Buy electricity
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-[#FFC107] text-white" : ""
                } flex px-20 py-2 text-gray-600 bg-white  shadow`}
              >
                Receipt
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {" "}
             <BuyForm/>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <BuyReciept/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
