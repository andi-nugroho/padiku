"use client"

import { motion } from "framer-motion"
import CountUp from "@/components/reactbits/CountUp"
import { DONUT_C, DONUT_L1, DONUT_L2, DONUT_L3 } from "./constants"

const legend = [
  { color: "var(--harvest)", pct: 30, label: "Infrastructure deployed" },
  { color: "var(--olive-700)", pct: 60, label: "Batches traced end-to-end" },
  { color: "var(--stone)", pct: 90, label: "Audit-ready EUDR reports" },
] as const

const checklist = [
  "Sub-second finality on Solana, every entry final and verifiable in under 400ms",
  "Costs under $0.001 per record, so every event is logged with no sampling",
  "REST APIs and webhooks plug straight into existing ERP and SAP systems",
  "Field staff log in with email or Google via Web3Auth, no wallets, no seed phrases",
] as const

export function MarketEconomics() {
  return (
    <section id="technology" className="me-section">
      <div className="me-grid">
        <motion.div
          className="me-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="me-card-title">
            Enterprise-grade security. <em>Zero</em> blockchain complexity.
          </h2>
          <ul className="me-checklist">
            {checklist.map((item) => (
              <li key={item}>
                <span className="me-check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="me-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="me-card-title">
            Deployed and audit-ready in <em>90 days.</em>
          </h2>
          <div className="me-split-row">
            <div className="me-donut">
              <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="none" stroke="var(--bone-dim)" strokeWidth="28" />
                <circle
                  cx="100" cy="100" r="80" fill="none"
                  stroke="var(--harvest)" strokeWidth="28"
                  strokeDasharray={`${DONUT_L1} ${DONUT_C - DONUT_L1}`}
                />
                <g transform="rotate(120 100 100)">
                  <circle
                    cx="100" cy="100" r="80" fill="none"
                    stroke="var(--olive-700)" strokeWidth="28"
                    strokeDasharray={`${DONUT_L2} ${DONUT_C - DONUT_L2}`}
                  />
                </g>
                <g transform="rotate(240 100 100)">
                  <circle
                    cx="100" cy="100" r="80" fill="none"
                    stroke="var(--stone)" strokeWidth="28"
                    strokeDasharray={`${DONUT_L3} ${DONUT_C - DONUT_L3}`}
                  />
                </g>
              </svg>
              <div className="me-donut-center">
                <div className="me-dc-label">Deployment</div>
                <div className="me-dc-val">Blueprint</div>
              </div>
            </div>

            <div className="me-pct-col">
              {legend.map(({ pct, label, color }) => (
                <div key={label} className="me-pct-item">
                  <div className="me-pct-val" style={{ color }}>
                    Day <CountUp to={pct} duration={1.4} />
                  </div>
                  <div className="me-pct-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
