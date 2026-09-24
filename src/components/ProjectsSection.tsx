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
    name: 'Complimentary Pickup or Drop-Off',
    description:
      'Complimentary vehicle pickup is available across Dubai, Sharjah, and Ajman, subject to service-area availability. Safe and secure transport direct to our Al Jerf Industrial 1 studio.',
    image: { src: '/process-02-flatbed.jpg', label: 'Enclosed & Flatbed Transport' },
  },
  {
    number: '03',
    stepLabel: 'Step 03 · Paint Prep',
    name: 'Surface Preparation & Paint Correction',
    description:
      'The vehicle is thoroughly washed, chemically decontaminated, and clay-barred before installation. Multi-stage paint correction removes swirls and restores optical clarity to the factory clear coat.',
    image: { src: '/process-03-polish.jpg', label: 'Multi-Stage Paint Correction' },
  },
  {
    number: '04',
    stepLabel: 'Step 04 · Clean-Bay Installation',
    name: 'Expert PPF Installation',
    description:
      'PPF is installed using precision-fit computerized patterns by factory-trained StyleIn technicians in a dust-controlled bay. Installation time is generally 1–3 days depending on vehicle and coverage.',
    duration: '1–3 Days',
    image: { src: '/process-04-clear.jpg', label: 'Dust-Free Clean Bay PPF' },
  },
  {
    number: '05',
    stepLabel: 'Step 05 · Quality Review',
    name: 'Curing & Final Customer Inspection',
    description:
      'The vehicle undergoes edge-sealing heat curing and full optical inspection under overhead hexagon LED studio lighting so the customer can review the finished work before handover.',
    image: { src: '/process-05-hexlights.jpg', label: 'Customer Inspection & Review' },
  },
  {
    number: '06',
    stepLabel: 'Step 06 · Handover & QC',
    name: 'Quality Check & 10-Year Warranty',
    description:
      'A follow-up inspection is arranged after installation to check film settling and address any required adjustments. Handover includes an official 10-year warranty certificate and care guide.',
    duration: '10-Yr Warranty',
    image: { src: '/process-06-delivery.jpg', label: 'Pristine Studio Delivery' },
  },
]

const ProcessCard = ({
  step,
  onOpenQuote,
}: {
  step: ProcessStep
  index: number
  onOpenQuote?: () => void
}) => {
  return (
    <FadeIn delay={0.05} y={24} className="w-full">
      <div className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-white/10 p-5 sm:p-6 md:p-6 lg:p-7 flex flex-col md:flex-row items-stretch gap-5 md:gap-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden bg-gradient-to-br from-[#121212] via-[#0B0B0B] to-[#070707] hover:border-white/20 transition-all duration-300 group md:h-[365px] lg:h-[380px]">
        {/* Subtle top edge sheen */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

        {/* LEFT COLUMN: Content */}
        <div className="w-full md:w-[50%] flex flex-col justify-between h-full relative z-10 py-0.5">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {/* Header: Big Step Number + Label + Title */}
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="font-black leading-none text-white/80 select-none shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-[54px]">
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
            <p className="text-[#8E8E93] text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
              {step.description}
            </p>
          </div>

          {/* Bottom Dock: CTAs & Step Progress */}
          <div className="pt-3 sm:pt-4 flex items-center justify-between flex-wrap gap-2.5 border-t border-white/[0.08] mt-2">
            <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
              <a
                href={`https://wa.me/971558120570?text=Hi%20StyleIn,%20I'm%20asking%20about%20${encodeURIComponent(
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

        {/* RIGHT COLUMN: Single Hero Image matching card full height */}
        <div className="w-full md:w-[50%] h-[200px] sm:h-[240px] md:h-full rounded-xl sm:rounded-2xl md:rounded-[24px] overflow-hidden border border-white/[0.08] relative group shrink-0">
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
    </FadeIn>
  )
}

interface ProjectsSectionProps {
  onOpenQuote?: () => void
}

const ProjectsSection = ({ onOpenQuote }: ProjectsSectionProps) => {
  return (
    <section
      id="process"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-12 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20"
      style={{ background: '#050505' }}
    >
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-14">
        <FadeIn delay={0} y={20}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-3"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Our 6-Step Process
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#888888] text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed">
            From free doorstep consultation to precision installation and 10-year warranty handover in Ajman.
          </p>
        </FadeIn>
      </div>

      {/* 6 Clean Normal Flowing Process Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
        {processSteps.map((step, i) => (
          <ProcessCard key={step.number} step={step} index={i} onOpenQuote={onOpenQuote} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
