"use client"

/* eslint-disable @next/next/no-img-element */
import LogoLoop from "@/components/reactbits/LogoLoop"

/* Marks-only logos get a wordmark span; JPGs with a baked background
   render as rounded badges; dark marks invert for the olive band. */
const logos = [
  {
    node: (
      <span className="proof-logo">
        <img src="/LOGO/solana-white.png" alt="" />
      </span>
    ),
    ariaLabel: "Solana",
  },
  {
    node: (
      <span className="proof-logo">
        <img src="/LOGO/metaplex.webp" alt="" className="proof-logo-invert" />
      </span>
    ),
    ariaLabel: "Metaplex",
  },
  {
    node: (
      <span className="proof-logo">
        <img src="/LOGO/superteam.jpg" alt="" className="proof-logo-badge" />
      </span>
    ),
    ariaLabel: "Superteam",
  },
]

export function Proof() {
  return (
    <section id="proof" className="proof-section">
      <div className="proof-label">Built on enterprise-grade infrastructure</div>
      <LogoLoop
        logos={logos}
        speed={60}
        logoHeight={52}
        gap={110}
        pauseOnHover
        fadeOut
        fadeOutColor="#404f1d"
        ariaLabel="Powered by Solana, Metaplex, and Superteam"
      />
    </section>
  )
}
