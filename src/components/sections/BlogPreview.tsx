"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { POSTS } from "@/lib/data"

function PostCard({ post, priority = false }: { post: typeof POSTS[0]; priority?: boolean }) {
  return (
    <div className="bp-card">
      <div className="bp-img-wrap">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="bp-img"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
        />
        <span className="bp-tag">{post.tag}</span>
      </div>
      <div className="bp-body">
        <div className="bp-meta">
          <div className="bp-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>{post.date}</span>
          </div>
          <div className="bp-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>KKM 29 UMC</span>
          </div>
        </div>
        <h3 className="bp-title">{post.title}</h3>
        <p className="bp-excerpt">{post.excerpt}</p>
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
    </div>
  )
}

export function BlogPreview() {
  const [activeIdx, setActiveIdx] = useState(1)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) setActiveIdx((i) => Math.min(i + 1, POSTS.length - 1))
      else setActiveIdx((i) => Math.max(i - 1, 0))
    }
  }

  return (
    <section id="blog" className="bp-section">
      <div className="bp-inner">
        {/* Header */}
        <motion.div
          className="bp-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Blog &amp; Berita</div>
          <h2 className="section-title">
            Kabar Terbaru dari <em>Desa Jagapura Kulon.</em>
          </h2>
          <p className="section-sub">
            Liputan kegiatan, program pemberdayaan masyarakat, dan inovasi UMKM desa terkini.
          </p>
        </motion.div>

        {/* ── DESKTOP: 3-column grid ── */}
        <motion.div
          className="bp-grid"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {POSTS.slice(0, 3).map((post, i) => (
            <PostCard key={post.href} post={post} priority={i === 0} />
          ))}
        </motion.div>

        {/* ── MOBILE: single-card carousel ── */}
        <div className="bp-carousel">
          <div
            className="bp-carousel-track"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="bp-carousel-slides"
              style={{ transform: `translateX(${-activeIdx * 100}%)` }}
            >
              {POSTS.map((post, i) => (
                <div className="bp-carousel-slide" key={post.href}>
                  <PostCard post={post} priority={i === 0} />
                </div>
              ))}
            </div>
          </div>

          {/* Numbered pagination */}
          <div className="bp-nums" role="tablist" aria-label="Pilih berita">
            {POSTS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIdx}
                aria-label={`Berita ${i + 1}`}
                className={`bp-num${i === activeIdx ? " bp-num--active" : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* ── Semua Blog CTA — below grid & carousel ── */}
        <motion.div
          className="bp-cta-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="hero-cta" className="gap-2" asChild>
            <Link href="/blog">
              <span>Semua Blog</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
