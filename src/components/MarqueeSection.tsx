import { useRef, useEffect } from 'react'

interface ServiceCard {
  number: string
  title: string
  price: string
  badge: string
  imageUrl: string
  targetId: string
}

const row1Services: ServiceCard[] = [
  {
    number: '01',
    title: 'Clear PPF — Full Body',
    price: 'From AED 3,500',
    badge: 'Self-Healing · 10-Yr Warranty',
    imageUrl: '/clear-ppf.jpg?v=3',
    targetId: '#service-01',
  },
  {
    number: '02',
    title: 'Color PPF — Full Body',
    price: 'From AED 3,999',
    badge: 'Color Change + Armor',
    imageUrl: '/color-ppf.jpg?v=3',
    targetId: '#service-02',
  },
  {
    number: '03',
    title: 'Color Wrapping & Vinyl',
    price: 'From AED 3,600',
    badge: '100+ Matte & Gloss Shades',
    imageUrl: '/color-wrap.jpg?v=3',
    targetId: '#service-03',
  },
  {
    number: '04',
    title: 'Partial & Custom PPF',
    price: 'Custom Quote',
    badge: 'High-Impact Zone Defense',
    imageUrl: '/partial-ppf.jpg?v=3',
    targetId: '#service-04',
  },
  {
    number: '05',
    title: 'Ceramic Coating',
    price: 'From AED 649',
    badge: '9H Nano Coating Application',
    imageUrl: '/ceramic-coating.jpg?v=3',
    targetId: '#service-05',
  },
]

const row2Services: ServiceCard[] = [
  {
    number: '06',
    title: 'Motorcycle PPF',
    price: 'From AED 2,000',
    badge: 'Tank & Fairing Shield',
    imageUrl: '/motorcycle-ppf.jpg?v=3',
    targetId: '#service-06',
  },
  {
    number: '07',
    title: 'Interior Detailing & Care',
    price: 'From AED 349',
    badge: 'Leather & Steam Care',
    imageUrl: '/interior-detailing.jpg?v=3',
    targetId: '#service-07',
  },
  {
    number: '08',
    title: 'Full Paint Correction & Detailing',
    price: 'From AED 499',
    badge: 'Swirl Removal & Sealant',
    imageUrl: '/paint-correction.jpg?v=3',
    targetId: '#service-08',
  },
  {
    number: '09',
    title: 'Car Seat Customization',
    price: 'From AED 800',
    badge: 'Bespoke Stitching & Ergonomics',
    imageUrl: '/seat-customization.png',
    targetId: '#service-09',
  },
  {
    number: '10',
    title: 'Car Seat Reupholstery',
    price: 'From AED 800',
    badge: 'Premium Leather Restoration',
    imageUrl: '/seat-reupholstery.png',
    targetId: '#service-10',
  },
]

interface MarqueeRowProps {
  items: ServiceCard[]
  direction?: 'left' | 'right'
  speed?: number
  rowKey: string
}

