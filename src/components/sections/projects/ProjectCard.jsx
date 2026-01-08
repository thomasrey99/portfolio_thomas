import Link from "next/link";

const ProjectCard = ({project}) => {
    return (
        <div
            id={`${project.id}`}
            className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] sm:gap-[5rem] mb-[4rem] sm:mb-[4rem] text-center md:text-left"
        >
            <div className="overflow-hidden">
                <img src={project.img} className="w-full h-auto object-cover" />
            </div>
            <div className="py-[2rem] flex flex-col justify-center items-center md:items-start">
                <h3 className="text-[2rem] mb-[1.5rem] font-bold">{project.name}</h3>
                <p className="text-[1rem] text-fontItems max-w-[60rem] leading-[1.7] mb-[2.5rem] break-words">
                    {project.sub}
                </p>
                <Link href={`/projects/${project.id}`} className="cursor-pointer bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[-3px]">
                    View details
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard