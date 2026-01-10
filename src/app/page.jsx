import About from "@/components/sections/about"
import Home from "../components/sections/home/index"
import Contact from "@/components/sections/contact"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"

export default function app() {
  return (
    <main className="bg-background">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
