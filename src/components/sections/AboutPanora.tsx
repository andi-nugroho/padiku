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
            <ScrollReveal text="Desa Jagapura Kulon memiliki potensi kuliner lokal yang luar biasa dan diwariskan turun-temurun." />
          </h2>

          <div>
            <h2 className="statement statement--sage">
              <ScrollReveal text="Namun, potensi ini belum digarap optimal dan para pelaku UMKM desa membutuhkan wadah pemberdayaan ekonomi yang terintegrasi." />
            </h2>
            <p className="statement-note">
              Urgensi Ekonomi Sirkular: Mengoptimalkan sumber daya lokal menjadi produk bernilai jual tinggi (Grejeg, Sambel Garing, Gonjing) untuk kemandirian ekonomi keluarga.
            </p>
          </div>

          <h2 className="statement">
            <ScrollReveal text="Bagaimana jika setiap resep warisan diolah menjadi produk unggulan UMKM yang memberdayakan masyarakat desa?" />
          </h2>
        </div>
      </section>

      <section className="better-way">
        <div className="better-way-inner">
          <h2 className="better-way-title">
            <SplitText text="Kami menghadirkan" /> <em><SplitText text="Ekonomi Sirkular Desa." delay={0.3} /></em>
          </h2>
          <p className="better-way-text">
            <strong>Program PADIKU</strong> (Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular) lahir dari inisiatif UMKM Desa Jagapura Kulon bersama pendampingan KKM Universitas Muhammadiyah Cirebon. Kami memproduksi makanan khas lokal seperti Grejeg, Sambel Garing, dan Gonjing secara higienis, menjaga cita rasa autentik, dan memberdayakan ekonomi masyarakat setempat.
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
