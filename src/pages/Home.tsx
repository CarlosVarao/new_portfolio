import Background from "../components/Background";
import Header from "../components/Header";
import SectionInicial from "../components/SectionInicial";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";
import SectionSkills from "../components/SectionSkills";

export default function Home() {
  return (
    <>
      <Background>
        <Header />
        <SectionInicial />
        <SectionAbout />
        <SectionProject />
        <SectionSkills />
      </Background>
    </>
  );
}
