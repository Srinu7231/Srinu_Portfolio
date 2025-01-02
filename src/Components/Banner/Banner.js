/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
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
      className="w-full h-[800px] py-20 flex border-b-[1px] border-b-black pt-20 pl-20 mt-10"
      // style="background-image: url('../../images/banner-bg.png'); background-size: cover; background-position: center;"
    >
      {/* <div className="margin-Horizontal"></div> */}
      <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal mt-10">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor capitalize"> Srinu Dodda</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Full-Stack Developer with expertise in React.js and Node.js,
            specializing in designing and building high-performance, scalable
            web and mobile applications. Adept at optimizing application
            performance and streamlining processes, with a deep understanding of
            efficient architecture and secure RESTful API integration. Committed
            to delivering innovative solutions and enhancing user experience
            through clean, maintainable code.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h1>FIND ME IN</h1>
            <div className="flex gap-4 mt-3">
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
                    className="w-[40%] h-[40%] object-cover rounded-lg "
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
              {/* <span className="bannerIcon">
                <FaTwitter />
              </span> */}
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
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
            <div className="flex mt-4">
              <span className="bannerIcon">
                <SiMongodb />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 mt-28 pl-12 pt-8">
        {/* Background Code */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <p className="text-white text-opacity-50 font-mono animate-pulse">
            {`const example = () => { console.log("Let's Make world better with Coding"); };`}
          </p>
        </div>

        {/* Image with Transparency and Bounce */}
        <img
          className="w-[500px] h-[480px] z-10 opacity-80 animate-slowBounce"
          src={BannerImg}
          alt="BannerImg"
        />
      </div>
    </section>
  );
}
