"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import GlareHover from "@/components/reactbits/GlareHover"
import { Parallax } from "@/components/ui/parallax"

const vaults = [
  {
    name: "Node 01",
    title: "Field Agent Network",
    desc: "The frontline application that turns field agents into verifiable data collectors. Polygonal land mapping, biometric farmer KYC, and encrypted capture at point-zero of production.",
    meta: [
      { label: "Mapping", val: "Sub-meter GPS" },
      { label: "Enrollment", val: "Biometric KYC" },
    ],
    image: "/chili.jpg",
  },
  {
    name: "Node 02",
    title: "Enterprise Console",
    desc: "The command center for headquarters. Real-time supply chain visibility, EUDR document management, full batch provenance, and automated audit-ready reporting.",
    meta: [
      { label: "Visibility", val: "Real-time batches" },
      { label: "Reporting", val: "Audit-ready" },
    ],
    image: "/coffee.jpg",
  },
  {
    name: "Node 03",
    title: "Logistical Nodes",
    desc: "The connective tissue between farm and port. IoT sensors in warehouses, QR check-ins at collection points, and GPS fleet tracking link every movement to its passport.",
    meta: [
      { label: "Warehouse", val: "IoT sensors" },
      { label: "Transport", val: "GPS fleet tracking" },
    ],
    image: "/hero2.jpg",
  },
] as const

export function Vaults() {
  return (
    <section id="infrastructure" className="vault-mobile-section">
      <div className="vault-mobile-header">
        <div className="section-label">Infrastructure</div>
        <h2 className="section-title">
          Three nodes. One <em>unbreakable</em> chain.
        </h2>
        <p className="section-sub">
          From the farmer&apos;s field to the corporate boardroom, every data
          point flows through purpose-built infrastructure.
        </p>
      </div>

      <div className="vault-mobile-list">
        {vaults.map((vault, i) => (
          <motion.div
            key={vault.title}
            className="vault-mobile-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="vault-mobile-image">
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="0"
                borderColor="transparent"
                glareColor="#fdfcf9"
                glareOpacity={0.35}
                glareSize={220}
                transitionDuration={900}
                className="vault-glare"
              >
                <Parallax amount={18} scale={1.12}>
                  <Image
                    src={vault.image}
                    alt={vault.title}
                    fill
                    className="vault-image-photo"
                  />
                </Parallax>
              </GlareHover>
            </div>
            <div className="vault-mobile-info">
              <div className="vault-name">{vault.name}</div>
              <h3 className="vault-mobile-title">{vault.title}</h3>
              <p className="vault-mobile-desc">{vault.desc}</p>
              <div className="vault-meta">
                {vault.meta.map(({ label, val }) => (
                  <div key={label}>
                    <div className="vm-label">{label}</div>
                    <div className="vm-val">{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
