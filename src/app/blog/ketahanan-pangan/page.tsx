"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Archive, Droplets, AlignVerticalSpaceAround, Sprout } from "lucide-react"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function KetahananPanganPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineSteps = [
    { title: "Pisahkan Limbah", description: "Mulailah dengan memisahkan sampah organik (sayur, buah, daun) dari sampah anorganik di dapur Anda." },
    { title: "Masuk ke Komposter", description: "Masukkan limbah organik ke dalam komposter tertutup dan biarkan proses penguraian (dekomposisi) alami terjadi." },
    { title: "Saring Pupuk Cair", description: "Setelah beberapa waktu, komposter akan menghasilkan cairan. Saring dan simpan sebagai pupuk organik cair yang kaya nutrisi." },
    { title: "Siapkan Rak Vertikultur", description: "Susun rak secara bertingkat untuk menanam sayuran. Ini akan menghemat banyak ruang." },
    { title: "Gunakan Pupuk", description: "Aplikasikan pupuk organik cair yang telah Anda buat untuk menyuburkan tanaman di rak vertikultur Anda secara rutin." },
    { title: "Panen & Nikmati", description: "Sayur dan tanaman pangan segar siap dipanen untuk memenuhi sebagian kebutuhan gizi harian keluarga." },
  ];
  
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
                <span>Proker Individu</span>
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

            {/* Interactive Sticky Cards Stack */}
            <div className="flex flex-col pb-[10vh] my-16 relative">
              {[
                {
                  title: "Komposter",
                  icon: <Archive strokeWidth={1.5} size={36} />,
                  desc: "Wadah untuk mengolah bahan organik menjadi pupuk yang dapat dimanfaatkan kembali. Sangat cocok untuk mengolah limbah seperti sisa sayuran, kulit buah, sisa tanaman, dan daun kering.",
                  points: ["Mengurangi limbah organik.", "Menghasilkan bahan pupuk gratis."],
                  bg: "bg-[#e9e2d2]",
                  text: "text-[#1e2611]",
                  rotate: "rotate-[-1deg] md:-rotate-2",
                  iconBg: "bg-[#1e2611]",
                  iconColor: "text-[#e9e2d2]"
                },
                {
                  title: "Pupuk Cair",
                  icon: <Droplets strokeWidth={1.5} size={36} />,
                  desc: "Hasil pengolahan bahan organik dari komposter dapat dimanfaatkan sebagai pupuk organik cair yang sangat baik untuk mendukung pertumbuhan tanaman dengan nutrisi alami.",
                  points: ["Mendukung pertumbuhan tanaman.", "Mudah digunakan di rumah."],
                  bg: "bg-[#1e2611]",
                  text: "text-[#e9e2d2]",
                  rotate: "rotate-[1deg] md:rotate-2",
                  iconBg: "bg-[#e9e2d2]",
                  iconColor: "text-[#1e2611]"
                },
                {
                  title: "Rak Vertikultur",
                  icon: <AlignVerticalSpaceAround strokeWidth={1.5} size={36} />,
                  desc: "Teknik budidaya tanaman dengan memanfaatkan ruang secara vertikal. Solusi sempurna bagi keluarga yang ingin bertani namun memiliki pekarangan yang sangat terbatas.",
                  points: ["Cocok untuk pekarangan terbatas.", "Optimalisasi ruang."],
                  bg: "bg-[#e9e2d2]",
                  text: "text-[#1e2611]",
                  rotate: "rotate-[-1deg] md:-rotate-1",
                  iconBg: "bg-[#1e2611]",
                  iconColor: "text-[#e9e2d2]"
                },
                {
                  title: "Budidaya & Panen",
                  icon: <Sprout strokeWidth={1.5} size={36} />,
                  desc: "Hasil akhir dari ekosistem ini adalah tersedianya sayur dan tanaman pangan bernutrisi dari kebun sendiri, yang siap dipanen untuk memenuhi kebutuhan gizi harian keluarga Anda.",
                  points: ["Sumber pangan sehat mandiri.", "Menghemat pengeluaran dapur."],
                  bg: "bg-[#1e2611]",
                  text: "text-[#e9e2d2]",
                  rotate: "rotate-[1deg] md:rotate-1",
                  iconBg: "bg-[#e9e2d2]",
                  iconColor: "text-[#1e2611]"
                }
              ].map((card, i) => (
                <div 
                  key={i} 
                  className={`sticky top-20 md:top-32 min-h-[90vh] md:h-[80vh] flex flex-col justify-center`}
                  style={{ zIndex: 10 + i }}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-[2rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${card.bg} ${card.text} ${card.rotate} origin-center border border-[#1e2611]/5`}
                  >
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-start">
                      <div className={`shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center ${card.iconBg} ${card.iconColor} shadow-inner`}>
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tight leading-none">
                          {card.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 opacity-90 font-medium">
                          {card.desc}
                        </p>
                        <ul className="space-y-3 md:space-y-4">
                          {card.points.map((point, idx) => (
                            <li key={idx} className="flex items-start md:items-center gap-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                              <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 shrink-0 opacity-80 mt-1 md:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-12 my-16" ref={timelineRef}>
              {/* Left Column (Sticky Title & Description) */}
              <div className="md:w-1/3">
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#1e2611] mb-6 leading-tight">
                    Alur Pemanfaatan Terpadu
                  </h2>
                  <p className="text-[#7c7f6a] text-lg leading-relaxed mb-6">
                    Dengan menggabungkan ketiga elemen di atas, Anda dapat menciptakan sebuah ekosistem pertanian mini di pekarangan Anda. Proses ini memastikan siklus yang berkelanjutan dari dapur kembali ke meja makan.
                  </p>
                </div>
              </div>

              {/* Right Column (Timeline Steps) */}
              <div className="md:w-2/3 relative">
                {/* Timeline background line */}
                <div className="absolute left-[23px] md:left-[27px] top-4 bottom-4 w-[2px] bg-[#e9e2d2]"></div>
                
                {/* Animated scroll progress line */}
                <motion.div 
                  className="absolute left-[23px] md:left-[27px] top-4 w-[2px] bg-[#8fa36c] origin-top"
                  style={{ height: timelineHeight }}
                ></motion.div>

                <div className="flex flex-col gap-12 relative z-10">
                  {timelineSteps.map((step, index) => (
                    <div key={index} className="flex gap-6 md:gap-8">
                      {/* Step Number Circle */}
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#e9e2d2] flex items-center justify-center font-bold text-[#1e2611] text-lg shadow-sm">
                        {index + 1}
                      </div>
                      
                      {/* Step Content */}
                      <div className="pt-2 md:pt-3">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#1e2611] mb-2 md:mb-3 uppercase tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-[#7c7f6a] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
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
