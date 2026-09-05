"use client"

import LogoLoop from "@/components/reactbits/LogoLoop"

/* Marks-only logos get a wordmark span; JPGs with a baked background
   render as rounded badges; dark marks invert for the olive band. */
const partners = [
  { name: "Universitas Muhammadiyah Cirebon", logo: "/LOGO/logo-umc.png", imgClass: "w-5 h-5 object-contain" },
  { name: "KKM 29 Jagapura Kulon", logo: "/LOGO/kkm29.png", imgClass: "w-8 h-8 object-contain" },
  { name: "Pemerintah Desa Jagapura Kulon", logo: "/logo-padiku.png", imgClass: "w-7 h-7 object-contain" },
  { name: "Kelompok UMKM & Ibu Rumah Tangga", logo: "/logo-padiku.png", imgClass: "w-7 h-7 object-contain" },
]

const logos = partners.map((partner) => ({
  node: (
    <span className="proof-logo flex items-center gap-2 font-bold text-lg tracking-wide text-white/90 whitespace-nowrap bg-white/10 px-4 py-2 rounded-full border border-white/20">
      <img src={partner.logo} alt={partner.name} className={partner.imgClass} /> {partner.name}
    </span>
  ),
  ariaLabel: partner.name,
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
