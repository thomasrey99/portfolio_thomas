const Dropdown = ({ sections, isOpen }) => {
  return isOpen ? (
    <ul className="md:hidden z-10 absolute top-full left-0 w-full bg-white shadow-lg mt-2">
      {sections.map((section, index) => {
        return (
          <li
            key={index}
            className="text-base text-fontItems hover:text-primary font-semibold"
          >
            <a href={`#${section}`} className="p-4 inline-block cursor-pointer">{section}</a>
          </li>
        );
      })}
    </ul>
  ) : null;
};
export default Dropdown;
