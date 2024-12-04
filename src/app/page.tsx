"use client";

import { filters } from "../../lib/data";
import { blogCardsData } from "../../lib/data";
import { motion } from "framer-motion";
import XDivider from "./components/x-divider";
import BlogCard from "./components/blogcard";
import { blogCardVariants } from "./components/blogcard";
import { useInView } from "framer-motion";
import React from "react";

export default function Home() {
  const portfolioRef = React.useRef(null);
  const isInView = useInView(portfolioRef, { once: true });

  return (
    <section className="w-full flex flex-col justify-start items-center">
      <div
        id="about"
        className="w-full bg-[#b3c8cf] py-12 flex flex-col items-center"
      >
        <motion.h1
          className="text-center text-4xl font-serif tracking-wider mb-4"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Programming Blog
        </motion.h1>
        <motion.p
          className="text-center text-lg w-[30rem]"
          initial={{ opacity: 0, x: +300 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Welcome to my programming blog, here is where I share my journey of
          learning, experimenting and coding. I&apos;ll talk about tools that
          have helped me, mistakes I&apos;ve made and projects I&apos;ve worked
          at. I'm sure that if you are a student like me you will find something
          useful :)
        </motion.p>
      </div>

      <div id="blog" className="w-3/5 flex-grow mt-4">
        <motion.div
          className="flex gap-3 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="font-light font-serif">Filter by:</p>
          {filters.map((filter, i) => (
            <p
              key={i}
              className="hover:scale-105 font-serif p-1 active:scale-95"
            >
              {filter.filter}
            </p>
          ))}
        </motion.div>
        <XDivider />

        {/* Blog cards */}
        <section className="flex flex-wrap justify-between mt-4 mb-4">
          {blogCardsData.map((blog, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={blogCardVariants}
            >
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                topics={blog.topics}
                readTime={blog.readTime}
                link={blog.link}
              />
            </motion.div>
          ))}
        </section>
      </div>

      {/* Contact */}
      <section
        id="related"
        className="w-full bg-[#b3c8cf] py-12 flex justify-center"
      >
        <div className="flex justify-between w-3/5">
          <motion.div 
            className="flex flex-col"
            ref={portfolioRef}
            initial={{ opacity: 0, x: -50 }}
            animate={ isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-xl font-serif">More of my work</h3>
            <p className="w-4/5 text-slate-700">
              If you would like to know more about me or my experience, I invite
              you to visit this website.
            </p>
          </motion.div>
          <motion.a 
            className='self-center bg-[#F1F0E8] px-6 py-1 rounded-md
            hover:scale-105 active:scale-100 font-serif'
            href="https://smv-alpha.vercel.app/" 
            target="_blank" 
            ref={portfolioRef}
            initial={{ opacity: 0,  }}
            animate={ isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5 }}
          >  
            Visit
          </motion.a>
        </div>
      </section>
    </section>
  );
}
