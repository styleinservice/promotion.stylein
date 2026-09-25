import FadeIn from './FadeIn'

const brands = [
  {
    name: 'XPEL',
    logo: (
      <img
        src="/brand-xpel.svg"
        alt="XPEL"
        className="h-6 sm:h-7 w-auto object-contain"
        loading="lazy"
      />
    ),
    description: 'Premium paint protection film known for self-healing technology and optical clarity.',
  },
  {
    name: '3M',
    logo: (
      <img
        src="/brand-3m.svg"
        alt="3M"
        className="h-6 sm:h-7 w-auto object-contain"
        loading="lazy"
      />
    ),
    description: 'Established PPF technology designed for protection and conformability across vehicle surfaces.',
  },
  {
    name: 'TAKAI',
    logo: (
      <img
        src="/brand-takai.png"
        alt="TAKAI"
        className="h-5 sm:h-6 w-auto object-contain brightness-110"
        loading="lazy"
      />
    ),
    description: 'Premium films featuring advanced top-coat technology and hydrophobic properties.',
  },
]

const CertifiedBrands = () => {
  return (
    <section className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 lg:py-10 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[250px] bg-[#E50914]/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6">
          <FadeIn delay={0} y={10}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <h2
                  className="text-[#F5F5F5] font-black uppercase tracking-tight leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
                >
                  Certified PPF Brands
                </h2>
              </div>
              <p className="text-[#777777] text-xs sm:text-sm font-light max-w-sm sm:max-w-md">
                TAKAI, XPEL and 3M options are available. Pricing varies by vehicle size, coverage and film brand.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 3 Clean Brand Cards (Exact Documentation Text + Logos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5">
          {brands.map((brand, i) => (
            <FadeIn key={brand.name} delay={0.06 * (i + 1)} y={10}>
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-[#0D0D0D] border border-white/[0.08] hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  {/* Brand Logo Container */}
                  <div className="h-8 sm:h-9 mb-3 sm:mb-3.5 flex items-center border-b border-white/[0.06] pb-2.5">
                    {brand.logo}
                  </div>
                  <p className="text-[#A1A1AA] text-xs sm:text-[0.84rem] font-light leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Exact Documentation Footer Note */}
        <FadeIn delay={0.2} y={10}>
          <div className="rounded-xl p-3 sm:p-3.5 px-4 sm:px-5 bg-[#0D0D0D] border border-white/[0.06] text-center sm:text-left">
            <p className="text-[#8E8E93] text-[11px] sm:text-xs font-light leading-relaxed">
              <strong className="text-white font-medium">Note:</strong> Brand availability may vary by package and vehicle. Confirm the exact film brand and product before booking.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default CertifiedBrands
