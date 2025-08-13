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
      <hr className="w-3/4 mx-auto" />
      <Skills />
      <hr className="w-3/4 mx-auto" />
      <Experience />
      <hr className="w-3/4 mx-auto" />
      <Projects />
      <hr className="w-3/4 mx-auto" />
      <Contact />
      <hr className="w-3/4 mx-auto" />
      <Footer />
    </>
  );
}
