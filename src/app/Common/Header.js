"use client"
import Link from "next/link"
import logo from "../images/logo (1).svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import {
  faFaceSmile,
  faLaptopMedical,
  faPhone,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons"
import Review from "@/Allpages/Review"
import Tab from "@/Allpages/Tab"
import Service from "@/Allpages/Service"
import VIdeo from "@/Allpages/VIdeo"
import WhyChoose from "@/Allpages/WhyChoose "
import BookAnAppointment from "@/Allpages/BookAnAppointment"
import { useEffect, useId, useState } from "react"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useLocation } from "react-router-dom"
import Footer from "./Footer"

export default function Header() {
  const [modal, setmodal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  let modalshow = () => {
    setmodal(!modal)
  }

  let toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  // button click modal end

  return (
    <>
      <div
        className={` ${
          modal == true ? "top-[0px]" : "top-[-1000px]"
        } duration-1000 w-[700px]  my-[10px] bg-[white] border z-[999999]	 fixed left-[50%]  translate-x-[-50%] translate-y-[
      -50%
    ]`}
      >
        <form className="p-[20px] z-[999999] relative">
          <div className="flex justify-between items-center px-[5px] py-[2px]">
            <h1 className="font-bold text-[#3b5b8b] text-[20px]">
              Book An Appointment
            </h1>
            <span
              className={` cursor-pointer font-bold text-[
      35px
    ] text-[red
    ]  ${modal == false ? "true" : "false"}`}
              onClick={modalshow}
            >
              X
            </span>
          </div>
          <div className="w-[100%] h-1 border border-[grey]"></div>
          <div className=" px-[5px] py-[2px]">
            <label className="font-bold text-[#3b5b8b] text-[20px]">
              Full Name
            </label>
            <br />
            <input
              type="text"
              className="border border-[grey] w-[100%] h-[50px] rounded-lg "
            />
          </div>
          <div className=" px-[5px] py-[2px]">
            <label className="font-bold text-[#3b5b8b] text-[20px]">
              Phone Number
            </label>
            <br />
            <input
              type="tel"
              className="border border-[grey] w-[100%] h-[50px] rounded-lg "
            />
          </div>
          <div className=" px-[5px] py-[2px]">
            <label className="font-bold text-[#3b5b8b] text-[20px]">
              Booking Date
            </label>
            <br />
            <input
              type="date"
              className="border border-[grey] w-[100%] h-[50px] rounded-lg "
            />
          </div>
          <div className=" px-[5px] py-[2px]">
            <label className="font-bold text-[#3b5b8b] text-[20px]">
              Message
            </label>
            <br />

            <textarea
              className="border border-[grey] w-[100%] rounded-lg "
              cols={5}
              rows={5}
            ></textarea>
          </div>
          <input
            type="submit"
            className="bg-[blue] p-[10px] cursor-pointer text-[white] rounded-lg "
            value="Appointment"
          ></input>
        </form>
      </div>

      {/* whatsup or phone start */}
      <div className="fixed right-[15px] bottom-[150px] z-10 text-white bg-[blue] p-[5px] rounded-full flex group origin-center	 ">
        <div className="w-[0px] group-hover:w-[100px]  h-[25px] text-center translate-x-[100px] origin-right duration-300 scale-x-0 group-hover:scale-x-100 group-hover:translate-x-[0px] group-hover:text-[white] ">
          {" "}
          <Link href={"tel:123456789"}>phone</Link>{" "}
        </div>
        <FontAwesomeIcon
          icon={faPhone}
          className="w-[30px] group-hover:text-white group-hover:rotate-[360deg] duration-[1s] relative z-[99999]"
        />
      </div>
      <div className="fixed right-[15px] bottom-[100px] z-10 text-white bg-[green] p-[5px] rounded-full group flex ">
        <div className="w-[0px] group-hover:w-[100px]  h-[25px] text-center translate-x-[100px] origin-right duration-300 scale-x-0 group-hover:scale-x-100 group-hover:translate-x-[0px] group-hover:text-[white] ">
          <Link href={"https://api.whatsapp.com/send?phone="} target="_blank">
            whatsup
          </Link>{" "}
        </div>
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="w-[30px] group-hover:text-white group-hover:rotate-[360deg] duration-[1s] relative z-[99999]"
          style={{ color: "#63E6BE" }}
        />
      </div>
      {/* whatsup or phone end */}
      {/* header section start */}
      <header className="w-full bg-stone-200 sticky top-0 z-[9999]">
        <section className="max-w-[1170px] mx-auto flex justify-between items-center py-2 px-4">
          {/* Logo Section */}
          <figure className="w-auto z-[10000]">
            <img
              src="https://dermalife.org.in/assets/img/2logo.png"
              className="w-full max-w-[120px] sm:max-w-[150px]"
              alt="Logo"
            />
          </figure>

          {/* Hamburger Menu Icon - Visible on mobile/tablet */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-[10000] relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#666] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#666] my-1 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#666] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center">
            {/* Navigation Links */}
            <ul className="flex items-center py-2 text-[#666] font-semibold text-base space-x-6">
              <li className="hover:text-[#111] relative">
                <Link href="#service">Services</Link>
                <span className="w-[70px] border h-[3px] bg-[#45497e] absolute top-[100%] left-0"></span>
              </li>
              <li className="hover:text-[#111]">
                <Link href="#MeetTheDoctor">Meet The Doctor</Link>
              </li>
              <li className="hover:text-[#111]">
                <Link href="#Gallery">Gallery</Link>
              </li>
              <li className="hover:text-[#111]">
                <Link href="#Review">Review</Link>
              </li>
              <li className="hover:text-[#111]">
                <Link href="#contact">Contact Us</Link>
              </li>
              <li className="hover:text-[#111] flex items-center">
                <Link href="tel:+6494461709" className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="w-5 inline mr-2" />
                  7230019155
                </Link>
              </li>
            </ul>

            {/* Book Appointment Button */}
            <button
              className="bg-[#29779e] text-white px-4 py-2 rounded hover:bg-[#245d7f] ml-4"
              onClick={modalshow}
            >
              Book An Appointment
            </button>
          </nav>

          {/* Mobile/Tablet Navigation - Slides from left */}
          <nav
            className={`fixed top-0 left-0 h-full w-[280px] bg-stone-100 shadow-2xl transform transition-transform duration-300 ease-in-out z-[9998] lg:hidden ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="pt-20 px-6">
              {/* Navigation Links */}
              <ul className="flex flex-col space-y-4 text-[#666] font-semibold text-base">
                <li className="hover:text-[#111] py-2 border-b border-gray-300">
                  <Link href="#service" onClick={toggleMobileMenu}>
                    Services
                  </Link>
                </li>
                <li className="hover:text-[#111] py-2 border-b border-gray-300">
                  <Link href="#MeetTheDoctor" onClick={toggleMobileMenu}>
                    Meet The Doctor
                  </Link>
                </li>
                <li className="hover:text-[#111] py-2 border-b border-gray-300">
                  <Link href="#Gallery" onClick={toggleMobileMenu}>
                    Gallery
                  </Link>
                </li>
                <li className="hover:text-[#111] py-2 border-b border-gray-300">
                  <Link href="#Review" onClick={toggleMobileMenu}>
                    Review
                  </Link>
                </li>
                <li className="hover:text-[#111] py-2 border-b border-gray-300">
                  <Link href="#contact" onClick={toggleMobileMenu}>
                    Contact Us
                  </Link>
                </li>
                <li className="hover:text-[#111] py-2 border-b border-gray-300 flex items-center">
                  <Link href="tel:+6494461709" className="flex items-center" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faPhone} className="w-5 inline mr-2" />
                    7230019155
                  </Link>
                </li>
              </ul>

              {/* Book Appointment Button */}
              <button
                className="bg-[#29779e] text-white px-6 py-3 rounded hover:bg-[#245d7f] mt-6 w-full"
                onClick={() => {
                  modalshow()
                  toggleMobileMenu()
                }}
              >
                Book An Appointment
              </button>
            </div>
          </nav>

          {/* Overlay - Closes menu when clicked */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-[9997] lg:hidden"
              onClick={toggleMobileMenu}
            ></div>
          )}
        </section>
      </header>

      {/* header section end */}
      {/* form section start */}

      <section className="w-full">
        <figure className="bg-[url('https://dermalife.org.in/assets/img/background12apr.webp')] bg-cover bg-fixed">
          {/* Heading Section */}
          <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] text-center text-white pt-[50px] pb-[19px]">
            Best Hair Transplant in Delhi
          </h1>
          <p className="text-center text-white text-[16px] sm:text-[18px] leading-6 px-4">
            The art of medicine consists in amusing the patient while nature
            <br />
            cures the disease. Treatment without prevention is simply
            unsustainable.
          </p>

          {/* Main Content Section */}
          <div className="max-w-[1000px] mx-auto py-[30px] flex flex-wrap lg:flex-nowrap justify-between items-center">
            {/* Image Section */}
            <figure className="basis-full lg:basis-1/2 mb-4 lg:mb-0">
              <img
                src="https://dermalife.org.in/assets/img/banner-new.webp"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                alt="Banner"
              />
            </figure>

            {/* Appointment Form */}
            <form className="bg-white px-[20px] sm:px-[30px] lg:px-[40px] py-[20px] w-full lg:w-auto text-[15px] font-semibold text-[#666] rounded shadow-md">
              <h3 className="text-center text-[20px] sm:text-[24px] leading-[35px] p-[15px] text-[#3b5b8b] font-bold">
                Book An Appointment
              </h3>

              {/* First Name */}
              <div className="w-full pt-[15px]">
                <label className="text-[14px] sm:text-[15px] font-medium mb-[3px] block">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="h-[42px] w-full border border-[#ccc] px-[15px] py-[10px] rounded"
                />
              </div>

              {/* Phone Number */}
              <div className="w-full pt-[15px]">
                <label className="text-[14px] sm:text-[15px] font-medium mb-[3px] block">
                  Phone Number:
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="h-[42px] w-full border border-[#ccc] px-[15px] py-[10px] rounded"
                />
              </div>

              {/* Message */}
              <div className="w-full pt-[15px]">
                <label className="text-[14px] sm:text-[15px] font-medium mb-[3px] block">
                  Message:
                </label>
                <textarea
                  cols="20"
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full border border-[#ccc] px-[15px] py-[10px] rounded"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center items-center py-[20px]">
                <button className="text-center text-white bg-[#29779e] px-[25px] sm:px-[35px] font-semibold leading-[25px] text-[16px] sm:text-[20px] py-[10px] sm:py-[15px] rounded-md hover:bg-[#245d7f]">
                  Appointment
                </button>
              </div>
            </form>
          </div>
        </figure>
      </section>

      {/* form section end */}

      {/* Successful  case start */}
      <section className="w-full bg-white">
        <div className="max-w-[1170px] mx-auto flex flex-wrap gap-[15px] justify-between items-center mt-[60px]">
          {/* Card 1: Years of Experience */}
          <div className="border border-[#ccc] rounded basis-full sm:basis-[calc(50%-10px)] lg:basis-1/3 text-center flex flex-col items-center justify-center h-[250px] p-4">
            <figure className="font-bold p-[20px] rounded-full bg-[#d4d4e0] my-[22px]">
              <FontAwesomeIcon icon={faLaptopMedical} className="w-[30px]" />
            </figure>
            <div>
              <h1 className="text-[30px] sm:text-[35px] text-[#111]">
                15<span className="mx-[5px]">+</span>
              </h1>
            </div>
            <p className="text-[16px] sm:text-[20px] text-[#494545] leading-[30px] sm:leading-[35px] font-bold mb-[8px]">
              Year of Experience in Hair <br /> Transplant
            </p>
          </div>

          {/* Card 2: Successful Cases */}
          <div className="border border-[#ccc] rounded basis-full sm:basis-[calc(50%-10px)] lg:basis-1/3 text-center flex flex-col items-center justify-center h-[250px] p-4">
            <figure className="font-bold p-[20px] rounded-full bg-[#bcebb9] my-[22px]">
              <FontAwesomeIcon
                icon={faFaceSmile}
                style={{ color: "#63E6BE" }}
                className="w-[30px]"
              />
            </figure>
            <div>
              <h1 className="text-[30px] sm:text-[35px] text-[#111]">
                10000<span className="mx-[5px]">+</span>
              </h1>
            </div>
            <p className="text-[16px] sm:text-[20px] text-[#494545] leading-[30px] sm:leading-[35px] font-bold mb-[8px]">
              Successful Cases
            </p>
          </div>

          {/* Card 3: Success Rate */}
          <div className="border border-[#ccc] rounded basis-full sm:basis-[calc(50%-10px)] lg:basis-1/3 text-center flex flex-col items-center justify-center h-[250px] p-4">
            <figure className="font-bold p-[20px] rounded-full bg-[#8992e0] my-[22px]">
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ color: "#3d77db" }}
                className="w-[30px]"
              />
            </figure>
            <div>
              <h1 className="text-[30px] sm:text-[35px] text-[#111]">100%</h1>
            </div>
            <p className="text-[16px] sm:text-[20px] text-[#494545] leading-[30px] sm:leading-[35px] font-bold mb-[8px]">
              Success Rate
            </p>
          </div>
        </div>
      </section>

      {/* Successful  case end */}
      {/* Best Dermatology, Hair Transplant & Aesthetic Clinic start */}
      <section
        className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[70%_auto] gap-4 justify-between items-center my-[70px] px-4"
        id="MeetTheDoctor"
      >
        {/* Text Content */}
        <figcaption className="space-y-4">
          <h1 className="text-black text-[18px] sm:text-[20px] font-bold">
            Best Dermatology, Hair Transplant &{" "}
            <br className="hidden sm:block" />
            Aesthetic Clinic
          </h1>
          <ul className="text-left leading-[28px] sm:leading-[35px] font-normal space-y-2 text-[14px] sm:text-[16px]">
            <li>Times Healthcare Achievers Award 2018 Winner.</li>
            <li>
              Fellow Advanced Dermatology, LASERs & Dermatologic Surgery
              (Singapore)
            </li>
            <li>Fellow Hair Transplant Surgery (ISRAEL)</li>
            <li>Fellow Dermato-Surgery (PGI-Chandigarh)</li>
            <li>
              Dr. Gaurav Garg is the Director of Dermalife who is a renowned and
              certified dermatologist and Hair Transplant Specialist in Delhi.
              He has about 13 years of experience in Hair Transplant, Lasers,
              Dermatologic surgeries, and Cosmetic procedures. He has an MD in
              Dermatology from prestigious Seth GS Medical College and KEM
              Hospital, Mumbai.
            </li>
          </ul>
        </figcaption>

        {/* Image Section */}
        <figure className="text-center space-y-4">
          <img
            src="https://dermalife.org.in/assets/img/doctor-profile.webp"
            alt="Dr. Gaurav Garg"
            className="w-full max-w-[300px] mx-auto rounded-md"
          />
          <h1 className="text-[18px] sm:text-[20px]">
            <span className="font-bold">Dr. Gaurav Garg MBBS,</span>
            <br />
            MD (KEM-MUMBAI)
          </h1>
        </figure>
      </section>

      {/* Best Dermatology, Hair Transplant & Aesthetic Clinic end */}

      {/* gallery start  */}

      {/* <Gallery /> */}
      <Tab />

      <Review />
      <Service />
      <VIdeo />
      <WhyChoose />
      <BookAnAppointment />
      <Footer/>
    </>
  )
}
