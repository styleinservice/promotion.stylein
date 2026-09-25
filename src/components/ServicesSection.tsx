import { useRef, useEffect } from 'react'
import FadeIn from './FadeIn'

interface ServiceItem {
  number: string
  name: string
  quoteOption: string
  price: string
  description: string
  features: string[]
}

const services: ServiceItem[] = [
  {
    number: '01',
    name: 'Clear PPF — Full Body',
    quoteOption: 'Clear PPF — Full Body (From AED 3,500)',
    price: 'From AED 3,500',
    description:
      'Complete invisible exterior protection. Advanced thermoplastic urethane film with self-healing technology that absorbs stone chips, desert sand abrasion, and road debris while preserving the original factory finish.',
    features: ['Complete Exterior Coverage', 'Self-Healing Technology', 'Gloss or Matte Finish', 'Up to 10-Year Warranty'],
  },
  {
    number: '02',
    name: 'Color PPF — Full Body',
    quoteOption: 'Color PPF — Full Body (From AED 3,999)',
    price: 'From AED 3,999',
    description:
      'Transform the appearance of your vehicle with premium colored protective film. Combines striking aesthetic customization with high-impact stone-chip and scratch defense — 100% reversible to original factory paint.',
    features: ['Full Color Change', 'Self-Healing Colored Film', 'Multiple Shades & Finishes', '100% Reversible'],
  },
  {
    number: '03',
    name: 'Color Wrapping & Vinyl',
    quoteOption: 'Color Wrapping & Vinyl (From AED 3,600)',
    price: 'From AED 3,600',
    description:
      'Full vehicle transformation with an extensive catalog of matte, satin, gloss, and metallic finishes. Shields underlying paint from minor scuffs and UV fading with 3–5 years of durability.',
    features: ['Matte, Gloss, Satin & Metallic', '100+ Premium Shades', 'Removable Protection', '3–5 Year Lifespan'],
  },
  {
    number: '04',
    name: 'Partial & Custom PPF',
    quoteOption: 'Partial / Custom PPF (Custom Quote)',
    price: 'Custom Quote',
    description:
      'Targeted high-impact zone protection engineered for vulnerable panels. Precision computerized coverage for hood, front bumper, door edges, A/B pillars, rocker panels, and luggage loading lip.',
    features: ['Front Bumper & Hood', 'Door-Edge & Sill Guards', 'Rocker Panels & Pillars', 'Precision CNC Patterns'],
  },
  {
    number: '05',
    name: 'Ceramic Coating',
    quoteOption: 'Nano Ceramic Coating (From AED 649)',
    price: 'From AED 649',
    description:
      'Nano-ceramic liquid glass protection delivering ultra-hydrophobic water beading, mirror-like depth, and chemical resistance against bird droppings, road contaminants, and harsh UAE sunlight.',
    features: ['Extreme Hydrophobicity', 'Enhanced Mirror Gloss', 'UV & Chemical Defense', '3–5 Year Durability'],
  },
  {
    number: '06',
    name: 'Motorcycle PPF',
    quoteOption: 'Motorcycle PPF (From AED 2,000)',
    price: 'From AED 2,000',
    description:
      'Dedicated protection tailored for superbikes and cruisers. Shields fuel tank, front fairing, side panels, and tail cowl against stone chips, knee friction, and helmet abrasions.',
    features: ['Tank & Front Fairing', 'Side Panels & Tail Cowl', 'Self-Healing Stone-Chip Film', 'Warranty Included'],
  },
  {
    number: '07',
    name: 'Interior Detailing & Care',
    quoteOption: 'Interior Detailing & Steam (From AED 349)',
    price: 'From AED 349',
    description:
      'Comprehensive interior rejuvenation including deep vacuum extraction, luxury leather cleaning and conditioning, high-temperature steam sanitization, odour elimination, and UV trim protection.',
    features: ['Leather Conditioning', 'Steam Sanitization', 'Deep Extraction', 'UV Trim Shield'],
  },
  {
    number: '08',
    name: 'Full Paint Correction & Detailing',
    quoteOption: 'Full Detailing & Polish (From AED 499)',
    price: 'From AED 499',
    description:
      'Multi-stage machine polishing and swirl-mark removal to restore factory paint clarity. Includes deep exterior decontamination, engine-bay detailing, wheel and tyre treatment, and high-gloss ceramic sealant finish.',
    features: ['Multi-Stage Machine Polish', 'Swirl & Defect Removal', 'Engine-Bay Detailing', 'Ceramic Sealant Finish'],
  },
  {
    number: '09',
    name: 'Car Seat Customization',
    quoteOption: 'Car Seat Customization (From AED 800)',
    price: 'From AED 800',
    description:
      "Transform your vehicle's interior with bespoke seating tailored to your exact style preferences. We offer custom contrast stitching, premium ergonomic padding, and unique panel patterns to deliver a distinctive, high-end look. Upgrade your driving comfort with top-tier craftsmanship designed for maximum luxury and durability.",
    features: ['Custom Stitching', 'Bespoke Interior', 'Ergonomic Upgrade', 'Luxury Aesthetics'],
  },
  {
    number: '10',
    name: 'Car Seat Reupholstery',
    quoteOption: 'Car Seat Reupholstery (From AED 800)',
    price: 'From AED 800',
    description:
      "Restore your car's damaged, worn-out, or faded seats to brand-new condition using premium automotive-grade materials. Choose from genuine leather, ultra-durable faux leather, or high-performance fabrics engineered to withstand heat and daily wear. Enhance both comfort and resale value with expert upholstery refurbishment.",
    features: ['Leather Restoration', 'Interior Refurbishment', 'Seat Repair', 'Heat Resistant'],
  },
]

