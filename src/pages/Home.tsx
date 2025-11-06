import Background from "../components/Background";
import Header from "../components/Header";
import SectionInicial from "../components/SectionInicial";
import SectionAbout from "../components/SectionAbout";
import SectionProject from "../components/SectionProject";

export default function Home() {
  return (
    <>
      <Background>
        <Header />
        <SectionInicial />
        <SectionAbout />
        <SectionProject />
      </Background>
    </>
  );
}
