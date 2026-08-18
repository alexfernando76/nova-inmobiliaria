export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[160px] pb-[100px] px-6">
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-300/40 blur-[120px]" />
      <div className="pointer-events-none absolute top-10 left-40 w-[400px] h-[400px] rounded-full bg-brand-400/30 blur-[100px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-white/70 border border-black/10 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: '#FF801E' }}>★</span>
              ))}
            </div>
            <span className="text-[13px] font-medium text-gray-700">
              Calificado 4.9/5 por más de 1200 familias
            </span>
          </div>

          <h1 className="font-display font-bold text-[44px] md:text-[75px] leading-[1.05] tracking-[-2px] text-gray-900">
            Encuentra el hogar que <span className="text-brand-500">mereces</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed tracking-[-1px] text-gray-600">
            Compra, vende o valúa tu propiedad con el respaldo de un equipo local que conoce cada barrio.
            Acompañamiento personalizado de principio a fin.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#propiedades"
              className="group inline-flex items-center gap-2 rounded-[16px] px-6 py-3.5 text-white font-semibold transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(0,132,255,0.8)',
                backdropFilter: 'blur(2px)',
                boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
              }}
            >
              Ver Propiedades
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-[16px] px-6 py-3.5 font-semibold text-gray-800 border border-black/10 bg-white/60 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px]">
            <div
              className="absolute inset-0 rounded-full mix-blend-screen"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #7fd0ff 0%, #0084ff 45%, #0b3d91 75%, transparent 100%)',
                filter: 'blur(2px) saturate(180%) brightness(1.1)',
                animation: 'orb-float 8s ease-in-out infinite',
              }}
            />
            <div
              className="absolute inset-6 rounded-full"
              style={{
                background: 'radial-gradient(circle at 60% 65%, rgba(255,255,255,0.5), transparent 60%)',
                mixBlendMode: 'screen',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orb-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.03); }
        }
      `}</style>
    </section>
  )
}
