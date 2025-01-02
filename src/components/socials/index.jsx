import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Socials = () => {
  const socials = [
    {
      social: "Linkedin",
      url: "",
      icon: <FaLinkedin />,
    },
    {
      social: "Instagram",
      url: "",
      icon: <FaSquareInstagram />,
    },
    {
      social: "Facebook",
      url: "",
      icon: <FaFacebook />,
    },
    {
      social: "Git Hub",
      url: "",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 bg-white shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] p-[0.5rem] hidden md:block">
      {socials.map(({ social, url, icon }, index) => {
        return (
          <div key={index} className="w-[4rem] h-[4rem]">
            <a
              href={url}
              className="block p-[1rem] transition-background duration-300 rounded-md items-center justify-center"
            >
              <span className="text-[2rem]">{icon}</span>{" "}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
