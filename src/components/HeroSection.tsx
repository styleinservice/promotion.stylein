import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
})

interface HeroSectionProps {
  onOpenQuote?: () => void
}

const HeroSection = ({ onOpenQuote }: HeroSectionProps) => {
  return (
    <section
      className="relative flex flex-col justify-between film-grain overflow-hidden min-h-[100svh] lg:min-h-[680px]"
      style={{ background: '#050505' }}
    >
      {/* ── Background Car Image & Lighting (Trimmed 20% from bottom on mobile: h-[80%]) ── */}
      <div className="absolute inset-x-0 top-0 h-[80%] lg:h-full lg:inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ambient studio light glow */}
        <div
          className="absolute top-[20%] left-[50%] lg:left-[70%] -translate-x-1/2 w-[70%] lg:w-[50%] h-[50%] z-0 blur-[120px] opacity-[0.06]"
          style={{ background: 'radial-gradient(ellipse, #ffffff, transparent 70%)' }}
        />

        {/* Subtle red underglow */}
        <div
          className="absolute bottom-[10%] left-[50%] lg:left-[70%] -translate-x-1/2 w-[60%] lg:w-[45%] h-[24%] z-0 blur-[100px] opacity-[0.14]"
          style={{ background: '#E50914' }}
        />

        {/* Hero Car Background Image (Positioned at 70% horizontally to show bonnet/front of car on mobile) */}
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src="/hero-car.jpg?v=2"
          alt="Luxury vehicle with PPF protection"
          className="w-full h-full object-cover object-[70%_52%] sm:object-[center_78%] lg:object-right lg:object-contain opacity-95 sm:opacity-95 lg:opacity-100"
        />

        {/* Mobile Gradient Overlay (Shadow over roof/windshield reduced by 50%) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none lg:hidden"
          style={{
            background: `
              linear-gradient(to bottom, 
                rgba(5,5,5,0.90) 0%, 
                rgba(5,5,5,0.65) 18%, 
                rgba(5,5,5,0.22) 40%, 
                rgba(5,5,5,0.1) 65%, 
                #050505 100%
              ),
              radial-gradient(circle at 50% 35%, rgba(5,5,5,0.32) 0%, transparent 85%)
            `,
          }}
        />

        {/* Desktop Gradient Overlay: solid dark on left typography, crystal clear car on right */}
        <div
          className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, 
                #050505 0%, 
                #050505 30%, 
                rgba(5,5,5,0.88) 45%, 
                rgba(5,5,5,0.3) 65%, 
                transparent 85%
              ),
              linear-gradient(to top, #050505 0%, transparent 18%),
              linear-gradient(to bottom, #050505 0%, transparent 14%)
            `,
          }}
        />
      </div>

      {/* Top Section (Navbar) */}
      <div className="relative z-30">
        {/* ── Navbar ── */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 pt-5 sm:pt-7 lg:pt-6"
        >
          <img src="/logo.webp" alt="StyleInCar" className="h-8 sm:h-10 md:h-11" />

          {/* Top-Right CTA */}
          <button
            type="button"
            onClick={onOpenQuote}
            className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-white text-[0.66rem] sm:text-[0.7rem] font-medium uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] border border-white/15 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #E50914 0%, #B80710 100%)',
            }}
          >
            {/* Shimmer light sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            <span className="relative z-10">Get a Quote</span>
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1 text-[0.68rem]">→</span>
          </button>
        </motion.nav>
      </div>

      {/* ── Hero Composition ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-end lg:justify-center px-6 sm:px-10 md:px-14 lg:px-20 pb-8 sm:pb-10 lg:pb-8 lg:my-auto">
        {/* Left — Typography */}
        <div className="w-full lg:w-[48%] flex flex-col justify-end lg:justify-center">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.35)} className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E50914]" />
            <span className="text-[#A5A5A5] text-[0.74rem] sm:text-xs font-medium uppercase tracking-[0.25em]">
              Ajman · UAE
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-3 sm:mb-4 lg:mb-3">
            <motion.h1
              {...fadeUp(0.5)}
              className="font-black uppercase leading-[0.84] tracking-[-0.03em] text-white"
              style={{
                fontSize: 'clamp(3.8rem, 7.5vw, 6.8rem)',
              }}
            >
              PPF<span className="text-[#E50914]">.</span>
            </motion.h1>
            <motion.h1
              {...fadeUp(0.6)}
              className="font-extralight uppercase leading-[0.88] tracking-[-0.01em] mt-1 text-[#D0D0D0]"
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)',
              }}
            >
              Perfected<span className="text-[#E50914] font-light">.</span>
            </motion.h1>
          </div>

          {/* Supporting text */}
          <motion.p
            {...fadeUp(0.75)}
            className="font-light leading-[1.6] max-w-[430px] sm:max-w-[480px] mb-4 sm:mb-5 lg:mb-4 text-[0.9rem] sm:text-[0.98rem] text-[#B8B8B8]"
          >
            Shield your vehicle’s factory paint from extreme UAE heat, sand abrasion, and stone chips. Precision-applied self-healing film designed to preserve showroom gloss for up to 10 years.
          </motion.p>

          {/* Key Bullet Benefits (above CTA buttons) */}
          <motion.div
            {...fadeUp(0.85)}
            className="mb-5 sm:mb-6 lg:mb-5 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 text-[0.72rem] sm:text-[0.78rem] text-white/80"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0" />
              <span className="font-medium text-white/90">Stone Chip Shield</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0" />
              <span className="font-medium text-white/90">Self-Healing Tech</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0" />
              <span className="font-medium text-white/90">Extreme UV Defense</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0" />
              <span className="font-medium text-white/90">Gloss & Satin Finishes</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0" />
              <span className="font-medium text-white/90">7–10 Yr Durability</span>
            </div>
          </motion.div>

          {/* CTA Buttons - Parallel Side by Side on Mobile */}
          <motion.div {...fadeUp(0.95)} className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenQuote}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-white text-[0.74rem] sm:text-[0.86rem] font-semibold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(229,9,20,0.5)] border border-white/15 cursor-pointer shadow-lg whitespace-nowrap text-center"
              style={{ background: 'linear-gradient(135deg, #E50914 0%, #B80710 100%)' }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span className="relative z-10">Get a Quote</span>
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1 text-[0.72rem] sm:text-[0.8rem]">→</span>
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-3.5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-[0.74rem] sm:text-[0.86rem] font-medium uppercase tracking-wider transition-all duration-300 hover:bg-white/[0.08] hover:border-white/40 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-sm whitespace-nowrap text-[#E2E2E2] border border-white/20 text-center"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
