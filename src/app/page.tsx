import Contact from "@/pages/Contact";
import Experience from "@/pages/Experience";
import Footer from "@/pages/Footer";
import HomePage from "@/pages/HomePage";
import Navbar from "@/pages/Navbar";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <hr className="w-3/4 mx-auto border-white/60" />
      <Skills />
      <hr className="w-3/4 mx-auto border-white/60" />
      <Experience />
      <hr className="w-3/4 mx-auto border-white/60" />
      <Projects />
      <hr className="w-3/4 mx-auto border-white/60" />
      <Contact />
      <hr className="w-3/4 mx-auto border-white/60" />
      <Footer />
    </>
  );
}
