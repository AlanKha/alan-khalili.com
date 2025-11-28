import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import SlidingMarquee from "./components/sections/SlidingMarquee";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Music from "./components/sections/Music";
import { Analytics } from "@vercel/analytics/react";

/**
 * The main component of the application.
 * Renders all the sections of the page.
 */
function App() {
  return (
    <>
      <Analytics />
      <Header />
      <Hero />
      <SlidingMarquee />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Music />
    </>
  );
}

export default App;
