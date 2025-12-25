"use client";

import { useState } from "react";
import {
  FaGlasses,
  FaEye,
  FaPhoneAlt,
  FaChild,
  FaSun,
  FaTint,
  FaMicroscope,
  FaRegSmile,
} from "react-icons/fa";

/* Servicios destacados */
const serviciosHome = [
  {
    icon: <FaEye size={40} />,
    titulo: "Examen visual completo",
    texto: "Diagnóstico preciso con equipamiento profesional.",
  },
  {
    icon: <FaGlasses size={40} />,
    titulo: "Gafas graduadas y de sol",
    texto: "Amplia variedad de monturas y lentes de primeras marcas.",
  },
  {
    icon: <FaPhoneAlt size={40} />,
    titulo: "Atención personalizada",
    texto: "Asesoramiento experto y seguimiento individual.",
  },
];

/* Servicios completos */
const serviciosCompletos = [
  { icon: <FaEye />, titulo: "Optometría avanzada", texto: "Evaluación completa de la salud visual." },
  { icon: <FaGlasses />, titulo: "Lentes progresivas", texto: "Adaptación personalizada para máxima comodidad." },
  { icon: <FaTint />, titulo: "Lentes de contacto", texto: "Adaptación y seguimiento profesional." },
  { icon: <FaSun />, titulo: "Gafas de sol graduadas", texto: "Protección UV con corrección visual." },
  { icon: <FaChild />, titulo: "Control visual infantil", texto: "Revisión especializada para niños." },
  { icon: <FaMicroscope />, titulo: "Tensión ocular", texto: "Control preventivo de la presión ocular." },
  { icon: <FaRegSmile />, titulo: "Asesoramiento estético", texto: "Te ayudamos a elegir la montura ideal." },
];

export default function ServiciosHome() {
  const [open, setOpen] = useState(false);

  return (
    <section id="servicios" className="py-20 bg-optica-gray/10">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-optica-blue">
        Nuestros Servicios
      </h2>

      {/* Servicios destacados */}
      <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">
        {serviciosHome.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-lg p-8 rounded-2xl text-center border border-optica-gray/30 hover:shadow-xl transition"
          >
            <div className="text-optica-blue mx-auto mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-optica-blue">{s.titulo}</h3>
            <p className="text-gray-600 mt-3">{s.texto}</p>
          </div>
        ))}
      </div>

      {/* BOTÓN */}
      <div className="text-center mt-16">
        <button
          onClick={() => setOpen(true)}
          className="text-optica-purple font-semibold text-lg hover:underline"
        >
          Ver más servicios →
        </button>
      </div>

      {/* MODAL CON ANIMACIÓN */}
      {open && (
        <div
          className="
            fixed inset-0 z-50 bg-black/60
            flex items-center justify-center px-4
            animate-fadeIn
          "
          onClick={() => setOpen(false)}
        >
          <div
            className="
              bg-white rounded-2xl max-w-5xl w-full
              p-8 relative max-h-[85vh] overflow-y-auto
              transform animate-scaleIn
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-optica-blue text-2xl font-bold hover:text-optica-purple"
            >
              ×
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-optica-blue text-center">
              Todos nuestros servicios
            </h3>

            <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
              Atención visual completa con tecnología avanzada y trato cercano.
            </p>

            {/* GRID SERVICIOS */}
            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {serviciosCompletos.map((s, i) => (
                <ServiceCard key={i} {...s} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* SERVICE CARD */
function ServiceCard({
  icon,
  titulo,
  texto,
}: {
  icon: React.ReactNode;
  titulo: string;
  texto: string;
}) {
  return (
    <div
      className="
        border border-optica-gray/30 rounded-xl p-6 text-center
        transition transform
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      <div className="text-optica-blue text-3xl mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-semibold text-optica-blue text-lg">{titulo}</h4>
      <p className="text-gray-600 mt-2 text-sm">{texto}</p>
    </div>
  );
}
