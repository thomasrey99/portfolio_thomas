const colorMap = {
  red: "bg-red-100 text-red-700 hover:shadow-[0_0_12px_rgba(239,68,68,0.45)]",
  green: "bg-green-100 text-green-700 hover:shadow-[0_0_12px_rgba(34,197,94,0.45)]",
  orange: "bg-orange-100 text-orange-700 hover:shadow-[0_0_12px_rgba(249,115,22,0.45)]",
  yellow: "bg-yellow-100 text-yellow-700 hover:shadow-[0_0_12px_rgba(234,179,8,0.45)]",
  blue: "bg-blue-100 text-blue-700 hover:shadow-[0_0_12px_rgba(59,130,246,0.45)]",
  purple: "bg-purple-100 text-purple-700 hover:shadow-[0_0_12px_rgba(168,85,247,0.45)]"
};

const SkillsCard = ({ skill }) => {
  return (
    <div
      className={`
        py-[0.3rem] px-[1.3rem] mb-[1rem] mr-[1rem]
        sm:py-[0.5rem] sm:px-[1.5rem]
        rounded-[5px] font-semibold text-[1rem]
        transition-all duration-200 ease-out hover:scale-110
        ${colorMap[skill.color] || "bg-gray-100 text-gray-600"}
      `}
    >
      {skill.name}
    </div>
  );
};

export default SkillsCard;
