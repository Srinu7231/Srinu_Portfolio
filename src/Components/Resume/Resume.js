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
      className="w-full pb-20 border-b-[1px] border-b-black margin-Horizontal"
    >
      <div className="flex justify-center items-center text-center mt-5">
        <Title title={(parseInt(new Date().getFullYear()) - parseInt(2022)).toString()+ "+ Years Of Experiance"} des={"My Resume"} />
      </div>
      <div className="mt-10">
        <ul className="w-full grid grid-cols-4">
          <li className={`${tab == "education"?"border-designColor rounded-lg":"border-transparent"} resumeLi`} onClick={()=>setTab("education")} >Education</li>
          <li className={`${tab == "skills"?"border-designColor rounded-lg":"border-transparent"} resumeLi`} onClick={()=>setTab("skills")}>Professional Skills</li>
          <li className={`${tab == "exp"?"border-designColor rounded-lg":"border-transparent"} resumeLi`} onClick={()=>setTab("exp")}>Experience</li>
          <li className={`${tab == "ach"?"border-designColor rounded-lg":"border-transparent"} resumeLi`} onClick={()=>setTab("ach")}>Achievements</li>
        </ul>
      </div>
      {tab == "education" && <Education/>}
      {tab == "skills" && <Skils/>}
      {tab == "exp" && <Experiance/>}
      {tab == "ach" && <Achivements/>}
    </section>
  );
}
