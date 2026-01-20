"use client";
import SkillsCard from "@/components/sections/about/skillsCard";
import { t } from "@/libs/i18n";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { id, lang } = useParams();
  const traduction = t(lang, "projects");
  const project = traduction.projects.filter((project) => project.id == id)[0]

  return (
    <>

      {/* CONTENT */}
      <section>
        <div className="max-w-[120rem] m-auto w-[92%]">
          <div className="py-[8rem] max-w-[60rem] mx-auto">

            <img src={project.img} className="w-full mb-[6rem]" alt={project.name} />

            {/* OVERVIEW */}
            <div className="max-w-[50rem] mx-auto mb-[7rem]">
              <h2 className="mb-[3rem] font-bold text-[1.5rem] sm:text-[1.8rem]">
                {
                  traduction.individual.projectOverviewTitle
                }
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
                {
                  traduction.individual.toolsTitle
                }
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
                {
                  traduction.individual.linksTitle
                }
              </h2>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  className="bg-primary text-white py-[0.8rem] px-[4rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1"
                >
                  {
                  traduction.individual.buttons.liveButton
                }
                </a>

                <Link
                  href={`/${lang}/`}
                  className="bg-white text-[#111] border-2 border-primary py-[0.8rem] px-[4rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-1"
                >
                  {traduction.individual.buttons.backButton  }
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
