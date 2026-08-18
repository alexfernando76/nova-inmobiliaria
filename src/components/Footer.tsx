export default function Footer() {
  return (
    <footer id="nosotros" className="border-t border-black/10 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left mb-12">
          <div>
            <p className="font-display font-bold text-[32px] text-brand-600">1,200+</p>
            <p className="text-gray-600 text-[14px] mt-1">Familias asesoradas</p>
          </div>
          <div>
            <p className="font-display font-bold text-[32px] text-brand-600">15</p>
            <p className="text-gray-600 text-[14px] mt-1">Años de experiencia</p>
          </div>
          <div>
            <p className="font-display font-bold text-[32px] text-brand-600">4.9/5</p>
            <p className="text-gray-600 text-[14px] mt-1">Calificación promedio</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/10">
          <a href="#inicio" className="font-display font-bold text-[18px] text-brand-600">
            Nova<span className="text-accent-500">.</span>
          </a>
          <p className="text-[13px] text-gray-500">
            © {new Date().getFullYear()} Nova Inmobiliaria — Sitio demo, sin fines comerciales reales.
          </p>
        </div>
      </div>
    </footer>
  )
}
