import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

interface ProcessImage {
  src: string
  label: string
}

interface ProcessStep {
  number: string
  stepLabel: string
  name: string
  description: string
  duration?: string
  image: ProcessImage
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    stepLabel: 'Step 01 · Consultation',
    name: 'Free Doorstep Consultation',
    description:
      'Discuss your vehicle, protection requirements, and available packages. Physical film samples (XPEL, 3M, Takai) can be shown during consultation with vehicle-specific recommendations.',
    image: { src: '/process-01-doorstep.jpg', label: 'Doorstep Film Consultation' },
  },
  {
    number: '02',
    stepLabel: 'Step 02 · Logistics',
    name: 'Pickup or Drop-off',
    description:
      'Complimentary vehicle pickup is available from Dubai, Sharjah, and Ajman, subject to service-area availability. Safe and secure transport direct to our Al Jerf Industrial 1 studio.',
    image: { src: '/process-02-flatbed.jpg', label: 'Enclosed & Flatbed Transport' },
  },
  {
    number: '03',
    stepLabel: 'Step 03 · Paint Prep',
    name: 'Surface Preparation',
    description:
      "The vehicle is washed and prepared before installation. Decontamination, clay treatment and paint correction may be recommended depending on the vehicle's condition.",
    image: { src: '/process-03-polish.jpg', label: 'Multi-Stage Paint Correction' },
  },
  {
    number: '04',
    stepLabel: 'Step 04 · Clean-Bay Installation',
    name: 'Expert Installation',
    description:
      'PPF is installed using precision-fit patterns by trained StyleInCar technicians in a dust-controlled bay. Installation time is generally 1–3 days, depending on vehicle and coverage.',
    duration: '1–3 Days',
    image: { src: '/process-04-clear.jpg', label: 'Dust-Free Clean Bay PPF' },
  },
  {
    number: '05',
    stepLabel: 'Step 05 · Quality Review',
    name: 'Final Inspection',
    description:
      'The vehicle is inspected after installation so the customer can review the finished work before handover under studio lighting.',
    image: { src: '/process-05-hexlights.jpg', label: 'Customer Inspection & Review' },
  },
  {
    number: '06',
    stepLabel: 'Step 06 · Handover & QC',
    name: 'Quality Check',
    description:
      'A follow-up inspection can be arranged after installation to check the film and address any required adjustments. Handover includes official warranty documentation.',
    duration: '10-Yr Warranty',
    image: { src: '/process-06-delivery.jpg', label: 'Pristine Studio Delivery' },
  },
]

interface ProcessCardProps {
  step: ProcessStep
  onOpenQuote?: () => void
}

