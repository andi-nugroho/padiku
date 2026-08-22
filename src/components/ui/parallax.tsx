"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

/**
 * Scroll parallax for an image (or any fill content) inside an
 * overflow-hidden frame. Content is over-scaled so the drift never
 * exposes the frame edges.
 */
export function Parallax({
  children,
  amount = 24,
  scale = 1.12,
  className,
}: {
  children: React.ReactNode
  amount?: number
  scale?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount])

  return (
    <div ref={ref} className={className} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y: reduceMotion ? 0 : y,
          scale: reduceMotion ? 1 : scale,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
