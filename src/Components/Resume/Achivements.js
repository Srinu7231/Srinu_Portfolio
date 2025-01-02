import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import { achievementsList } from "../../Constants";

export default function Achivements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex justify-center"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            Responsibilities
          </p>
          <h2 className="text-4xl font-bold">Achivements</h2>
        </div>
        <div className="mt-10 w-full border-opacity-30 flex flex-col gap-10">
          <div className="w-full h-full group flex">
            {/* <div className="w-10 h-[6px] bgOpacity mt-16 relative">
              <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
              </span>
            </div> */}
            <div className="w-full bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 md:p-12 shadow-lg transition-all duration-300 hover:shadow-2xl">
              {achievementsList?.map((ele, index) => (
                <div key={index} className="flex items-start gap-4 mt-5">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-300 text-base leading-relaxed font-medium hover:text-white transition-colors">
                    {ele}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
