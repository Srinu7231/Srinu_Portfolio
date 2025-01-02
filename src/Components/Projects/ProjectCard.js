import React from "react";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({ title, des, src,link ="https://github.com/" }) {
  return (
    <div
      className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
          <div>
            <span className="text-1g w-10 h-10 rounded-full justify-center items-center text-gray-400 bg-black inline-flex hover: text-designColor duration-500 cursor-pointer">
              <a href={`${link}`} target="_blank"><BsGithub /></a>
            </span>
            {/* <span
            className="text-lg w-10 h-10 rounded-full justify-center items-center text-gray-400 bg-black inline-flex hover: text-designColor duration-500 cursor-pointer"
          >
            <FaGlobe />
          </span> */}
          </div>
        </div>
        <p className="test-sm tracking-wide mt-3 hover:test-gray-100  duration-300">{des}</p>
      </div>
    </div>
  );
}
