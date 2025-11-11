import Background from "../components/Background";
import Header from "../components/Header";
import SectionInicial from "../components/SectionInicial";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";
import SectionSkills from "../components/SectionSkills";
import SectionContacts from "../components/SectionContacts";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Background header={<Header />}>
        <MusicPlayer />
        <SectionInicial />
        <SectionAbout />
        <SectionProject />
        <SectionSkills />
        <SectionContacts />
        <Footer />
      </Background>
    </>
  );
}
