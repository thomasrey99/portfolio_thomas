"use client";
import { Avatar } from "@nextui-org/react";
import Menu from "./menu";
import { useState } from "react";
import Dropdown from "./menu/Dropdown";

const sections = ["Home", "About", "Projects", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full relative h-24 flex items-center justify-between bg-white px-10 py-5 z-10 shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-center gap-4">
        <Avatar size="lg" src="/profile.jpeg" />
        <h2 className=" cursor-pointer text-xl font-black text-fontItems hover:text-primary">
          THOMAS REY
        </h2>
      </div>
      <ul className="hidden md:flex items-center gap-4">
        {sections.map((section, index) => {
          return (
            <li
              key={index}
              className="text-base text-fontItems hover:text-primary font-semibold"
            >
              <a href={`#${section}`} className="p-9 inline-block cursor-pointer">{section}</a>
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
