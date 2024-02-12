"use client";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "grey",
        width: "50px",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "-62px",
        height: "50px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "grey",
        width: "50px",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "-60px",
        height: "50px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="w-[100%] my-[50px] text-[35px]">
        <h1 className="text-center font-semibold">
          Hear From Our Customers Review
        </h1>
        <div className="max-w-[1000px] mx-auto">
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

          <Slider {...settings}>
            <div className="max-w-[1100px] mx-auto">
              <div className="border border-[#ccc] rounded flex flex-col py-[15px] relative group">
                <h5 className="text-center text-[20px] hover:text-[blue]">
                  Rohit
                </h5>
                <span className="mb-[10px] text-center text-[15px] text-[#666] font-normal leading-[20px] font-[Montserrat]">
                  Visited For Hair Transplant Surgery
                </span>
                <span className=" text-center text-[15px] text-[#666] font-normal leading-[25px] font-[Montserrat] p-5">
                  "Dermalife doctor and staff are very good and professional. I
                  have visited the clinic for hair transplant surgery. The
                  doctor checked my hair status and cleared all my doubts very
                  patiently and friendly
                  <div className="absolute bottom-0 right-0">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="h-[40px] duration-500 w-[40px] group-hover:scale-100 scale-0 rotate-180	text-[blue]"
                    />
                  </div>
                </span>
              </div>
            </div>
            <div>
              <div className="border border-[#ccc] rounded flex flex-col py-[15px] relative group">
                <h5 className="text-center text-[20px] hover:text-[blue]">
                  Saydur lakoria{" "}
                </h5>
                <span className="mb-[10px] text-center text-[15px] text-[#666] font-normal leading-[20px] font-[Montserrat]">
                  Visited For Hair Transplant Surgery
                </span>
                <span className=" text-center text-[15px] text-[#666] font-normal leading-[25px] font-[Montserrat] p-5">
                  "Dermalife doctor and staff are very good and professional. I
                  have visited the clinic for hair transplant surgery. The
                  doctor checked my hair status and cleared all my doubts very
                  patiently and friendly
                  <div className="absolute bottom-0 right-0">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="h-[40px] duration-500 w-[40px] group-hover:scale-100 scale-0 rotate-180	text-[blue]"
                    />
                  </div>
                </span>
              </div>
            </div>
            <div>
              <div className="border border-[#ccc] rounded flex flex-col py-[15px] relative group">
                <h5 className="text-center text-[20px] hover:text-[blue]">
                  Nitin
                </h5>
                <span className="mb-[10px] text-center text-[15px] text-[#666] font-normal leading-[20px] font-[Montserrat]">
                  Visited For Hair Transplant Surgery
                </span>
                <span className=" text-center text-[15px] text-[#666] font-normal leading-[25px] font-[Montserrat] p-5">
                  "Dermalife doctor and staff are very good and professional. I
                  have visited the clinic for hair transplant surgery. The
                  doctor checked my hair status and cleared all my doubts very
                  patiently and friendly
                  <div className="absolute bottom-0 right-0">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="h-[40px] duration-500 w-[40px] group-hover:scale-100 scale-0 rotate-180	text-[blue]"
                    />
                  </div>
                </span>
              </div>
            </div>
            <div>
              <div className="border border-[#ccc] rounded flex flex-col py-[15px] relative group">
                <h5 className="text-center text-[20px] hover:text-[blue]">
                  Rohit
                </h5>
                <span className="mb-[10px] text-center text-[15px] text-[#666] font-normal leading-[20px] font-[Montserrat]">
                  Visited For Hair Transplant Surgery
                </span>
                <span className=" text-center text-[15px] text-[#666] font-normal leading-[25px] font-[Montserrat] p-5">
                  "Dermalife doctor and staff are very good and professional. I
                  have visited the clinic for hair transplant surgery. The
                  doctor checked my hair status and cleared all my doubts very
                  patiently and friendly
                  <div className="absolute bottom-0 right-0">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="h-[40px] duration-500 w-[40px] group-hover:scale-100 scale-0 rotate-180	text-[blue]"
                    />
                  </div>
                </span>
              </div>
            </div>
            <div>
              <div className="border border-[#ccc] rounded flex flex-col py-[15px] relative group">
                <h5 className="text-center text-[20px] hover:text-[blue]">
                  Saydur lakoria{" "}
                </h5>
                <span className="mb-[10px] text-center text-[15px] text-[#666] font-normal leading-[20px] font-[Montserrat]">
                  Visited For Hair Transplant Surgery
                </span>
                <span className=" text-center text-[15px] text-[#666] font-normal leading-[25px] font-[Montserrat] p-5">
                  "Dermalife doctor and staff are very good and professional. I
                  have visited the clinic for hair transplant surgery. The
                  doctor checked my hair status and cleared all my doubts very
                  patiently and friendly
                  <div className="absolute bottom-0 right-0">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="h-[40px] duration-500 w-[40px] group-hover:scale-100 scale-0 rotate-180	text-[blue]"
                    />
                  </div>
                </span>
              </div>
            </div>
            <div>
              <div className="border border-[#ccc] rounded flex flex-col py-[15px] relative group">
                <h5 className="text-center text-[20px] hover:text-[blue]">
                  Nitin
                </h5>
                <span className="mb-[10px] text-center text-[15px] text-[#666] font-normal leading-[20px] font-[Montserrat]">
                  Visited For Hair Transplant Surgery
                </span>
                <span className=" text-center text-[15px] text-[#666] font-normal leading-[25px] font-[Montserrat] p-5">
                  "Dermalife doctor and staff are very good and professional. I
                  have visited the clinic for hair transplant surgery. The
                  doctor checked my hair status and cleared all my doubts very
                  patiently and friendly
                  <div className="absolute bottom-0 right-0">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="h-[40px] duration-500 w-[40px] group-hover:scale-100 scale-0 rotate-180	text-[blue]"
                    />
                  </div>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
