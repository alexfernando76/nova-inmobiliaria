import { useState, type FormEvent } from 'react'

export default function ValuationForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="valuacion" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-300/30 blur-[120px]" />
      <div className="relative max-w-[1600px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div
            className="order-2 md:order-1 rounded-[20px] p-8 border border-black/10"
            style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(20px)' }}
          >
            {sent ? (
              <div className="py-8 text-center">
                <p className="font-display font-semibold text-[22px] text-gray-900">¡Solicitud recibida!</p>
                <p className="mt-2 text-gray-600 text-[15px]">Nuestro equipo preparará una valuación estimada y te la enviaremos por correo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <select required defaultValue="" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] text-gray-700 outline-none focus:ring-2 focus:ring-brand-400">
                    <option value="" disabled>Tipo de propiedad</option>
                    <option>Casa</option>
                    <option>Departamento</option>
                    <option>Terreno</option>
                    <option>Local comercial</option>
                  </select>
                  <input required placeholder="Área aproximada (m²)" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
                </div>
                <input required placeholder="Dirección o sector" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Nombre completo" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
                  <input required type="tel" placeholder="Teléfono" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-[14px] py-3.5 text-white font-semibold transition-transform duration-300 hover:scale-[1.02]"
                  style={{ background: 'rgba(0,132,255,0.85)', boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35)' }}
                >
                  Solicitar valuación gratuita
                </button>
              </form>
            )}
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand-500 text-white text-[13px] font-bold mb-3">3</span>
            <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-[-1.5px] text-gray-900">
              ¿Cuánto vale tu propiedad hoy?
            </h2>
            <p className="mt-3 text-gray-600 text-[16px] max-w-[440px]">
              Obtén una valuación estimada sin costo, basada en datos actuales del mercado de tu zona.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
