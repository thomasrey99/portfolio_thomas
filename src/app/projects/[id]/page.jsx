"use client";
import CoverParticles from "@/components/particles";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const project = data.find((project) => project.id === id);
        setProject(project);
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, []);
  return (
    <>
      <section
        className="relative h-screen home-background lg:bg-none w-full overflow-hidden mt-[6rem]"
        id={`project-${id}`}
      >
        <CoverParticles />
        <div className="absolute z-10 top-1/2 left-1/2 max-w-[90rem] w-[92%] transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl sm:text-6xl uppercase tracking-[3px] text-center text-[#111] font-extrabold">
            {project?.name}
          </h1>
          <div className="mt-[2rem] sm:mt-[4rem] mx-auto max-w-[60rem]">
            {project &&
              project?.description?.map((paragraph, index) => {
                return (
                  <p key={index} className=" text-fontItems text-[1.2rem] sm:text-[1.5rem] text-center w-full leading-[1.6]">
                    {paragraph}
                  </p>
                );
              })}
          </div>
          <div className="mt-[2rem] sm:mt-[4rem] text-center">
            <a
              href={project?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:translate-y-[-3px]"
            >
              View live
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[120rem] m-auto w-[92%]">
          <div className="py-[8rem] max-w-[60rem] mx-auto">
            <div className="w-[100%] mb-[6rem]">
              <img src={project?.img} className="w-[100%]" />
            </div>
            <div className="max-w-[50rem] w-full m-auto">
              <div className="mb-[7rem]">
                <h2 className="mb-[3rem] font-bold text-[1.5rem] sm:text-[1.8rem]">
                  Project overview
                </h2>
                <p className="text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                  {project?.description}
                </p>
              </div>
              <div className="mb-[7rem]">
                <h2 className="mb-[3rem] font-bold text-[1.5rem] sm:text-[1.8rem]">
                  Tools used
                </h2>
                <div className="flex flex-wrap">
                  {project &&
                    project?.tools?.map((item, index) => (
                      <div
                        key={index}
                        className="py-[0.3rem] px-[1.3rem] mb-[1rem] mr-[1rem] sm:py-[0.5rem] sm:px-[1.5rem] sm:mb-[1rem] sm:mr-[1rem] text-[1rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold text-[#666]"
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
              <div className="m-0">
                <h2 className="mb-[3rem] font-bold text-[1.5rem] sm:text-[1.8rem]">
                  See live
                </h2>
                <a
                  href={project?.url}
                  target="blank"
                  className="cursor-pointer bg-primary text-[#fff] py-[0.8rem] px-[4rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:translate-y-[-3px] sm:mt-[1rem] sm:mr-[2rem]"
                >
                  Live link
                </a>
                <Link
                  href={"/"}
                  target="blank"
                  className="cursor-pointer bg-[#fff] text-[#111] border-2 border-primary py-[0.8rem] px-[4rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:translate-y-[-3px] mt-[1rem] sm:mr-[2rem]"
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
