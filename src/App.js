import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import TechExperience from "./components/TechExperience";
import ExtraActivities from "./components/ExtraActivities";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <TechExperience />
      <Projects />
      <ExtraActivities />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
