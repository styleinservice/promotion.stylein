import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import FadeIn from './FadeIn'

const features = [
  {
    num: '01',
    title: 'Self-Healing Technology',
    description:
      'Self-healing film can reduce the appearance of minor surface scratches when exposed to heat, depending on the film.',
  },
  {
    num: '02',
    title: 'Hydrophobic Protection',
    description:
      'Compatible top coats can help water and contaminants bead off the surface, making routine cleaning easier.',
  },
  {
    num: '03',
    title: 'Warranty',
    description:
      'Warranty coverage depends on the selected film and manufacturer terms. Ask for the applicable warranty before installation.',
  },
  {
    num: '04',
    title: 'Invisible Protection',
    description:
      'High-quality clear PPF is designed to preserve the appearance of the original paint while remaining difficult to notice when professionally installed.',
  },
  {
    num: '05',
    title: 'Preserve Your Paint',
    description:
      'Protecting the original factory finish can help keep the vehicle looking newer for longer.',
  },
  {
    num: '06',
    title: 'Precision Installation',
    description:
      'Trained technicians and precision-cut patterns help provide accurate panel coverage and clean installation.',
  },
]

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 md:py-10 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#E50914]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <FadeIn delay={0} y={10}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                  <div className="w-6 h-[1px]" style={{ background: '#E50914' }} />
                  <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.3em] font-light">
                    The StyleInCar Standard
                  </span>
                </div>
                <h2
                  className="text-[#F5F5F5] font-black uppercase tracking-tight leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
                >
                  Why Choose Us
                </h2>
              </div>
              <p className="text-[#777777] text-xs sm:text-sm font-light max-w-sm sm:max-w-md">
                Premium materials combined with trained installation techniques help deliver a clean and durable PPF installation.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Split Layout: Single Clean Image (Left) + Interactive Feature Rows without Icons (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Clean, High-Resolution Technician Showcase Image (No Text Overlays) */}
          <div className="lg:col-span-5 xl:col-span-5 order-2 lg:order-1">
            <FadeIn delay={0.05} y={10} className="h-full">
              <div className="relative h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] rounded-2xl sm:rounded-3xl border border-white/[0.1] bg-[#0A0A0C] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <img
                  src="/process-04-edges.jpg"
                  alt="Professional PPF Precision Installation on Luxury Vehicle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle luxury edge vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 6 Interactive Editorial Rows (No Icons, Exact Doc Copy) */}
          <div className="lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col justify-center space-y-2 sm:space-y-2.5">
            {features.map((feature, i) => {
              const isActive = i === activeIndex
              return (
                <FadeIn key={feature.title} delay={0.03 * (i + 1)} y={10}>
                  <div
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`relative rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-white/[0.16] shadow-[0_4px_25px_rgba(0,0,0,0.5)] p-4 sm:p-5'
                        : 'bg-[#0D0D0F] border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.02] p-3 sm:p-3.5'
                    }`}
                  >
                    {/* Active Red Accent Left Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E50914] shadow-[0_0_12px_#E50914]" />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* Index Number */}
                        <span
                          className={`font-mono font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                            isActive ? 'text-[#E50914]' : 'text-white/30'
                          }`}
                        >
                          {feature.num}
                        </span>

                        {/* Title */}
                        <h3
                          className={`uppercase font-black text-sm sm:text-base tracking-tight truncate transition-colors ${
                            isActive ? 'text-white' : 'text-[#A0A0A5]'
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </div>

                      {/* Right Indicator */}
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'text-[#E50914] rotate-90 scale-110'
                            : 'text-white/20'
                        }`}
                      />
                    </div>

                    {/* Expandable Exact Documentation Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#D4D4D8] text-xs sm:text-[0.84rem] font-light leading-relaxed pl-7 sm:pl-8 pt-2.5 sm:pt-3">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
