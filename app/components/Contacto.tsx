"use client";

import { FaWhatsapp, FaStar } from "react-icons/fa";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">

        {/* INFO + RESEÑAS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-optica-blue">
            Contacto
          </h2>

          <p className="mt-4 text-gray-700 max-w-md">
            Estamos encantados de atenderte y ayudarte a cuidar tu visión.
            Puedes visitarnos en nuestra óptica de Gáldar o contactar con
            nosotros directamente.
          </p>

          {/* RESEÑAS */}
          <div className="mt-8 p-6 border border-optica-gray/30 rounded-xl bg-optica-gray/10">
            <div className="flex items-center gap-2 text-optica-purple font-semibold">
              <FaStar />
              <span>Esto dicen nuestros clientes</span>
            </div>

            <p className="mt-3 text-gray-700 text-sm">
              La opinión de nuestros clientes es muy importante para nosotros.
              Si ya nos has visitado, nos encantaría conocer tu experiencia.
            </p>

            <a
              href="https://www.google.com/search?sca_esv=db2aaf917c165eff&sxsrf=AE3TifOGVbrH1ttMjGx91yyykl128XMIfg:1766163363268&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2I5d_vC72ROeoU8X8uTBjBaH_jokdm6q5H5aZd1g5wS5aSH4f43Q2u1fhXyMSkJ507-fcFW1Mu9q0uItVQNgB60hFLWBXEVNKFtKKDC79xnanF0Bg%3D%3D&q=Optica+Dominguez+Romero+Rese%C3%B1as&sa=X&ved=2ahUKEwjU44efj8qRAxUI0QIHHRP2KDIQ0bkNegQIIhAD&biw=1920&bih=911&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-4
                text-optica-purple font-semibold
                hover:underline
              "
            >
              Leer y dejar una reseña en Google →
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="mt-8">
            <a
              href="https://wa.me/34679971909"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                bg-optica-blue text-white
                px-6 py-3 rounded-lg
                font-semibold shadow
                hover:bg-optica-purple transition
              "
            >
              <FaWhatsapp className="text-xl" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* MAPA */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-optica-gray/30 shadow">
          <iframe
            title="Óptica Domínguez Romero - Gáldar"
            src="https://www.google.com/maps?q=Óptica%20Domínguez%20Romero%20Gáldar&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
