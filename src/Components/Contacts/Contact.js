import React, { useState } from "react";
import Title from "../Layouts/Title";
import "../../index";
import { contactImage, naukriImg } from "../../images";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import emailjs from "emailjs-com";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const PUBLIC_KEY = "y8KKiwtySKuK4mRIT";
  const TEMPLATE_KEY = "template_dvu1666";
  const SERVICE_ID = "service_3cmof29";

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const resetError = () => {
    setErrMsg("");
    setSuccessMsg("");
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_KEY,
          {
            username,
            phoneNumber,
            email,
            subject,
            message,
          },
          PUBLIC_KEY
        )
        .then(
          (result) => {
            setSuccessMsg(
              `Thank you ${username}. Your message was sent successfully!`
            );
          },
          (error) => {
            alert("Failed to send email. Please try again.");
          }
        );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-full pb-24 border-b-[1px] border-b-black mt-5 margin-Horizontal"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Connect With Me" />
      </div>
      <div className="w-full mt-10  mb-20">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Contact Details Section */}
          <div className="lg:w-[35%] w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-2xl shadow-shadowOne ml-[2%] mb-10 lg:mb-0">
            <img
              className="w-full h-80 object-cover rounded-lg"
              src={contactImage}
              alt="contactImg"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold text-white mt-5">
                Srinu Dodda
              </h3>
              <p className="text-lg text-gray-400">
                MERN Stack + React Native Developer
              </p>
              <p className="text-base text-gray-400 tracking-wide">
                Experienced MERN Stack and React Native Developer, specializing
                in building dynamic web and mobile applications...
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+91 7286874152</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email:{" "}
                <span className="text-lightText">srinudodda178@gmail.com</span>
              </p>
              <div className="flex flex-col mt-5">
                <h1>FIND ME IN</h1>
                <div className="flex gap-4 mt-3">
                  <a
                    href="https://www.linkedin.com/in/srinu-dodda-phone-7286874152-gmail-srinudodda178"
                    target="_blank"
                    className="bannerIcon"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                    target="_blank"
                    className="bannerIcon"
                  >
                    <img
                      className="w-[40%] h-[40%] object-cover rounded-lg"
                      src={naukriImg}
                      alt="contactImg"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/srinu_dodda_/"
                    target="_blank"
                    className="bannerIcon"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href="https://leetcode.com/u/srinu_231/"
                    target="_blank"
                    className="bannerIcon"
                  >
                    <SiLeetcode />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-[60%] w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-1g shadow-shadowOne">
            <form className="w-full">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    YOUR NAME
                  </p>
                  <input
                    onChange={(e) => {
                      setUsername(e?.target?.value);
                      resetError();
                    }}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e?.target?.value);
                      resetError();
                    }}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
                  Email
                </p>
                <input
                  onChange={(e) => {
                    setEmail(e?.target?.value);
                    resetError();
                  }}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" ||
                    (errMsg === "Give a valid Email!" && "outline-designColor")
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
                  Subject
                </p>
                <input
                  value={subject}
                  onChange={(e) => {
                    setSubject(e?.target?.value);
                    resetError();
                  }}
                  className={`${
                    errMsg === "Please give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
                  Message
                </p>
                <textarea
                  onChange={(e) => {
                    setMessage(e?.target?.value);
                    resetError();
                  }}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols={"30"}
                  rows={"10"}
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
