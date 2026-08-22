import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Pupuk Sekam Bakar / Biochar Organik",
    price: "Rp 15.000",
    unit: "/ Karung 10 kg",
    desc: "Sekam padi hasil pembakaran terkontrol (pyrolysis). Berfungsi meningkatkan porositas, menyimpan kelembapan air, serta menetralisir tingkat keasaman (pH) tanah persawahan & perkebunan.",
    tag: "Biochar Porositas Tinggi",
    image: "/padi.jpg",
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Pupuk%20Sekam%20Bakar%20/%20Biochar%20Organik.",
  },
  {
    name: "Pupuk Kompos Bio-Organik PADIKU",
    price: "Rp 20.000",
    unit: "/ Karung 10 kg",
    desc: "Kompos olahan limbah pertanian matang hasil fermentasi komposter portable dengan dekomposer unggul. Memiliki kandungan Nitrogen, Phosfor, dan Kalium alami untuk mempercepat pertumbuhan tanaman.",
    tag: "Kaya Nutrisi & Mikroba",
    image: "/coffee.jpg",
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Pupuk%20Kompos%20Bio-Organik.",
  },
  {
    name: "Media Tanam Super Olahan Sekam",
    price: "Rp 18.000",
    unit: "/ Karung 10 kg",
    desc: "Formulasi racikan siap pakai yang menggabungkan sekam lapuk, kompos bio-organik, dan tanah subur. Sangat cocok untuk tanaman hortikultura, buah-buahan, sayuran, dan tanaman hias pot.",
    tag: "Formulasi Siap Pakai",
    image: "/chili.jpg",
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Media%20Tanam%20Super%20Olahan%20Sekam.",
  },
  {
    name: "Gabah & Beras Organik Jagapura",
    price: "Rp 14.000",
    unit: "/ kg",
    desc: "Beras olahan segar hasil panen persawahan seluas 448 hektar Desa Jagapura Kulon. Diproses secara alami, minim pestisida sintetik, serta memiliki aroma khas pulen alami.",
    tag: "Panen Asli 448 Ha Sawah",
    image: "/hero2.jpg",
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Beras%20/%20Gabah%20Organik.",
  },
]

const features = [
  "Bahan baku 100% dari hasil olahan limbah pertanian Desa Jagapura Kulon",
  "Harga terjangkau langsung dari tangan Kelompok Tani (Poktan) tanpa perantara",
  "Melayani pembelian eceran ritel maupun pesanan grosir/partai besar",
  "Pemesanan langsung terintegrasi ke WhatsApp Pengelola UMKM & Poktan",
]

export function MarketEconomics() {
  return (
    <section id="katalog" className="me-section py-20">
      <div className="process-header mb-12">
        <div className="section-label">Katalog Produk</div>
        <h2 className="section-title">
          Etalase Produk Sirkular <em>PADIKU Desa.</em>
        </h2>
        <p className="section-sub">
          Pilihan pupuk organik, kompos bio-nutrisi, dan media tanam unggulan berkualitas tinggi untuk pertanian dan kebun Anda.
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
        className="me-card bg-[var(--olive-950)] text-[var(--bone)] p-8 rounded-2xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-[var(--bone)]">
          Keunggulan Produk Sirkular <em>PADIKU</em>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[var(--bone-dim)]">
              <span className="text-[var(--harvest)] font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
