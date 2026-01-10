"use client"
import { useEffect, useState } from "react";
import Title from "../title";
import ExperienceContent from "./ExperienceContent";
import ContentWrapper from "@/components/contentWrapper";

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
    <section id="Experience">
      <ContentWrapper>

        <Title title={title} sub={sub} />
        <div className="flex justify-center">
          {
            experiences
            &&
            <ExperienceContent experiences={experiences} />
          }
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Experience;
