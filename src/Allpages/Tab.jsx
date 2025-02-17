"use client"
import React, { useState } from "react"

const tabs = [
  { id: 1, label: "All Categories" },
  { id: 2, label: "Clinic Tour" },
  { id: 3, label: "Norwood Grade 5" },
  { id: 4, label: "Norwood Grade 6" },
  { id: 5, label: "Norwood Grade 7" },
]

const images = [
  "https://dermalife.org.in/assets/img/clinic/3.webp",
  "https://dermalife.org.in/assets/img/clinic/3.webp",
  "https://dermalife.org.in/assets/img/clinic/3.webp",
  "https://dermalife.org.in/assets/img/clinic/3.webp",
  "https://dermalife.org.in/assets/img/clinic/3.webp",
  // Add more image URLs here
]

const ImageGrid = ({ images }) => {
  return (
    <div className="w-[100%] grid grid-cols-3 gap-[10px]">
      {images.map((src, index) => (
        <ul key={index}>
          <li className="mb-[20px]">
            <div className="w-[90%] h-[200px] relative group overflow-hidden">
              <img
                src={src}
                className="w-[100%] scale-100 group-hover:scale-105 h-[100%]"
                alt={`Image ${index + 1}`}
              />
              <div className="w-[100%] h-[100%] bg-[black] opacity-50 origin-top scale-0 group-hover:scale-100 absolute top-[0px] duration-1000 left-0"></div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }

  return (
    <>
      <div className="max-w-[1100px] mx-auto" id="Gallery">
        <div className="flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`md:px-4 px-2 md:py-2 py-1 md:text-[15px] text-[6px] ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={activeTab === tab.id ? "block" : "hidden"}
            >
              <ImageGrid images={images} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
