"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Why Panora", href: "#why" },
  { label: "Chain of custody", href: "#how" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Technology", href: "#technology" },
  { label: "FAQ", href: "#faq" },
] as const

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className="site-nav"
    >
      <div className="nav-left">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo.png"
            alt="Panora Labs"
            width={1456}
            height={816}
            style={{ height: "44px", width: "auto" }}
            priority
          />
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
          <Link href="/app">
            Launch console
            <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Button>
      </div>
    </motion.nav>
  )
}
