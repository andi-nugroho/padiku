"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const paragraphs = [
  "Kabupaten Cirebon, 13 September 2026 — Mahasiswa Kuliah Kerja Mahasiswa (KKM) Universitas Muhammadiyah Cirebon (UMC) Kelompok 29 bersama warga Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon, melaksanakan kegiatan penanaman tanaman pada Minggu sore, 13 September 2026. Kegiatan tersebut menjadi bagian dari program pemberdayaan masyarakat sekaligus upaya menciptakan lingkungan desa yang lebih hijau, asri, dan produktif.",
  "Kegiatan penanaman dilaksanakan pada sore hari dengan melibatkan mahasiswa KKM UMC Kelompok 29 dan sejumlah warga Desa Jagapura Kulon. Mahasiswa dan warga bekerja sama secara langsung dalam menyiapkan serta menanam tanaman di lingkungan desa.",
  "Kegiatan ini menjadi salah satu bentuk nyata kepedulian mahasiswa KKM terhadap lingkungan sekaligus upaya membangun kebersamaan dengan masyarakat selama pelaksanaan program KKM. Tidak hanya menjalankan kegiatan secara mandiri, mahasiswa melibatkan warga agar proses penanaman dapat dilakukan secara gotong royong dan memberikan manfaat yang berkelanjutan.",
  "Dalam kegiatan tersebut, mahasiswa dan warga tampak bekerja sama menata tanaman pada area yang telah disiapkan. Sejumlah tanaman ditempatkan pada wadah yang dibuat secara kreatif sehingga tidak hanya berfungsi sebagai media tanam, tetapi juga dapat memperindah lingkungan sekitar.",
  "Semangat gotong royong terlihat selama kegiatan berlangsung. Mahasiswa KKM Kelompok 29 turut membantu warga dalam proses penanaman, sementara warga memberikan dukungan dan berpartisipasi dalam menjaga serta menata tanaman yang telah disiapkan.",
  "Kegiatan penanaman ini juga menjadi kesempatan bagi mahasiswa untuk berinteraksi lebih dekat dengan masyarakat. Melalui aktivitas bersama, hubungan antara mahasiswa dan warga semakin terjalin sehingga pelaksanaan KKM tidak hanya berfokus pada program kerja, tetapi juga membangun kebersamaan dan kepedulian terhadap lingkungan.",
  "Penanaman tanaman dipilih sebagai salah satu kegiatan karena lingkungan yang hijau dan tertata dapat memberikan manfaat bagi masyarakat. Keberadaan tanaman di sekitar permukiman dapat membuat lingkungan terlihat lebih asri sekaligus meningkatkan kesadaran masyarakat mengenai pentingnya menjaga lingkungan.",
  "Mahasiswa KKM UMC Kelompok 29 berharap kegiatan tersebut dapat menjadi langkah awal untuk mendorong masyarakat agar terus merawat tanaman yang telah ditanam. Dengan adanya perawatan secara berkelanjutan, tanaman yang ditanam diharapkan dapat tumbuh dan memberikan manfaat dalam jangka panjang.",
  "Selain aspek lingkungan, kegiatan ini juga mengandung nilai edukasi. Mahasiswa secara tidak langsung mengajak masyarakat untuk memanfaatkan lingkungan sekitar dengan kegiatan yang produktif dan positif.",
  "Bagi mahasiswa, keterlibatan langsung bersama warga memberikan pengalaman dalam memahami kehidupan masyarakat serta pentingnya kerja sama dalam menjalankan sebuah kegiatan. Sementara bagi warga, kehadiran mahasiswa menjadi tambahan dukungan dalam melaksanakan kegiatan lingkungan di Desa Jagapura Kulon.",
  "Semangat gotong royong menjadi salah satu nilai penting dalam pelaksanaan KKM. Melalui kegiatan sederhana seperti penanaman tanaman, mahasiswa dapat berkolaborasi dengan masyarakat sekaligus memberikan kontribusi langsung terhadap lingkungan desa.",
  "Melalui kegiatan penanaman bersama warga, KKM UMC Kelompok 29 berharap tanaman yang telah ditanam dapat dirawat secara bersama-sama sehingga memberikan manfaat secara berkelanjutan bagi masyarakat Desa Jagapura Kulon.",
  "Kegiatan ini diharapkan tidak hanya menjadi kegiatan seremonial selama pelaksanaan KKM, tetapi dapat menjadi awal dari munculnya kesadaran masyarakat untuk terus menjaga lingkungan. Mahasiswa juga berharap semangat kolaborasi antara mahasiswa dan warga dapat terus terjalin dalam berbagai kegiatan positif lainnya.",
  "Dengan menggabungkan kepedulian terhadap lingkungan dan semangat gotong royong, kegiatan penanaman menjadi salah satu bentuk kontribusi KKM UMC Kelompok 29 dalam memberikan manfaat bagi masyarakat Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon.",
]

export default function PenanamanTanamanPage() {
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
                <span>13 September 2026</span>
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
            Mahasiswa KKM UMC Kelompok 29 Bersama Warga Jagapura Kulon Gelar Penanaman Tanaman Di desa Jagapura Kulon
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
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/news/news2.png"
                alt="Mahasiswa KKM UMC Kelompok 29 bersama warga Jagapura Kulon melakukan penanaman tanaman"
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
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/news/news2.png"
                alt="Mahasiswa KKM UMC Kelompok 29 bersama warga Jagapura Kulon melakukan penanaman tanaman"
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
