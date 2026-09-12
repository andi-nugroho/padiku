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

const heroImages = ["https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/hero.jpg", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/hero1.jpg", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/hero2.jpg", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/hero3.jpg"]
const ROTATE_INTERVAL = 5000

const WA_URL =
  "https://wa.me/6285179778898?text=Halo%20Pengelola%20PADIKU%20Desa%20Jagapura%20Kulon%2C%20saya%20ingin%20berkonsultasi%20dan%20memesan%20produk%20UMKM."

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
        <SplitText text="Ekonomi Sirkular Desa," animate={ready} delay={0.1} />
        <br />
        <span className="hero-title-accent">
          <SplitText text="Pemberdayaan PADIKU." animate={ready} delay={0.35} />
        </span>
      </h1>

      <div className="hero-row">
        <motion.p className="hero-description" {...fadeUp(0.55, ready)}>
          Program PADIKU memberdayakan ekonomi masyarakat
          di Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon.
          Menghadirkan makanan khas lokal unggulan seperti Grejeg, Sambel Garing, 
          dan Gonjing yang diproduksi secara sirkular dan berkelanjutan.
        </motion.p>

        <motion.div className="hero-buttons" {...fadeUp(0.65, ready)}>
          <Magnet padding={60} magnetStrength={6}>
            <Button variant="hero-cta" asChild>
              <Link href="#katalog">
                Lihat Katalog Produk
                <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Button>
          </Magnet>
          <Button variant="hero-ghost" asChild>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              Pesan via WhatsApp
            </a>
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
                alt="Kawasan Persawahan & Pengolahan Sekam Padi Desa Jagapura Kulon, Kecamatan Gegesik"
                fill
                priority={i === 0}
                className="hero-bg-photo"
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="hero-media-caption">
          Kawasan Desa Jagapura Kulon, Kec. Gegesik, Kab. Cirebon - Sentra Produksi Makanan Khas Lokal UMKM
        </div>
      </motion.div>
    </section>
  )
}
