"use client";
import React, { useEffect, useState } from "react";

export default function Service() {
  const [isShowMore, setIsShowMore] = useState("");
  

  const toggleReadMoreLess = (a) => {
    if (isShowMore == "") {
      setIsShowMore(a);
    } else {
      setIsShowMore("");
    }

    console.log(a);
  };

  return (
    <>
      <section className="w-[100%]">
        <h1 className="text-center font-bold font-[Montserrat] text-[35px]">
          Services
        </h1>
        <div className="max-w-[1170px] mx-auto">
          <div className="w-[200px] mx-auto  flex justify-center items-center mb-[50px] ">
            <div className="h-[2px] w-[90px] bg-green-400"> </div>
            <figure className="mx-[5px]">
              <img
                src="https://dermalife.org.in/assets/img/icons/4.png"
                className="animate-roted-hand"
              />
            </figure>
            <div className="h-[2px] w-[90px] bg-green-400"> </div>
          </div>
        </div>
        {/* read more logig start */}
        <div className="max-w-[1170px] mx-auto grid grid-cols-2 gap-[30px] ">
          <div className=" flex flex-col items-center  ">
            <img
              src="https://dermalife.org.in/assets/img/image%20(1).png"
              className="bg-[#2f6c96] rounded-full text-center w-[70px] h-[70px]"
            />
            <h2 className="text-[#2f6c96] font-bold text-[30px]">
              {" "}
              Mesotherapy for Hair Loss
            </h2>
            <hr className="h-[1px] w-[100%] border border-[black] my-[5px]" />
            {/* read more logic */}
            <div className="card w-[100%]  flex flex-col bg-gray-100 rounded-md p-4 ">
              <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                FUE hair transplant is a leading and most recent hair
                restoration procedure that involves the extraction of individual
                hair follicles from the donor site followed by transplantation
                into the recipient site with thin hairs or bald patches. FUE, or
                Follicular Unit Extraction, is a modern approach to hair
                transplant and is one of the two main methods of replacing the
                bald area with healthy hair
              </p>
              {isShowMore == "1" && (
                <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                  The process is done by implementing healthy hair follicles
                  from the donor part of the body to the required area. In FUE
                  hair transplant in Delhi, a sufficient amount of hair
                  follicles are collected so as to assure outstanding hair
                  growth without leaving a big scar. The fact of leaving no scar
                  has made FUE replace the traditional way of hair transplant
                  i.e. FUT.
                </p>
              )}

              <button
                className="self-start  text-[#2f6c96] text-[25px] font-semibold border-0  px-6 py-2 mt-2 cursor-pointer transition duration-500 ease-in-out"
                onClick={() => toggleReadMoreLess("1")}
              >
                {isShowMore == "1" ? "Read Less" : "Read More"}
              </button>
            </div>
            {/* read more logic end */}
          </div>

          <div className=" flex flex-col items-center  ">
            <img
              src="https://dermalife.org.in/assets/img/image%20(1).png"
              className="bg-[#2f6c96] rounded-full text-center w-[70px] h-[70px]"
            />
            <h2 className="text-[#2f6c96] font-bold text-[30px]">
              {" "}
              Mesotherapy for Hair Loss
            </h2>
            <hr className="h-[1px] w-[100%] border border-[black] my-[5px]" />
            {/* read more logic */}
            <div className="card w-[100%]  flex flex-col bg-gray-100 rounded-md p-4 ">
              <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                FUE hair transplant is a leading and most recent hair
                restoration procedure that involves the extraction of individual
                hair follicles from the donor site followed by transplantation
                into the recipient site with thin hairs or bald patches. FUE, or
                Follicular Unit Extraction, is a modern approach to hair
                transplant and is one of the two main methods of replacing the
                bald area with healthy hair
              </p>
              {isShowMore == "2" && (
                <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                  The process is done by implementing healthy hair follicles
                  from the donor part of the body to the required area. In FUE
                  hair transplant in Delhi, a sufficient amount of hair
                  follicles are collected so as to assure outstanding hair
                  growth without leaving a big scar. The fact of leaving no scar
                  has made FUE replace the traditional way of hair transplant
                  i.e. FUT.
                </p>
              )}

              <button
                className="self-start  text-[#2f6c96] text-[25px] font-semibold border-0  px-6 py-2 mt-2 cursor-pointer transition duration-500 ease-in-out"
                onClick={() => toggleReadMoreLess("2")}
              >
                {isShowMore == "2" ? "Read Less" : "Read More"}
              </button>
            </div>
            {/* read more logic end */}
          </div>

          <div className=" flex flex-col items-center  ">
            <img
              src="https://dermalife.org.in/assets/img/image%20(1).png"
              className="bg-[#2f6c96] rounded-full text-center w-[70px] h-[70px]"
            />
            <h2 className="text-[#2f6c96] font-bold text-[30px]">
              {" "}
              Mesotherapy for Hair Loss
            </h2>
            <hr className="h-[1px] w-[100%] border border-[black] my-[5px]" />
            {/* read more logic */}
            <div className="card w-[100%]  flex flex-col bg-gray-100 rounded-md p-4 ">
              <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                FUE hair transplant is a leading and most recent hair
                restoration procedure that involves the extraction of individual
                hair follicles from the donor site followed by transplantation
                into the recipient site with thin hairs or bald patches. FUE, or
                Follicular Unit Extraction, is a modern approach to hair
                transplant and is one of the two main methods of replacing the
                bald area with healthy hair
              </p>
              {isShowMore == "3" && (
                <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                  The process is done by implementing healthy hair follicles
                  from the donor part of the body to the required area. In FUE
                  hair transplant in Delhi, a sufficient amount of hair
                  follicles are collected so as to assure outstanding hair
                  growth without leaving a big scar. The fact of leaving no scar
                  has made FUE replace the traditional way of hair transplant
                  i.e. FUT.
                </p>
              )}

              <button
                className="self-start  text-[#2f6c96] text-[25px] font-semibold border-0  px-6 py-2 mt-2 cursor-pointer transition duration-500 ease-in-out"
                onClick={() => toggleReadMoreLess("3")}
              >
                {isShowMore == "3" ? "Read Less" : "Read More"}
              </button>
            </div>
            {/* read more logic end */}
          </div>

          <div className=" flex flex-col items-center  ">
            <img
              src="https://dermalife.org.in/assets/img/image%20(1).png"
              className="bg-[#2f6c96] rounded-full text-center w-[70px] h-[70px]"
            />
            <h2 className="text-[#2f6c96] font-bold text-[30px]">
              {" "}
              Mesotherapy for Hair Loss
            </h2>
            <hr className="h-[1px] w-[100%] border border-[black] my-[5px]" />
            {/* read more logic */}
            <div className="card w-[100%]  flex flex-col bg-gray-100 rounded-md p-4 ">
              <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                FUE hair transplant is a leading and most recent hair
                restoration procedure that involves the extraction of individual
                hair follicles from the donor site followed by transplantation
                into the recipient site with thin hairs or bald patches. FUE, or
                Follicular Unit Extraction, is a modern approach to hair
                transplant and is one of the two main methods of replacing the
                bald area with healthy hair
              </p>
              {isShowMore == "4" && (
                <p className="text-base leading-[35px] text-justify text-[#666] p-5 font-normal">
                  The process is done by implementing healthy hair follicles
                  from the donor part of the body to the required area. In FUE
                  hair transplant in Delhi, a sufficient amount of hair
                  follicles are collected so as to assure outstanding hair
                  growth without leaving a big scar. The fact of leaving no scar
                  has made FUE replace the traditional way of hair transplant
                  i.e. FUT.
                </p>
              )}

              <button
                className="self-start  text-[#2f6c96] text-[25px] font-semibold border-0  px-6 py-2 mt-2 cursor-pointer transition duration-500 ease-in-out"
                onClick={() => toggleReadMoreLess("4")}
              >
                {isShowMore == "4" ? "Read Less" : "Read More"}
              </button>
            </div>
            {/* read more logic end */}
          </div>

          {/* read more logic end */}
        </div>
      </section>
    </>
  );
}