const ProcessCard = ({ step, onOpenQuote }: ProcessCardProps) => {
  return (
    <div className="rounded-[24px] sm:rounded-[32px] md:rounded-[36px] border border-white/10 p-5 sm:p-6 md:p-7 flex flex-col md:flex-row items-stretch gap-5 md:gap-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden bg-gradient-to-br from-[#121212] via-[#0B0B0B] to-[#070707] hover:border-white/20 transition-all duration-300 group md:h-[380px] lg:h-[390px]">
      {/* Subtle top edge sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* LEFT COLUMN: Content */}
      <div className="w-full md:w-[50%] flex flex-col justify-between h-full relative z-10 py-0.5">
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {/* Header: Big Step Number + Label + Title */}
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="font-black leading-none text-white/80 select-none shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-[52px]">
              {step.number}
            </span>

            <div className="flex flex-col gap-1 pt-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#E50914] font-semibold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                  {step.stepLabel}
                </span>
                {step.duration && (
                  <span className="px-2 py-0.5 rounded-full text-[0.6rem] font-medium tracking-wider uppercase bg-[#E50914]/15 border border-[#E50914]/30 text-white">
                    {step.duration}
                  </span>
                )}
              </div>

              <h3 className="text-white font-bold uppercase tracking-tight leading-snug text-base sm:text-lg md:text-xl lg:text-[22px]">
                {step.name}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#8E8E93] text-xs sm:text-sm font-light leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Bottom Dock: CTAs */}
        <div className="pt-3 sm:pt-4 flex items-center justify-between flex-wrap gap-2.5 border-t border-white/[0.08] mt-3">
          <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
            <a
              href={`https://wa.me/971558120570?text=Hi%20StyleInCar,%20I'm%20asking%20about%20${encodeURIComponent(
                step.name
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#E50914] hover:bg-[#B80710] text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(229,9,20,0.5)] hover:scale-105"
            >
              <span>Ask on WhatsApp</span>
              <span>→</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border border-white/20 hover:border-white/40 bg-white/[0.05] hover:bg-white/[0.1] text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer"
            >
              <span>Get Quote</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Single Hero Image */}
      <div className="w-full md:w-[50%] h-[190px] sm:h-[220px] md:h-full rounded-xl sm:rounded-2xl md:rounded-[22px] overflow-hidden border border-white/[0.08] relative group shrink-0">
        <img
          src={step.image.src}
          alt={step.image.label}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
        <span className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 px-2.5 sm:px-3 py-1 rounded-full text-[0.6rem] sm:text-xs font-semibold tracking-wider uppercase bg-black/80 border border-white/20 text-white backdrop-blur-md z-10 pointer-events-none">
          {step.image.label}
        </span>
      </div>
    </div>
  )
}

interface ProjectsSectionProps {
  onOpenQuote?: () => void
}

const ProjectsSection = ({ onOpenQuote }: ProjectsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const cards = container.children
    if (cards[index]) {
      const card = cards[index] as HTMLElement
      const targetScroll = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2
      container.scrollTo({ left: targetScroll, behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  const handlePrev = () => {
    const nextIndex = Math.max(0, currentIndex - 1)
    scrollToIndex(nextIndex)
  }

  const handleNext = () => {
    const nextIndex = Math.min(processSteps.length - 1, currentIndex + 1)
    scrollToIndex(nextIndex)
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const scrollLeft = container.scrollLeft
    const cards = Array.from(container.children) as HTMLElement[]

    let closestIndex = 0
    let minDistance = Infinity

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2
      const containerCenter = scrollLeft + container.clientWidth / 2
      const distance = Math.abs(cardCenter - containerCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = idx
      }
    })

    setCurrentIndex(closestIndex)
  }

  return (
    <section
      id="process"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 md:pb-8 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Header with Navigation Buttons */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <FadeIn delay={0} y={15}>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              <span className="text-[#A5A5A5] text-xs font-semibold uppercase tracking-[0.25em]">
                Workflow & Installation
              </span>
            </div>
            <h2
              className="font-black uppercase leading-none tracking-tight text-white mb-3"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
            >
              Our 6-Step Process
            </h2>
            <p className="text-[#888888] text-xs sm:text-sm font-light max-w-lg leading-relaxed">
              From free doorstep consultation to precision installation and 10-year warranty handover in Ajman.
            </p>
          </FadeIn>
        </div>

        {/* 2 Navigation Buttons & Step Counter */}
        <div className="flex items-center gap-3 self-start md:self-end shrink-0">
          {/* Step Indicator Counter */}
          <div className="px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80 tracking-wider flex items-center gap-1.5 select-none">
            <span className="text-[#E50914] font-bold">0{currentIndex + 1}</span>
            <span className="text-white/30">/</span>
            <span>0{processSteps.length}</span>
          </div>

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous Step"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-[#E50914] bg-white/[0.04] hover:bg-[#E50914] text-white flex items-center justify-center transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white/[0.04] disabled:hover:border-white/20 active:scale-95 cursor-pointer shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === processSteps.length - 1}
            aria-label="Next Step"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-[#E50914] bg-white/[0.04] hover:bg-[#E50914] text-white flex items-center justify-center transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white/[0.04] disabled:hover:border-white/20 active:scale-95 cursor-pointer shadow-lg"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Carousel Track */}
      <div className="max-w-7xl mx-auto relative">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto flex gap-4 sm:gap-6 md:gap-8 pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="w-[90vw] sm:w-[84vw] md:w-[740px] lg:w-[940px] xl:w-[1040px] shrink-0 snap-center"
            >
              <ProcessCard step={step} onOpenQuote={onOpenQuote} />
            </div>
          ))}
        </div>

        {/* Step Progress Indicators (Clickable Dots) */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          {processSteps.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to step ${step.number}`}
              className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#E50914] shadow-[0_0_12px_rgba(229,9,20,0.6)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
