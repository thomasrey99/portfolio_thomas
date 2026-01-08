import SkillsCard from "../about/skillsCard";

const ExperienceContent = ({ experiences }) => {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute left-0 top-0 h-full border-l-2 border-violet-200 hidden sm:block"></div>

      <div className="space-y-20 sm:pl-12 px-2 sm:px-0">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
          
            <span className="absolute hidden sm:block -left-[60px] top-2 w-6 h-6 bg-violet-600 rounded-full"></span>

            <span className="text-sm font-semibold text-violet-600">{experience.period}</span>
            <h3 className="text-2xl font-semibold mt-2">{experience.role}</h3>
            <p className="text-gray-500">{experience.company}</p>

            <p className="mt-4 w-full sm:max-w-xl text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7]">
              {experience.description}
            </p>

            <ul className="mt-6 w-full sm:max-w-xl list-disc list-inside text-[1rem] sm:text-[1.2rem] text-[#666] leading-[1.7] space-y-2">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {experience.skills.map(t => (
                <SkillsCard skill={t} key={t.name}/>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceContent;