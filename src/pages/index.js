import { Inter } from "next/font/google";
import Bootstrap from "@/components/bootstrap/bootstrap";
import Nav from "@/components/header/nav";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Portfolio from "@/components/portfolio/portfolio";
import Contact from "@/components/contact/contact"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Nav />
      <Bootstrap />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
