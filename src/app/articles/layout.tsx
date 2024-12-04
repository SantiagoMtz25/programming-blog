"use client";

import React from 'react'
import Image from "next/image";
import { blogCardsData } from "../..//../lib/data";
import { usePathname } from 'next/navigation';

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [data] = blogCardsData.filter((obj) => obj.link === pathname);

  return (
    <article className="w-full flex flex-col justify-start items-center">
      <div className="w-3/5 flex-grow">
        {/* Content header */}
        <div className="relative flex">
          <div className="h-56 w-full relative mb-2">
            <Image
              src={data.image}
              alt="Blogcard Image"
              layout="fill"
              objectFit="cover"
              className="rounded-b-md"
            />
          </div>
          <div className="h-16 bg-[#b3c8cf] absolute -bottom-6 left-0 right-0 
          w-3/5 justify-self-center rounded-md shadow-md flex flex-row justify-center items-center">
            <div className="grid grid-cols-3 justify-evenly w-full">
              <div className="flex flex-col justify-center items-center">
                <span className="text-slate-600">By:</span>
                <span className="font-serif">Santiago Mtz.</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-slate-600">Date:</span>
                <span className="font-serif">{data.date}</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-slate-600">Read</span>
                <span className="font-serif">{data.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </article>
  )
}

export default layout