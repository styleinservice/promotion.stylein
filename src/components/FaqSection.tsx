import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

interface FAQItem {
  id: string
  category: 'all' | 'durability' | 'pricing' | 'process'
  number: string
  question: string
  answer: string
  highlight?: string
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'durability',
    number: '01',
    question: 'How long does PPF last in Dubai & UAE climate?',
    answer:
      'Quality PPF can last approximately 7–10 years, depending on the selected film, installation precision, climate exposure, and routine care. All full-body installations at StyleInCar include official warranty coverage protecting against yellowing, bubbling, cracking, and delamination.',
    highlight: '7–10 Years Durability',
  },
  {
    id: 'faq-2',
    category: 'durability',
    number: '02',
    question: 'What are the top certified PPF brands available?',
    answer:
      'We offer industry-leading certified films including XPEL, 3M, and Takai. Each film is factory-warranted and selected based on optical clarity, self-healing responsiveness to heat, and hydrophobic performance.',
    highlight: 'XPEL · 3M · Takai',
  },
  {
    id: 'faq-3',
    category: 'durability',
    number: '03',
    question: 'What is the best PPF for intense summer heat?',
    answer:
      'Modern thermoplastic polyurethane (TPU) films with advanced elastomeric top-coats excel in 50°C+ desert temperatures. The intense heat actually activates the self-healing polymers, allowing light swirl marks to vanish under the sun.',
    highlight: 'Heat-Activated Self-Healing',
  },
  {
    id: 'faq-4',
    category: 'durability',
    number: '04',
    question: 'Why do cars in Ajman & Dubai need PPF?',
    answer:
      'Strong desert sunlight, high UV index, sandstorms, road salt, and highway gravel constantly bombard factory paint. PPF acts as an invisible sacrificial shock-absorbing shield that preserves the showroom finish and preserves vehicle resale value.',
    highlight: 'Paint & Resale Preservation',
  },
  {
    id: 'faq-5',
    category: 'process',
    number: '05',
    question: 'Is PPF safe to remove from factory paint?',
    answer:
      'Yes. Professionally installed premium PPF uses specialized non-damaging acrylic adhesive. When removed with controlled heat by our technicians, it peels away cleanly without leaving adhesive residue or damaging the OEM clear coat.',
    highlight: '100% Safe & Reversible',
  },
  {
    id: 'faq-6',
    category: 'process',
    number: '06',
    question: 'Can PPF be applied to a used vehicle?',
    answer:
      'Yes. Used vehicles undergo our thorough Stage 3 surface preparation: chemical decontamination, clay-bar treatment, and multi-stage machine paint correction to eliminate pre-existing swirl marks before sealing under the film.',
    highlight: 'Full Paint Correction Prep',
  },
  {
    id: 'faq-7',
    category: 'durability',
    number: '07',
    question: 'Do I need PPF, Ceramic Coating — or both?',
    answer:
      'PPF provides physical impact protection against stone chips and sand abrasion. Ceramic coating provides chemical resistance, hydrophobic water beading, and deep gloss. Combining both provides the ultimate armor: PPF for impact defense topped with Ceramic Coating for effortless cleaning.',
    highlight: 'Ultimate Combined Protection',
  },
  {
    id: 'faq-8',
    category: 'pricing',
    number: '08',
    question: 'How much does PPF cost in Ajman & Dubai?',
    answer:
      'Full-body PPF starts from AED 2,800 / AED 3,500 depending on vehicle size, selected coverage, and film brand (Takai, 3M, XPEL). Partial custom high-impact packages (bumper, hood, pillars) and color wraps are also available.',
    highlight: 'From AED 2,800',
  },
  {
    id: 'faq-9',
    category: 'process',
    number: '09',
    question: 'How long does PPF installation take?',
    answer:
      'Full-body PPF installation generally takes 1–3 days. This includes multi-stage wash prep, computerized precision plotting, clean-bay dust-free installation, edge-wrapping, and heat-curing quality checks.',
    highlight: '1–3 Days Turnaround',
  },
  {
    id: 'faq-10',
    category: 'process',
    number: '10',
    question: 'Do you offer pickup & delivery in Sharjah, Dubai & Ajman?',
    answer:
      'Yes. We offer complimentary vehicle pickup and drop-off across Ajman, Sharjah, and Dubai via safe recovery transporter directly to our Al Jerf Industrial 1 studio, subject to scheduling availability.',
    highlight: 'Complimentary Pickup & Drop-Off',
  },
  {
    id: 'faq-11',
    category: 'pricing',
    number: '11',
    question: 'Is motorcycle PPF available and what is the cost?',
    answer:
      'Yes. Tailored motorcycle PPF packages start from AED 2,000 for high-impact zones including fuel tank, front fairings, side panels, and tail cowl, providing essential scratch and knee-friction protection.',
    highlight: 'From AED 2,000',
  },
]

const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="faq"
      className="relative z-20 px-4 sm:px-8 md:px-12 pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background ambient crimson glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.05) 0%, rgba(5, 5, 5, 0) 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <FadeIn delay={0} y={20}>
            <h2
              className="font-black uppercase leading-tight tracking-tight text-center text-white mb-4"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 64px)' }}
            >
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <p className="text-[#888888] text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Everything you need to know about PPF packages, self-healing technology, installation timelines, and warranty terms in Ajman & the UAE.
            </p>
          </FadeIn>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div
                key={faq.id}
                className={`group rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden relative ${
                  isOpen
                    ? 'border-[#E50914]/50 bg-gradient-to-r from-[#121212] via-[#0E0E0E] to-[#0A0A0A] shadow-[0_15px_35px_-10px_rgba(229,9,20,0.2)]'
                    : 'border-white/[0.08] bg-gradient-to-r from-[#0C0C0C] to-[#080808] hover:border-white/20 hover:bg-[#101010]'
                }`}
              >
                {/* Active left indicator glow line */}
                {isOpen && (
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#E50914] shadow-[0_0_12px_#E50914]" />
                )}

                {/* Question Button Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-3.5 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 flex items-center justify-between gap-4 select-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
                    {/* Number badge */}
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-lg border transition-colors shrink-0 ${
                        isOpen
                          ? 'text-[#E50914] border-[#E50914]/30 bg-[#E50914]/10'
                          : 'text-white/40 border-white/10 bg-white/[0.03] group-hover:text-white/70'
                      }`}
                    >
                      {faq.number}
                    </span>

                    <h3
                      className={`font-semibold tracking-tight text-sm sm:text-base md:text-lg transition-colors leading-snug ${
                        isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Right side: Luxury Precision Chevron Icon */}
                  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-400 backdrop-blur-md ${
                        isOpen
                          ? 'border-[#E50914]/50 bg-gradient-to-br from-[#E50914]/20 via-[#E50914]/10 to-transparent shadow-[0_0_20px_rgba(229,9,20,0.3)]'
                          : 'border-white/10 bg-white/[0.03] group-hover:border-white/25 group-hover:bg-white/[0.08]'
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-500 ease-out ${
                          isOpen ? 'rotate-180 text-[#E50914]' : 'text-white/50 group-hover:text-white'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expandable Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-2 border-t border-white/[0.06] text-[#A0A0A0] text-xs sm:text-sm font-light leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
