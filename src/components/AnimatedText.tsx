import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

const AnimatedText = ({ text, className = '', style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.25'],
  })

  const words = text.split(' ')
  const totalChars = text.length
  let runningCharIndex = 0

  return (
    <p ref={ref} className={`relative text-center mx-auto ${className}`} style={style}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('')
        const wordStartIndex = runningCharIndex
        runningCharIndex += word.length + 1

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em] my-[0.05em]">
            {wordChars.map((char, charIndex) => (
              <CharSpan
                key={charIndex}
                char={char}
                index={wordStartIndex + charIndex}
                total={totalChars}
                progress={scrollYProgress}
              />
            ))}
          </span>
        )
      })}
    </p>
  )
}

interface CharSpanProps {
  char: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}

const CharSpan = ({ char, index, total, progress }: CharSpanProps) => {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.25, 1])

  return (
    <span className="relative inline">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default AnimatedText
