"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const paragraphs = [
  "Kabupaten Cirebon, 13 September 2026 — Mahasiswa Kuliah Kerja Mahasiswa (KKM) Universitas Muhammadiyah Cirebon (UMC) Kelompok 29 melaksanakan salah satu program kerja pemberdayaan masyarakat dengan membuat dan menyerahkan alat peniris minyak kepada pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) makanan Grejeg di Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon.",
  "Kegiatan tersebut menjadi bentuk nyata kontribusi mahasiswa dalam membantu pelaku UMKM mengembangkan proses produksi melalui pemanfaatan teknologi sederhana yang disesuaikan dengan kebutuhan di lapangan. Alat peniris minyak yang dibuat mahasiswa diharapkan dapat membantu mengurangi minyak berlebih pada makanan hasil penggorengan sehingga proses produksi menjadi lebih efektif dan efisien.",
  "UMKM Grejeg merupakan salah satu usaha makanan yang memproduksi berbagai olahan makanan ringan berbahan dasar, di antaranya tempe, ikan, udang, dan rebon. Produk-produk tersebut melalui proses penggorengan sebelum dikemas dan dipasarkan kepada konsumen.",
  "Dalam proses produksi makanan yang digoreng, penirisan minyak menjadi salah satu tahapan penting. Setelah makanan diangkat dari penggorengan, minyak yang masih menempel pada produk perlu dikurangi agar makanan tidak terlalu berminyak ketika dikemas.",
  "Melihat kebutuhan tersebut, mahasiswa KKM UMC Kelompok 29 berinisiatif menghadirkan sebuah alat peniris minyak yang dapat digunakan oleh pemilik UMKM Grejeg. Alat tersebut dirancang sebagai solusi sederhana untuk membantu mempercepat proses penirisan dibandingkan apabila dilakukan secara manual.",
  "Program ini sekaligus menjadi upaya mahasiswa untuk menerapkan ilmu dan keterampilan yang diperoleh selama perkuliahan ke dalam permasalahan nyata yang dihadapi masyarakat.",
  "Dalam pelaksanaan program, mahasiswa KKM UMC Kelompok 29 tidak hanya memberikan alat yang sudah tersedia, tetapi turut melakukan proses perancangan dan pembuatan alat peniris minyak. Pembuatan alat disesuaikan dengan kebutuhan produksi UMKM sehingga diharapkan dapat digunakan secara praktis dalam aktivitas sehari-hari.",
  "Alat peniris minyak tersebut ditujukan untuk membantu proses pemisahan minyak dari makanan setelah proses penggorengan. Dengan prinsip kerja yang sederhana, makanan dapat ditempatkan pada bagian peniris kemudian minyak berlebih dikeluarkan sehingga produk lebih siap untuk masuk ke tahap pengemasan.",
  "Penerapan alat sederhana seperti ini diharapkan dapat memberikan manfaat bagi pelaku usaha, terutama dalam menghemat waktu dan tenaga pada proses produksi. Selain itu, proses penirisan yang lebih optimal juga dapat membantu menjaga kondisi produk sebelum dipasarkan.",
  "Pada 13 September 2026, mahasiswa KKM UMC Kelompok 29 menyerahkan alat peniris minyak tersebut secara langsung kepada pemilik UMKM Grejeg di Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon.",
  "Penyerahan alat menjadi salah satu rangkaian kegiatan KKM yang mempertemukan mahasiswa dengan pelaku usaha secara langsung. Dalam kegiatan tersebut, mahasiswa juga memperkenalkan fungsi dan pemanfaatan alat agar dapat digunakan dalam kegiatan produksi UMKM.",
  "Bagi mahasiswa, kegiatan tersebut menjadi pengalaman untuk memahami secara langsung kebutuhan pelaku usaha di lingkungan masyarakat. Sementara bagi pelaku UMKM, keberadaan alat diharapkan dapat menjadi sarana pendukung dalam menjalankan proses produksi.",
  "Program tersebut juga memperlihatkan bahwa pemberdayaan masyarakat tidak selalu harus dilakukan melalui teknologi yang kompleks. Pemanfaatan teknologi sederhana yang dibuat berdasarkan kebutuhan pengguna dapat menjadi salah satu alternatif untuk membantu menyelesaikan persoalan dalam kegiatan usaha.",
  "Pembuatan alat peniris minyak oleh KKM UMC Kelompok 29 diharapkan tidak berhenti pada kegiatan penyerahan alat. Mahasiswa berharap alat tersebut dapat dimanfaatkan secara berkelanjutan oleh UMKM Grejeg untuk mendukung proses produksi.",
  "Efisiensi menjadi salah satu aspek penting bagi pelaku UMKM. Dengan proses produksi yang lebih praktis, pelaku usaha dapat menghemat waktu dan tenaga sehingga dapat lebih fokus pada kegiatan lain, seperti pengemasan, pemasaran, hingga pengembangan produk.",
  "Selain manfaat bagi UMKM, kegiatan ini juga menjadi bentuk penerapan semangat pengabdian kepada masyarakat yang menjadi bagian penting dalam pelaksanaan KKM. Mahasiswa dituntut tidak hanya memahami teori, tetapi juga mampu melihat persoalan yang ada di masyarakat dan memberikan solusi yang dapat diterapkan.",
  "Kegiatan pembuatan dan penyerahan alat peniris minyak ini menunjukkan adanya kolaborasi antara mahasiswa KKM UMC Kelompok 29 dengan masyarakat, khususnya pelaku UMKM di Desa Jagapura Kulon.",
  "Melalui program tersebut, mahasiswa berupaya menghadirkan inovasi sederhana yang memiliki manfaat langsung bagi masyarakat. Di sisi lain, pelaku UMKM menjadi pihak yang memberikan gambaran mengenai kebutuhan dan kondisi nyata dalam proses produksi.",
  "Kolaborasi semacam ini diharapkan dapat terus dikembangkan selama pelaksanaan KKM. Kehadiran mahasiswa di tengah masyarakat bukan hanya sebagai pelaksana program kerja, tetapi juga sebagai mitra yang dapat membantu mencari solusi terhadap berbagai kebutuhan masyarakat berdasarkan kemampuan dan bidang keilmuan yang dimiliki.",
  "Dengan diserahkannya alat peniris minyak kepada UMKM Grejeg, mahasiswa KKM UMC Kelompok 29 berharap alat tersebut dapat digunakan dan memberikan manfaat dalam kegiatan produksi sehari-hari.",
  "Program ini juga diharapkan dapat menjadi contoh bahwa inovasi sederhana dapat memberikan dampak positif apabila dirancang berdasarkan kebutuhan masyarakat. Ke depan, kegiatan pemberdayaan seperti ini dapat terus dikembangkan dengan menghadirkan berbagai inovasi lain yang sesuai dengan kebutuhan UMKM maupun masyarakat Desa Jagapura Kulon.",
  "Bagi KKM UMC Kelompok 29, kegiatan tersebut menjadi salah satu bentuk kontribusi nyata selama menjalankan pengabdian di Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon. Melalui kegiatan tersebut, mahasiswa berharap keberadaan mereka dapat memberikan manfaat yang dapat dirasakan masyarakat, khususnya dalam mendukung perkembangan dan efisiensi usaha lokal.",
]

export default function PenirisMinYakPage() {
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
            Mahasiswa KKM UMC Kelompok 29 Buat Alat Peniris Minyak untuk Dukung UMKM Grejeg
          </motion.h1>

          {/* Article body — photo injected after first paragraph */}
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
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/news/news3.png"
                alt="Mahasiswa KKM UMC Kelompok 29 menyerahkan alat peniris minyak kepada UMKM Grejeg"
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
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/news/news3.png"
                alt="Mahasiswa KKM UMC Kelompok 29 menyerahkan alat peniris minyak kepada UMKM Grejeg"
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
