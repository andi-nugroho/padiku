"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const paragraphs = [
  "Cirebon — Mahasiswa Kuliah Kerja Mahasiswa (KKM) Universitas Muhammadiyah Cirebon (UMC) Kelompok 29 melaksanakan kegiatan pembuatan dan pembagian pupuk cair kepada warga Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon, pada 8 September 2026.",
  "Kegiatan tersebut menjadi salah satu upaya mahasiswa dalam memperkenalkan pemanfaatan sampah rumah tangga sebagai bahan yang dapat diolah kembali. Bahan yang digunakan dalam pembuatan pupuk cair tersebut berasal dari sampah organik rumah tangga, seperti sisa potongan sayuran.",
  "Dalam prosesnya, mahasiswa menggunakan sisa potongan sayuran yang belum dimasak, dengan tidak memasukkan nasi maupun makanan sisa yang telah dimasak. Selain bahan organik tersebut, digunakan pula kotoran kambing sebagai salah satu bahan dalam proses pengolahan.",
  "Bahan-bahan tersebut kemudian dicampurkan dengan air cucian beras dan gula merah yang telah dilarutkan. Campuran tersebut digunakan dalam proses pembuatan pupuk cair berbahan organik.",
  "Mahasiswa KKM Kelompok 29 kemudian membagikan pupuk cair yang telah dibuat kepada warga Desa Jagapura Kulon. Kegiatan ini juga menjadi sarana bagi mahasiswa untuk mengenalkan cara pemanfaatan limbah organik rumah tangga agar dapat diolah menjadi produk yang memiliki nilai guna.",
  "Pemanfaatan sampah organik tersebut diharapkan dapat menjadi salah satu alternatif bagi masyarakat dalam mengurangi sampah rumah tangga, khususnya limbah organik yang dihasilkan dari aktivitas sehari-hari.",
  "Melalui kegiatan ini, mahasiswa KKM UMC Kelompok 29 turut mendorong masyarakat untuk lebih memperhatikan pengelolaan sampah dari lingkungan rumah tangga dan memanfaatkan bahan-bahan organik yang tersedia di sekitar.",
]

export default function PupukCairPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="blog-page-main">
        <div className="blog-page-container">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog" className="blog-back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 6L5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Semua Blog
            </Link>
          </motion.div>

          {/* Tag + Meta */}
          <motion.div
            className="blog-page-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <span className="blog-page-tag">Kegiatan KKM</span>
            <div className="blog-page-meta-details">
              <div className="blog-page-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>8 September 2026</span>
              </div>
              <div className="blog-page-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>KKM 29 UMC</span>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="blog-page-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mahasiswa KKM UMC Kelompok 29 Bagikan Pupuk Cair Berbahan Limbah Rumah Tangga kepada Warga Jagapura Kulon
          </motion.h1>

          {/* Article body */}
          <motion.article
            className="blog-page-article"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>{paragraphs[0]}</p>

            {/* Inline article image */}
            <div
              className="blog-page-inline-img-wrap"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/news/news.png"
                alt="Mahasiswa KKM UMC Kelompok 29 membagikan pupuk cair kepada warga Jagapura Kulon"
                fill
                className="blog-page-inline-img object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="blog-page-img-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {paragraphs.slice(1).map((p, i) => (
              <p key={i + 1}>{p}</p>
            ))}
          </motion.article>

          {/* Divider */}
          <div className="blog-page-divider" />

          {/* Footer note */}
          <div className="blog-page-footer-note">
            <span>KKM UMC Kelompok 29</span>
            <span>·</span>
            <span>Desa Jagapura Kulon, Gegesik, Cirebon</span>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="blog-img-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <button className="blog-modal-close" onClick={() => setIsModalOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <motion.div
              className="blog-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/news/news.png"
                alt="Mahasiswa KKM UMC Kelompok 29 membagikan pupuk cair kepada warga Jagapura Kulon"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <SiteFooter />
    </>
  )
}
