import esHome from "./es/sections//home.json"
import esAbout from "./es/sections/about.json"
import esExperience from "./es/sections/experience.json"
import esProjects from "./es/sections/projects.json"
import esEducation from "./es/sections/education.json"
import esContact from "./es/sections/contact.json"
import esNavbar from "./es/components/navbar.json"
import esFooter from  "./es/components/footer.json"

import enHome from "./en/sections/home"
import enAbout from "./en/sections/about.json"
import enExperience from "./en/sections/experience.json"
import enProjects from "./en/sections/projects.json"
import enEducation from "./en/sections/education.json"
import enContact from "./en/sections/contact.json"
import enNavabr from "./en/components/navbar.json"
import enFooter from  "./en/components/footer.json"

const dictionaries = {
  es: {
    home: esHome,
    about: esAbout,
    experience: esExperience,
    projects: esProjects,
    education: esEducation,
    contact:esContact,
    navbar:esNavbar,
    footer:esFooter
  },
  en: {
    home: enHome,
    about: enAbout,
    experience:enExperience,
    projects: enProjects,
    education: enEducation,
    contact:enContact,
    navbar:enNavabr,
    footer:enFooter
  }
};

export const t = (lang, section) => dictionaries[lang][section]