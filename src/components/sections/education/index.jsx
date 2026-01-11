"use client";
import { useEffect, useState } from "react";
import Title from "../title";
import EducationCard from "./EducationCard";
import ContentWrapper from "@/components/contentWrapper";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/education.json")
      .then(res => res.json())
      .then(data => setEducation(data))
      .catch(console.error);
  }, []);

  return (
    <section id="education">
      <ContentWrapper>
        <Title
          title="Education"
          sub="Academic background and professional training."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {education.map(e => (
            <EducationCard key={e.id} item={e} />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Education;
