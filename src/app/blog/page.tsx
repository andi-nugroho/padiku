"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Nav } from "@/components/sections/Nav"
import { SiteFooter } from "@/components/sections/SiteFooter"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Button } from "@/components/ui/button"

import { POSTS } from "@/lib/data"

export default function AllBlogPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="allblog-main">
        <div className="allblog-container">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/#blog" className="blog-back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 6L5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Kembali ke Beranda
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="allblog-header"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="section-label">Blog &amp; Berita</div>
            <h1 className="allblog-title">Semua Blog</h1>
            <p className="allblog-sub">
              Seluruh liputan kegiatan, program pemberdayaan masyarakat, dan inovasi UMKM Desa Jagapura Kulon.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="allblog-grid">
            {POSTS.map((post, i) => (
              <motion.div
                key={post.href}
                className="allblog-card"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              >
                {/* Image */}
                <div className="allblog-img-wrap">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="allblog-img"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i === 0}
                  />
                  <span className="allblog-tag">{post.tag}</span>
                </div>

                {/* Body */}
                <div className="allblog-body">
                  <div className="allblog-meta">
                    <div className="allblog-meta-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      <span>{post.date}</span>
                    </div>
                    <div className="allblog-meta-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <span>KKM 29 UMC</span>
                    </div>
                  </div>
                  <h2 className="allblog-card-title">{post.title}</h2>
                  <p className="allblog-excerpt">{post.excerpt}</p>
                  <Button variant="hero-cta" className="gap-2 mt-auto self-start" asChild>
                    <Link href={post.href}>
                      <span>Baca Selengkapnya</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  )
}
