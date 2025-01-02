import React from "react";
import { coder} from "../../images";
import "../../index.css";
import { navLinksdata } from "../../Constants";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-full h-24 z-20 fixed top-0 left-0 mx-auto px-6 flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 margin-Horizontal bg-black">
      <div className="cursor-pointer">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}><img src={coder} alt="logo" className="logo" /></Link>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navlink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-red-600 duration-300"
              key={navlink?._id}
            >
            <Link activeClass="active" to={navlink?.Link} spy={true} smooth={true} offset={-70} duration={500}>{navlink?.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
