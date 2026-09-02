"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqItems = [
  {
    question: "Apa itu Program PADIKU di Desa Jagapura Kulon?",
    answer:
      "Program PADIKU (Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular) kini berfokus pada pemberdayaan masyarakat di Desa Jagapura Kulon melalui produksi makanan khas lokal seperti Grejeg, Sambel Garing, dan Gonjing yang bernilai ekonomi tinggi.",
  },
  {
    question: "Bagaimana cara melakukan pemesanan produk?",
    answer:
      "Pemesanan sangat praktis! Anda dapat mengklik tombol 'Pesan via WhatsApp' pada katalog produk yang diinginkan. Sistem akan mengarahkan Anda ke akun WhatsApp resmi Pengelola UMKM Desa Jagapura Kulon untuk mengonfirmasi jumlah pesanan dan alamat pengiriman.",
  },
  {
    question: "Apakah produk makanan yang dijual tahan lama untuk dikirim ke luar kota?",
    answer:
      "Ya, produk olahan seperti Grejeg dan Sambel Garing dikemas secara higienis dan kedap udara sehingga mampu bertahan lama dan aman untuk dikirim ke berbagai daerah menggunakan ekspedisi.",
  },
  {
    question: "Apakah melayani pemesanan grosir atau partai besar?",
    answer:
      "Ya, kami melayani baik pembelian eceran ritel maupun pemesanan partai besar untuk acara, hajatan, atau agen reseller. Untuk pemesanan jumlah besar, kami menyediakan harga khusus.",
  },
  {
    question: "Bagaimana sistem pengiriman dan metode pembayaran?",
    answer:
      "Pengiriman dapat dilakukan melalui layanan logistik (JNE, J&T, dll) untuk area Cirebon maupun luar daerah. Pembayaran dapat dilakukan via transfer bank resmi pengelola atau metode Cash on Delivery (COD) sesuai kesepakatan dan ketersediaan layanan pengiriman.",
  },
  {
    question: "Siapa pengelola program ini dan bagaimana bentuk pendampingannya?",
    answer:
      "Program ini dikelola langsung oleh kelompok UMKM Desa Jagapura Kulon dengan pendampingan digitalisasi E-Katalog oleh Mahasiswa Teknik Informatika Universitas Muhammadiyah Cirebon (Andi Nugroho - NIM 230511179, DPL: Ari Yulistianingsih, M.Gz) melalui kegiatan KKM UMC 2026.",
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[number]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div className="faq-accordion-item">
      <h3>
        <button
          className="faq-accordion-button"
          aria-expanded={isOpen}
          aria-controls={`faq-content-${index}`}
          type="button"
          onClick={onToggle}
        >
          <span className="faq-accordion-question">{item.question}</span>
          <div className="faq-icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="faq-icon faq-icon-h"
            >
              <path d="M25.33,17.33H6.66v-2.67h18.67v2.67Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className={`faq-icon faq-icon-v ${isOpen ? "faq-icon-v-open" : ""}`}
            >
              <path d="M25.33,17.33H6.66v-2.67h18.67v2.67Z" />
            </svg>
          </div>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${index}`}
            className="faq-accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="faq-accordion-body">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <motion.div
        className="faq-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="faq-header">
          <span className="section-label">Informasi & Panduan Konsumen</span>
          <h2 className="section-title">
            Tanya Jawab <em>Seputar PADIKU</em>
          </h2>
        </div>

        <div className="faq-accordion-list">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
