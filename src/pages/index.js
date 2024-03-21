import { Inter } from "next/font/google";
import Bootstrap from "@/components/bootstrap/bootstrap";
import Nav from "@/components/header/nav";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Portfolio from "@/components/portfolio/portfolio";
import Contact from "@/components/contact/contact"
import { I18nextProvider } from 'react-i18next';
import { appWithTranslation } from 'next-i18next';
import i18n from '../../i18n'; 

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main>
      <I18nextProvider i18n={i18n}>
        <Nav />
        <Bootstrap />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </I18nextProvider>
    </main>
  );
}

export default appWithTranslation(Home);

