import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="max-w-[1600px] mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand-500 text-white text-[13px] font-bold mb-3">2</span>
          <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-[-1.5px] text-gray-900">
            Hablemos de tu próximo hogar
          </h2>
          <p className="mt-3 text-gray-600 text-[16px] max-w-[440px]">
            Cuéntanos qué buscas y un asesor te contactará en menos de 24 horas.
          </p>
        </div>

        <div
          className="rounded-[20px] p-8 border border-black/10"
          style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(20px)' }}
        >
          {sent ? (
            <div className="py-8 text-center">
              <p className="font-display font-semibold text-[22px] text-gray-900">¡Gracias!</p>
              <p className="mt-2 text-gray-600 text-[15px]">Recibimos tu mensaje. Un asesor se pondrá en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8" name="contact-form" id="contact-form">
              <div className="flex flex-col gap-4">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-gray-500">Datos de contacto</p>
                <input required name="name" placeholder="Nombre completo" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
                <input required type="email" name="email" placeholder="Correo electrónico" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
                <input required type="tel" name="phone" placeholder="Teléfono" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
                <input required name="address" placeholder="Dirección" className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-gray-500">Tu mensaje</p>
                <textarea required name="message" placeholder="¿Qué tipo de propiedad buscas?" rows={4} className="rounded-[12px] border border-black/10 bg-white px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-brand-400 resize-none" />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-[14px] py-3.5 text-white font-semibold transition-transform duration-300 hover:scale-[1.02]"
                style={{ background: 'rgba(0,132,255,0.85)', boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35)' }}
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
