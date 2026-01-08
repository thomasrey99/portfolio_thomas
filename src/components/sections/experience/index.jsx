"use client"
import { useEffect, useState } from "react";
import Title from "../title";
import ExperienceContent from "./ExperienceContent";

const Experience = () => {

  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    fetch("/experiences.json")
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error loading Experiences:", error));
  }, [])

  const title = "My experience";
  const sub = "Developer with real production experience, not just projects.";

  return (
    <section id="Experience" className="relative w-full mt-[6rem]">
      <div className="max-w-[120rem] mt-[6rem] m-auto w-[92%]">

        <Title title={title} sub={sub} />
        <div className="flex justify-center mt-20">
          {
            experiences
            &&
            <ExperienceContent experiences={experiences} />
          }
        </div>
      </div>
    </section>
  );
};

export default Experience;
