import Link from "next/link"

const columns = [
  {
    title: "Program & Navigasi",
    links: [
      { label: "Kenapa PADIKU", href: "#why" },
      { label: "Proses Produksi", href: "#proses" },
      { label: "Tentang Kami", href: "#tentang" },
      { label: "Katalog Produk", href: "#katalog" },
      { label: "Tanya Jawab", href: "#faq" },
    ],
  },
  {
    title: "Produk Unggulan",
    links: [
      { label: "Pupuk Sekam Bakar / Biochar", href: "#katalog" },
      { label: "Kompos Bio-Organik", href: "#katalog" },
      { label: "Media Tanam Super", href: "#katalog" },
      { label: "Beras / Gabah Organik", href: "#katalog" },
    ],
  },
  {
    title: "KKM UMC & Kontak",
    links: [
      { label: "Desa Jagapura Kulon, Gegesik", href: "#" },
      { label: "Universitas Muhammadiyah Cirebon", href: "https://umc.ac.id" },
      { label: "WhatsApp Order Hub", href: "https://wa.me/6285179778898" },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-name flex items-center gap-2">
            <span>🌾</span> PADIKU — Jagapura Kulon
          </div>
          <p className="footer-brand-desc">
            Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular. Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon.
          </p>
        </div>
        <div className="footer-columns">
          {columns.map(({ title, links }) => (
            <div key={title}>
              <div className="footer-col-title">{title}</div>
              <ul className="footer-links">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 Program PADIKU Desa Jagapura Kulon & KKM 29 Universitas Muhammadiyah Cirebon. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
