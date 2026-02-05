import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Sobre from "@/sections/Sobre";
import Equipe from "@/sections/Equipe";
import Projetos from "@/sections/Projetos";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Equipe />
        <Projetos />
      </main>
      <Footer />
    </>
  );
}
