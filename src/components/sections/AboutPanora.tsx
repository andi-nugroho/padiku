"use client"

import Link from "next/link"
import { SplitText } from "@/components/ui/split-text"
import { ScrollReveal } from "@/components/reactbits/ScrollReveal"

/**
 * Problem → answer narrative, farmminerals-style:
 * an olive-drenched section of giant statements, then a bone
 * section that answers them and hands off to How It Works.
 */
export function AboutPanora() {
  return (
    <>
      <section id="why" className="statements">
        <div className="statements-inner">
          <div className="section-label">Kenapa PADIKU</div>

          <h2 className="statement">
            <ScrollReveal text="Lahan persawahan seluas 448 hektar di Desa Jagapura Kulon menghasilkan sekam padi yang sangat melimpah." />
          </h2>

          <div>
            <h2 className="statement statement--sage">
              <ScrollReveal text="Namun, tanpa pengolahan sirkular, limbah pertanian ini kerap dibakar dan mencemari kualitas udara persawahan." />
            </h2>
            <p className="statement-note">
              Urgensi Ekonomi Sirkular: Mengubah limbah berlimpah menjadi pupuk organik dan media tanam bernilai ekonomi tinggi yang menyuburkan kembali tanah desa.
            </p>
          </div>

          <h2 className="statement">
            <ScrollReveal text="Bagaimana jika setiap karung sekam diolah menjadi nutrisi tanah dan sumber pendapatan baru petani?" />
          </h2>
        </div>
      </section>

      <section className="better-way">
        <div className="better-way-inner">
          <h2 className="better-way-title">
            <SplitText text="Kami menghadirkan" /> <em><SplitText text="Ekonomi Sirkular Desa." delay={0.3} /></em>
          </h2>
          <p className="better-way-text">
            <strong>Program PADIKU</strong> (Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular) lahir dari inisiatif kelompok tani Desa Jagapura Kulon bersama pendampingan KKM Universitas Muhammadiyah Cirebon. Kami memproses limbah sekam padi menjadi biochar sekam bakar, kompos bio-organik, dan media tanam unggulan secara transparan, ramah lingkungan, dan memberdayakan ekonomi lokal.
          </p>
          <Link href="#proses" className="text-btn">
            Lihat Alur Proses Produksi
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
