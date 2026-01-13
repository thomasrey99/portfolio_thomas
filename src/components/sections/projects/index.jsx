"use client"
import { useEffect, useState } from "react";
import Title from "../title";
import ProjectCard from "./ProjectCard";
import ContentWrapper from "@/components/contentWrapper";
import { t } from "@/libs/i18n";

const Projects = ({language}) => {
  const traduction=t(language, "projects");
  const title = "Projects";
  const sub = "In this section you will be able to explore some of my personal and collaborative projects, each developed with various technologies, reflecting my versatility and ability to adapt to different technical challenges.";
  return (
    <section id="projects">
      <ContentWrapper>
        <Title title={traduction.section.title} sub={traduction.section.subtitle} />
        <div>
          {traduction.projects && traduction.projects.map((project, index) => {
            return (
              <ProjectCard project={project} language={language} key={index} />
            );
          })}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Projects;