interface ServicesSectionProps {
  onSelectService?: (serviceOption: string) => void
  onServicesViewed?: () => void
}

const ServicesSection = ({ onSelectService, onServicesViewed }: ServicesSectionProps) => {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!onServicesViewed) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onServicesViewed()
        }
      },
      { threshold: 0.1 }
    )

    const el = endRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [onServicesViewed])
  return (
    <section
      id="services"
      className="rounded-t-[24px] sm:rounded-t-[40px] md:rounded-t-[60px] px-4 sm:px-8 md:px-14 lg:px-20 pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 relative z-30"
      style={{ background: '#FFFFFF' }}
    >
      {/* Eyebrow & Main Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <span className="text-[#E50914] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] block mb-2">
          Our Protection & Care Packages
        </span>
        <h2
          className="font-black uppercase text-[#0C0C0C] tracking-tight leading-none"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
        >
          Services
        </h2>
      </div>

      {/* Services List */}
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-0">
        {services.map((service) => (
          <FadeIn key={service.number} delay={0.05} y={25}>
            <div id={`service-${service.number}`} className="scroll-mt-24">
              {/* MOBILE VIEW CARD (md:hidden) */}
              <div className="md:hidden bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.05)] rounded-2xl p-5 transition-all duration-300 relative overflow-hidden">
                {/* Subtle top edge accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-90" />

                {/* Top Row: Number & Price Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-2xl text-[#E50914] tracking-tight">
                      {service.number}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E8E93]">
                      Package
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0C0C0C] text-white text-[11px] font-semibold tracking-wider shadow-sm">
                    {service.price}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-bold uppercase text-[#0C0C0C] tracking-tight text-lg mb-2 leading-tight">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="font-normal leading-relaxed text-[#555555] text-xs mb-3.5">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[10.5px] font-medium px-2.5 py-1 rounded-md bg-black/[0.04] border border-black/[0.06] text-[#222222] flex items-center gap-1.5"
                    >
                      <span className="text-[#E50914] font-bold">✓</span>
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(service.quoteOption)
                    } else {
                      const quoteEl = document.getElementById('quote')
                      if (quoteEl) quoteEl.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-[#E50914] active:bg-[#B80710] text-white shadow-[0_4px_14px_rgba(229,9,20,0.3)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>Get Quote</span>
                  <span>→</span>
                </button>
              </div>

              {/* DESKTOP VIEW ROW (hidden md:flex) - 100% Identical to original */}
              <div
                className="hidden md:flex group items-start justify-between gap-10 py-8 transition-all duration-300 hover:bg-black/[0.015] px-4 rounded-xl"
                style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.12)' }}
              >
                {/* Left: Number + Title + Description */}
                <div className="flex items-start gap-8 max-w-3xl">
                  <span
                    className="font-black text-[#0C0C0C] opacity-80 group-hover:text-[#E50914] group-hover:opacity-100 transition-colors duration-300 flex-shrink-0 leading-none"
                    style={{ fontSize: 'clamp(2rem, 7vw, 90px)' }}
                  >
                    {service.number}
                  </span>

                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className="font-bold uppercase text-[#0C0C0C] tracking-tight"
                        style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2rem)' }}
                      >
                        {service.name}
                      </h3>
                    </div>

                    <p className="font-normal leading-relaxed text-[#444444] text-base max-w-2xl">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs font-medium px-3 py-1 rounded-md bg-black/[0.05] text-[#222222]"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Desktop Price & Quote CTA */}
                <div className="flex flex-col items-end justify-between gap-3 pt-3 flex-shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#0C0C0C] text-white text-sm font-semibold tracking-wider">
                    {service.price}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.quoteOption)
                      } else {
                        const quoteEl = document.getElementById('quote')
                        if (quoteEl) quoteEl.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-[#E50914] hover:bg-[#B80710] text-white shadow-[0_4px_14px_rgba(229,9,20,0.3)] hover:scale-105 cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Point 11: Add-on: Door & Edge Protection Showcase */}
      <div className="max-w-6xl mx-auto mt-8 sm:mt-12">
        <FadeIn delay={0.1} y={20}>
          <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 bg-gradient-to-br from-[#141416] via-[#0D0D0F] to-[#070708] text-white border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 relative overflow-hidden">
            {/* Top red accent laser line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent" />

            {/* Left Column: Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E50914] text-white shadow-[0_0_10px_rgba(229,9,20,0.4)]">
                  Add-On Package
                </span>
                <span className="text-[#8E8E93] text-[11px] sm:text-xs font-mono uppercase tracking-wider">
                  Available with any service
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Door & Edge Protection
              </h3>

              {/* Responsive Feature Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-2 w-full">
                {[
                  'Door sill guards',
                  'Door-edge protection',
                  'A/B/C pillar coverage',
                  'Rocker panel coverage',
                  'Luggage-area lip protection',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 sm:py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/90"
                  >
                    <span className="text-[#E50914] font-bold shrink-0">✓</span>
                    <span className="font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing & Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-center lg:items-end justify-between sm:justify-between lg:justify-center gap-4 pt-4 sm:pt-4 lg:pt-0 border-t border-white/[0.08] lg:border-none shrink-0 w-full sm:w-auto">
              <div className="text-left sm:text-left lg:text-right w-full sm:w-auto">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E8E93] block">
                  Add to any package
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  +AED 1,500
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onSelectService) {
                    onSelectService('Door & Edge Protection (+AED 1,500)')
                  } else {
                    const quoteEl = document.getElementById('quote')
                    if (quoteEl) quoteEl.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E50914] hover:bg-[#B80710] text-white transition-all duration-300 shadow-[0_6px_20px_rgba(229,9,20,0.4)] hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                <span>Add To Quote →</span>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Pricing Note */}
      <div className="max-w-4xl mx-auto mt-8 sm:mt-10 text-center">
        <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
          * Note: All prices are starting prices and vary based on vehicle size, condition, coverage, and selected film brand (XPEL, 3M, Takai). Contact us on WhatsApp for an accurate vehicle-specific quotation.
        </p>
      </div>

      {/* End of services trigger marker for auto popup */}
      <div ref={endRef} className="h-1 w-full pointer-events-none" />
    </section>
  )
}

export default ServicesSection
