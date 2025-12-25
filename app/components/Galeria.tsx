"use client";

import { useState } from "react";

const images = Array.from({ length: 20 }, (_, i) => `/galeria/${i + 1}.jpg`);

export default function Galeria() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const prevLightbox = () =>
    setLightbox((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1));

  const nextLightbox = () =>
    setLightbox((i) => (i === null ? null : i === images.length - 1 ? 0 : i + 1));

  return (
    <section
      id="galeria"
      className="py-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl text-center font-bold text-optica-blue">
        Nuestra Óptica
      </h2>

      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Descubre nuestras instalaciones y el entorno donde cuidamos tu visión.
      </p>

      <div className="relative mt-14 max-w-6xl mx-auto px-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 260}px)` }}
        >
          {images.map((src, index) => (
            <div
              key={src}
              className="min-w-[240px] mr-5 cursor-pointer"
              onClick={() => setLightbox(index)}
            >
              <div
                className="h-56 rounded-xl bg-cover bg-center shadow hover:shadow-xl transition hover:scale-[1.02]"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>

        <button onClick={prev} className="absolute top-1/2 -translate-y-1/2 left-0 bg-white/90 w-10 h-10 rounded-full shadow">
          ‹
        </button>
        <button onClick={next} className="absolute top-1/2 -translate-y-1/2 right-0 bg-white/90 w-10 h-10 rounded-full shadow">
          ›
        </button>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox]}
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />

            <button onClick={() => setLightbox(null)} className="absolute -top-4 -right-4 bg-white w-10 h-10 rounded-full">
              ×
            </button>

            <button onClick={prevLightbox} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full">
              ‹
            </button>
            <button onClick={nextLightbox} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full">
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
