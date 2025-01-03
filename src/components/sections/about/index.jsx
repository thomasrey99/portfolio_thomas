import Title from "../title";
const skills = [
  "HTML",
  "CSS",
  "Javascritp",
  "Typescript",
  "React",
  "Next js",
  "Vite",
  "Angular",
  "Redux Toolkit",
  "Node",
  "SASS",
  "Tailwind css",
  "Next/ui",
  "Bootstrap",
  "Postgres SQL",
  "Sequelize",
  "Express",
];
const About = () => {
  return (
    <section className="bg-background p-[6rem]" id="About">
      <div className="max-w-[120rem] m-auto w-[92%]">
        <Title />
        <div className="grid grid-cols-1 gap-[10rem] lg:grid-cols-2">
          <div>
            <h3 className="font-bold text-[1.8rem] mb-[3rem]">
              Get to Know me
            </h3>
            <div className="mb-[4rem]">
              <p className="text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                I'm a <strong>web developer</strong> focused on solving problems
                and creating websites and web applications that lead to the
                success of your brand. Check out some of my work in the{" "}
                <strong>Projects</strong> section.
              </p>
              <p className="text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                As a developer, I'm always focused on improving my skills,
                optimizing my code, and learning new technologies. I enjoy being
                in constant professional evolution, participating in challenging
                projects that drive my growth and being part of teams with
                effective and collaborative communication. If you want to know
                more about me, look for me on my social networks{" "}
                <a
                  className="underline font-bold text-primary mx-[3px]"
                  rel="noreferrer"
                  href="https://instagram.com/rammcodes_"
                  target="_blank"
                >
                  Instagram
                </a>{" "}
                or
                <a
                  className="underline font-bold text-primary mx-[3px]"
                  rel="noreferrer"
                  href="https://linkedin.com/in/rammcodes"
                  target="_blank"
                >
                  Linkedin
                </a>
                .
              </p>
              <p className="text-[1.2rem] text-[#666] leading-[1.7] max-w-[60rem] mb-[1rem]">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience, don't hesitate to{" "}
                <strong>contact</strong> me.
              </p>
            </div>
            <a
              href="./#contact"
              className="cursor-pointer transform translate-y-[-3px] bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300"
            >
              Contact
            </a>
          </div>
          <div className="w-full">
            <h3 className="font-bold text-[1.8rem] mb-[3rem]">My skills</h3>
            <div className="flex flex-wrap">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="py-[0.5rem] px-[1.5rem] mb-[1rem] mr-[1rem] text-[1rem] bg-[rgba(153,153,153,0.2)] rounded-[5px] font-semibold text-[#666]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
