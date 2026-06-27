import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Differentials } from "@/components/sections/Differentials";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-base text-ink">
        <Navbar />
        <ScrollToTop />
        <main>
          <Hero />
          <About />
          <Timeline />
          <Skills />
          <Projects />
          <Differentials />
          <Education />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
}
