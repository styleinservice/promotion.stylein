import FadeIn from './FadeIn'

const threats = [
  {
    title: 'Extreme UV Exposure',
    description:
      'Strong sunlight and UV exposure can contribute to paint fading and oxidation over time. PPF helps protect the vehicle’s painted surfaces from environmental exposure.',
  },
  {
    title: 'Sand & Road Debris',
    description:
      'Sand, dust and highway debris can create micro-scratches and stone chips. PPF absorbs much of the impact before it reaches the original paint.',
  },
  {
    title: "Protect Your Vehicle's Finish",
    description:
      'Keeping the original paint in better condition can help maintain the vehicle’s appearance and may support its resale appeal.',
  },
]

interface WhyPpfSectionProps {
  onOpenQuote?: () => void
}

const WhyPpfSection = ({ onOpenQuote: _onOpenQuote }: WhyPpfSectionProps) => {
  return (
    <section className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 lg:py-10 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#E50914]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header (Matching exact style & typography from Image 1) */}
        <div className="mb-5 sm:mb-6">
          <FadeIn delay={0} y={10}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                  <div className="w-6 h-[1px]" style={{ background: '#E50914' }} />
                  <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.3em] font-light">
                    Built for Ajman & UAE Conditions
                  </span>
                </div>
                <h2
                  className="text-[#F5F5F5] font-black uppercase tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
                >
                  Why Choose Paint Protection Film?
                </h2>
              </div>
              <p className="text-[#777777] text-xs sm:text-sm font-light max-w-sm sm:max-w-md">
                Vehicles in Ajman are exposed to intense sunlight, heat, sand and road debris. PPF creates an invisible protective barrier between these conditions and your vehicle’s original paint.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ── Compact Split Layout: Left Image with Solution Overlay + Right Unified Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          
          {/* Left Column: Vehicle Showcase Image with Solution Overlay at Bottom */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <FadeIn delay={0.1} y={15} className="h-full flex flex-col">
              <div className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0A] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col justify-end p-3.5 sm:p-4">
                <img
                  src="/why-ppf-technician.jpg"
                  alt="StyleInCar certified technician applying PPF to Porsche"
                  className="absolute inset-0 w-full h-full object-cover object-[55%_center] filter saturate-[1.05] transition-transform duration-700 ease-out hover:scale-105"
                />
                {/* Dark gradient overlay so the bottom text is crystal clear */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* The Solution Overlay at Bottom of Image */}
                <div className="relative z-10">
                  <span className="text-[9.5px] uppercase font-semibold text-[#E50914] tracking-widest block mb-0.5">
                    The Solution
                  </span>
                  <p className="text-white font-medium text-xs sm:text-[0.84rem] leading-snug">
                    Premium PPF installed by trained technicians using precision-fit patterns.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Unified 3-Card Block (Clean pure doc content) */}
          <div className="lg:col-span-7 flex flex-col">
            <FadeIn delay={0.15} y={15} className="h-full flex flex-col">
              <div className="rounded-2xl bg-[#0D0D0D] border border-white/[0.08] divide-y divide-white/[0.08] overflow-hidden flex flex-col justify-between h-full">
                {threats.map((threat) => (
                  <div
                    key={threat.title}
                    className="p-3.5 sm:p-4 px-4 sm:px-5 hover:bg-white/[0.02] transition-colors flex flex-col justify-center flex-1"
                  >
                    <h3 className="text-white text-xs sm:text-[0.88rem] font-bold uppercase tracking-tight mb-1 leading-snug">
                      {threat.title}
                    </h3>

                    <p className="text-[#A1A1AA] text-[11px] sm:text-[12px] font-light leading-relaxed">
                      {threat.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyPpfSection
