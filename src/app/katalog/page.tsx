"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const products = [
  {
    name: "Grejeg",
    price: "Harga Bervariasi",
    unit: "",
    desc: "Makanan khas Jagapura Kulon yang diproduksi dengan berbagai jenis, menjadi ikon pemberdayaan ekonomi masyarakat di Jagapura.",
    tag: "Makanan Khas",
    image: "/padi.jpg",
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Grejeg.",
  },
  {
    name: "Sambel Garing",
    price: "Harga Bervariasi",
    unit: "",
    desc: "Produk sambal khas olahan rumahan yang gurih dan nikmat (produksi Ibu Syahrini).",
    tag: "Olahan Rumahan",
    image: "/coffee.jpg",
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Sambel%20Garing.",
  },
  {
    name: "Gonjing",
    price: "Harga Bervariasi",
    unit: "",
    desc: "Kue tradisional yang bergizi, kaya karbohidrat dan protein, cocok dinikmati dengan minuman hangat di atas daun pisang dengan berbagai varian topping.",
    tag: "Kue Tradisional",
    image: "/chili.jpg",
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Gonjing.",
  },
]

const features = [
  "Diproduksi langsung oleh pelaku UMKM Desa Jagapura Kulon",
  "Cita rasa autentik khas daerah yang dijaga kualitasnya",
  "Mendukung pemberdayaan ekonomi lokal desa",
  "Pemesanan langsung terintegrasi ke WhatsApp Pengelola UMKM & Poktan",
]

export default function KatalogPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="process-header mb-12">
          <div className="section-label">Katalog Produk</div>
          <h2 className="section-title">
            Etalase Produk Sirkular <em>PADIKU Desa.</em>
          </h2>
          <p className="section-sub">
            Pilihan produk UMKM unggulan khas Jagapura Kulon yang lezat, bergizi, dan memberdayakan ekonomi lokal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              className="bg-[var(--white)] rounded-2xl p-6 border border-[var(--border)] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[var(--olive-800)] text-[var(--bone)] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--olive-950)]">{p.name}</h3>
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl font-bold text-[var(--harvest)]">{p.price}</span>
                  <span className="text-sm font-medium text-[var(--stone)]">{p.unit}</span>
                </div>

                <p className="text-sm text-[var(--stone)] leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <Button variant="hero-cta" className="w-full justify-center gap-2" asChild>
                <a
                  href={`https://wa.me/6285179778898?text=${p.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Pesan via WhatsApp</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="me-card p-8 rounded-2xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--olive-950)]">
            Keunggulan Produk Sirkular <em>PADIKU</em>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[var(--stone)]">
                <span className="text-[var(--harvest)] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </main>
      <SiteFooter />
    </>
  )
}
