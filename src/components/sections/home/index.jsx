import CoverParticles from "@/components/particles";
import Socials from "@/components/socials";
import Weather from "@/components/weather";

const Home = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden mt-[6rem]" id="Home">
      <CoverParticles />
      <Weather />
      <div className="absolute top-1/2 left-1/2 max-w-[90rem] w-[92%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl uppercase tracking-[3px] text-center text-[#111] font-extrabold">
          Hi!, I'm Thomas Rey
        </h1>
        <div className="mt-[3rem] mx-auto max-w-[60rem]">
          <p className="text-fontItems text-[1.5rem] text-center w-full leading-[1.6]">
            A web developer focused on solving problems and creating websites
            and web applications that lead to the success of your brand.
          </p>
        </div>
        <div className="mt-[4rem] text-center">
          <a className="bg-primary cursor-pointer text-white uppercase tracking-[1px] inline-block font-bold rounded-md shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] transition-transform duration-300 py-[0.8rem] px-[4rem] text-[1.2rem]">
            Projects
          </a>
        </div>
      </div>
      <div className="mouse-cont">
        <div className="mouse"></div>
      </div>
      <Socials />
    </section>
  );
};

export default Home;
