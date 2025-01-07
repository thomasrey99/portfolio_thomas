import Title from "../title";

const Projects = () => {
  const projects = [
    {
      name: "This portfolio",
      img: "/portfolio.jpg",
      description:
        "This is my portfolio, which is built with Next js, tailwind css, next UI and vanilla css",
    },
    {
      name: "Rick and Morty pedia",
      img: "/rk.jpg",
      description:
        "Application that uses the Rick and Morty API to explore characters and episodes, with search, filtering and user authentication functions.",
    },
    {
      name: "Las encinas boutique",
      img: "/encinas.jpg",
      description:
        "Chocolate trading platform with user and administrator profiles in which I collaborate and lead in the backend and front end.",
    },
  ];
  const title = "Projects";
  const sub =
    "In this section you will be able to explore some of my personal and collaborative projects, each developed with various technologies, reflecting my versatility and ability to adapt to different technical challenges.";
  return (
    <section className="p-[4rem] " id="Projects">
      <div className="max-w-[120rem] m-auto w-[92%]">
        <Title title={title} sub={sub} />
        <div>
          {projects.map(({ name, img, description }, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[5rem] mb-[8rem] text-center md:text-left"
              >
                <div className="overflow-hidden">
                  <img src={img} className="w-full h-auto object-cover" />
                </div>
                <div className="py-[2rem] flex flex-col justify-center items-center md:items-start">
                  <h3 className="text-[2rem] mb-[1.5rem] font-bold">{name}</h3>
                  <p className="text-[1rem] text-fontItems max-w-[60rem] leading-[1.7] mb-[2.5rem] break-words">
                    {description}
                  </p>
                  <a className="cursor-pointer bg-primary text-white p-[1rem_2rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform duration-300">
                    Details
                  </a>
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
