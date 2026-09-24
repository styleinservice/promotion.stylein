const Footer = () => {
  return (
    <footer
      className="relative z-20 px-4 sm:px-6 md:px-8 pt-8 pb-10 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-white/40 text-xs border-t border-white/[0.08] pt-8">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider text-white uppercase">StyleInCar — Ajman</span>
          <span>·</span>
          <span>Al Jerf Industrial 1, Ajman, UAE</span>
        </div>
        <p className="text-white/30 text-[0.7rem] max-w-lg leading-relaxed text-center">
          Professional Paint Protection Film (PPF), Ceramic Coating, and Luxury Automotive Detailing. Serving Ajman, Sharjah, Dubai & Abu Dhabi.
        </p>

        <div className="w-full pt-4 mt-2 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.68rem] font-mono">
          <div>
            <span className="text-white/30">DEVELOPED BY </span>
            <a
              href="https://sociallyconnect.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#E50914] font-semibold tracking-wider transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-[#E50914]"
            >
              SOCIALLY CONNECT
            </a>
          </div>

          <div className="text-white/25">
            © 2026 StyleInCar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
