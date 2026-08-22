"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const steps = [
  {
    n: "01",
    title: "Capture",
    desc: "Field agents map every farm as a GPS polygon with sub-meter accuracy and enroll farmers with biometric KYC before harvest begins.",
    tag: "Sub-meter GPS polygons",
    image: "/hero.jpg",
  },
  {
    n: "02",
    title: "Verify",
    desc: "Harvest origin, farmer identity, and land boundaries are encrypted and timestamped at point-zero of production. Offline-first for remote field conditions.",
    tag: "Cryptographic integrity",
    image: "/padi.jpg",
  },
  {
    n: "03",
    title: "Mint",
    desc: "Each commodity batch becomes a Digital Product Passport: a compressed NFT permanently encoding coordinates, certifications, and transaction history.",
    tag: "Tamper-proof by design",
    image: "/coffee.jpg",
  },
  {
    n: "04",
    title: "Move",
    desc: "Sensor-equipped warehouses and GPS-tracked transport record every movement. QR check-ins validate chain-of-custody at each handoff.",
    tag: "Warehouse and transport nodes",
    image: "/hero1.jpg",
  },
  {
    n: "05",
    title: "Report",
    desc: "Headquarters monitors every batch in real time and generates audit-ready EUDR compliance reports with a single click.",
    tag: "One-click EUDR reports",
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
    <section id="how" className="process">
      <div className="process-header">
        <div className="section-label">Chain of custody</div>
        <h2 className="section-title">
          From farm gate to <em>boardroom.</em>
        </h2>
        <p className="section-sub">
          Five verified handoffs. Every data point auditable, tamper-proof,
          instantly retrievable.
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
