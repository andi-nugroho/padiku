"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function KetahananPanganPage() {
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
            <span className="blog-page-tag" style={{ background: 'var(--sage-light)', color: 'var(--olive-950)' }}>Edukasi</span>
            <div className="blog-page-meta-details">
              <div className="blog-page-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>14 September 2026</span>
              </div>
              <div className="blog-page-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Tim Padiku</span>
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
            Ketahanan Pangan dari Pekarangan Rumah: Solusi Cerdas Bertani di Lahan Terbatas
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-[#7c7f6a] mb-12"
          >
            Memanfaatkan limbah organik dan ruang terbatas untuk mendukung budidaya tanaman pangan keluarga. Temukan cara mudah memulai ketahanan pangan dari rumah Anda sendiri.
          </motion.div>

          {/* Interactive Poster Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full overflow-hidden rounded-[20px] cursor-pointer group shadow-lg border border-[#1e2611]/10"
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: '#e9e2d2' }}
          >
            <div className="relative w-full aspect-[1/1.414] max-h-[70vh]">
              <Image
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/poster/poster.png"
                alt="Poster Ketahanan Pangan dari Pekarangan Rumah"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <div className="bg-white/90 text-[#1e2611] px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Lihat Poster Penuh
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <div className="flex justify-center mt-8 mb-16">
            <a 
              href="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/poster/poster.png" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#404f1d] hover:bg-[#1e2611] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 shadow-md"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Unduh Poster Edukasi
            </a>
          </div>

          {/* Detailed Content / Break down of Poster */}
          <motion.article
            className="blog-page-article mt-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p>
              Ketahanan pangan tidak harus selalu dimulai dari lahan pertanian yang luas. Dengan kreativitas dan kemauan, kita dapat memanfaatkan pekarangan rumah serta limbah organik untuk mendukung kebutuhan pangan keluarga sehari-hari. 
            </p>
            <p>
              Berikut adalah tiga pilar utama yang bisa diterapkan di lingkungan rumah untuk mewujudkan ketahanan pangan yang berkelanjutan dan ramah lingkungan:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-12">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-[#1e2611]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#e9e2d2] rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image src="https://img.icons8.com/fluency/96/compost.png" alt="Komposter Icon" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e2611] mb-2">Komposter</h3>
                <p className="text-[#7c7f6a] text-sm leading-relaxed mb-4">
                  Wadah untuk mengolah bahan organik menjadi pupuk yang dapat dimanfaatkan kembali. Sangat cocok untuk mengolah limbah seperti sisa sayuran, kulit buah, sisa tanaman, dan daun kering.
                </p>
                <ul className="text-sm text-[#1e2611] space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Mengurangi limbah organik.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Menghasilkan bahan pupuk gratis.
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-[#1e2611]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#e9e2d2] rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image src="https://img.icons8.com/fluency/96/water-drop.png" alt="Pupuk Cair Icon" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e2611] mb-2">Pupuk Organik Cair</h3>
                <p className="text-[#7c7f6a] text-sm leading-relaxed mb-4">
                  Hasil pengolahan bahan organik dari komposter dapat dimanfaatkan sebagai pupuk organik cair yang sangat baik untuk mendukung pertumbuhan tanaman dengan nutrisi alami.
                </p>
                <ul className="text-sm text-[#1e2611] space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Mendukung pertumbuhan tanaman.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Mudah digunakan di rumah.
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-[#1e2611]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#e9e2d2] rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image src="https://img.icons8.com/fluency/96/potted-plant.png" alt="Rak Vertikultur Icon" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e2611] mb-2">Rak Vertikultur</h3>
                <p className="text-[#7c7f6a] text-sm leading-relaxed mb-4">
                  Teknik budidaya tanaman dengan memanfaatkan ruang secara vertikal. Solusi sempurna bagi keluarga yang ingin bertani namun memiliki pekarangan yang sangat terbatas.
                </p>
                <ul className="text-sm text-[#1e2611] space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Cocok untuk pekarangan terbatas.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Optimalisasi ruang.
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-[#1e2611]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#e9e2d2] rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image src="https://img.icons8.com/fluency/96/harvest.png" alt="Budidaya Icon" width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e2611] mb-2">Budidaya & Panen</h3>
                <p className="text-[#7c7f6a] text-sm leading-relaxed mb-4">
                  Hasil akhir dari ekosistem ini adalah tersedianya sayur dan tanaman pangan bernutrisi dari kebun sendiri, yang siap dipanen untuk memenuhi kebutuhan gizi harian keluarga Anda.
                </p>
                <ul className="text-sm text-[#1e2611] space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Sumber pangan sehat mandiri.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#8fa36c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Menghemat pengeluaran dapur.
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-[#1e2611] mb-6">Alur Pemanfaatan Terpadu</h2>
            <p>
              Dengan menggabungkan ketiga elemen di atas, Anda dapat menciptakan sebuah ekosistem pertanian mini di pekarangan Anda:
            </p>
            <ol className="list-decimal list-outside ml-6 space-y-4 my-6 text-[#7c7f6a]">
              <li><strong className="text-[#1e2611]">Pisahkan Limbah:</strong> Mulailah dengan memisahkan sampah organik (sayur, buah, daun) dari sampah anorganik di dapur Anda.</li>
              <li><strong className="text-[#1e2611]">Masuk ke Komposter:</strong> Masukkan limbah organik ke dalam komposter tertutup dan biarkan proses penguraian (dekomposisi) alami terjadi.</li>
              <li><strong className="text-[#1e2611]">Saring Pupuk Cair:</strong> Setelah beberapa waktu, komposter akan menghasilkan cairan. Saring dan simpan sebagai pupuk organik cair yang kaya nutrisi.</li>
              <li><strong className="text-[#1e2611]">Siapkan Rak Vertikultur:</strong> Susun rak secara bertingkat untuk menanam sayuran. Ini akan menghemat banyak ruang.</li>
              <li><strong className="text-[#1e2611]">Gunakan Pupuk:</strong> Aplikasikan pupuk organik cair yang telah Anda buat untuk menyuburkan tanaman di rak vertikultur Anda secara rutin.</li>
              <li><strong className="text-[#1e2611]">Panen & Nikmati:</strong> Sayur dan tanaman pangan segar siap dipanen untuk memenuhi sebagian kebutuhan gizi harian keluarga.</li>
            </ol>
            
            <div className="bg-[#e9e2d2] p-8 rounded-2xl mt-12 mb-8 text-center border border-[#404f1d]/10">
              <h3 className="text-2xl font-semibold text-[#1e2611] mb-4">Siap Memulai Pekarangan Pangan Anda?</h3>
              <p className="text-[#7c7f6a] mb-6 max-w-2xl mx-auto">
                Langkah kecil yang Anda ambil hari ini dapat memberikan dampak besar pada ketahanan pangan keluarga dan kelestarian lingkungan esok hari. Mari ubah pekarangan menjadi sumber kehidupan!
              </p>
            </div>
          </motion.article>

          {/* Divider */}
          <div className="blog-page-divider" />

          {/* Footer note */}
          <div className="blog-page-footer-note">
            <span>Edukasi Lingkungan</span>
            <span>·</span>
            <span>Ketahanan Pangan Keluarga</span>
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
              className="blog-modal-content w-full max-w-4xl h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/poster/poster.png"
                alt="Poster Ketahanan Pangan dari Pekarangan Rumah"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <SiteFooter />
    </>
  )
}
