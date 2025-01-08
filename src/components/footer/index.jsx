import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
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
    <footer className="bg-black text-[#fff]">
      <div className="m-auto max-w-[120rem] w-[92%] px-[1rem]">
        <div className="flex flex-col sm:flex-row justify-between py-[3rem] sm:py-[5rem]">
          <div className="order-1 sm:order-2">
            <h2 className="text-[1.4rem] uppercase tracking-[1px] font-bold">
              <span>Social</span>
            </h2>
            <div className="mt-[1rem] flex">
              {socials.map(({ social, url, icon }, index) => {
                return (
                  <Link
                    href={url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-[1rem] cursor-pointer"
                  >
                    <span className="text-[1.5rem]">{icon}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="order-2 w-full mt-[3rem] sm:mt-0 sm:order-1 sm:w-[40%] sm:max-w-[50rem]">
            <h2 className="text-[1.4rem] uppercase tracking-[1px] font-bold">
              Thomas Rey
            </h2>
            <p className="mt-[1rem] text-[1rem]">
              "A web developer focused on solving problems and creating websites
              and web applications that lead to the success of your brand"
            </p>
          </div>
        </div>
        <div className="py-[2rem] border-t border-[#444] text-[#eee] text-[1.2rem] text-center">
          <p className="text-[0.7rem] text-white">
            <span>
              © Copyright {new Date().getFullYear()}. Made by{" "}
              <a
                href="https://www.linkedin.com/in/thomas-rey-39099021b/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline cursor-pointer font-bold ml-[2px]"
              >
                Thomas Rey
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
