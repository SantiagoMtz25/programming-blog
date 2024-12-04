"use client";

import React from "react";
import { navLinks } from "../../../lib/data";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "../../../public/arrow-left.svg";
import Bars from "../../../public/bars.svg";
import { motion } from 'framer-motion';
import { usePathname } from "next/navigation";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = React.useState<boolean>(false);
  const pathname = usePathname();
  const splitPath = pathname.split('/');
  const checkPath = splitPath[1];

  return (
    <motion.header 
      className="relative z-50 flex justify-center shadow-md"
      initial={{ opacity: 0, y:-100, }}
      animate={{ opacity: 1, y:0, }}
    >
      <div 
        className="w-[90%] lg:w-3/5 flex justify-between items-center px-2"
      >
        {/* Toggle navbar */}
        <button
          onClick={() => setIsNavbarVisible(!isNavbarVisible)}
          className={`sm:w-auto block sm:hidden fixed right-8 z-50 rounded-2xl md:hidden`}
        >
          <Image 
            src={Bars}
            width={24}
            height={24}
            alt="Bars"
          />
        </button>

        <h1 className="text-3xl font-serif w-22 p-4">SMV Blog</h1>

        {/* Nav in main page */}
        {pathname !== '/' ? <></> : (
          <motion.nav 
            className="hidden sm:block p-4"
          >
            <ul className="flex gap-8 text-lg">
              {navLinks.map((obj, i) => (
                <li
                  key={i}
                  className="hover:scale-110 transition active:scale-105"
                >
                  <Link href={obj.hash}>{obj.name}</Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}

        {/* Subscribe button */}
        <Link 
          href={`${pathname === '/subscribe' ? '/' : checkPath === 'articles' ? '/' : '/subscribe' }`}
        >
          <button
            className="hidden sm:flex roup items-center gap-2
          bg-gray-100 lg:font-semibold text-lg
            isolation-auto border-gray-50 before:absolute before:w-full before:transition-all 
            before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
            before:bg-[#e5e1da] before:-z-10 before:aspect-square before:hover:scale-150 
            before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-4 rounded-full
            active:scale-90 group"
          >
            {pathname !== '/' ? 'Return' : 'Subscribe'}
            <Image
              src={ArrowLeft}
              width={16}
              height={16}
              alt="Register Icon"
              className="rotate-180 group-hover:rotate-0 transition"
            />
          </button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
