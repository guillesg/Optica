import Hero from "@/app/components/Hero";
import ServiciosHome from "@/app/components/ServiciosHome";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosHome />
      <Galeria />
      <Contacto />
    </>
  );
}
