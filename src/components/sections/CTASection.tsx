"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SplitText } from "@/components/ui/split-text"
import Magnet from "@/components/reactbits/Magnet"

export function CTASection() {
  return (
    <section className="cta-final">
      <div className="cta-final-inner">
        <div className="section-label">Get started</div>
        <h2 className="cta-final-title">
          <SplitText text="Ready to make your supply chain bulletproof?" />
        </h2>
        <p className="cta-final-sub">
          Schedule a private demo and see how Panora delivers full EUDR
          compliance for your commodity trading operations within 90 days.
        </p>
        <div className="cta-final-buttons">
          <Magnet padding={60} magnetStrength={6}>
            <Button variant="cta-bone" asChild>
              <Link href="mailto:hello@panora.farm">
                Request enterprise demo
                <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Button>
          </Magnet>
          <Button variant="cta-ghost-bone" asChild>
            <Link href="/app">Launch console</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
