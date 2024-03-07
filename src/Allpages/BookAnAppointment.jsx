import React from "react";

export default function BookAnAppointment() {
  return (
    <>
      <section className="w-[100%] mt-[100px]" id="contact">
        <h1 className="text-center font-bold font-[Montserrat] text-[35px]">
          Book An Appointment
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
        <div className="max-w-[800px] mx-auto">
          <form class="">
            <div class="grid grid-cols-2 gap[20px] justify-between text-[#666] font-[300] text-[20px]">
              <div className="my-[5px]">
                <label className="font-[bold]">Full Name</label>
                <br />
                <input
                  type="text"
                  className="border border-[#ccc] rounded-lg w-[95%] h-[40px]"
                />
              </div>
              <div className="my-[5px]">
                <label className="font-[bold]">Email</label>
                <br />
                <input
                  type="email"
                  className="border border-[#ccc] rounded-lg w-[95%] h-[40px]"
                />
              </div>
              <div className="my-[5px]">
                <label className="font-[bold]">subject</label>
                <br />
                <input
                  type="text"
                  className="border border-[#ccc] rounded-lg w-[95%] h-[40px]"
                />
              </div>
              <div className="my-[5px]">
                <label className="font-[bold]">phone</label>
                <br />
                <input
                  type="Tel"
                  maxlength="10"
                  className="border border-[#ccc] rounded-lg w-[95%] h-[40px]"
                />
              </div>
              <div className="col-span-2 my-[5px] ">
                <label className="font-[bold]">Message</label>
                <br />
                <textarea
                  name=""
                  rows="5"
                  className="border border-[#ccc] w-[100%] "
                ></textarea>
              </div>
            </div>
            <div className="text-center font-[500]">
              <input
                type="button"
                value="Send Message"
                className="border text-white border-[#ccc] bg-[#29779e] rounded-lg w-[25%] h-[40px]"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
