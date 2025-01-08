"use client"
import { useEffect, useState } from "react";
import Title from "../title";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);
  const title = "Projects";
  const sub =
    "In this section you will be able to explore some of my personal and collaborative projects, each developed with various technologies, reflecting my versatility and ability to adapt to different technical challenges.";
  return (
    <section className="p-[0.8rem] sm:p-[4rem]" id="Projects">
      <div className="max-w-[120rem] mt-[6rem] m-auto w-[92%]">
        <Title title={title} sub={sub} />
        <div>
          {projects && projects.map(({ id, name, img, description }, index) => {
            return (
              <div
                key={index}
                id={`${id}`}
                className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] sm:gap-[5rem] mb-[4rem] sm:mb-[8rem] text-center md:text-left"
              >
                <div className="overflow-hidden">
                  <img src={img} className="w-full h-auto object-cover" />
                </div>
                <div className="py-[2rem] flex flex-col justify-center items-center md:items-start">
                  <h3 className="text-[2rem] mb-[1.5rem] font-bold">{name}</h3>
                  <p className="text-[1rem] text-fontItems max-w-[60rem] leading-[1.7] mb-[2.5rem] break-words">
                    {description}
                  </p>
                  <Link href={`/projects/${id}`} className="cursor-pointer bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[-3px]">
                    View details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
