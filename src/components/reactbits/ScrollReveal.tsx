"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion"

function Word({
  progress,
  range,
  baseOpacity,
  children,
}: {
  progress: MotionValue<number>
  range: [number, number]
  baseOpacity: number
  children: React.ReactNode
}) {
  const opacity = useTransform(progress, range, [baseOpacity, 1])
  return (
    <motion.span style={{ opacity, display: "inline-block" }}>
      {children}
    </motion.span>
  )
}

/**
 * Scroll-scrubbed word reveal (the react-bits ScrollReveal effect):
 * words brighten one by one, tied to scroll position rather than a
 * one-shot trigger, so scrolling back dims them again.
 */
export function ScrollReveal({
  text,
  baseOpacity = 0.15,
}: {
  text: string
  baseOpacity?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  })

  if (reduceMotion) return <span>{text}</span>

  const words = text.split(" ")

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {words.map((word, i) => (
        <span key={i}>
          <Word
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
            baseOpacity={baseOpacity}
          >
            {word}
          </Word>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  )
}

export default ScrollReveal
