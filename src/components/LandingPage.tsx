"use client"

import { useState } from "react"
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
        <KenapaPadiku />
        <MitraKolaborasi />
        <HowItWorks />
        <TentangKami />
        <KatalogPreview />
        <FAQ />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  )
}
