import About from "@/components/sections/about"
import Home from "../components/sections/home/index"
import Contact from "@/components/sections/contact"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"

export default function app() {
  return (
    <main>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}
