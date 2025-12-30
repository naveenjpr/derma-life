"use client"

import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function VIdeo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small devices (phones)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small devices (small phones)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <section className="w-full mt-[50px] sm:mt-[70px] lg:mt-[90px] px-4">
        {/* Successful Results Section */}
        <h1 className="text-center font-bold font-[Montserrat] text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] px-2">
          Successful Results
        </h1>
        <div className="max-w-[1170px] mx-auto">
          <div className="w-[180px] sm:w-[200px] mx-auto flex justify-center items-center mb-[20px] sm:mb-[30px] md:mb-[50px]">
            <div className="h-[2px] w-[60px] sm:w-[70px] md:w-[90px] bg-green-400"></div>
            <figure className="mx-[5px]">
              <img
                src="https://dermalife.org.in/assets/img/icons/4.png"
                className="animate-roted-hand w-[20px] sm:w-[25px] md:w-auto"
                alt="Decorative icon"
              />
            </figure>
            <div className="h-[2px] w-[60px] sm:w-[70px] md:w-[90px] bg-green-400"></div>
          </div>
        </div>

        {/* Video Grid - Responsive */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-[15px] lg:gap-[20px] mb-[40px] sm:mb-[60px]">
          <div className="w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/F9c5viJhw1w"
              title="Case Study: 1 Year Hair Transplant Results | Best Hair Transplant In Delhi | Dr Gaurav Garg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-[10px] sm:rounded-[15px] w-full h-full"
            ></iframe>
          </div>
          <div className="w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5uToi2mZLJ8"
              title="Unbelievable Hair Transplant Result after 12 Months | This Surgery Changed My Life..."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-[10px] sm:rounded-[15px] w-full h-full"
            ></iframe>
          </div>
          <div className="w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1lV2wzse1GM"
              title="Journey of Hair Transplant in Delhi at Dermalife: A story of Successful Hair Transplant"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-[10px] sm:rounded-[15px] w-full h-full"
            ></iframe>
          </div>
          <div className="w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k7Qv1wG0Yt0"
              title="CASE STUDY- Amazing Hair Transplant Result in 6 months | Best Hair Transplant Results 2020"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-[10px] sm:rounded-[15px] w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="max-w-[1170px] mx-auto my-[50px] sm:my-[60px] lg:my-[70px]">
          <h1 className="text-center font-bold font-[Montserrat] text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] px-2">
            Case Studies
          </h1>
          <div className="w-[180px] sm:w-[200px] mx-auto flex justify-center items-center mb-[20px] sm:mb-[30px] md:mb-[50px]">
            <div className="h-[2px] w-[60px] sm:w-[70px] md:w-[90px] bg-green-400"></div>
            <figure className="mx-[5px]">
              <img
                src="https://dermalife.org.in/assets/img/icons/4.png"
                className="animate-roted-hand w-[20px] sm:w-[25px] md:w-auto"
                alt="Decorative icon"
              />
            </figure>
            <div className="h-[2px] w-[60px] sm:w-[70px] md:w-[90px] bg-green-400"></div>
          </div>
        </div>

        {/* Case Studies Slider */}
        <div className="max-w-[1170px] mx-auto pb-[30px] sm:pb-[40px]">
          <Slider {...settings}>
            <div className="px-2">
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/t7ssJ3JE5ck"
                  title="Natural Hairline Hair Transplant | How To Get Natural Hair Transplant In India| Dr. Gaurav Garg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-[10px] sm:rounded-[15px] w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="px-2">
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Kh8ehOVeVEc"
                  title="🌟 Grade 6 Baldness में कितना Grafts चाहिए ?✅ 6000 Grafts Hair Transplant Before and After Results"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-[10px] sm:rounded-[15px] w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="px-2">
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wdMspCj8hho"
                  title="✅Grade 6 Baldness Hair Transplant Surgery Before and After Results 🔥 Repair Hair Transplant Surgery"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-[10px] sm:rounded-[15px] w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="px-2">
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/RDAR7z0qm_I"
                  title="✅Step By Step Beard Hair Transplant In Hindi | ❇️ Beard Hair Transplant Results with Before After"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="rounded-[10px] sm:rounded-[15px] w-full h-full"
                ></iframe>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}
