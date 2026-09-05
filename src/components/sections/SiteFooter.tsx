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
      { label: "Grejeg (Khas Jagapura)", href: "#katalog" },
      { label: "Sambel Garing", href: "#katalog" },
      { label: "Gonjing Tradisional", href: "#katalog" },
      { label: "Olahan Rumahan Lainnya", href: "#katalog" },
    ],
  },
  {
    title: "KKM 29 UMC & Kontak",
    links: [
      { label: "Desa Jagapura Kulon, Gegesik", href: "#" },
      { label: "KKM 29 Jagapura Kulon", href: "https://www.instagram.com/kkm29_jagapurakulon" },
      { label: "Instagram @padiku.co", href: "https://www.instagram.com/padiku.co" },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div className="footer-top relative z-10">
        <div className="footer-brand">
          <div className="footer-brand-name flex items-center gap-2">
            <img src="/logo-padiku.png" alt="PADIKU Logo" className="w-14 h-14 object-contain" /> PADIKU — Jagapura Kulon
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
      <div className="footer-bottom flex-col md:flex-row gap-4 text-center md:text-left relative z-10">
        <span className="footer-copy">
          © 2026 Program PADIKU KKM 29 Universitas Muhammadiyah Cirebon. All rights reserved.
        </span>
        <span className="footer-copy">
          Designed by{" "}
          <a
            href="https://www.andidelouise.net"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-current hover:text-[var(--bone)] transition-colors pb-[1px]"
          >
            Andi Nugroho
          </a>
        </span>
      </div>

      {/* Giant Footer Text */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-[35%] pointer-events-none select-none z-0">
        <span 
          className="font-black leading-[0.75] tracking-[-0.04em] text-transparent transition-all duration-700 ease-out giant-footer-text pointer-events-auto cursor-default"
          style={{
            fontSize: "clamp(60px, 18vw, 300px)"
          }}
        >
          JAGAPURA
        </span>
      </div>
    </footer>
  )
}
