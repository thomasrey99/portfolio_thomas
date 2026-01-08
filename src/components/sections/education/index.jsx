"use client";
import { useEffect, useState } from "react";
import Title from "../title";
import EducationCard from "./EducationCard";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/education.json")
      .then(res => res.json())
      .then(data => setEducation(data))
      .catch(console.error);
  }, []);

  return (
    <section id="Education" className="relative w-full my-[6rem]">
      <div className="max-w-[120rem] mt-[6rem] m-auto w-[92%]">

        <Title 
          title="Education"
          sub="Academic background and professional training."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {education.map(e => (
            <EducationCard key={e.id} item={e} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
