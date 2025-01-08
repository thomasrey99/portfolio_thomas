import Link from "next/link";

const Dropdown = ({ sections, isOpen }) => {
  return isOpen ? (
    <ul className="md:hidden z-10 absolute top-full left-0 w-full bg-white shadow-[0px_5px_5px_0px_rgba(0,0,0,0.1)]">
      {sections.map((section, index) => {
        return (
          <li
            key={index}
            className="text-base text-fontItems text-right hover:text-primary font-semibold"
          >
            <Link
              href={`${section === "Home" ? "/" : `/#${section}`}`}
              className="py-[1.5rem] px-[1rem] border-t border-solid border-[#eee] block cursor-pointer"
            >
              {section}
            </Link>
          </li>
        );
      })}
    </ul>
  ) : null;
};
export default Dropdown;
