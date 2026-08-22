"use client"

import { motion, useReducedMotion } from "framer-motion"

const wordVariants = {
  hidden: { y: "0.7em", opacity: 0 },
  visible: {
    y: "0em",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/**
 * Word-by-word staggered reveal (the farmminerals text-split effect).
 * Uncontrolled: reveals on scroll into view. Pass `animate` to control it
 * explicitly (e.g. gated behind the loading screen).
 */
export function SplitText({
  text,
  animate,
  delay = 0,
  stagger = 0.05,
}: {
  text: string
  animate?: boolean
  delay?: number
  stagger?: number
}) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return <span>{text}</span>

  const words = text.split(" ")
  const controlled = animate !== undefined

  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial="hidden"
      {...(controlled
        ? { animate: animate ? "visible" : "hidden" }
        : { whileInView: "visible", viewport: { once: true, margin: "-15%" } })}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
