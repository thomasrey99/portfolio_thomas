"use client";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import Title from "../title";

const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const About = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [skills, setSkills] = useState([]);
  const filteredSkills =skills&&skills?.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  )
  useEffect(() => {
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error loading skills:", error));
  }, []);
  const title = "About me";
  const sub =
    "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology";
  return (
    <section className="bg-background p-[0.8rem] sm:p-[4rem]" id="About">
      <div className="max-w-[120rem] mt-[6rem] m-auto w-[92%]">
        <Title title={title} sub={sub} />
        <div className="grid grid-cols-1 gap-[4rem] sm:gap-[10rem] lg:grid-cols-2">
          <div>
            <h3 className="font-bold text-[1.5rem] sm:text-[1.8rem] mb-[2rem] sm:mb-[4rem]">
              Get to Know me
            </h3>
            <div className="mb-[2rem] sm:mb-[4rem]">
              <p className="text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                I'm a <strong>web developer</strong> focused on solving problems
                and creating websites and web applications that lead to the
                success of your brand. Check out some of my work in the{" "}
                <strong>Projects</strong> section.
              </p>
              <p className="text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                As a developer, I'm always focused on improving my skills,
                optimizing my code, and learning new technologies. I enjoy being
                in constant professional evolution, participating in challenging
                projects that drive my growth and being part of teams with
                effective and collaborative communication.
              </p>
            </div>
            <a
              href="./#Contact"
              className="cursor-pointer bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:translate-y-[-3px]"
            >
              Contact
            </a>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[1.5rem] sm:text-[1.8rem]">
                My skills
              </h3>
              <Input
                classNames={{
                  base: "max-w-full max-w-[10rem] sm:max-w-[15rem] h-8 sm:h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper: "h-full font-normal text-default-500",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap mt-[3rem]">
              {filteredSkills.map((item, index) => (
                <div
                  key={index}
                  className="py-[0.3rem] px-[1.3rem] mb-[1rem] mr-[1rem] sm:py-[0.5rem] sm:px-[1.5rem] sm:mb-[1rem] sm:mr-[1rem] text-[1rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold text-[#666]"
                >
                  {item}
                </div>
              ))}
              {filteredSkills.length === 0 && (
                <p className="text-[1rem] text-[#666]">No skills found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
