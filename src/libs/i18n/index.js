import esHome from "./es/home.json"
import esAbout from "./es/about.json"
import esExperience from "./es/experience.json"
import esProjects from "./es/projects.json"
import esEducation from "./es/education.json"
import esContact from "./es/contact.json"
import esNavbar from "./es/navbar.json"

import enHome from "./eng/home"
import enAbout from "./eng/about.json"
import enExperience from "./eng/experience.json"
import enProjects from "./eng/projects.json"
import enEducation from "./eng/education.json"
import enContact from "./eng/contact.json"
import enNavabr from "./eng/navbar.json"

const dictionaries = {
  es: {
    home: esHome,
    about: esAbout,
    experience: esExperience,
    projects: esProjects,
    education: esEducation,
    contact:esContact,
    navbar:esNavbar
  },
  en: {
    home: enHome,
    about: enAbout,
    experience:enExperience,
    projects: enProjects,
    education: enEducation,
    contact:enContact,
    navbar:enNavabr
  }
};

export const t = (lang, section) => dictionaries[lang][section]