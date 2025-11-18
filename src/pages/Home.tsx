import Background from "../components/Background";
import Header from "../components/Header";
import SectionInicial from "../components/SectionInicial";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";
import SectionSkills from "../components/SectionSkills";
import SectionContacts from "../components/SectionContacts";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";
import LoadingHome from "../components/LoadingHome";
import { useState } from "react";

export default function Home() {
  const [ativarSpinner, setAtivarSpinner] = useState(true);

  setInterval(() => {
    setAtivarSpinner(false);
  }, 2500);

  return (
    <>
      {ativarSpinner ? (
        <LoadingHome />
      ) : (
        <Background
          header={
            <Header
              home="Home"
              sobre="Sobre"
              projetos="Projetos"
              habilidades="Habilidades"
              contatos="Contatos"
            />
          }
        >
          <MusicPlayer />
          <SectionInicial />
          <SectionAbout />
          <SectionProject />
          <SectionSkills />
          <SectionContacts />
          <Footer />
        </Background>
      )}
    </>
  );
}
