import About from "@/components/sections/about"
import Home from "../components/sections/home/index"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"

export default function app() {
  return (
    <main>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
