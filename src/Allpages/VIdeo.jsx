"use client";

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VIdeo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    autoplay: true,

    slidesToScroll: 3,
  };

  return (
    <>
      <section className="w-[100%] mt-[90px]">
        <h1 className="text-center font-bold font-[Montserrat] text-[35px]">
          Successful Results
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

        <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-x-[15px] gap-y-[35px]">
          <iframe
            width="536"
            height="330"
            src="https://www.youtube.com/embed/F9c5viJhw1w"
            title="Case Study: 1 Year Hair Transplant Results | Best Hair Transplant In Delhi | Dr Gaurav Garg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded-[15px]"
          ></iframe>
          <iframe
            width="536"
            height="330"
            src="https://www.youtube.com/embed/5uToi2mZLJ8"
            title="Unbelievable Hair Transplant Result after 12 Months | This Surgery Changed My Life..."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded-[15px]"
          ></iframe>

          <iframe
            width="536"
            height="330"
            src="https://www.youtube.com/embed/1lV2wzse1GM"
            title="Journey of Hair Transplant in Delhi at Dermalife: A story of Successful Hair Transplant"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded-[15px]"
          ></iframe>

          <iframe
            width="536"
            height="330"
            src="https://www.youtube.com/embed/k7Qv1wG0Yt0"
            title="CASE STUDY- Amazing Hair Transplant Result in 6 months | Best Hair Transplant Results 2020"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="rounded-[15px]"
          ></iframe>
        </div>

        <div className="max-w-[1170px] mx-auto my-[70px]">
          <h1 className="text-center font-bold font-[Montserrat] text-[35px]">
            Case Studies
          </h1>
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
        <div className="max-w-[1170px] mx-auto">
          <Slider {...settings}>
            <div>
              <iframe
                width="353"
                height="230"
                src="https://www.youtube.com/embed/t7ssJ3JE5ck"
                title="Natural Hairline Hair Transplant | How To Get Natural Hair Transplant In India| Dr. Gaurav Garg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="353"
                height="230"
                src="https://www.youtube.com/embed/Kh8ehOVeVEc"
                title="🌟 Grade 6 Baldness में कितना Grafts चाहिए ?✅ 6000 Grafts Hair Transplant Before and After Results"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="353"
                height="230"
                src="https://www.youtube.com/embed/wdMspCj8hho"
                title="✅Grade 6 Baldness Hair Transplant Surgery Before and After Results 🔥 Repair Hair Transplant Surgery"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="353"
                height="230"
                src="https://www.youtube.com/embed/RDAR7z0qm_I"
                title="✅Step By Step Beard Hair Transplant In Hindi | ❇️ Beard Hair Transplant Results with Before After"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="353"
                height="230"
                src="https://www.youtube.com/embed/_4VT9prrzes"
                title="Hair Transplant Journey Day By Day 👉 A Live Patient&#39;s Journey -Dermalife Best Hair Transplant Clinic"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="353"
                height="230"
                src="https://www.youtube.com/embed/t7ssJ3JE5ck"
                title="Natural Hairline Hair Transplant | How To Get Natural Hair Transplant In India| Dr. Gaurav Garg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
