"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="site-nav"
      >
        <div className="nav-left relative z-[110]">
          <Link href="/" onClick={() => setIsOpen(false)} className="nav-logo flex items-center gap-3 no-underline">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden">
              <img src="/logo-padiku.png" alt="PADIKU" className="w-full h-full object-contain" />
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-9 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="text-[15px] font-medium text-[rgba(30,38,17,0.65)] hover:text-[var(--olive-950)] transition-colors tracking-[-0.01em]">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop WA Button */}
        <div className="hidden md:flex flex-1 justify-end relative z-[110]">
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

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center ml-auto relative z-[110]">
          <button
            className="flex flex-col items-center justify-center w-8 h-8 gap-[5px] relative focus:outline-none group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[var(--olive-950)] transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "rotate-45 translate-y-[7px]" : "group-hover:bg-[var(--olive-800)]"
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-[var(--olive-950)] transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 translate-x-2" : "opacity-100 group-hover:bg-[var(--olive-800)]"
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-[var(--olive-950)] transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : "group-hover:bg-[var(--olive-800)]"
              }`}
            ></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown Overlay */}
      <div
        className="fixed inset-0 z-[100] bg-[#f3eee4]/95 backdrop-blur-xl flex flex-col justify-center px-12 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden"
        style={{
          opacity: isOpen ? "1" : "0",
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: isOpen ? "circle(150% at 90% 10%)" : "circle(0% at 90% 10%)",
        }}
      >
        <nav
          className="flex flex-col items-start gap-8 font-display text-3xl font-medium"
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
            transition: "transform 0.5s ease-out 0.1s",
          }}
        >
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-3 text-[rgba(30,38,17,0.7)] hover:text-[var(--olive-950)] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 text-[var(--olive-950)] opacity-0 group-hover:opacity-100"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          ))}

          <div className="h-px w-24 bg-[rgba(30,38,17,0.1)] my-2"></div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--olive-800)] hover:bg-[var(--olive-900)] text-xl font-medium text-[var(--bone)] transition-all shadow-[0_4px_14px_0_rgba(30,38,17,0.35)]"
            onClick={() => setIsOpen(false)}
          >
            Pesan via WhatsApp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </div>
    </>
  )
}
