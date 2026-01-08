const EducationCard = ({ item }) => {
  return (
    <div className="relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-violet-200 shadow-lg hover:shadow-violet-200/40 transition-all duration-300 hover:-translate-y-1">

      <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-violet-100 text-violet-700 font-semibold">
        {item.period}
      </span>

      <h3 className="text-2xl font-semibold">{item.title}</h3>
      <p className="text-sm text-violet-600 font-medium mt-1">{item.institution}</p>

      <p className="mt-4 text-[#666] leading-[1.7]">
        {item.description}
      </p>

      <ul className="mt-5 space-y-2 text-[#666] text-sm leading-[1.6]">
        {item.bullets.map((b, i) => (
          <li key={item.id + i} className="flex gap-2 items-start">
            <span className="mt-2 w-2 h-2 rounded-full bg-violet-600" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
