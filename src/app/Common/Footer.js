import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-black py-6 flex flex-col items-center justify-center mt-[50px]">
        {/* Logo */}
        <figure className="text-center mb-6">
          <img
            src="https://dermalife.org.in/assets/img/logo1%20(1).png"
            alt="Dermalife Logo"
            className="max-w-[150px]"
          />
        </figure>

        {/* Copyright and Links */}
        <div className="text-white flex flex-col sm:flex-row sm:items-center mt-4">
          <span className="mb-2 sm:mb-0">Copyright © 2023 |</span>

          <Link href="#" className="hover:underline mb-2 sm:mb-0 sm:px-2">
            Privacy Policy
          </Link>

          <span className="mb-2 sm:mb-0">|</span>

          <span className="mb-2 sm:mb-0">All rights reserved</span>
        </div>
      </footer>
    </>
  )
}
