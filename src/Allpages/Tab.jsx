"use client";
import React, { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between">
          <button
            className={`px-4 py-2 ${
              activeTab === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => handleTabClick(1)}
          >
            All Categories
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => handleTabClick(2)}
          >
            Clinic Tour
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => handleTabClick(3)}
          >
            Norwood Grade 5
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 4
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => handleTabClick(4)}
          >
            Norwood Grade 6
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 5
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded`}
            onClick={() => handleTabClick(5)}
          >
            Norwood Grade 7
          </button>
        </div>
        <div className="mt-4">
          {/* Content for each tab */}
          {activeTab === 1 && (
            <ul className="w-[100%] flex flex-col	gap-[10px]  ">
              <li className="	 ">
                <div className=" w-[300px] h-96   border border-[red] relative group overflow-hidden">
                  <img
                    src="https://dermalife.org.in/assets/img/clinic/3.webp"
                    className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                  />
                  <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                </div>
              </li>

              <li className="	  ">
                <div className="w-[300px] h-96  border border-[red] relative group overflow-hidden">
                  <img
                    src="https://dermalife.org.in/assets/img/clinic/3.webp"
                    className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                  />
                  <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                </div>
              </li>
              <li className="	">
                <div className="w-[300px] h-96 border border-[red] relative group overflow-hidden">
                  <img
                    src="https://dermalife.org.in/assets/img/clinic/3.webp"
                    className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                  />
                  <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                </div>
              </li>
              <li className="	 ">
                <div className="w-[300px] h-64 border border-[red] relative group overflow-hidden">
                  <img
                    src="https://dermalife.org.in/assets/img/clinic/3.webp"
                    className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                  />
                  <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                </div>
              </li>
              <li className="	">
                <div className="w-[300px] h-96 border border-[red] relative group overflow-hidden">
                  <img
                    src="https://dermalife.org.in/assets/img/clinic/3.webp"
                    className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                  />
                  <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                </div>
              </li>
            </ul>
          )}
          {activeTab === 2 && <div>Tab 2 Content</div>}
          {activeTab === 3 && <div>Tab 3 Content</div>}
          {activeTab === 4 && <div>Tab 4 Content</div>}
          {activeTab === 5 && <div>Tab 5 Content</div>}
        </div>
      </div>
    </>
  );
}