const MarqueeRow = ({ items, direction = 'left', speed = 0.75, rowKey }: MarqueeRowProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const isInteractingRef = useRef(false)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const singleWidthRef = useRef(0)
  const lastTouchRef = useRef(0)
  const touchMovedRef = useRef(false)

  // 4 repetitions ensures infinite seamless loop on any screen width
  const quadItems = [...items, ...items, ...items, ...items]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      if (track) {
        singleWidthRef.current = track.scrollWidth / 4
        if (direction === 'right' && posRef.current === 0) {
          posRef.current = -singleWidthRef.current
        }
      }
    }

    measure()
    window.addEventListener('resize', measure)

    let animationFrameId: number

    const tick = () => {
      const singleW = singleWidthRef.current
      if (singleW > 0 && !isInteractingRef.current) {
        if (direction === 'left') {
          posRef.current -= speed
          if (posRef.current <= -singleW) {
            posRef.current += singleW
          }
        } else {
          posRef.current += speed
          if (posRef.current >= 0) {
            posRef.current -= singleW
          }
        }
        if (track) {
          track.style.transform = `translate3d(${posRef.current}px, 0, 0)`
        }
      }
      animationFrameId = requestAnimationFrame(tick)
    }

    animationFrameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', measure)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [direction, speed])

  const handleTouchStart = (e: React.TouchEvent) => {
    isInteractingRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    lastTouchRef.current = e.touches[0].clientX
    touchMovedRef.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX
    const deltaX = currentX - lastTouchRef.current
    if (Math.abs(deltaX) > 2) {
      touchMovedRef.current = true
    }
    lastTouchRef.current = currentX
    posRef.current += deltaX

    const singleW = singleWidthRef.current
    if (singleW > 0) {
      while (posRef.current <= -singleW * 2) posRef.current += singleW
      while (posRef.current > 0) posRef.current -= singleW
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`
    }
  }

  const handleTouchEnd = () => {
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false
    }, 900)
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative w-full cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => {
        isInteractingRef.current = true
      }}
      onMouseLeave={() => {
        isInteractingRef.current = false
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className="flex gap-3 sm:gap-4 w-max will-change-transform py-1"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        {quadItems.map((item, i) => (
          <a
            key={`${rowKey}-${i}`}
            href={item.targetId}
            onClick={(e) => {
              if (touchMovedRef.current) {
                e.preventDefault()
              }
            }}
            className="group relative rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer border border-white/[0.08] hover:border-[#E50914] transition-all duration-300 block w-[270px] sm:w-[330px] md:w-[420px] h-[175px] sm:h-[210px] md:h-[260px] bg-[#0F0F0F]"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 50%, transparent 100%)',
              }}
            />

            {/* Top Badges */}
            <div className="absolute top-3 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between">
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[0.6rem] sm:text-[0.65rem] font-bold tracking-wider uppercase bg-[#E50914] text-white">
                {item.number}
              </span>
              <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[0.6rem] sm:text-[0.65rem] font-medium tracking-wider uppercase bg-black/75 backdrop-blur-md text-[#F5F5F5] border border-white/15">
                {item.price}
              </span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-3 left-3.5 right-3.5 sm:bottom-4 sm:left-5 sm:right-5 z-10">
              <span className="text-[0.6rem] sm:text-[0.65rem] font-semibold text-[#E50914] uppercase tracking-wider block mb-0.5 sm:mb-1 truncate">
                {item.badge}
              </span>
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight group-hover:text-[#E50914] transition-colors duration-300 flex items-center justify-between gap-2">
                <span className="truncate">{item.title}</span>
                <span className="text-xs text-[#E50914] shrink-0 font-semibold">
                  View →
                </span>
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

const MarqueeSection = () => {
  return (
    <section
      className="pt-4 sm:pt-6 pb-6 sm:pb-10 overflow-hidden relative"
      style={{ background: '#080808' }}
    >
      {/* Subtle edge fade overlays for cinematic aesthetics */}
      <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-12 sm:w-20 md:w-28 z-20 pointer-events-none bg-gradient-to-r from-[#080808] to-transparent" />
      <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-12 sm:w-20 md:w-28 z-20 pointer-events-none bg-gradient-to-l from-[#080808] to-transparent" />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 mb-5 sm:mb-7">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
              <div className="w-6 h-[1px]" style={{ background: '#E50914' }} />
              <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.3em] font-light">
                Explore Our Services
              </span>
            </div>
            <h2 className="text-[#F5F5F5] font-black uppercase text-2xl sm:text-3xl md:text-4xl tracking-tight">
              Our Protection & Care in Action
            </h2>
          </div>
          <p className="text-[#777777] text-xs sm:text-sm font-light max-w-sm">
            Click any service to view full package specifications, pricing, and WhatsApp booking details.
          </p>
        </div>
      </div>

      {/* Row 1 - moves left continuously */}
      <div className="mb-3 sm:mb-4">
        <MarqueeRow items={row1Services} direction="left" speed={0.75} rowKey="r1" />
      </div>

      {/* Row 2 - moves right continuously */}
      <div>
        <MarqueeRow items={row2Services} direction="right" speed={0.68} rowKey="r2" />
      </div>
    </section>
  )
}

export default MarqueeSection
