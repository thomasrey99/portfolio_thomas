const Title = ({ title, sub }) => {
  return (
    <h2 className="mb-[5rem]">
      {" "}
      {/* margin-bottom: 5rem */}
      <span className="block text-[2.2rem] uppercase tracking-wider text-center mb-[3.5rem] relative font-bold text-[#111]">
        {title}
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 w-7 h-[5px] bg-primary rounded-md mt-4"></span>
      </span>
      <span className="block text-center text-[#555] text-[1rem] sm:text-[1.2rem] font-medium sm:max-w-[80rem] mx-auto leading-6">
        {sub}
      </span>
    </h2>
  );
};

export default Title;
