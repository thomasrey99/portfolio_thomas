import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
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
    <footer className="bg-black text-[#fff]">
      <div className="m-auto max-w-[120rem] w-[92%]">
        <div className="flex justify-between py-[6rem]">
          <div className="order-2">
            <h2 className="text-[1.4rem] uppercase tracking-[1px] font-bold">
              <span>Social</span>
            </h2>
            <div className="mt-[1rem] flex">
              {socials.map(({ social, url, icon }, index) => {
                return (
                  <a
                    href={url}
                    key={index}
                    className="mr-[1rem] cursor-pointer"
                  >
                    <span className="text-[1.5rem]">{icon}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="order-1 w-[40%] max-w-[50rem]">
            <h2 className="text-[1.4rem] uppercase tracking-[1px] font-bold">
              Thomas Rey
            </h2>
            <p className="mt-[1rem] text-[1rem]">
              "a web developer focused on solving problems and creating websites
              and web applications that lead to the success of your brand"
            </p>
          </div>
        </div>
        <div className="py-[2rem] border-t border-[#444] text-[#eee] text-[1.2rem] text-center">
          <p className="text-[0.7rem] text-white">
            <span>
              © Copyright {new Date().getFullYear()}. Made by{" "}
              <a href="https://www.linkedin.com/in/thomas-rey-39099021b/" target="blank" className="underline cursor-pointer font-bold ml-[2px]">Thomas Rey</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
