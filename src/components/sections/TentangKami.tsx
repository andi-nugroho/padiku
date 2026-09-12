"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import GlareHover from "@/components/reactbits/GlareHover"
import { Parallax } from "@/components/ui/parallax"

const pillars = [
  {
    name: "Pilar 01",
    title: "Program PADIKU Desa",
    desc: "Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular di Desa Jagapura Kulon, Kecamatan Gegesik, Cirebon. Mengoptimalkan potensi kuliner desa secara berkelanjutan.",
    meta: [
      { label: "Fokus Utama", val: "Ekonomi Sirkular" },
      { label: "Komoditas", val: "Makanan Khas Lokal" },
    ],
    image: "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/chili.jpg",
  },
  {
    name: "Pilar 02",
    title: "Sentra Produksi UMKM",
    desc: "Wadah kolaborasi para pelaku UMKM dan masyarakat desa dalam memproduksi makanan khas seperti Grejeg, Sambel Garing, dan Gonjing.",
    meta: [
      { label: "Pengelola", val: "UMKM Jagapura Kulon" },
      { label: "Produk Utama", val: "Grejeg, Sambel, Gonjing" },
    ],
    image: "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/coffee.jpg",
  },
  {
    name: "Pilar 03",
    title: "Pendampingan KKM UMC 2026",
    desc: "Program kerja individu Teknik Informatika Universitas Muhammadiyah Cirebon (Andi Nugroho - NIM 230511179, DPL: Ari Yulistianingsih, M.Gz) untuk membangun landing page e-katalog dan pemasaran digital UMKM.",
    meta: [
      { label: "Institusi", val: "Univ. Muhammadiyah Cirebon" },
      { label: "Fokus Proker", val: "Digitalisasi & E-Katalog" },
    ],
    image: "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/hero2.jpg",
  },
] as const

export function TentangKami() {
  return (
    <section id="tentang" className="vault-mobile-section">
      <div className="vault-mobile-header">
        <div className="section-label">Tentang Kami</div>
        <h2 className="section-title">
          Sinergi UMKM Desa & <em>Digitalisasi UMC.</em>
        </h2>
        <p className="section-sub">
          Mengenal lebih dekat profil Program PADIKU, peran aktif pelaku UMKM Desa Jagapura Kulon, dan pendampingan digitalisasi KKM UMC 2026.
        </p>
      </div>

      <div className="flex justify-center max-w-xl mx-auto">
        {pillars.slice(0, 1).map((vault, i) => (
          <motion.div
            key={vault.title}
            className="vault-mobile-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="vault-mobile-image">
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="0"
                borderColor="transparent"
                glareColor="#fdfcf9"
                glareOpacity={0.35}
                glareSize={220}
                transitionDuration={900}
                className="vault-glare"
              >
                <Parallax amount={18} scale={1.12}>
                  <Image
                    src={vault.image}
                    alt={vault.title}
                    fill
                    className="vault-image-photo"
                  />
                </Parallax>
              </GlareHover>
            </div>
            <div className="vault-mobile-info">
              <div className="vault-name">{vault.name}</div>
              <h3 className="vault-mobile-title">{vault.title}</h3>
              <p className="vault-mobile-desc">{vault.desc}</p>
              <div className="vault-meta">
                {vault.meta.map(({ label, val }) => (
                  <div key={label}>
                    <div className="vm-label">{label}</div>
                    <div className="vm-val">{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="hero-cta" className="gap-2 px-8 py-6 text-lg rounded-full" asChild>
          <Link href="/tentang-kami">
            <span>Pelajari Lebih Lanjut</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  )
}
