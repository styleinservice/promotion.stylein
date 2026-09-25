import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'

const statsData = [
  {
    stat: '500+',
    title: 'Cars Protected',
  },
  {
    stat: '10-Year',
    title: 'Warranty',
  },
  {
    stat: '5.0 ★',
    title: 'Google Rating',
  },
]

const storyText =
  "We are based in Al Jerf Industrial 1, Ajman, United Arab Emirates. StyleInCar delivers precision paint protection and car care services engineered specifically for UAE driving conditions, protecting your vehicle's factory paint from harsh sunlight, sand, dust and road debris."

const regions = [
  {
    id: 'ajman',
    emirate: 'Ajman',
    tag: 'Primary Studio & HQ',
    address: 'Our primary PPF and car care location is Al Jerf Industrial 1, Ajman, United Arab Emirates.',
    areas: ['Ajman Corniche', 'Al Nuaimiya', 'Al Rashidiya', 'Al Jurf', 'Al Zorah'],
  },
  {
    id: 'sharjah',
    emirate: 'Sharjah',
    tag: 'Northern Emirates',
    address: 'Serving customers across key Sharjah communities with scheduled service availability.',
    areas: ['Al Nahda', 'Al Majaz', 'Al Khan', 'Al Qasimia', 'Other Sharjah communities'],
  },
  {
    id: 'dubai-abudhabi',
    emirate: 'Dubai & Abu Dhabi',
    tag: 'UAE Coverage',
    address: 'Serving prime areas across Dubai and Abu Dhabi, subject to service availability and scheduling.',
    areas: ['Corniche', 'Al Reem Island', 'Saadiyat Island', 'Yas Island', 'Other Abu Dhabi / Dubai areas'],
  },
]

const AboutSection = () => {
  const [activeRegionIndex, setActiveRegionIndex] = useState(0)
  const activeRegion = regions[activeRegionIndex]

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 md:py-10 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.035) 0%, rgba(5, 5, 5, 0) 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto z-10 w-full">
        {/* Main Editorial Content (Retained 100% as requested) */}
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center w-full mb-10 sm:mb-14">
          {/* Eyebrow */}
          <FadeIn delay={0} y={10}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
              <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.2em] font-light">
                Al Jerf Industrial 1 · Ajman, UAE
              </span>
            </div>
          </FadeIn>

          {/* Big Heading */}
          <FadeIn delay={0.05} y={15}>
            <h2
              className="font-black uppercase leading-none tracking-tight text-center text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
            >
              About StyleInCar
            </h2>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.08} y={10}>
            <p className="text-[#E50914] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6">
              Professional PPF & Car Care Services in Ajman, UAE
            </p>
          </FadeIn>

          {/* Animated Story Text */}
          <div className="w-full flex justify-center px-2 sm:px-4">
            <AnimatedText
              text={storyText}
              className="text-[#D0D6DC] font-light text-center leading-relaxed max-w-[720px]"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
            />
          </div>
        </div>

        {/* Option 1: Interactive UAE Studio & Coverage Hub (Fixed Stable Heights) */}
        <FadeIn delay={0.12} y={15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Left Column: Key Stats & Studio Location (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-3.5">
              {/* Studio Stats Header */}
              <div className="flex items-center gap-3 mb-1">
                <div className="w-5 h-[1px]" style={{ background: '#E50914' }} />
                <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.25em] font-light">
                  Key Stats
                </span>
              </div>

              {/* 3 Exact Documentation Stats (Horizontal 3-Column on Mobile, 1-Column on Desktop) */}
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3.5">
                {statsData.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 bg-gradient-to-r from-[#111113] via-[#0D0D0F] to-[#08080A] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-center text-center sm:text-left group"
                  >
                    <div className="text-base sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-0.5 sm:mb-1">
                      {item.stat}
                    </div>
                    <div className="text-[#8E8E93] text-[9px] sm:text-xs font-semibold uppercase tracking-wider leading-tight truncate">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive UAE Region Coverage Deck (7 Columns - Stable Height) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#111113] via-[#0A0A0C] to-[#070708] border border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[380px] sm:min-h-[400px]">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent" />

              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Header & Subtitle */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                      <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.25em] font-light">
                        UAE Service Coverage
                      </span>
                    </div>
                    <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight">
                      Areas We Serve
                    </h3>
                  </div>

                  <p className="text-[#8E8E93] text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-5">
                    We are based in Ajman and serve customers across Ajman, Sharjah, Dubai, subject to service availability and scheduling.
                  </p>

                  {/* 3 Region Tabs */}
                  <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-black/40 border border-white/[0.06] mb-4">
                    {regions.map((region, i) => {
                      const isActive = i === activeRegionIndex
                      return (
                        <button
                          key={region.id}
                          type="button"
                          onClick={() => setActiveRegionIndex(i)}
                          className={`py-2 px-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center truncate ${
                            isActive
                              ? 'bg-[#E50914] text-white shadow-[0_0_12px_rgba(229,9,20,0.4)]'
                              : 'text-[#8E8E93] hover:text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          {region.emirate}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Active Region Display Card with Stable Min Height (No Layout Shift) */}
                <div className="min-h-[175px] sm:min-h-[185px] flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeRegion.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-white font-bold text-base sm:text-lg uppercase tracking-tight">
                            {activeRegion.emirate}
                          </h4>
                          <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#E50914] border border-[#E50914]/20">
                            {activeRegion.tag}
                          </span>
                        </div>

                        <p className="text-[#A0A0A5] text-xs font-light leading-relaxed mb-3.5 min-h-[32px] sm:min-h-[30px]">
                          {activeRegion.address}
                        </p>
                      </div>

                      {/* 5 Exact Documentation Areas (Clean Tags Without Icons) */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {activeRegion.areas.map((area) => (
                          <span
                            key={area}
                            className="text-[11px] sm:text-xs font-light px-2.5 sm:px-3 py-1 rounded-md bg-[#0D0D0F] border border-white/[0.08] text-white/90 hover:border-white/20 transition-colors"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutSection
