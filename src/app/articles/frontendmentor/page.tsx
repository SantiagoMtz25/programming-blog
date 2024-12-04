"use client";

import Image from "next/image";
import React from "react";
import { blogCardsData } from "../../../../lib/data";
import fmheader from "../../../../public/frontendmentorheader.gif";
import fmfolders from "../../../../public/fmfolders.gif";
import fmfoldersopen from "../../../../public/fmfoldersopen.gif";
import fmrepo from "../../../../public/fmrepo.gif";
import fmlive from "../../../../public/fmlive.gif";
import fmexample from "../../../../public/desktop-design.jpg";
import html from "../../../../public/carbon.png";
import fonts from "../../../../public/carbon (1).png";
import root from "../../../../public/carbon (2).png";
import initial from "../../../../public/carbon (3).png";
import layout from "../../../../public/carbon (4).png";
import layout2 from "../../../../public/carbon (5).png";
import media from "../../../../public/carbon (6).png";
import { motion } from 'framer-motion'
import Paragraph from "@/app/components/paragraph";

const FrontendMasterArticle = () => {
  const data: (typeof blogCardsData)[number] = blogCardsData[0];

  return (
    <article className="w-full flex flex-col justify-start items-center mt-10">
      <section className="w-3/5">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-serif">{data.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600"
        >
          Frontend Mentor is a website dedicated to improving your frontend
          skills by building realistic projects. It consists of challenges where
          you will be required to write{" "}
          <span className="font-semibold">HTML, CSS,</span>
          and <span className="font-semibold">JavaScript</span> mainly for each
          challenge. The website also includes other sections such as learning
          paths, where they&apos;ll take you step by step with articles and
          challenges covering different topics going from basic to advanced.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-slate-600"
        >
          They have another section called solutions where you can view the
          solutions that other users have posted for their challenges; however,
          keep in mind that you must upload your solution for a specific
          challenge if you want to view the solutions. Another section called
          articles has community-written articles related to front-end topics. I
          recommend you check the entire website, but I am going to focus on the
          challenges section.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative w-full h-24 my-4"
        >
          <Image
            src={fmheader}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.div>

        {/* Animate its opacity as it appears in the viewport */}
        <Paragraph>
          A challenge is a small project where you are given a downloadable
          folder/bundle that contains the starting code. The content includes
          two folders: <span className="font-semibold">assets</span> and{" "}
          <span className="font-semibold">design</span>, that include fonts and
          images and the designs for different media layouts respectively. In
          the design folder, you can view the behavior certain elements will
          have, such as buttons, for example, when you hover on them.
        </Paragraph>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-80 my-4"
        >
          <Image
            src={fmfolders}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-72 my-4"
        >
          <Image
            src={fmfoldersopen}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.div>
        <Paragraph>
          In addition, you will get the main{" "}
          <span className="font-semibold">index.htm</span>l file, a{" "}
          <span className="font-semibold">.gitignore</span> file, and three
          basic text .md files: one for the{" "}
          <span className="font-semibold">README</span>, a{" "}
          <span className="font-semibold">README-template</span>, and a{" "}
          <span className="font-semibold">text file for the styles</span>. In
          the styles file, you will get information such as the colors to use or
          the media sizes in pixels for different layouts.
        </Paragraph>
        <Paragraph>
          <span className="font-serif underline">
            Your objective is to replicate the design as similar as possible.
          </span>
        </Paragraph>
        <Paragraph>
          <span className="font-semibold">
            Okay, but how is this going to make you master CSS?
          </span>{" "}
          These challenges are designs of real-world layouts, components, and
          websites that you could potentially end up coding as a front-end
          developer. You will be making newsletter sign-up forms, contact forms,
          product lists, grids, homepages, charts, dropdowns, galleries,
          dashboards, landing pages, and in more advanced ones, you will be
          working with JavaScript and APIs.
        </Paragraph>
        <Paragraph>
          You will be forced to put into practice important concepts of CSS such
          as{" "}
          <span className="font-semibold">
            Flexbox, Grids, and Media Queries
          </span>{" "}
          to achieve responsive and attractive layouts that look like the
          challenge designs. Other websites such as CSS Battle will challenge
          your CSS abilities; nevertheless, in Frontend Mentor, you are working
          with real-world examples while at the same time building your own
          components library.
        </Paragraph>
        <Paragraph>
          Finally, I will quickly walk you through how you can structure your
          solution with the following challenge example:
        </Paragraph>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-72 my-4"
        >
          <Image
            src={fmexample}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.div>
        <Paragraph>
          <span className="underline">
            We are required to create the design from above.
          </span>
        </Paragraph>
        
        <Paragraph>
          <span className="font-bold">1.</span> Write down the entire{" "}
          <span className="font-semibold">HTML</span> first, add class names
          to refer to the tags, and try to use tags as explicitly as possible,
          such as{" "}
          <span className="font-semibold">
            &lt;main&gt;, &lt;aside&gt;, &lt;section&gt;,
          </span>{" "}
          and so on.
        </Paragraph>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-72 my-4 "
        >
          <Image
            src={html}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.div>
        <Paragraph>
          <span className="font-semibold">
            <span className="font-bold">2.</span>Create a new CSS file
          </span>{" "}
          and link it to the HTML file.
        </Paragraph>
        <Paragraph>
          <span className="font-bold">3.</span>Import the fonts.
        </Paragraph>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-20 my-4 "
        >
          <Image
            src={fonts}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.div>
        <Paragraph>
          <span className="font-bold">4.</span>
          Declare the variables of the values you will be using in{" "}
          <span className="font-semibold">:root</span>.
        </Paragraph>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-60 my-4 "
        >
          <Image
            src={root}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.div>
        <Paragraph>
          <span className="font-bold">5.</span>Apply/reset the initial margin
          and padding for all elements.
        </Paragraph>
        <Paragraph>
          <span className="font-bold">6.</span>
          Specify the font-size, which rem will have its aspect ratio to, the
          scroll-behavior, and the font-family in the HTML tag. Remember that
          if later you need to change the font of an element, apply
          font-family to that element.
        </Paragraph>
        <motion.dev 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-[35rem] my-4 "
        >
          <Image
            src={initial}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.dev>
        <Paragraph>
          <span className="font-bold">7.</span>
          Start writing the CSS for the layout and distribution of the main
          elements.
        </Paragraph>
        <motion.dev 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-96 my-4 "
        >
          <Image
            src={layout}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.dev>
        <Paragraph>
          <span className="font-bold">8.</span>
          Later, apply secondary styles like sizes, colors, font weights, and
          so on.
        </Paragraph>
        <motion.dev 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-[28rem] my-4 "
        >
          <Image
            src={layout2}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.dev>
        <Paragraph>
          <span className="font-bold">9.</span>
          Once the component looks good on the laptop/desktop view, apply the
          media queries for the mobile and smaller device views. Consider that
          for smaller devices, the content might overflow the screen, so think
          about what changes you will have to make for some tags, like the
          HTML for the content to show.
        </Paragraph>
        <motion.dev 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-56 my-4 "
        >
          <Image
            src={media}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.dev>

        <Paragraph>
          As a personal recommendation, I&apos;d suggest putting all your
          challenges in the same repository. It&apos;s a more concise way to
          access them, and to view the results, install the VSCode Live Server
          extension to see changes live in your browser.
        </Paragraph>
        <motion.dev 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-80 my-4"
        >
          <Image
            src={fmrepo}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.dev>
        <motion.dev 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full h-72 my-4"
        >
          <Image
            src={fmlive}
            alt="Fm Header Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </motion.dev>

        <Paragraph>
          It&apos;s nice and useful to understand important CSS concepts, but
          once you feel confident, do not be scared to switch to Tailwind CSS.
          You will never want to use regular CSS again.
        </Paragraph>

        <Paragraph>
          Resources:{" "}
          <a
            className="underline"
            href="https://www.frontendmentor.io/home"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </Paragraph>
      </section>
    </article>
  );
};

export default FrontendMasterArticle;
