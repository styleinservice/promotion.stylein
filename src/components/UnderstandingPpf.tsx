import { ShieldAlert, ShieldCheck } from 'lucide-react'
import FadeIn from './FadeIn'

const comparisonRows = [
  {
    concern: 'Stone chips',
    withoutPpf: 'Direct impact on paint',
    withPpf: 'Film absorbs much of the impact',
  },
  {
    concern: 'Sand scratches',
    withoutPpf: 'Can accumulate over time',
    withPpf: 'Self-healing protective film helps reduce surface damage',
  },
  {
    concern: 'UV exposure',
    withoutPpf: 'Paint remains directly exposed',
    withPpf: 'Additional UV protection',
  },
  {
    concern: 'Minor scratches',
    withoutPpf: 'Can mark the original paint',
    withPpf: 'Self-healing film can reduce appearance of light scratches',
  },
  {
    concern: 'Paint appearance',
    withoutPpf: 'More exposed to environmental wear',
    withPpf: 'Original finish is better protected',
  },
  {
    concern: 'Maintenance',
    withoutPpf: 'More polishing/detailing may be required',
    withPpf: 'Easier-to-clean protective surface, depending on film',
  },
]

const UnderstandingPpf = () => {
  return (
    <section className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 lg:py-10 bg-[#080808] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-600/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ── Main Section Header ── */}
        <div className="mb-3.5 sm:mb-4">
          <FadeIn delay={0} y={10}>
            <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
              <div className="w-6 h-[1px]" style={{ background: '#E50914' }} />
              <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.3em] font-light">
                Paint Protection Guide
              </span>
            </div>
            <h2
              className="text-[#F5F5F5] font-black uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
            >
              Understanding PPF
            </h2>
          </FadeIn>
        </div>

        {/* ── 1. What Is Paint Protection Film? (Compact) ── */}
        <div className="mb-4 sm:mb-5">
          <FadeIn delay={0.1} y={10}>
            <div className="rounded-2xl p-3.5 sm:p-4 px-4 sm:px-5 bg-[#0D0D0D]">
              <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-tight mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                What Is Paint Protection Film?
              </h3>
              <div className="space-y-1.5 text-xs sm:text-[0.82rem] text-[#A1A1AA] font-light leading-relaxed">
                <p>
                  Paint Protection Film is a transparent, self-healing urethane layer designed to protect painted surfaces from stone chips, scratches, road debris and environmental exposure.
                </p>
                <p>
                  PPF is a thermoplastic polyurethane/urethane film applied to selected painted surfaces of a vehicle. Modern films can absorb minor impacts and use self-healing technology to reduce the appearance of certain light scratches when exposed to heat.
                </p>
                <p>
                  For Ajman and UAE driving conditions, PPF can provide an additional layer of protection against sunlight, sand, dust and highway debris.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── 2. With vs Without PPF Table (Compact) ── */}
        <div className="mb-4 sm:mb-5">
          <FadeIn delay={0.15} y={10}>
            <div className="mb-2">
              <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                With vs Without PPF
              </h3>
            </div>

            {/* Unified Sleek Comparison Matrix (Mobile & Desktop) */}
            <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0D0D0D] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              {/* Header */}
              <div className="grid grid-cols-12 border-b border-white/[0.08] bg-white/[0.02] py-2.5 px-3 sm:px-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                <div className="col-span-4 sm:col-span-3 text-white/50">
                  Concern
                </div>
                <div className="col-span-4 sm:col-span-4 text-red-400 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-red-400 shrink-0" />
                  <span className="truncate">Without PPF</span>
                </div>
                <div className="col-span-4 sm:col-span-5 text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">With PPF</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-white/[0.05]">
                {comparisonRows.map((row) => (
                  <div
                    key={row.concern}
                    className="grid grid-cols-12 py-2.5 sm:py-3 px-3 sm:px-4 items-center hover:bg-white/[0.015] transition-colors text-[10.5px] sm:text-xs"
                  >
                    <div className="col-span-4 sm:col-span-3 font-semibold text-white uppercase tracking-tight pr-2">
                      {row.concern}
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-[#8E8E93] font-light leading-snug pr-2">
                      {row.withoutPpf}
                    </div>
                    <div className="col-span-4 sm:col-span-5 text-white/95 font-medium leading-snug pl-2 border-l border-emerald-500/20 text-emerald-100/90">
                      {row.withPpf}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── 3. PPF vs Ceramic Coating (Compact) ── */}
        <div>
          <FadeIn delay={0.2} y={10}>
            <div className="mb-2">
              <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                PPF vs Ceramic Coating
              </h3>
            </div>

            <div className="rounded-2xl p-3.5 sm:p-4 bg-[#0D0D0D] border border-white/[0.08]">
              <p className="text-white text-xs font-medium mb-2.5">
                PPF and ceramic coating serve different purposes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-2.5">
                {/* PPF Card */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-white font-bold text-xs uppercase tracking-tight mb-1 text-[#E50914]">
                    PPF
                  </h4>
                  <p className="text-[#A1A1AA] text-[11px] sm:text-xs font-light leading-relaxed">
                    PPF is a physical protective film designed primarily to help protect against stone chips, scratches and road debris.
                  </p>
                </div>

                {/* Ceramic Coating Card */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-white font-bold text-xs uppercase tracking-tight mb-1 text-white">
                    Ceramic Coating
                  </h4>
                  <p className="text-[#A1A1AA] text-[11px] sm:text-xs font-light leading-relaxed">
                    Ceramic coating is a liquid/chemical coating that adds hydrophobic properties, gloss and easier cleaning. It does not provide the same impact protection as PPF.
                  </p>
                </div>
              </div>

              {/* Compatible Combo Note */}
              <div className="pt-2 border-t border-white/[0.06] text-[11px] sm:text-xs text-[#8E8E93] font-light leading-relaxed">
                For customers looking for both impact protection and easier maintenance, PPF can be combined with ceramic coating where compatible.
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}

export default UnderstandingPpf
