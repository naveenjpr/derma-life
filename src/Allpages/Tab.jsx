"use client";
import React, { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="max-w-[1100px] mx-auto" id="Gallery">
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
            <div className="w-[100%] grid grid-cols-3	 gap-[10px] ">
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {activeTab === 2 && (
            <div className="w-[100%] grid grid-cols-3	 gap-[10px] ">
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {activeTab === 3 && (
            <div className="w-[100%] grid grid-cols-3	 gap-[10px] ">
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {activeTab === 4 && (
            <div className="w-[100%] grid grid-cols-3	 gap-[10px] ">
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          {activeTab === 5 && (
            <div className="w-[100%] grid grid-cols-3	 gap-[10px] ">
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
              <ul className="">
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[400px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
                <li className="	mb-[20px] ">
                  <div className=" w-[90%] h-[200px]    relative group overflow-hidden">
                    <img
                      src="https://dermalife.org.in/assets/img/clinic/3.webp"
                      className="w-[100%] scale-100 group-hover:scale-105  h-[100%]"
                    />
                    <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
