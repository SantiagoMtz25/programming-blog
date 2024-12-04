"use client";

import React from "react";
import { blogCardsData } from "../../../../lib/data";
import Paragraph from "@/app/components/paragraph";
import { motion } from "framer-motion";

const DeactivateCopilotArticle = () => {
  const data: (typeof blogCardsData)[number] = blogCardsData[0];

  return (
    <article className="w-full flex flex-col justify-start items-center mt-10">
      <section className="w-3/5">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-serif"
        >
          {data.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-600"
        >
          I tried Copilot for the first time about a year ago, I was surprised
          about how good it can be sometimes in understanding the context of the
          code that you are writing and give you suggestions to autocomplete the
          rest of the code that you are typing.{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-slate-600"
        >
          Other features such as writing prompts on code or using it as a
          chatbot are useful, though not as good in my opinion as using other AI
          tools such as ChatGPT, Gemini or Claude AI.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-slate-600"
        >
          Definitively Copilot helps speed up development considerably. However,
          after utilizing it for almost a year I have realized that it has not
          been the best decision. The problem relies in the fact that you are
          not really coding most of the time.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-slate-600"
        >
          I found myself that I was not even coding common methods in JavsScript
          such as .map() or .filter() in React. Though, those methods are not
          extremely complicated I should be doing it. Also, we tend to forget
          that AI-generated code has still quality and reliability concerns, we
          trust every single AI response without even reading it, verifying its
          correctness, or often not understanding it.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-slate-600"
        >
          Before initiating this blog project, I decided to stop paying ChatGPT
          plus and Copilot, sure it took me a bit longer to complete, however I
          gave in the time to read the documentation of tools I used such as
          Framer Motion, and in my opinion most importantly debugging and
          troubleshooting myself, though by doing the project myself I made in
          general less mistakes and delt with less errors.{" "}
        </motion.p>

        <Paragraph>
          After this I am not closing doors on using AI ever again, I still
          believe they are good tools that are here to stay, but surely as
          student trying to get better I have changed the way I approach coding.
        </Paragraph>
      </section>
    </article>
  );
};

export default DeactivateCopilotArticle;
