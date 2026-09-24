import { useRef, useMemo, type CSSProperties } from 'react'
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

  const wordsWithIndices = useMemo(() => {
    const rawWords = text.split(' ')
    const result: Array<{ word: string; startIndex: number }> = []
    let current = 0
    for (let i = 0; i < rawWords.length; i++) {
      const word = rawWords[i]
      result.push({ word, startIndex: current })
      current += word.length + 1
    }
    return result
  }, [text])

  const totalChars = text.length

  return (
    <p ref={ref} className={`relative text-center mx-auto ${className}`} style={style}>
      {wordsWithIndices.map(({ word, startIndex }, wordIndex) => {
        const wordChars = word.split('')

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em] my-[0.05em]">
            {wordChars.map((char, charIndex) => (
              <CharSpan
                key={charIndex}
                char={char}
                index={startIndex + charIndex}
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
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none text-white font-medium"
      >
        {char}
      </motion.span>
    </span>
  )
}

export default AnimatedText
