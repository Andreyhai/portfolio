import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Портфолио фронтенд разработчика. Создание сайтов, веб-приложений и современных интерфейсов с крутым дизайном и анимациями.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
