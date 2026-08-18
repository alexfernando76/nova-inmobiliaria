import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-[20px] left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="flex w-fit items-center gap-2 rounded-[16px] px-3 py-2 backdrop-blur-[50px]"
        style={{
          background: 'rgba(255,255,255,0.3)',
          border: '1px solid rgba(0,0,0,0.1)',
          boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.25)',
        }}
      >
        <a href="#inicio" className="font-display text-[18px] font-bold px-2 text-brand-600">
          Nova<span className="text-accent-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1 mx-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-[10px] text-[14px] font-medium text-gray-700 hover:bg-white/50 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#valuacion"
          className="hidden sm:flex items-center gap-1.5 rounded-[12px] px-4 py-2 text-[14px] font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
          style={{
            background: 'rgba(0,132,255,0.85)',
            backdropFilter: 'blur(2px)',
            boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
          }}
        >
          Valuar mi propiedad
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden p-2 rounded-[10px] text-gray-700"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 sm:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute bottom-0 left-0 right-0 rounded-t-[24px] bg-white p-6 pb-10 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[16px] font-medium text-gray-800">
                {l.label}
              </a>
            ))}
            <a
              href="#valuacion"
              onClick={() => setOpen(false)}
              className="text-center rounded-[14px] py-3 text-white font-semibold"
              style={{ background: 'rgba(0,132,255,0.9)' }}
            >
              Valuar mi propiedad
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
