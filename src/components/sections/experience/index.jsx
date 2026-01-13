"use client"
import { t } from "@/libs/i18n";
import Title from "../title";
import ExperienceContent from "./ExperienceContent";
import ContentWrapper from "@/components/contentWrapper";

const Experience = ({language}) => {

  const traduction=t(language, "experience")
  const title = traduction.section.title;
  const sub = traduction.section.subtitle;

  return (
    <section id="experience">
      <ContentWrapper>

        <Title title={title} sub={sub} />
        <div className="flex justify-center">
          {
            traduction.experiences
            &&
            <ExperienceContent experiences={traduction.experiences} />
          }
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Experience;
