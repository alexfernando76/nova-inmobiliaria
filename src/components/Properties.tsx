const properties = [
  {
    title: 'Casa moderna en Cumbayá',
    price: '$185,000',
    beds: 3,
    baths: 2,
    area: '210 m²',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Departamento vista a la ciudad',
    price: '$96,500',
    beds: 2,
    baths: 2,
    area: '95 m²',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Villa con jardín privado',
    price: '$240,000',
    beds: 4,
    baths: 3,
    area: '310 m²',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Properties() {
  return (
    <section id="propiedades" className="max-w-[1600px] mx-auto px-6 py-24">
      <div className="max-w-[600px] mb-12">
        <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand-500 text-white text-[13px] font-bold mb-3">1</span>
        <h2 className="font-display font-bold text-[36px] md:text-[44px] tracking-[-1.5px] text-gray-900">
          Propiedades destacadas
        </h2>
        <p className="mt-3 text-gray-600 text-[16px]">
          Una selección curada de inmuebles verificados, listos para visitar.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p.title} className="rounded-[20px] overflow-hidden border border-black/10 bg-white group">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-[18px] text-gray-900">{p.title}</h3>
              </div>
              <p className="mt-1 text-brand-600 font-bold text-[20px]">{p.price}</p>
              <div className="mt-3 flex gap-4 text-[13px] text-gray-500">
                <span>{p.beds} hab</span>
                <span>{p.baths} baños</span>
                <span>{p.area}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
