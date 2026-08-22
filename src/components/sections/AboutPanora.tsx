"use client"

import Link from "next/link"
import { SplitText } from "@/components/ui/split-text"
import { ScrollReveal } from "@/components/reactbits/ScrollReveal"

/**
 * Problem → answer narrative, farmminerals-style:
 * an olive-drenched section of giant statements, then a bone
 * section that answers them and hands off to How It Works.
 */
export function AboutPanora() {
  return (
    <>
      <section id="why" className="statements">
        <div className="statements-inner">
          <div className="section-label">The compliance imperative</div>

          <h2 className="statement">
            <ScrollReveal text="EUDR deadlines are closing in on every commodity desk." />
          </h2>

          <div>
            <h2 className="statement statement--sage">
              <ScrollReveal text="Yet first-mile data is still paper receipts, spreadsheets, and claims nobody can verify." />
            </h2>
            <p className="statement-note">
              Supply chain opacity is no longer acceptable. The cost of
              non-compliance far exceeds the cost of transformation.
            </p>
          </div>

          <h2 className="statement">
            <ScrollReveal text="What if every batch carried proof a regulator cannot challenge?" />
          </h2>
        </div>
      </section>

      <section className="better-way">
        <div className="better-way-inner">
          <h2 className="better-way-title">
            <SplitText text="We make compliance" /> <em><SplitText text="provable." delay={0.3} /></em>
          </h2>
          <p className="better-way-text">
            <strong>Panora Digital Product Passports</strong> capture
            GPS-tagged polygon coordinates at the point of harvest, encrypted
            and timestamped on-chain. Every touchpoint from farm gate to
            warehouse becomes auditable and tamper-proof, and milestone-gated
            disbursement locks working capital until verified delivery events
            occur. No black box. No challengeable claims.
          </p>
          <Link href="#how" className="text-btn">
            See the chain of custody
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
