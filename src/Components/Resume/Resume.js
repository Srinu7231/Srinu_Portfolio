import React, { useState } from "react";
import Title from "../Layouts/Title";
import ResumeCard from "./ResumeCard";
import Education from "./Education";
import Skils from "./Skils";
import Experiance from "./Experiance";
import Achivements from "./Achivements";
export default function Resume() {

  const [tab,setTab] = useState("education")

  return (
    <section
    id="resume"
    className="w-full pb-20 border-b-[1px] border-b-black px-4 md:px-10"
  >
    {/* Title */}
    <div className="flex justify-center items-center text-center mt-5">
      <Title
        title={`${new Date().getFullYear() - 2022}+ Years Of Experience`}
        des={"My Resume"}
      />
    </div>

    {/* Tabs */}
    <div className="mt-10">
      <ul className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        <li
          className={`${
            tab === "education"
              ? "border-designColor rounded-lg"
              : "border-transparent"
          } resumeLi`}
          onClick={() => setTab("education")}
        >
          Education
        </li>
        <li
          className={`${
            tab === "skills"
              ? "border-designColor rounded-lg"
              : "border-transparent"
          } resumeLi`}
          onClick={() => setTab("skills")}
        >
          Professional Skills
        </li>
        <li
          className={`${
            tab === "exp"
              ? "border-designColor rounded-lg"
              : "border-transparent"
          } resumeLi`}
          onClick={() => setTab("exp")}
        >
          Experience
        </li>
        <li
          className={`${
            tab === "ach"
              ? "border-designColor rounded-lg"
              : "border-transparent"
          } resumeLi`}
          onClick={() => setTab("ach")}
        >
          Achievements
        </li>
      </ul>
    </div>

    {/* Tab Content */}
    <div className="mt-8">
      {tab === "education" && <Education />}
      {tab === "skills" && <Skils />}
      {tab === "exp" && <Experiance />}
      {tab === "ach" && <Achivements />}
    </div>
  </section>
  );
}
