"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import GlareHover from "@/components/reactbits/GlareHover"
import { Parallax } from "@/components/ui/parallax"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const pillars = [
  {
    name: "Pilar 01",
    title: "Program PADIKU Desa",
    desc: "Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular di Desa Jagapura Kulon, Kecamatan Gegesik, Cirebon. Mengoptimalkan potensi kuliner desa secara berkelanjutan.",
    meta: [
      { label: "Fokus Utama", val: "Ekonomi Sirkular" },
      { label: "Komoditas", val: "Makanan Khas Lokal" },
    ],
    image: "/chili.jpg",
  },
  {
    name: "Pilar 02",
    title: "Sentra Produksi UMKM",
    desc: "Wadah kolaborasi para pelaku UMKM dan masyarakat desa dalam memproduksi makanan khas seperti Grejeg, Sambel Garing, dan Gonjing.",
    meta: [
      { label: "Pengelola", val: "UMKM Jagapura Kulon" },
      { label: "Produk Utama", val: "Grejeg, Sambel, Gonjing" },
    ],
    image: "/coffee.jpg",
  },
  {
    name: "Pilar 03",
    title: "Pendampingan KKM UMC 2026",
    desc: "Program kerja individu Teknik Informatika Universitas Muhammadiyah Cirebon (Andi Nugroho - NIM 230511179, DPL: Ari Yulistianingsih, M.Gz) untuk membangun landing page e-katalog dan pemasaran digital UMKM.",
    meta: [
      { label: "Institusi", val: "Univ. Muhammadiyah Cirebon" },
      { label: "Fokus Proker", val: "Digitalisasi & E-Katalog" },
    ],
    image: "/hero2.jpg",
  },
] as const

export default function TentangKamiPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto vault-mobile-section">
        <div className="vault-mobile-header mb-16 text-center">
          <div className="section-label">Tentang Kami</div>
          <h2 className="section-title">
            Sinergi UMKM Desa & <em>Digitalisasi UMC.</em>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">
            Mengenal lebih dekat profil Program PADIKU, peran aktif pelaku UMKM Desa Jagapura Kulon, dan pendampingan digitalisasi KKM UMC 2026.
          </p>
        </div>

        <div className="vault-mobile-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((vault, i) => (
            <motion.div
              key={vault.title}
              className="vault-mobile-card bg-[var(--white)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border)] h-full flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="vault-mobile-image h-64 relative overflow-hidden">
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
                      className="vault-image-photo object-cover"
                    />
                  </Parallax>
                </GlareHover>
              </div>
              <div className="vault-mobile-info p-6 flex flex-col flex-grow">
                <div className="vault-name text-xs font-bold uppercase tracking-wider text-[var(--stone)] mb-2">{vault.name}</div>
                <h3 className="vault-mobile-title text-xl font-bold text-[var(--olive-950)] mb-3">{vault.title}</h3>
                <p className="vault-mobile-desc text-sm text-[var(--stone)] leading-relaxed flex-grow mb-6">{vault.desc}</p>
                <div className="border-t border-[rgba(30,38,17,0.08)] pt-4 mt-auto flex flex-col gap-2">
                  {vault.meta.map(({ label, val }) => (
                    <div key={label} className="flex justify-between items-start gap-4">
                      <div className="text-xs font-semibold text-[var(--stone)] uppercase tracking-wider whitespace-nowrap">{label}</div>
                      <div className="text-sm font-bold text-[var(--olive-950)] text-right">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
