"use"

import Link from "next/link";

const Dropdown = ({ sections, isOpen, language }) => {
  return (
    <ul
      className={`md:hidden z-10 absolute top-full left-0 w-full bg-white shadow-[0px_5px_5px_0px_rgba(0,0,0,0.1)] 
        transition-all duration-300 ease-in-out 
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
    >
      {sections.map(({ id, label }, index) => (
        <li
          key={index}
          className="text-base text-fontItems text-right hover:text-primary font-semibold"
        >
          <Link
            href={`/${language}/#${id}`}
            className="py-[1.5rem] px-[1rem] border-t border-solid border-[#eee] block cursor-pointer"
          >
            {String(label)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

