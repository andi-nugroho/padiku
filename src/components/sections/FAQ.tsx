"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqItems = [
  {
    question: "What is Panora?",
    answer:
      "Panora is first-mile traceability and EUDR compliance infrastructure for global commodity supply chains. It bridges smallholder farmers and global trading houses through immutable Digital Product Passports on Solana, so every batch is auditable from farm gate to port.",
  },
  {
    question: "What does EUDR compliance actually require?",
    answer:
      "The EU Deforestation Regulation demands irrefutable evidence that commodities originate from non-deforested land. Panora captures GPS-tagged polygon coordinates at the point of harvest, encrypted and timestamped on-chain, creating audit trails that regulators cannot challenge.",
  },
  {
    question: "Does my team need to understand blockchain?",
    answer:
      "No. Panora takes a Silent Web3 approach: field staff log in with email or Google via Web3Auth, headquarters uses enterprise SSO, and nobody ever sees a wallet address or signs a blockchain transaction. Your IT team gets immutability, your operations team gets simplicity.",
  },
  {
    question: "How does Panora fit into our existing systems?",
    answer:
      "REST APIs and webhooks integrate with your current ERP or SAP stack, so no infrastructure overhaul is required. Panora runs on multi-region cloud infrastructure with a 99.9% uptime SLA, edge-optimized for low-connectivity field operations across Southeast Asia and Africa.",
  },
  {
    question: "How is working capital protected in the field?",
    answer:
      "Milestone-gated disbursement locks funds until verified delivery events occur on-chain. Capital deployed into remote supply chains stays protected from field-level leakage and misallocation, with a complete audit trail for every release.",
  },
  {
    question: "Has this been proven in the field?",
    answer:
      "Panora placed Top 10 at the SEABW Hackathon (supported by AWS, selected from 200+ global registrants) and 4th at Indonesia's premier national campus blockchain competition with Superteam Indonesia. Our flagship pilot, the Sumatra South Coffee Corridor in Pagar Alam, covers the complete coffee supply chain from smallholder farms through collection points to export warehouses.",
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[number]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div className="faq-accordion-item">
      <h3>
        <button
          className="faq-accordion-button"
          aria-expanded={isOpen}
          aria-controls={`faq-content-${index}`}
          type="button"
          onClick={onToggle}
        >
          <span className="faq-accordion-question">{item.question}</span>
          <div className="faq-icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="faq-icon faq-icon-h"
            >
              <path d="M25.33,17.33H6.66v-2.67h18.67v2.67Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className={`faq-icon faq-icon-v ${isOpen ? "faq-icon-v-open" : ""}`}
            >
              <path d="M25.33,17.33H6.66v-2.67h18.67v2.67Z" />
            </svg>
          </div>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${index}`}
            className="faq-accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="faq-accordion-body">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <motion.div
        className="faq-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="faq-header">
          <span className="section-label">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <em>Questions</em>
          </h2>
        </div>

        <div className="faq-accordion-list">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
