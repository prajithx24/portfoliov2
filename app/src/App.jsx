import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import CreativeWork from "./components/CreativeWork";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Divider } from "./components/ui";

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <WhatIDo />
        <Divider />
        <Projects />
        <Divider />
        <CreativeWork />
        <Divider />
        <Skills />
        <Divider />
        <Education />
        <Divider />
        <Publications />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
