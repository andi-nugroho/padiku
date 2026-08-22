"use client"

import { useState } from "react"
import {
  AboutPanora,
  CTASection,
  FAQ,
  Hero,
  HowItWorks,
  LoadingScreen,
  MarketEconomics,
  Nav,
  Proof,
  SiteFooter,
  Vaults,
} from "./sections"
import { ScrollProgress } from "./ui/scroll-progress"

export function LandingPage() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <Nav />
      <main>
        <Hero ready={!loading} />
        <AboutPanora />
        <Proof />
        <HowItWorks />
        <Vaults />
        <MarketEconomics />
        <FAQ />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  )
}
