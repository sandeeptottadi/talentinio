import React from "react";
import styles from "./styles.module.css";
import logo from "../../Assets/header/talentiniologo.png";
import home from "../../Assets/header/home.svg";
import building from "../../Assets/header/building.svg";
import company from "../../Assets/header/company.svg";
import email from "../../Assets/header/email.svg";
import group from "../../Assets/header/group.svg";
import info from "../../Assets/header/info.svg";
import person from "../../Assets/header/person.svg";
import blog from "../../Assets/header/blog.svg";

export default function Header() {
  return (
    <div
      id="header"
      className={`w-full bg-[#2C2F38] text-white flex items-center p-2 flex-wrap relative ${styles.header}`}
    >
      <img src={logo} alt="logo" className="h-16 m-0" />
      <ul className="ml-auto flex flex-row text-sm flex-wrap">
        <li className="px-3 flex flex-row gap-1 items-center cursor-pointer hover:text-[#F2960D]">
          <img src={home} />
          Home
        </li>
        <li className="px-3 flex flex-row gap-1 items-center cursor-pointer hover:text-[#F2960D]">
          <img src={info} />
          Who We Are
        </li>
        <li className="px-3 flex flex-row gap-1 items-center cursor-pointer hover:text-[#F2960D]">
          <img src={group} />
          What We Do
        </li>
        <li className="px-3 flex flex-row gap-1 items-center cursor-pointer hover:text-[#F2960D]">
          <img src={company} />
          Companies
        </li>
        <li className="px-3 flex flex-row gap-1 items-center cursor-pointer hover:text-[#F2960D]">
          <img src={blog} />
          Blog
        </li>
        <li className="px-3 flex flex-row gap-1 items-center cursor-pointer hover:text-[#F2960D]">
          <img src={email} />
          Contact Us
        </li>
        <li className="px-4 flex flex-row gap-1 items-center p-2 ml-3 w-fit rounded-full bg-[#F2960D] cursor-pointer hover:bg-black">
          <img src={person} />
          <button className="">Job Seekers Login</button>
        </li>
        <li className="px-4 flex flex-row gap-1 items-center p-2 ml-3 w-fit rounded-full bg-[#1D9FF1] cursor-pointer hover:bg-black">
          <img src={building} />
          <button className="">Employers Login</button>
        </li>
      </ul>
    </div>
  );
}
