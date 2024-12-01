"use client"

import React from "react";
import { navLinks } from "../../../lib/data";
import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from '../../../public/arrow-left.svg'

const Header = () => {
  const handleNavRegister = () => {

  }

  return (
    <header className="relative z-50 flex justify-center shadow-md">
      <div className="w-[90%] sm:w-[56rem] flex justify-between items-center border px-2">
        <h1 className="text-3xl font-serif w-22">SMV Blog</h1>
        <nav className="p-4 border">
          <ul className="flex gap-8 text-lg">
            {navLinks.map((obj, i) => (
              <li key={i} className="hover:scale-110 transition active:scale-105">
                <Link
                  href={obj.hash}
                >
                  {obj.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button 
          className="group flex items-center gap-2
        bg-gray-100 lg:font-semibold text-lg w-22
          isolation-auto border-gray-50 before:absolute before:w-full before:transition-all 
          before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
          before:bg-blue-100 before:-z-10 before:aspect-square before:hover:scale-150 
          before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-4 rounded-full
          active:scale-90"
          onClick={handleNavRegister}
        >
          Register
          <Image
            src={ArrowLeft}
            width={16}
            height={16}
            alt='Register Icon'
            className="rotate-180 group-hover:rotate-0 transition"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
