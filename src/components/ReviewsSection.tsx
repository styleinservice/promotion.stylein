import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import FadeIn from './FadeIn'

const GoogleLogo = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Google">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
)

interface ReviewItem {
  author: string
  stars: number
  review: string
}

const reviews: ReviewItem[] = [
  {
    author: 'Faria Khan (2026)',
    stars: 5,
    review:
      'I recently gave my BMW to Stylein Car Studio for painting and detailing work, and honestly, the experience exceeded all my expectations. I was initially very hesitant and protective about handing over my car because BMW paint work requires absolute precision, premium finishing, and attention to detail. From the moment the team inspected the vehicle, their professionalism, technical knowledge, and passion for luxury car care gave me confidence. The final paint finish was flawless, smooth, factory level quality with an incredible shine and detailing that truly brought the car back to life. The color matching, polishing, and finishing were done with perfection and looked absolutely premium.',
  },
  {
    author: 'Hoorain (2026 BMW M4)',
    stars: 5,
    review:
      'Great service and amazing attention to detail! My car looks brand new inside and out. Very professional and reliable—highly recommend!',
  },
  {
    author: 'Manpreet Singh (2026 Lexus LX)',
    stars: 5,
    review:
      "Very thorough inspection before installation. They found and fixed small paint defects I didn't even notice. True professionals.",
  },
  {
    author: 'Evelyn Echavaria (2026)',
    stars: 5,
    review:
      'Had good service on my car, also was collected and returned on time. Keep informed during the day on how the work was progressing. All very efficient. Thanks for excellent services, professional and friendly staff.',
  },
]

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<number>(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)
  const [touchEndY, setTouchEndY] = useState<number | null>(null)

  const current = reviews[activeIndex]

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const handleSelectIndex = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  // Native touch gesture handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null)
    setTouchEndY(null)
    setTouchStartX(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
    setTouchEndY(e.targetTouches[0].clientY)
  }

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null || touchStartY === null || touchEndY === null) return
    const diffX = touchStartX - touchEndX
    const diffY = touchStartY - touchEndY
    // If horizontal swipe is more pronounced than vertical scroll and exceeds 35px threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  return (
    <section className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 md:py-10 bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[350px] bg-[#E50914]/[0.025] blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header with Official Google Badge */}
        <div className="mb-6 sm:mb-8">
          <FadeIn delay={0} y={10}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                  <div className="w-6 h-[1px]" style={{ background: '#E50914' }} />
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                    <GoogleLogo className="w-3.5 h-3.5 shrink-0" />
                    <div className="flex items-center text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-white text-xs font-semibold tracking-wider">
                      Google Rating: 5.0
                    </span>
                  </div>
                </div>
                <h2
                  className="text-[#F5F5F5] font-black uppercase tracking-tight leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
                >
                  Client Reviews
                </h2>
              </div>

              {/* Prev / Next Nav Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-[#0D0D0F] border border-white/10 hover:border-[#E50914] text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-[#0D0D0F] border border-white/10 hover:border-[#E50914] text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Unified Luxury Review Stage Card with Horizontal Touch & Swipe Gestures */}
        <FadeIn delay={0.05} y={10}>
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-b from-[#111113] via-[#0A0A0C] to-[#070708] border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden touch-pan-y select-none"
          >
            {/* Top Red Laser Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E50914]/60 to-transparent" />

            {/* Large Decorative Quote Icon */}
            <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-20 sm:h-20 text-[#E50914]/[0.08] pointer-events-none" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.author}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -35) {
                    handleNext()
                  } else if (info.offset.x > 35) {
                    handlePrev()
                  }
                }}
                initial={{ opacity: 0, x: direction >= 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -30 : 30 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 cursor-grab active:cursor-grabbing"
              >
                {/* Header Row inside Card: Stars + Google Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(current.stars)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-white/90">
                    <GoogleLogo className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified Google Review</span>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="text-white/95 text-sm sm:text-base md:text-lg font-light leading-relaxed italic mb-6 sm:mb-8">
                  "{current.review}"
                </blockquote>

                {/* Author Info Dock with Circular Profile Icon */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#E50914] to-[#ff3b47] flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(229,9,20,0.35)] shrink-0">
                      {current.author.charAt(0)}
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base tracking-tight">
                      {current.author}
                    </h3>
                  </div>

                  {/* Dot Progress Indicators */}
                  <div className="flex items-center gap-1.5">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeIndex
                            ? 'w-6 bg-[#E50914] shadow-[0_0_8px_#E50914]'
                            : 'w-1.5 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to review ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default ReviewsSection
