/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiLeetcode,
} from "react-icons/si";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoAndroid, IoLogoInstagram } from "react-icons/io";
import { GrApple } from "react-icons/gr";
import { BannerImg, naukriImg } from "../../images";

export default function Banner() {
  const [text] = useTypewriter({
    words: [
      "Proffessional Coder 👨‍💻",
      "MERN Stack Developer ⚛️🍃",
      "React Native Developer 🤳📱",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
  id="home"
  className="w-full min-h-screen py-20 flex flex-col md:flex-row border-b-[1px] border-b-black pt-20 px-6 md:px-20 mt-10"
>
  {/* Left Section */}
  <div className="w-full md:w-1/2 flex flex-col gap-10 md:gap-20">
    <div className="flex flex-col gap-5">
      <h4 className="text-base md:text-lg font-normal mt-10 text-center md:text-left">
        WELCOME TO MY WORLD
      </h4>
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">
        Hi, I'm
        <span className="text-designColor capitalize"> Srinu Dodda</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
        a <span>{text}</span>
        <Cursor
          cursorBlinking={true}
          cursorStyle="|"
          cursorColor="#ff014f"
        />
      </h2>
      <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide text-justify">
        Full-Stack Developer with expertise in React.js and Node.js,
        specializing in designing and building high-performance, scalable
        web and mobile applications. Adept at optimizing application
        performance and streamlining processes, with a deep understanding of
        efficient architecture and secure RESTful API integration. Committed
        to delivering innovative solutions and enhancing user experience
        through clean, maintainable code.
      </p>
    </div>
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div>
        <h1 className="text-center md:text-left">FIND ME IN</h1>
        <div className="flex justify-center md:justify-start gap-4 mt-3">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/srinu-dodda-phone-7286874152-gmail-srinudodda178"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
              className="flex justify-center"
            >
              <img
                className="w-[30px] md:w-[40%] h-[30px] md:h-[40%] object-cover rounded-lg"
                src={naukriImg}
                alt="contactImg"
              />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/srinu_dodda_/"
              target="_blank"
            >
              <IoLogoInstagram />
            </a>
          </span>
          <span className="bannerIcon">
          <a
              href="https://leetcode.com/u/srinu_231/"
              target="_blank"
            >
          <SiLeetcode />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-center md:text-left">
          BEST SKILL ON
        </h2>
        <div className="flex justify-center md:justify-start gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon flex items-center gap-1">
            <TbBrandReactNative />
            <IoLogoAndroid />
            <GrApple />
          </span>
          <span className="bannerIcon">
            <SiRedux />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
        </div>
        <div className="flex justify-center md:justify-start mt-4">
          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
    {/* Background Code */}
    <div className="absolute top-0 left-0 w-full h-full z-0 hidden md:block">
      <p className="text-white text-opacity-50 font-mono animate-pulse mt-10">
      {"const inspire = () => { console.log('Coding is not just about writing code, it's about solving problems.');" };
      </p>
    </div>

    {/* Image with Transparency and Bounce */}
    <img
      className="w-[300px] h-[280px] md:w-[500px] md:h-[480px] z-10 opacity-80 animate-slowBounce"
      src={BannerImg}
      alt="BannerImg"
    />
  </div>
</section>
  );
}
