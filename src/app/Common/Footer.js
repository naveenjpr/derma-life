import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <>
      <footer className="w-[100%] bg-[black] h-[200px] flex flex-col	 items-center justify-center mt-[50px]">
        <figure className="text-center">
          <img src="https://dermalife.org.in/assets/img/logo1%20(1).png" />
        </figure>
        <div className="text-[white] flex mt-[50px] ">
          <span>Copyright © 2023 |</span>
          <Link href="#">Privacy Policy</Link>
          <Link href="#"> | 
             All right reserved</Link>
        </div>
      </footer>
    </>
  );
}
