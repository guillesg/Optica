"use client";

import { useEffect, useState } from "react";

const images = [
  "/hero/hero-1.jpg", // fachada
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-[90vh] w-full overflow-hidden bg-white"
    >
      {images.map((img, index) => {
        const isFirst = index === 0;

        return (
          <div
            key={img}
            className={`
              absolute inset-0 transition-opacity duration-1000
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: isFirst ? "contain" : "cover",
              backgroundColor: isFirst ? "#ffffff" : "transparent",
            }}
          />
        );
      })}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-optica-blue">
          Ópticos Domínguez Romero
        </h1>

        <p className="mt-4 text-lg md:text-xl text-optica-purple font-medium">
          Cuidamos tu visión con experiencia y cercanía
        </p>

        <p className="mt-4 max-w-2xl text-gray-700">
          Atención personalizada, tecnología avanzada y profesionales de
          confianza en Las Palmas y Gáldar.
        </p>

        <a
          href="#contacto"
          className="
            mt-8 inline-block
            bg-optica-purple text-white
            px-8 py-3 rounded-lg text-lg font-semibold
            shadow hover:bg-optica-blue transition
          "
        >
          Pedir cita
        </a>
      </div>
    </section>
  );
}
