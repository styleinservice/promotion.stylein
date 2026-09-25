import { MapPin, Truck, Check } from 'lucide-react'
import FadeIn from './FadeIn'

const regions = [
  {
    emirate: 'Ajman',
    badge: 'Studio Location & HQ',
    address: 'Al Jerf Industrial 1, Ajman, United Arab Emirates',
    areas: ['Ajman Corniche', 'Al Nuaimiya', 'Al Rashidiya', 'Al Jurf', 'Al Zorah', 'Garden City'],
    note: 'Drop-off directly at our studio or request doorstep collection.',
  },
  {
    emirate: 'Sharjah',
    badge: 'Complimentary Collection',
    address: 'Serving all key communities across Sharjah',
    areas: ['Al Nahda', 'Al Majaz', 'Al Khan', 'Al Qasimia', 'Muwaileh', 'Al Taawun'],
    note: 'Doorstep pickup & drop-off scheduled around your calendar.',
  },
  {
    emirate: 'Dubai & Abu Dhabi',
    badge: 'Enclosed Carrier Transport',
    address: 'Covering prime luxury residential & business hubs',
    areas: ['Downtown & Business Bay', 'Dubai Marina & Palm', 'Al Reem & Saadiyat', 'Yas Island & Corniche'],
    note: 'Safe, fully insured flatbed/enclosed transport direct to studio.',
  },
]

const AreasServed = () => {
  return (
    <section className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-20 md:py-24 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-[#E50914]/[0.025] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
              <Truck className="w-3.5 h-3.5 text-[#E50914]" />
              <span className="text-[#A0A0A0] text-[11px] sm:text-xs uppercase font-medium tracking-[0.25em]">
                UAE-Wide Coverage & Transport
              </span>
            </div>
            <h2
              className="font-black uppercase leading-tight tracking-tight text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
            >
              Areas We Serve
            </h2>
            <p className="text-[#8E8E93] text-sm sm:text-base font-light leading-relaxed">
              Based in Al Jerf Industrial 1, Ajman, StyleInCar provides door-to-door vehicle pickup and drop-off across the Northern Emirates, Dubai, and Abu Dhabi.
            </p>
          </FadeIn>
        </div>

        {/* 3 Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {regions.map((region, i) => (
            <FadeIn key={region.emirate} delay={0.08 * (i + 1)} y={20}>
              <div className="h-full rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 bg-gradient-to-b from-[#111111] via-[#0A0A0A] to-[#050505] border border-white/[0.08] hover:border-[#E50914]/50 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914]">
                      {region.badge}
                    </span>
                    <MapPin className="w-4 h-4 text-white/30" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {region.emirate}
                  </h3>

                  <p className="text-[#8E8E93] text-xs font-light mb-5">
                    {region.address}
                  </p>

                  {/* Areas Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {region.areas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/80 flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-[#E50914]" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-xs text-[#8E8E93] font-light leading-relaxed">
                  {region.note}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Logistics Banner */}
        <FadeIn delay={0.25} y={15}>
          <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#E50914] shrink-0 hidden sm:block" />
              <p className="text-white text-xs sm:text-sm font-medium">
                Want your car collected from your home or office? We offer insured flatbed logistics across Dubai, Sharjah, and Ajman.
              </p>
            </div>
            <a
              href="https://wa.me/971558120570?text=Hi%20StyleInCar,%20I'd%20like%20to%20inquire%20about%20vehicle%20pickup%20from%20my%20location."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E50914] hover:bg-[#B80710] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 hover:scale-105 shadow-[0_6px_20px_rgba(229,9,20,0.35)]"
            >
              <span>Schedule Vehicle Pickup →</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default AreasServed
