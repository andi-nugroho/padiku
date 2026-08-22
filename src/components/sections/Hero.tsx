"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SplitText } from "@/components/ui/split-text"
import Magnet from "@/components/reactbits/Magnet"

const fadeUp = (delay: number, ready: boolean) => ({
  initial: { opacity: 0, y: 24 },
  animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
})

const heroImages = ["/hero.jpg", "/hero1.jpg", "/hero2.jpg", "/hero3.jpg"]
const ROTATE_INTERVAL = 5000

export function Hero({ ready }: { ready: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  // photo drifts slower than the page: classic hero parallax
  const mediaY = useTransform(scrollY, [0, 900], [0, 140])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, ROTATE_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <h1 className="hero-title">
        <SplitText text="Supply chains," animate={ready} delay={0.1} />
        <br />
        <span className="hero-title-accent">
          <SplitText text="made bulletproof." animate={ready} delay={0.35} />
        </span>
      </h1>

      <div className="hero-row">
        <motion.p className="hero-description" {...fadeUp(0.55, ready)}>
          Panora bridges smallholder farmers and global trading houses through
          immutable digital product passports. First-mile traceability, EUDR
          compliance, and capital safety, verified on Solana.
        </motion.p>

        <motion.div className="hero-buttons" {...fadeUp(0.65, ready)}>
          <Magnet padding={60} magnetStrength={6}>
            <Button variant="hero-cta" asChild>
              <Link href="mailto:hello@panora.farm">
                Request enterprise demo
                <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Button>
          </Magnet>
          <Button variant="hero-ghost" asChild>
            <Link href="/app">Launch console</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="hero-media"
        initial={{ opacity: 0, y: 40 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.75, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            y: reduceMotion ? 0 : mediaY,
            scale: reduceMotion ? 1 : 1.15,
          }}
        >
          {heroImages.map((src, i) => (
            <motion.div
              key={src}
              animate={{ opacity: i === currentIndex ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={src}
                alt="Smallholder partner farm in a Panora pilot corridor, Indonesia"
                fill
                priority={i === 0}
                className="hero-bg-photo"
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="hero-media-caption">First-mile origins. Smallholder partner farms, Indonesia</div>
      </motion.div>
    </section>
  )
}
