"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

/**
 * Returns true when the viewport width is ≤ 768 px.
 * Defaults to false on the server (SSR) and updates after hydration.
 */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)")
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])
  return isMobile
}

/**
 * Scroll parallax for an image (or any fill content) inside an
 * overflow-hidden frame. Content is over-scaled so the drift never
 * exposes the frame edges.
 *
 * On mobile (≤768 px) the parallax effect is disabled entirely so that
 * the per-element scroll listener cannot cause main-thread jank.
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
  const isMobile = useIsMobile()

  // Skip the scroll subscription on mobile to avoid jank
  const { scrollYProgress } = useScroll({
    target: isMobile ? undefined : ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount])

  const disabled = reduceMotion || isMobile

  return (
    <div ref={ref} className={className} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y: disabled ? 0 : y,
          scale: disabled ? 1 : scale,
          // Promote to its own compositor layer on desktop for smooth GPU scrolling
          willChange: disabled ? "auto" : "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
