import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion"
export default function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.5}}} className="flex justify-center">
        <div>
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2015 - 2022
            </p>
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="mt-10 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="MVGR College of Engineering"
              subTitle="B.Tech (2018 - 2022)"
              result=" 83.8 %"
              des="Electrical and Electronics Engineering"
            />
            <div>
              
            </div>
            <ResumeCard
              title="Jawahar Navodaya Vidyalaya, Bagalore"
              subTitle="+2 (2016 - 2018)"
              result=" 86.2 %"
              des="Math Phisics Chemistry"
            />
            <ResumeCard
              title="Jawahar Navodaya Vidyalaya, Kilthampalem"
              subTitle="10th (2015 - 2016)"
              result=" 87.4 %"
              des="Science"
            />
          </div>
        </div>
        <div>
        </div>
      </motion.div>
  )
}
