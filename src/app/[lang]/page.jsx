import About from "@/components/sections/about"
import Home from "../../components/sections/home/index"
import Contact from "@/components/sections/contact"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education"

export default async function app({params}) {
  const {lang}=await params
  return (
    <main className="bg-background">
      <Home language={lang} />
      <About language={lang}  />
      <Experience language={lang}  />
      <Projects language={lang}  />
      <Education language={lang}  />
      <Contact language={lang}  />
    </main>
  )
}
