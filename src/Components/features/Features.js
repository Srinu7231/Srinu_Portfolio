import React from 'react'
import Title from '../Layouts/Title'
import Card from '../Layouts/Card'
import { FaMobile } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { SiAntdesign } from 'react-icons/si'
import { CiMobile3 } from 'react-icons/ci'

export default function Features() {
  return (
    <section
    id="features"
    className="w-full border-b-[1px] border-b-black mt-5 px-4 md:px-10"
  >
    {/* Title */}
    <Title title={"Features"} des={"What I Do ?"} />
    
    {/* Cards Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-10">
      {/* Mobile Development */}
      <Card
        title="Mobile Development"
        des="Building high-performance mobile applications using React Native and other cutting-edge technologies. Focused on creating scalable, responsive, and feature-rich apps for seamless user experiences across iOS and Android."
        icon={<CiMobile3 />}
      />

      {/* Web Development */}
      <Card
        title="Web Development"
        des="Crafting dynamic, responsive, and scalable web solutions using React.js, Node.js, and modern frameworks. Specializing in delivering user-centric designs with robust back-end integrations for exceptional performance."
        icon={<CgWebsite />}
      />

      {/* UI/UX Design */}
      <Card
        title="UI/UX Design"
        des="Designing intuitive user interfaces and experiences that enhance engagement and accessibility. Combining aesthetics with functionality to create visually stunning and user-friendly digital products."
        icon={<SiAntdesign />}
      />
    </div>
  </section>
  )
}
