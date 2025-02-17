"use client"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Custom Arrow Components
function SampleNextArrow(props) {
  const { className, style, onClick } = props
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
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
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
  )
}

// Reusable Review Item Component
const ReviewItem = ({ name, visitReason, review }) => {
  return (
    <div className="border border-[#ccc] rounded flex flex-col py-[15px] relative group mx-[10px]">
      <h5 className="text-center text-[18px] md:text-[20px] hover:text-[blue]">
        {name}
      </h5>
      <span className="mb-[10px] text-center text-[14px] md:text-[15px] text-[#666] font-normal leading-[20px] font-[Montserrat]">
        {visitReason}
      </span>
      <span className="text-center text-[14px] md:text-[15px] text-[#666] font-normal leading-[25px] font-[Montserrat] p-5">
        {review}
        <div className="absolute bottom-0 right-0">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="h-[40px] duration-500 w-[40px] group-hover:scale-100 scale-0 rotate-180 text-[blue]"
          />
        </div>
      </span>
    </div>
  )
}

// Review Data
const reviews = [
  {
    id: 1,
    name: "Rohit",
    visitReason: "Visited For Hair Transplant Surgery",
    review:
      "Dermalife doctor and staff are very good and professional. I have visited the clinic for hair transplant surgery. The doctor checked my hair status and cleared all my doubts very patiently and friendly.",
  },
  {
    id: 2,
    name: "Saydur Lakoria",
    visitReason: "Visited For Hair Transplant Surgery",
    review:
      "Dermalife doctor and staff are very good and professional. I have visited the clinic for hair transplant surgery. The doctor checked my hair status and cleared all my doubts very patiently and friendly.",
  },
  // Add more reviews here
]

export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="w-[100%] my-[50px] text-[35px]" id="Review">
      <h1 className="text-center font-semibold text-[28px] md:text-[35px]">
        Hear From Our Customers Review
      </h1>
      <div className="max-w-[1000px] mx-auto">
        <div className="w-[200px] mx-auto flex justify-center items-center mb-[50px]">
          <div className="h-[2px] w-[90px] bg-green-400"></div>
          <figure className="mx-[5px]">
            <img
              src="https://dermalife.org.in/assets/img/icons/4.png"
              className="animate-roted-hand"
              alt="Hand Icon"
            />
          </figure>
          <div className="h-[2px] w-[90px] bg-green-400"></div>
        </div>

        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <ReviewItem
                name={review.name}
                visitReason={review.visitReason}
                review={review.review}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
