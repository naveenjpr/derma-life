"use client";
import Link from "next/link";
import logo from "../images/logo (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faFaceSmile,
  faLaptopMedical,
  faPhone,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Review from "@/Allpages/Review";
import Tab from "@/Allpages/Tab";
import Service from "@/Allpages/Service";
import VIdeo from "@/Allpages/VIdeo";
import WhyChoose from "@/Allpages/WhyChoose ";
import BookAnAppointment from "@/Allpages/BookAnAppointment";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  // button click modal open
  const [modal, setmodal] = useState(false);

  let modalshow = () => {
    setmodal(!modal);
  };
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
            class="bg-[blue] p-[10px] cursor-pointer text-[white] rounded-lg "
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
      <header className="w-[100%]  bg-stone-200 sticky top-0 z-[9999] 	">
        <section className="max-w-[1170px] mx-auto flex justify-between items-center py-[10px] ">
          <figure>
            <img src="https://dermalife.org.in/assets/img/2logo.png" />
          </figure>
          <nav>
            <ul
              className="flex  py-[15px] text-[#666] font-semibold text-[15px] font-[Montserrat] items-center"
              id="para"
            >
              <li className="mx-[15px]  hover:text-[#111] relative">
                <Link href={"#service"}> Services</Link>
                <span className="w-[70px] border h-[3px] bg-[#45497e]	  absolute top-[100%] left-0"></span>
              </li>
              <li className="mx-[15px]  hover:text-[#111]">
                <Link href={"#MeetTheDoctor"}>Meet The Doctor </Link>
              </li>
              <li className="mx-[15px]  hover:text-[#111]">
                <Link href={"#Gallery"}> Gallery</Link>
              </li>
              <li className="mx-[15px]  hover:text-[#111]">
                <Link href={"#Review"}> Review</Link>
              </li>
              <li className="mx-[15px]  hover:text-[#111]">
                <Link href={"#contact"}>Contact Us </Link>
              </li>
              <li className="mx-[15px] hover:text-[#111] flex ">
                <Link href={"tel:+6494461709"}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-[20px] inline"
                  />{" "}
                  7230019155{" "}
                </Link>
              </li>
              <button
                className="mx-[15px] bg-[#29779e] text-[white] p-[10px] hover:text-[#111]  animate-waving-hand "
                onClick={modalshow}
              >
                <Link href={"/"}>Book An Appointment </Link>
              </button>
            </ul>
          </nav>
        </section>
      </header>
      {/* header section end */}
      {/* form section start */}

      <section className="w-[100%]">
        <figure class="bg-[url('https://dermalife.org.in/assets/img/background12apr.webp')]  bg-cover bg-fixed">
          <h1 className="text-[50px] text-center text-[white] pt-[50px] pb-[19px]">
            Best Hair Transplant in Delhi
          </h1>
          <p className="text-center text-[white] text-[18px] leading-6">
            The art of medicine consists in amusing the patient while nature
            <br />
            cures the disease. Treatment without prevention is simply
            unsustainable.
          </p>
          <div className="max-w-[1000px] mx-auto py-[30px] flex justify-between items-center">
            <figure className="basis-1/2">
              <img
                src="https://dermalife.org.in/assets/img/banner-new.webp"
                className=" h-[500px]"
              />
            </figure>
            <form className="bg-[white] px-[40px] text-[15px] font-semibold text-[#666] ">
              <h3 className="text-center text-[24px] leading-[35px] p-[15px] text-[#3b5b8b] font-bold">
                Book An Appointment
              </h3>

              <div className="w-full  pt-[20px]">
                <label className="text-[15px] font-medium mb-[3px]">
                  First name:
                </label>

                <br />
                <input
                  type="text"
                  placeholder="name"
                  className="h-[42px] w-[100%] border border-[#ccc] px-[15px] py-[10px] rounded"
                />
              </div>
              <div className="w-full  pt-[20px] ">
                <label>Phone Number</label>
                <br />
                <input
                  type="text"
                  placeholder="name"
                  className="h-[42px] w-[100%] border border-[#ccc] px-[15px] py-[10px] rounded"
                />
              </div>
              <div className="w-full pt-[20px]">
                <label>Message:</label>
                <br />
                <textarea
                  cols="20"
                  rows="5"
                  placeholder=""
                  className="w-[100%] border border-[#ccc]"
                ></textarea>
              </div>

              <div className="w-[300px] mx-auto flex justify-center items-center py-[25px]">
                <button className=" text-center text-[white]  bg-[#29779e] px-[35px] font-semibold leading-[25px] text-[20px] py-[15px] rounded-md">
                  Appointment
                </button>
              </div>
            </form>
          </div>
        </figure>
      </section>
      {/* form section end */}

      {/* Successful  case start */}
      <section className="w-[100%] bg-[white] ">
        <div className="max-w-[1170px] mx-auto flex justify-between items-center gap-[15px] mt-[60px]">
          <div className="border border-[#ccc] rounded basis-1/3  text-center items-center justify-center flex flex-col h-[250px]">
            <figure className="font-bold p-[20px] rounded-full bg-[#d4d4e0] my-[22px]">
              <FontAwesomeIcon icon={faLaptopMedical} className="w-[30px] " />
            </figure>
            <div>
              <h1 className="text-[35px] text-[#111]">
                15<span className="mx-[5px]">+</span>
              </h1>
            </div>

            <p className="text-[20px] text-[#494545] leading-[35px] font-bold mb-[8px]">
              Year of Experience in Hair <br /> Transplant
            </p>
          </div>
          <div className="border border-[#ccc] rounded basis-1/3  text-center items-center justify-center flex flex-col h-[250px]">
            <figure className="font-bold p-[20px] rounded-full bg-[#bcebb9] my-[22px]">
              <FontAwesomeIcon
                icon={faFaceSmile}
                style={{ color: "#63E6BE" }}
                className="w-[30px]"
              />
            </figure>
            <div>
              <h1 className="text-[35px] text-[#111]">
                10000<span className="mx-[5px]">+</span>
              </h1>
            </div>

            <p className="text-[20px] text-[#494545] leading-[35px] font-bold mb-[8px]">
              Successful Cases
            </p>
          </div>
          <div className="border border-[#ccc] rounded basis-1/3  text-center items-center justify-center flex flex-col h-[250px]">
            <figure className="font-bold p-[20px] rounded-full bg-[#8992e0] my-[22px]">
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ color: "#3d77db" }}
                className="w-[30px]"
              />
            </figure>
            <div>
              <h1 className="text-[35px] text-[#111]">100%</h1>
            </div>

            <p className="text-[20px] text-[#494545] leading-[35px] font-bold mb-[8px]">
              Success Rate
            </p>
          </div>
        </div>
      </section>
      {/* Successful  case end */}
      {/* Best Dermatology, Hair Transplant & Aesthetic Clinic start */}
      <section
        className="w-[1100px] mx-auto grid  grid-cols-[70%_auto] gap-4 justify-between items-center my-[70px]"
        id="MeetTheDoctor"
      >
        <figcaption className=" ">
          <h1 className="text-[black] text-[20px] font-bold">
            Best Dermatology, Hair Transplant & <br /> Aesthetic Clinic
          </h1>
          <ul className=" text-left leading-[35px] font-normal">
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
              Dermatologic surgeries, and Cosmetic procedures. He has MD in
              Dermatology from prestigious Seth GS Medical College and KEM
              Hospital, Mumbai.
            </li>
          </ul>
        </figcaption>
        <figure className="">
          <img src="https://dermalife.org.in/assets/img/doctor-profile.webp" />
          <h1 className="text-center text-[20px] ">
            <span className="font-bold">Dr Gaurav Garg MBBS,</span>
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
      <footer />
    </>
  );
}
