"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] =
    React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");

  return (
    <motion.div 
      className="flex flex-col items-center light py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Subscribe</h2>
        <p className="text-slate-600 mb-4">
          Would you like to be notified when a new article is posted? Register
          with your email and you will be notified when something new comes up.
        </p>

        <form className="flex flex-col">
          <input
            type="email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Subscribe
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <a
            className="text-sm text-gray-600 hover:underline cursor-pointer"
            onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <AnimatePresence>
        {showPrivacyPolicy && (
          <motion.div
            className="max-w-md"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            key="modal"
          >
            <p className="text-slate-600 my-4">
              If you decide tu subscribe with your email, you will only receive
              notifications in regard with new articles or new functionalities
              withing and only within this website.
            </p>
            <p className="text-slate-600 mb-4">
              Your email will be kept private and not be shared to third
              parties, nor you will receive any sort of advertising.
            </p>
            <p className="text-slate-600">
              If you wish to be removed from the notification lists please click on{' '}
              <span className="font-semibold hover:underline cursor-pointer">cancel.</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;
