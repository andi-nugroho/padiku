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
    desc: "Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular di Desa Jagapura Kulon, Kecamatan Gegesik, Cirebon. Mengoptimalkan potensi pertanian desa secara berkelanjutan.",
    meta: [
      { label: "Luas Persawahan", val: "448 Hektar" },
      { label: "Komoditas", val: "Padi & Sekam Organik" },
    ],
    image: "/chili.jpg",
  },
  {
    name: "Pilar 02",
    title: "Kelompok Tani (Poktan)",
    desc: "Wadah kolaborasi para petani lokal dan pengelola UMKM desa dalam memproduksi pupuk organik sekam bakar, kompos bio-nutrisi, dan media tanam sirkular ramah lingkungan.",
    meta: [
      { label: "Pengelola", val: "Poktan Jagapura Kulon" },
      { label: "Produk Utama", val: "Pupuk & Media Tanam" },
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
            Sinergi Petani Desa & <em>Digitalisasi UMC.</em>
          </h2>
          <p className="section-sub max-w-2xl mx-auto">
            Mengenal lebih dekat profil Program PADIKU, peran aktif Kelompok Tani Desa Jagapura Kulon, dan pendampingan digitalisasi KKM UMC 2026.
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
                <div className="vault-meta border-t border-[rgba(30,38,17,0.08)] pt-4 mt-auto">
                  {vault.meta.map(({ label, val }) => (
                    <div key={label} className="flex justify-between items-center mb-2 last:mb-0">
                      <div className="vm-label text-xs font-medium text-[rgba(30,38,17,0.5)]">{label}</div>
                      <div className="vm-val text-xs font-bold text-[var(--olive-950)]">{val}</div>
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
