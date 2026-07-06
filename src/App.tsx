import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";

import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

import useGSAPAnimations from "./hooks/useGSAPAnimations";
import Stats from "./components/sections/Stats";
import Expertise from "./components/sections/Expertise";
import CaseStudy from "./components/sections/CaseStudy";
import ScrollProgress from "./components/layout/ScrollProgress";
import SEO from "./components/shared/Seo";
import ResumeCTA from "./components/sections/ResumeCTA";
import BackgroundOrbs from "./components/layout/BackgroundOrbs";

function App() {
  useGSAPAnimations();

  return (
    <>
      <SEO />

      <main
        className="
      bg-[#050816]
      text-white
      overflow-x-hidden
      "
      >
        <BackgroundGlow />

        <ScrollProgress />

        <BackgroundOrbs />

        <Navbar />

        <Hero />

        <Stats />

        <Experience />

        <Expertise />

        <CaseStudy />

        <Projects />

        <ResumeCTA />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

function BackgroundGlow() {
  return (
    <>
      <div
        className="
        floating-orb
        fixed
        top-[-100px]
        left-[-100px]
        h-[400px]
        w-[400px]
        rounded-full
        bg-blue-500/20
        blur-[120px]
        "
      />

      <div
        className="
        floating-orb
        fixed
        bottom-[-100px]
        right-[-100px]
        h-[400px]
        w-[400px]
        rounded-full
        bg-violet-500/20
        blur-[120px]
        "
      />
    </>
  );
}

export default App;
