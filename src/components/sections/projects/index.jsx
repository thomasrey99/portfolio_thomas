"use client"
import { useEffect, useState } from "react";
import Title from "../title";
import ProjectCard from "./ProjectCard";
import ContentWrapper from "@/components/contentWrapper";

const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);
  const title = "Projects";
  const sub = "In this section you will be able to explore some of my personal and collaborative projects, each developed with various technologies, reflecting my versatility and ability to adapt to different technical challenges.";
  return (
    <section id="Projects">
      <ContentWrapper>
        <Title title={title} sub={sub} />
        <div>
          {projects && projects.map((project, index) => {
            return (
              <ProjectCard project={project} key={index} />
            );
          })}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Projects;
