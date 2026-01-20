"use client";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import Title from "../title";
import SkillsCard from "./skillsCard";
import LegendItem from "./LegendItem";
import ContentWrapper from "@/components/contentWrapper";
import { t } from "@/libs/i18n";
import Link from "next/link";

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

const About = ({language}) => {
  const about = t(language, "about");
  const [searchTerm, setSearchTerm] = useState("");
  const [skills, setSkills] = useState([]);
  const filteredSkills = skills && skills?.filter((skill) =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  useEffect(() => {
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error loading skills:", error));
  }, []);
  const title = about.header.title;
  const sub = about.header.subtitle;
  return (
    <section id="about">
      <ContentWrapper>
        <Title title={title} sub={sub} />
        <div className="grid grid-cols-1 gap-[4rem] sm:gap-[10rem] lg:grid-cols-2">
          <div>
            <h3 className="font-bold text-[1.5rem] sm:text-[1.8rem] mb-[2rem] sm:mb-[4rem]">
              {about.about.title}
            </h3>
            <div className="mb-[2rem] sm:mb-[4rem]">
              <p className="text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                {about.about.info1}
              </p>
              <p className="text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                {about.about.info2}
              </p>
            </div>
            <Link
              href={`/${language}/#contact`}
              className="cursor-pointer bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:translate-y-[-3px]"
            >
              {about.about.contactButton}
            </Link>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[1.5rem] sm:text-[1.8rem]">
                {about.skill.title}
              </h3>
              <Input
                classNames={{
                  base: "max-w-full max-w-[10rem] sm:max-w-[15rem] h-8 sm:h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper: "h-full font-normal text-default-500",
                }}
                placeholder={about.skill.searchBarPlaceholder}
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap mt-[3rem]">
              {filteredSkills.map((item, index) => (
                <SkillsCard skill={item} key={item.name} />
              ))}
              {filteredSkills.length === 0 && (
                <p className="text-[1rem] text-[#666]">{about.skill.notFound}</p>
              )}
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-[0.95rem] text-[#666]">
              <LegendItem color="red" label={about.skill.skillTypes.programmingLanguages} />
              <LegendItem color="green" label={about.skill.skillTypes.frameworksLibraries}/>
              <LegendItem color="orange" label={about.skill.skillTypes.uIStyling} />
              <LegendItem color="yellow" label={about.skill.skillTypes.toolsDevOps} />
              <LegendItem color="purple" label={about.skill.skillTypes.databases} />
              <LegendItem color="blue" label={about.skill.skillTypes.softSkills} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default About;
