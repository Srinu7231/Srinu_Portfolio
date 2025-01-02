import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import "../../index";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiSpringboot, SiMongodb } from "react-icons/si";

export default function Skills() {
  function SkillBar({ skill }) {
    const { name, icon, percentage } = skill;
    return (
      <div className="mt-5 overflow-x-hidden">
        <div className="flex items-center gap-2 text-sm uppercase font-medium gap-3">
          <span className="text-xl">{icon}</span> {name}
        </div>
        <span className="w-full h-2 bg-opacity-20 bg-gray-400 inline-flex rounded-md mt-2">
          <motion.span
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-blue-600 via-pink-500 via-yellow-500 to-green-500 rounded-md relative"
            style={{ width: `${percentage}%` }}
          >
            <span className="absolute -top-7 right-0">{percentage}%</span>
          </motion.span>
        </span>
      </div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex justify-between gap-10"
    >
      {/* Frontend Skills */}
      <div className="w-full md:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Frontend</h2>
        </div>
        <div className="mt-10">
          {[
            { name: "React Native", icon:<span className="w-12 h-12 bannerIcon"><FaReact /></span> , percentage: 100 },
            { name: "React.js", icon: <span className="w-12 h-12 bannerIcon"><FaReact /></span>, percentage: 100 },
            { name: "JavaScript", icon: <span className="w-12 h-12 bannerIcon"><SiJavascript /></span>, percentage: 100 },
            { name: "HTML + CSS", icon: <span className="w-12 h-12 bannerIcon"><SiHtml5 /></span>, percentage: 100 },
          ].map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Backend + DB Skills */}
      <div className="w-full md:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Backend + DB</h2>
        </div>
        <div className="mt-10">
          {[
            { name: "Node.js + Express.js", icon: <span className="w-12 h-12 bannerIcon"><FaNodeJs /></span>, percentage: 100 },
            { name: "Python", icon: <span className="w-12 h-12 bannerIcon"><FaPython /></span>, percentage: 90 },
            { name: "Java Spring Boot", icon:<span className="w-12 h-12 bannerIcon"><SiSpringboot /></span>, percentage: 80 },
            { name: "MongoDB", icon: <span className="w-12 h-12 bannerIcon"><SiMongodb /></span>, percentage: 100 },
          ].map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}


