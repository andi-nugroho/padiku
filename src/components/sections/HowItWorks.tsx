"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const steps = [
  {
    n: "01",
    title: "Pemilihan Bahan Baku Lokal",
    desc: "Bahan baku berkualitas diperoleh langsung dari pasar dan produsen lokal di Desa Jagapura Kulon, memastikan kesegaran dan mendukung ekonomi berputar di desa.",
    tag: "Bahan Baku 100% Lokal Desa",
    image: "/hero.jpg",
  },
  {
    n: "02",
    title: "Proses Produksi Higienis",
    desc: "Produksi Grejeg, Sambel Garing, dan Gonjing dilakukan oleh kelompok UMKM desa terlatih menggunakan resep tradisional dengan standar kebersihan tinggi.",
    tag: "Produksi Ibu Rumah Tangga",
    image: "/padi.jpg",
  },
  {
    n: "03",
    title: "Pengemasan & Quality Control",
    desc: "Setiap produk yang selesai dimasak akan dikemas secara aman dan menarik, lalu melewati proses quality control untuk menjaga cita rasa dan ketahanan produk.",
    tag: "Aman & Cita Rasa Terjaga",
    image: "/coffee.jpg",
  },
  {
    n: "04",
    title: "Digitalisasi E-Katalog",
    desc: "Produk yang siap jual didata ke dalam sistem E-Katalog digital PADIKU untuk memperluas jangkauan pasar dan mempermudah akses informasi bagi pembeli.",
    tag: "Pemasaran Digital Terintegrasi",
    image: "/hero1.jpg",
  },
  {
    n: "05",
    title: "Pemesanan via Hub WhatsApp",
    desc: "Pembeli dapat langsung memesan produk favorit mereka melalui WhatsApp Hub yang dikelola dengan responsif oleh pengelola UMKM desa.",
    tag: "Siap Distribusi & Pesan WA",
    image: "/hero3.jpg",
  },
] as const

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index))
          }
        }
      },
      // a step becomes active when it crosses the vertical center of the viewport
      { rootMargin: "-45% 0px -45% 0px" }
    )
    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="proses" className="process">
      <div className="process-header">
        <div className="section-label">Proses Produksi</div>
        <h2 className="section-title">
          Dari resep warisan menjadi <em>produk unggulan UMKM.</em>
        </h2>
        <p className="section-sub">
          Transparansi 5 tahap produksi makanan khas unggulan yang memberdayakan masyarakat Desa Jagapura Kulon.
        </p>
      </div>

      <div className="process-grid">
        <div className="process-media" aria-hidden="true">
          <div className="process-media-frame">
            {steps.map((step, i) => (
              <Image
                key={step.n}
                src={step.image}
                alt=""
                fill
                sizes="(max-width: 900px) 0px, 45vw"
                className="process-media-photo"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
            <div className="process-media-count">
              {steps[active].n} / {steps[steps.length - 1].n}
            </div>
          </div>
        </div>

        <ol className="process-steps">
          {steps.map((step, i) => (
            <li
              key={step.n}
              data-index={i}
              ref={(el) => {
                stepRefs.current[i] = el
              }}
              className={`process-step${i === active ? " process-step--active" : ""}`}
            >
              <div className="process-step-photo">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 0px"
                  className="process-media-photo"
                />
              </div>
              <div className="process-step-head">
                <span className="process-step-num">{step.n}</span>
                <h3 className="process-step-title">{step.title}</h3>
              </div>
              <p className="process-step-desc">{step.desc}</p>
              <span className="process-step-tag">{step.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
