"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const steps = [
  {
    n: "01",
    title: "Pengumpulan Sekam Padi",
    desc: "Pengumpulan limbah sekam padi segar secara terorganisir dari fasilitas penggilingan padi dan 448 hektar lahan persawahan petani Desa Jagapura Kulon.",
    tag: "Bahan Baku 100% Lokal Desa",
    image: "/hero.jpg",
  },
  {
    n: "02",
    title: "Karbonasi & Pembakaran Biochar",
    desc: "Sekam padi diproses melalui teknik pembakaran tak sempurna (pyrolysis sederhana) untuk memproduksi sekam bakar/biochar yang kaya unsur hara dan porositas tinggi.",
    tag: "Sekam Bakar / Biochar Organik",
    image: "/padi.jpg",
  },
  {
    n: "03",
    title: "Fermentasi Kompos Bio-Organik",
    desc: "Pencampuran sekam dengan mikroorganisme pengurai (dekomposer) dalam wadah komposter portable hingga matang sempurna dan kaya nutrisi makro/mikro.",
    tag: "Fermentasi Komposter Portable",
    image: "/coffee.jpg",
  },
  {
    n: "04",
    title: "Pengayakan & Formulasi Media Tanam",
    desc: "Proses pengayakan halus dan formulasi racikan media tanam (sekam lapuk, kompos, & tanah humus) dengan standar nutrisi seimbang untuk hortikultura.",
    tag: "Uji Kualitas & Formulasi Seimbang",
    image: "/hero1.jpg",
  },
  {
    n: "05",
    title: "Pengemasan & E-Katalog Digital",
    desc: "Produk dikemas higienis dalam karung tahan lembap, diberi sertifikasi kelayakan kelompok tani, dan dipasarkan secara digital via e-katalog WhatsApp Hub.",
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
          Dari limbah sawah menjadi <em>nutrisi tanah unggulan.</em>
        </h2>
        <p className="section-sub">
          Transparansi 5 tahap pembuatan pupuk dan media tanam organik asli dari olahan pertanian Desa Jagapura Kulon.
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
