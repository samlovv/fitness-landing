import Hero from "@/components/Hero";
import About from "@/components/About";
import Programlar from "@/components/Programs";
import Fiyatlar from "@/components/Fiyatlar";
import Ekip from "@/components/Ekip";
import Iletisim from "@/components/Iletisim";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" bg-black">
      <Hero />
      <About />
      <Programlar />
      <Fiyatlar />
      <Ekip />
      <Iletisim />
    </main>
  );
}
