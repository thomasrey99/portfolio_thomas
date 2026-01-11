"use client"
import CoverParticles from "@/components/particles";
import Socials from "@/components/socials";
import Weather from "@/components/weather";
import { t } from "@/libs/i18n";

const Home = ({ language }) => {
  const home = t(language, "home");
  return (
    <section
      className="relative h-screen home-background lg:bg-none w-full overflow-hidden mt-[6rem]"
      id="home"
    >
      {/* Las partículas solo ocupan el fondo de este contenedor */}
      <CoverParticles />
      <Weather />
      <div className="absolute top-1/2 left-1/2 max-w-[90rem] w-[92%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl sm:text-6xl uppercase tracking-[3px] text-center text-[#111] font-extrabold">
          {home.title}
        </h1>
        <div className="mt-[2rem] sm:mt-[4rem] mx-auto max-w-[60rem]">
          <p className="text-fontItems text-[1.2rem] sm:text-[1.5rem] text-center w-full leading-[1.6]">
            {home.subtitle}
          </p>
        </div>
        <div className="mt-[2rem] sm:mt-[4rem] text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer bg-primary text-white py-[0.8rem] px-[3rem] text-[1rem] uppercase tracking-[1px] inline-block font-bold rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:translate-y-[-3px]"
          >
            {home.viewButton}
          </button>
        </div>
      </div>
      <Socials />
    </section>
  );
};


export default Home;
