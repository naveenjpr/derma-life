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
      <section className="w-full mt-[90px]">
        <h1 className="text-center font-bold font-[Montserrat] text-[30px] md:text-[35px]">
          Successful Results
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

        {/* Video Grid */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-[15px] gap-y-[35px]">
          <iframe
            height="330"
            src="https://www.youtube.com/embed/F9c5viJhw1w"
            title="Case Study: 1 Year Hair Transplant Results | Best Hair Transplant In Delhi | Dr Gaurav Garg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-[15px] w-full sm:w-[536px]"
          ></iframe>
          <iframe
            width="536"
            height="330"
            src="https://www.youtube.com/embed/5uToi2mZLJ8"
            title="Unbelievable Hair Transplant Result after 12 Months | This Surgery Changed My Life..."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-[15px] w-full sm:w-[536px]"
          ></iframe>
          <iframe
            width="536"
            height="330"
            src="https://www.youtube.com/embed/1lV2wzse1GM"
            title="Journey of Hair Transplant in Delhi at Dermalife: A story of Successful Hair Transplant"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-[15px] w-full sm:w-[536px]"
          ></iframe>
          <iframe
            width="536"
            height="330"
            src="https://www.youtube.com/embed/k7Qv1wG0Yt0"
            title="CASE STUDY- Amazing Hair Transplant Result in 6 months | Best Hair Transplant Results 2020"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-[15px] w-full sm:w-[536px]"
          ></iframe>
        </div>

        {/* Case Studies */}
        <div className="max-w-[1170px] mx-auto my-[70px]">
          <h1 className="text-center font-bold font-[Montserrat] text-[30px] md:text-[35px]">
            Case Studies
          </h1>
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
        <div className="max-w-[1170px] mx-auto">
          <Slider {...settings}>
            <div>
              <iframe
                width="100%"
                height="230"
                src="https://www.youtube.com/embed/t7ssJ3JE5ck"
                title="Natural Hairline Hair Transplant | How To Get Natural Hair Transplant In India| Dr. Gaurav Garg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-[15px]"
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="230"
                src="https://www.youtube.com/embed/Kh8ehOVeVEc"
                title="🌟 Grade 6 Baldness में कितना Grafts चाहिए ?✅ 6000 Grafts Hair Transplant Before and After Results"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-[15px]"
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="230"
                src="https://www.youtube.com/embed/wdMspCj8hho"
                title="✅Grade 6 Baldness Hair Transplant Surgery Before and After Results 🔥 Repair Hair Transplant Surgery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-[15px]"
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="230"
                src="https://www.youtube.com/embed/RDAR7z0qm_I"
                title="✅Step By Step Beard Hair Transplant In Hindi | ❇️ Beard Hair Transplant Results with Before After"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="rounded-[15px]"
              ></iframe>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}
