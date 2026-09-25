import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 150px
      if (window.scrollY > 150) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility()

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.15, y: -6 }}
          whileTap={{ scale: 0.92 }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            duration: 0.25,
          }}
          aria-label="Scroll back to top"
          title="Back to Top"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
        >
          {/* Subtle pulse / radar aura behind the button */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#E50914] to-red-400 opacity-40 blur-[6px] group-hover:opacity-80 transition duration-300 animate-pulse pointer-events-none" />

          {/* Button Body with pure solid dark black styling */}
          <div className="relative w-full h-full rounded-full bg-black border border-[#E50914] group-hover:border-red-500 shadow-[0_8px_25px_rgba(229,9,20,0.4)] group-hover:shadow-[0_10px_35px_rgba(229,9,20,0.75)] flex items-center justify-center overflow-hidden transition-all duration-300">
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.75] text-white group-hover:text-red-400 transition-colors" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
