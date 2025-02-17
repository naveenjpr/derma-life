"use client"
import React, { useEffect, useState } from "react"

export default function Service() {
  const [isShowMore, setIsShowMore] = useState("")

  const toggleReadMoreLess = (a) => {
    if (isShowMore == "") {
      setIsShowMore(a)
    } else {
      setIsShowMore("")
    }

    console.log(a)
  }

  const services = [
    {
      id: 1,
      title: "Mesotherapy for Hair Loss",
      description:
        "FUE hair transplant is a leading and most recent hair restoration procedure that involves the extraction of individual hair follicles from the donor site followed by transplantation into the recipient site with thin hairs or bald patches. FUE, or Follicular Unit Extraction, is a modern approach to hair transplant and is one of the two main methods of replacing the bald area with healthy hair...",
      moreDescription: "The process is done by implementing healthy...",
      img: "https://dermalife.org.in/assets/img/image%20(1).png",
    },
    {
      id: 2,
      title: "Mesotherapy for Hair Loss",
      description:
        "FUE hair transplant is a leading and most recent hair restoration procedure that involves the extraction of individual hair follicles from the donor site followed by transplantation into the recipient site with thin hairs or bald patches. FUE, or Follicular Unit Extraction, is a modern approach to hair transplant and is one of the two main methods of replacing the bald area with healthy hair...",
      moreDescription: "The process is done by implementing healthy...",
      img: "https://dermalife.org.in/assets/img/image%20(1).png",
    },
    {
      id: 3,
      title: "Mesotherapy for Hair Loss",
      description:
        "FUE hair transplant is a leading and most recent hair restoration procedure that involves the extraction of individual hair follicles from the donor site followed by transplantation into the recipient site with thin hairs or bald patches. FUE, or Follicular Unit Extraction, is a modern approach to hair transplant and is one of the two main methods of replacing the bald area with healthy hair...",
      moreDescription: "The process is done by implementing healthy...",
      img: "https://dermalife.org.in/assets/img/image%20(1).png",
    },
    {
      id: 4,
      title: "Mesotherapy for Hair Loss",
      description:
        "FUE hair transplant is a leading and most recent hair restoration procedure that involves the extraction of individual hair follicles from the donor site followed by transplantation into the recipient site with thin hairs or bald patches. FUE, or Follicular Unit Extraction, is a modern approach to hair transplant and is one of the two main methods of replacing the bald area with healthy hair...",
      moreDescription: "The process is done by implementing healthy...",
      img: "https://dermalife.org.in/assets/img/image%20(1).png",
    },
    // Add more services here
  ]

  return (
    <>
      <section className="w-full" id="service">
        <h1 className="text-center font-bold font-[Montserrat] text-[30px] md:text-[35px]">
          Services
        </h1>
        <div className="max-w-[1170px] mx-auto">
          <div className="w-[200px] mx-auto flex justify-center items-center mb-[30px] md:mb-[50px]">
            <div className="h-[2px] w-[70px] md:w-[90px] bg-green-400"></div>
            <figure className="mx-[5px]">
              <img
                src="https://dermalife.org.in/assets/img/icons/4.png"
                className="animate-roted-hand w-[25px] md:w-auto"
              />
            </figure>
            <div className="h-[2px] w-[70px] md:w-[90px] bg-green-400"></div>
          </div>
        </div>

        {/* Service Items */}
        <div className="max-w-[1170px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[30px]">
          {services.map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={v.img}
                className="bg-[#2f6c96] rounded-full text-center w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
              />
              <h2 className="text-[#2f6c96] font-bold text-[22px] md:text-[30px] text-center">
                {v.title}
              </h2>
              <hr className="h-[1px] w-full border border-[black] my-[5px]" />
              {/* Read More Logic */}
              <div className="card w-full flex flex-col bg-gray-100 rounded-md p-4">
                <p className="text-sm md:text-base leading-[25px] md:leading-[35px] text-justify text-[#666] p-5 font-normal">
                  {v.description}
                </p>
                {isShowMore == `${i + 1}` && (
                  <p className="text-sm md:text-base leading-[25px] md:leading-[35px] text-justify text-[#666] p-5 font-normal">
                    {v.moreDescription}
                  </p>
                )}
                <button
                  className="self-start text-[#2f6c96] text-[18px] md:text-[25px] font-semibold border-0 px-4 py-2 mt-2 cursor-pointer transition duration-500 ease-in-out"
                  onClick={() => toggleReadMoreLess(`${i + 1}`)}
                >
                  {isShowMore == `${i + 1}` ? "Read Less" : "Read More"}
                </button>
              </div>
              {/* End Read More Logic */}
            </div>
          ))}
        </div>
      </section>
      
    </>
  )
}
