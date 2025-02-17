import React from "react"

export default function WhyChoose() {
  return (
    <>
      <section className="w-[100%] mt-[100px]">
        <h1 className="text-center font-bold font-[Montserrat] text-[35px]">
          Why Choose Us?
        </h1>
        <div className="max-w-[1170px] mx-auto">
          <div className="w-[200px] mx-auto flex justify-center items-center mb-[50px]">
            <div className="h-[2px] w-[90px] bg-green-400"></div>
            <figure className="mx-[5px]">
              <img
                src="https://dermalife.org.in/assets/img/icons/4.png"
                className="animate-roted-hand"
              />
            </figure>
            <div className="h-[2px] w-[90px] bg-green-400"></div>
          </div>
        </div>
        <div className="max-w-[1170px] mx-auto">
          <p className="text-[17px] leading-[30px] text-[grey] text-center">
            “Our hair transplant surgeon has in-depth knowledge in understanding
            your intricate problems and has adept skills in performing the
            procedure in a highly proficient manner. Also, the uniqueness of our
            hair transplantation is that it implements innovative techniques
            such as”
          </p>
          <div className="grid grid-cols-2 gap-[5px] font-normal md:grid-cols-1 md:gap-[15px]">
            <ul className="list-[square] text-[18px] leading-[40px] text-[#666] text-left pe-[32px]">
              <li>Boosted-FUE Method</li>
              <li>Direct method of Implantation</li>
              <li>
                We also provide all in one procedure to produce best possible
                outcomes.
              </li>
              <li>
                These aspects make our clinic an ideal place for you to undergo
                hair transplantation, Laser hair removal, and treatment of
                various dermatological and trichological disorders.
              </li>
            </ul>
            <ul className="list-[square] text-[18px] leading-[40px] text-[#666] text-left pe-[32px]">
              <li>No Root Touch Technique</li>
              <li>Mega and Giga sessions</li>
              <li>
                We also proudly boast our Gentle YAG pro laser by Candela USA
                for Laser Hair Removal, which is specially designed for patients
                of all skin types.
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1170px] mx-auto mt-[50px]">
          <h1 className="text-center font-bold font-[Montserrat] text-[35px]">
            Find Us At
          </h1>
          <div className="w-[200px] mx-auto flex justify-center items-center mb-[50px]">
            <div className="h-[2px] w-[90px] bg-green-400"></div>
            <figure className="mx-[5px]">
              <img
                src="https://dermalife.org.in/assets/img/icons/4.png"
                className="animate-roted-hand"
              />
            </figure>
            <div className="h-[2px] w-[90px] bg-green-400"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
            <div className="px-[15px] md:px-[11px]">
              <h1 className="text-[20px] md:text-[24px] leading-[30px] font-[500]">
                C 15 , Ground Floor Green Park Market Road, Green Park
                Extension, New Delhi, Delhi 110016
              </h1>
              <ul className="text-[#666]">
                <li className="py-[10px]">
                  <span className="font-[500]">Email:</span>{" "}
                  info@dermalife.co.in
                </li>
                <li className="py-[10px]">
                  <span className="font-[500]">Phone:</span> +91-7230019135
                </li>
                <li className="flex py-[10px]">
                  <span className="pe-[70px]"></span>
                  <span>
                    Give us a call or drop by anytime, we endeavour to answer
                    &nbsp; &nbsp;all enquiries within 24 hours on business days.
                  </span>
                </li>
                <li className="flex py-[10px]">
                  <span className="pe-[70px]"></span>
                  <span>We are open from 9am — 7pm weekdays.</span>
                </li>
              </ul>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14017.388276202011!2d77.206389!3d28.559339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce27044b1d7f1%3A0x4ac5717bd1b9e44f!2sThe%20Ashtan%20Sarovar%20Portico!5e0!3m2!1sen!2sin!4v1708064651572!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="max-w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
