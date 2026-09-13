"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const POST = {
  title: "Mahasiswa KKM UMC Kelompok 29 Bagikan Pupuk Cair Berbahan Limbah Rumah Tangga kepada Warga Jagapura Kulon",
  excerpt:
    "Cirebon — Mahasiswa Kuliah Kerja Mahasiswa (KKM) Universitas Muhammadiyah Cirebon (UMC) Kelompok 29 melaksanakan kegiatan pembuatan dan pembagian pupuk cair kepada warga Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon, pada 8 September 2026.",
  date: "8 September 2026",
  tag: "Kegiatan KKM",
  image: "/news/news.png",
  href: "/blog",
}

export function BlogPreview() {
  return (
    <section id="blog" className="blog-preview-section">
      <div className="blog-preview-inner">
        {/* Header */}
        <motion.div
          className="blog-preview-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Blog & Berita</div>
          <h2 className="section-title">
            Kabar Terbaru dari <em>Desa Jagapura Kulon.</em>
          </h2>
          <p className="section-sub">
            Liputan kegiatan, program pemberdayaan masyarakat, dan inovasi UMKM desa terkini.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="blog-preview-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {/* Image */}
          <div className="blog-preview-img-wrap">
            <Image
              src={POST.image}
              alt={POST.title}
              fill
              className="blog-preview-img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="blog-preview-tag">{POST.tag}</div>
          </div>

          {/* Body */}
          <div className="blog-preview-body">
            <div className="blog-preview-date">{POST.date}</div>
            <h3 className="blog-preview-title">{POST.title}</h3>
            <p className="blog-preview-excerpt">{POST.excerpt}</p>
            <Button variant="hero-cta" className="gap-2 mt-auto self-start" asChild>
              <Link href={POST.href}>
                <span>Baca Selengkapnya</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
