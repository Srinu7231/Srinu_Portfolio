import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'
export default function Experiance() {
  return (
          <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.5}}} className="flex justify-center items-center">
                {/* <div>
                  <div className="py-12 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">
                      Features
                    </p>
                    <h2 className="text-4xl font-bold">Frontend</h2>
                  </div>
                </div> */}
                <div>
                  <div className="py-12 font-titleFont">
                    <p className="text-sm text-designColor tracking-[4px]">
                      From Feb, 2022
                    </p>
                    <h2 className="text-4xl font-bold">Professional Experiance</h2>
                  </div>
                  <div className="mt-10 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                      title="TATA Consultancy Services"
                      subTitle="Software Developer"
                      result="June, 2022 - Present"
                      des="React Native, React.js, Node.js, Express.js, Firestore"
                    />
                    <ResumeCard
                      title="TATA Consultancy Services"
                      subTitle="Software Developer - Intern"
                      result="Feb, 2022 - May, 2022"
                      des="JavaScript, HTML, CSS"
                    />
                  </div>
                </div>
              </motion.div>
  )
}
