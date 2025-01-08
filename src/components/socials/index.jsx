import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Socials = () => {
  const socials = [
    {
      social: "Linkedin",
      url: "https://www.linkedin.com/in/thomas-rey-39099021b/",
      icon: <FaLinkedin />,
    },
    {
      social: "Instagram",
      url: "https://www.instagram.com/thomas_leonel_rey/",
      icon: <FaSquareInstagram />,
    },
    {
      social: "Facebook",
      url: "https://www.facebook.com/thomas.rey.942?mibextid=ZbWKwL",
      icon: <FaFacebook />,
    },
    {
      social: "Git Hub",
      url: "https://github.com/thomasrey99",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 bg-white shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] p-[0.5rem] hidden lg:block">
      {socials.map(({ social, url, icon }, index) => {
        return (
          <div
            key={index}
            className="w-[4rem] h-[4rem] rounded-md hover:bg-[rgba(120,2,233,0.2)] transition duration-300"
          >
            <Link
              href={url}
              target="blank"
              rel="noopener noreferrer"
              className="block p-[1rem] rounded-md items-center justify-center"
            >
              <span className="text-[2rem]">{icon}</span>{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
