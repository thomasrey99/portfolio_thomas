"use client";
import { Avatar } from "@nextui-org/react";
import Menu from "./menu";
import { useState } from "react";
import Dropdown from "./menu/Dropdown";
import Link from "next/link";

const sections = ["Home", "About","Experience", "Education", "Projects", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full z-10 fixed top-0 h-24 flex items-center justify-between bg-white px-5 md:px-10 py-[1rem] md:py-5 z-10 shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-center gap-4">
        <div className="hidden md:block">
          <Avatar size="lg" src="/profile.jpeg" />
        </div>
        <div className="block md:hidden">
          <Avatar size="md" src="/profile.jpeg" />
        </div>
        <h2 className=" cursor-pointer text-[1rem] lg:text-xl font-black text-fontItems hover:text-primary">
          <Link href={"https://www.linkedin.com/in/thomas-rey-39099021b/"}>
            THOMAS REY
          </Link>
        </h2>
      </div>
      <ul className="hidden md:flex items-center gap-4">
        {sections.map((section, index) => {
          return (
            <li
              key={index}
              className="text-base text-fontItems transition-all duration-300 hover:text-primary"
            >
              <Link
                href={`${section === "Home" ? "/" : `/#${section}`}`}
                className="p-[1.8rem] uppercase inline-block cursor-pointer font-bold text-[0.9rem] lg:text-[1rem]"
              >
                {section}
              </Link>
            </li>
          );
        })}
      </ul>
      <Menu handleOpenChange={handleOpenChange} />
      <Dropdown isOpen={isOpen} sections={sections} />
    </header>
  );
};

export default Header;
