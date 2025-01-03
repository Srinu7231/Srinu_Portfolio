import React, { useState } from "react";
import { coder } from "../../images";
import "../../index.css";
import { navLinksdata } from "../../Constants";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container w-full h-24 z-20 fixed top-0 left-0 mx-auto px-6 font-titleFont border-b-[1px] border-b-gray-600 bg-black pl-[5%]">
      {/* Logo */}
      <div className="cursor-pointer">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <img src={coder} alt="logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} color="white" /> : <FiMenu size={28} color="white" />}
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-24 left-0 w-full bg-black md:relative md:top-auto md:left-auto md:block md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-end gap-6 md:gap-10 p-4 md:p-0  ">
          {navLinksdata.map((navlink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-red-600 duration-300"
              key={navlink?._id}
            >
              <Link
                activeClass="active"
                to={navlink?.Link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                {navlink?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
