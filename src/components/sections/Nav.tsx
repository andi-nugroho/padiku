"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Kenapa PADIKU", href: "#why" },
  { label: "Proses Produksi", href: "#proses" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Katalog Produk", href: "#katalog" },
  { label: "Tanya Jawab", href: "#faq" },
] as const

const WA_URL =
  "https://wa.me/6285179778898?text=Halo%20Pengelola%20PADIKU%20Desa%20Jagapura%20Kulon%2C%20saya%20ingin%20memesan%20produk%20UMKM%20sirkular."

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className="site-nav"
    >
      <div className="nav-left">
        <Link href="/" className="nav-logo flex items-center gap-3 no-underline">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--olive-800)] text-[var(--bone)] font-bold text-xl tracking-wider shadow-sm">
            🌾
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[var(--olive-950)] leading-none">
              PADIKU
            </span>
            <span className="text-[10px] font-semibold text-[var(--stone)] uppercase tracking-wider mt-0.5">
              Jagapura Kulon
            </span>
          </div>
        </Link>
      </div>

      <ul className="nav-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <Button variant="hero-cta" size="nav" asChild>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            Pesan via WhatsApp
            <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Button>
      </div>
    </motion.nav>
  )
}
