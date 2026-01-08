const legendColorMap = {
  red: "bg-red-400",
  green: "bg-green-400",
  orange: "bg-orange-400",
  yellow: "bg-yellow-400",
  purple: "bg-purple-400",
  blue: "bg-blue-400"
};

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-3">
    <span className={`w-3 h-3 rounded-full ${legendColorMap[color]}`} />
    <span>{label}</span>
  </div>
);

export default LegendItem;