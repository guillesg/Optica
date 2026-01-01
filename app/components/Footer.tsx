export default function Footer() {
  return (
    <footer className="w-full bg-optica-blue text-white mt-16 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Columna 1 */}
        <div>
          <h2 className="text-xl font-semibold">Ópticos Domínguez Romero</h2>
          <p className="mt-3 text-optica-gray">
            Profesionales de la visión al servicio de Gáldar.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-lg font-semibold text-optica-gray">Consulta</h3>
          <p className="mt-4 leading-relaxed">
            <span className="font-semibold text-white">Gáldar:</span>
            <br />
            928 88 20 61
          </p>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-lg font-semibold text-optica-gray">Contacto</h3>
          <p className="mt-2">Email: info@opticasdominguezromero.com</p>
          <p className="mt-1">Horario: L–V 9:00–13:30, 16:30-20:00</p>
        </div>
      </div>

      <div className="text-center mt-10 text-optica-gray text-sm">
        © {new Date().getFullYear()} Ópticos Domínguez Romero — Todos los
        derechos reservados.
      </div>
      <div className="text-center mt-5 text-optica-gray text-sm">
        <small>
          <span>Desarrollado por </span>
          <a
            href="https://guillermo-sosa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guillermo Sosa
          </a>
        </small>
      </div>
    </footer>
  );
}
