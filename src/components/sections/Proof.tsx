"use client"

import LogoLoop from "@/components/reactbits/LogoLoop"

/* Marks-only logos get a wordmark span; JPGs with a baked background
   render as rounded badges; dark marks invert for the olive band. */
const partners = [
  "Universitas Muhammadiyah Cirebon",
  "KKM 29 Jagapura Kulon",
  "Pemerintah Desa Jagapura Kulon",
  "Kelompok Tani (Poktan) Desa",
]

const logos = partners.map((partner) => ({
  node: (
    <span className="proof-logo font-bold text-lg tracking-wide text-white/90 whitespace-nowrap bg-white/10 px-4 py-2 rounded-full border border-white/20">
      🌾 {partner}
    </span>
  ),
  ariaLabel: partner,
}))

export function Proof() {
  return (
    <section id="proof" className="proof-section">
      <div className="proof-label">Mitra Kolaborasi & Pendampingan Program</div>
      <LogoLoop
        logos={logos}
        speed={40}
        logoHeight={44}
        gap={60}
        pauseOnHover
        fadeOut
        fadeOutColor="#404f1d"
        ariaLabel="Kemitraan Universitas Muhammadiyah Cirebon dan Pemerintah Desa Jagapura Kulon"
      />
    </section>
  )
}
