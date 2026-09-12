import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/ui/product-carousel"

type Product = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  tag: string;
  image: string;
  images?: string[];
  waText?: string;
  waNumber?: string;
  orderLink?: string;
  orderText?: string;
};

const products: Product[] = [
  {
    name: "Grejeg",
    price: "Harga Bervariasi",
    unit: "",
    desc: "Makanan khas Jagapura Kulon yang diproduksi dengan berbagai jenis, menjadi ikon pemberdayaan ekonomi masyarakat di Jagapura.",
    tag: "Makanan Khas",
    image: "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/grejeg/grejeg1.png",
    images: ["https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/grejeg/grejeg1.png", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/grejeg/grejeg2.png", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/grejeg/grejeg3.png"],
    waText: "Halo%20Ibu%20Sofa%2C%20saya%20ingin%20memesan%20Grejeg.",
    waNumber: "6289603092971",
  },
  {
    name: "Sambel Garing",
    price: "Harga Bervariasi",
    unit: "",
    desc: "Produk sambal khas olahan rumahan yang gurih dan nikmat (produksi Ibu Syahrini).",
    tag: "Olahan Rumahan",
    image: "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/cabe/cabe1.jpg",
    images: ["https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/cabe/cabe1.jpg", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/cabe/cabe2.jpg", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/cabe/cabe3.jpg", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/cabe/cabe4.jpg", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/cabe/cabe5.jpg"],
    waText: "Halo%20Ibu%20Sarinih%2C%20saya%20ingin%20memesan%20Sambel%20Garing.",
    waNumber: "6281928438240",
  },
  {
    name: "Gonjing",
    price: "Harga Bervariasi",
    unit: "",
    desc: "Kue tradisional yang bergizi, kaya karbohidrat dan protein, cocok dinikmati dengan minuman hangat di atas daun pisang dengan berbagai varian topping.",
    tag: "Kue Tradisional",
    image: "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/gonjing/gonjing.png",
    images: ["https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/gonjing/gonjing.png", "https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/gonjing/gonjing1.png"],
    waText: "Halo%20PADIKU%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20Gonjing.",
    orderLink: "https://www.instagram.com/padiku.co/",
    orderText: "Pesan via Instagram",
  },
]

export function KatalogPreview() {
  return (
    <section id="katalog" className="me-section py-20">
      <div className="process-header mb-12">
        <div className="section-label">Katalog Produk</div>
        <h2 className="section-title">
          Etalase Produk Sirkular <em>PADIKU Desa.</em>
        </h2>
        <p className="section-sub">
          Pilihan produk UMKM unggulan khas Jagapura Kulon yang lezat, bergizi, dan memberdayakan ekonomi lokal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {products.slice(0, 2).map((p, idx) => (
          <motion.div
            key={p.name}
            className="bg-[var(--white)] rounded-2xl p-6 border border-[var(--border)] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div>
              <ProductCarousel images={p.images || [p.image]} alt={p.name} tag={p.tag} />

              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-bold text-[var(--olive-950)]">{p.name}</h3>
              </div>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-lg font-bold text-[var(--harvest)]">{p.price}</span>
                <span className="text-sm font-medium text-[var(--stone)]">{p.unit}</span>
              </div>

              <p className="text-sm text-[var(--stone)] leading-relaxed mb-6">
                {p.desc}
              </p>
            </div>

            <Button variant="hero-cta" className="w-full justify-center gap-2" asChild>
              <a
                href={p.orderLink || `https://wa.me/${p.waNumber || "6285179778898"}?text=${p.waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{p.orderText || "Pesan via WhatsApp"}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="hero-cta" className="gap-2 px-8 py-6 text-lg rounded-full" asChild>
          <Link href="/katalog">
            <span>Lihat Katalog Lengkap</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  )
}
