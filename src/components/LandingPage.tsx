"use client"

import { useState, useEffect } from "react"
import {
  KenapaPadiku,
  CTASection,
  FAQ,
  Hero,
  HowItWorks,
  LoadingScreen,
  KatalogPreview,
  Nav,
  MitraKolaborasi,
  SiteFooter,
  TentangKami,
  BlogPreview,
} from "./sections"
import { ScrollProgress } from "./ui/scroll-progress"

export function LandingPage() {
  const [loading, setLoading] = useState(false)
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    try {
      const alreadyVisited = sessionStorage.getItem("padiku_visited")
      if (!alreadyVisited) {
        sessionStorage.setItem("padiku_visited", "true")
        setTimeout(() => {
          setLoading(true)
          setShowSplash(true)
        }, 0)
      }
    } catch {
      // Fallback if sessionStorage is not accessible
    }
  }, [])

  return (
    <>
      {showSplash && loading && (
        <LoadingScreen
          onComplete={() => {
            setLoading(false)
            setShowSplash(false)
          }}
        />
      )}
      <ScrollProgress />
      <Nav />
      <main>
        <Hero ready={!loading} />
        <KenapaPadiku />
        <MitraKolaborasi />
        <HowItWorks />
        <TentangKami />
        <KatalogPreview />
        <BlogPreview />
        <FAQ />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  )
}
