import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'

const statsData = [
  {
    tag: 'PROVEN RECORD',
    stat: '500+',
    title: 'Supercars Protected',
    desc: 'Shielded across Ajman, Dubai & Sharjah with zero clear-coat defects.',
  },
  {
    tag: 'PEACE OF MIND',
    stat: '10-YEAR',
    title: 'Written Warranty',
    desc: 'Official certified protection against yellowing, bubbling, cracking & peeling.',
  },
  {
    tag: 'AUTHORIZED',
    stat: 'XPEL · 3M',
    title: 'Certified Bay',
    desc: 'Factory-trained technicians operating in a climate & dust-controlled bay.',
  },
  {
    tag: 'PRECISION TECH',
    stat: '100% CNC',
    title: 'Zero Blade Contact',
    desc: 'Computerized pre-cut patterns with wrapped edges for invisible seams.',
  },
]

const storyText =
  "Based in Al Jerf Industrial 1, StyleIn delivers precision paint protection engineered specifically for the harsh UAE climate. From extreme 50°C summer heat and intense UV radiation to desert sandstorms and highway debris, our certified specialists safeguard your vehicle's factory paint with industry-leading self-healing films."

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-14 pb-4 sm:pb-6 md:pb-8 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.04) 0%, rgba(5, 5, 5, 0) 70%)',
        }}
      />

      {/* Main Editorial Content */}
      <div className="flex flex-col items-center max-w-4xl mx-auto z-10 text-center w-full">
        {/* Eyebrow */}
        <FadeIn delay={0} y={15}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span className="text-[#A0A0A0] text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] font-light">
              Al Jerf Industrial 1 · Ajman, UAE
            </span>
          </div>
        </FadeIn>

        {/* Big Heading */}
        <FadeIn delay={0.05} y={25}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
            style={{ fontSize: 'clamp(2.2rem, 10vw, 130px)' }}
          >
            About StyleIn
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#E50914] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-8">
            Ajman's Premier Paint Protection & Automotive Detailing Studio
          </p>
        </FadeIn>

        {/* Animated Story Text */}
        <div className="w-full flex justify-center px-4 sm:px-6 mb-4 sm:mb-6">
          <AnimatedText
            text={storyText}
            className="text-[#D0D6DC] font-light text-center leading-relaxed max-w-[680px]"
            style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.35rem)' }}
          />
        </div>
      </div>

      {/* 4-Card Luxury Telemetry Grid: 2x2 on Mobile (2 cards first row, 2 cards second row), 4x1 on Desktop */}
      <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-10 md:mt-12 z-10">
        <FadeIn delay={0.2} y={30}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {statsData.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/[0.08] hover:border-[#E50914]/40 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Top edge light sheen */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                <div>
                  {/* Micro Tag with Red Dot */}
                  <div className="flex items-center gap-1.5 mb-2 sm:mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0" />
                    <span className="text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-wider uppercase text-[#A0A0A0] group-hover:text-white transition-colors duration-300 truncate">
                      {item.tag}
                    </span>
                  </div>

                  {/* Stat Number */}
                  <div className="text-xl sm:text-2xl md:text-3xl xl:text-[2.5rem] font-black tracking-tight text-white mb-1 group-hover:text-[#E50914] transition-colors duration-300 leading-tight">
                    {item.stat}
                  </div>

                  {/* Title */}
                  <h4 className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#E5E5E5] mb-2 leading-snug">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-[#7A7A7E] font-light leading-relaxed pt-2.5 border-t border-white/[0.06] mt-2 sm:mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutSection
