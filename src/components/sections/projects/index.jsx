"use client"
import { useEffect, useState } from "react";
import Title from "../title";
import ProjectCard from "./ProjectCard";

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
    <section className="p-[0.8rem] sm:p-[4rem]" id="Projects">
      <div className="max-w-[120rem] mt-[6rem] m-auto w-[92%]">
        <Title title={title} sub={sub} />
        <div>
          {projects && projects.map((project, index) => {
            return (
              <ProjectCard project={project} key={index}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
