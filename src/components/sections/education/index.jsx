import Title from "../title";
import EducationCard from "./EducationCard";
import ContentWrapper from "@/components/contentWrapper";
import { t } from "@/libs/i18n";

const Education = ({language}) => {
  const traduction=t(language, "education");
  const title=traduction.section.title;
  const subtitle=traduction.section.subtitle;
  return (
    <section id="education">
      <ContentWrapper>
        <Title
          title={title}
          sub={subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {traduction.educations.map(e => (
            <EducationCard key={e.id} item={e} />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Education;
