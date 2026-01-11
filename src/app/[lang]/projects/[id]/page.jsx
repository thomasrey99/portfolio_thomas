"use client";
import CoverParticles from "@/components/particles";
import SkillsCard from "@/components/sections/about/skillsCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === id);
        setProject(found);
      })
      .catch(err => console.error("Error loading projects:", err));
  }, [id]);

  if (!project) return null;

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-screen home-background lg:bg-none w-full overflow-hidden mt-[6rem]"
        id={`project-${id}`}
      >
        <CoverParticles />

        <div className="absolute top-1/2 left-1/2 max-w-[90rem] w-[92%] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl sm:text-6xl uppercase tracking-[3px] text-[#111] font-extrabold">
            {project.name}
          </h1>

          <div className="mt-[2rem] sm:mt-[4rem]">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1"
            >
              View live
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="max-w-[120rem] m-auto w-[92%]">
          <div className="py-[8rem] max-w-[60rem] mx-auto">

            <img src={project.img} className="w-full mb-[6rem]" alt={project.name} />

            {/* OVERVIEW */}
            <div className="max-w-[50rem] mx-auto mb-[7rem]">
              <h2 className="mb-[3rem] font-bold text-[1.5rem] sm:text-[1.8rem]">
                Project overview
              </h2>

              <div className="text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7] space-y-4">
                {project.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div className="max-w-[50rem] mx-auto mb-[7rem]">
              <h2 className="mb-[3rem] font-bold text-[1.5rem] sm:text-[1.8rem]">
                Tools used
              </h2>

              <div className="flex flex-wrap">
                {project.tools.map(tool => (
                  <SkillsCard key={tool.name} skill={tool} />
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div className="max-w-[50rem] mx-auto">
              <h2 className="mb-[3rem] font-bold text-[1.5rem] sm:text-[1.8rem]">
                See live
              </h2>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  className="bg-primary text-white py-[0.8rem] px-[4rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1"
                >
                  Live link
                </a>

                <Link
                  href="/"
                  className="bg-white text-[#111] border-2 border-primary py-[0.8rem] px-[4rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1"
                >
                  Go back
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
