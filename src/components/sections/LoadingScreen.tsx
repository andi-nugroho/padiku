/* eslint-disable @next/next/no-img-element */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"loading" | "exit">("loading")
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Show logo for a moment, then trigger exit
    const timer = setTimeout(() => setPhase("exit"), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={() => { setVisible(false); onComplete() }}>
      {visible && phase !== "exit" ? null : null}
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          animate={phase === "exit" ? { y: "-100%" } : { y: "0%" }}
          exit={{ y: "-100%" }}
          transition={
            phase === "exit"
              ? { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
              : undefined
          }
          onAnimationComplete={() => {
            if (phase === "exit") {
              setVisible(false)
              onComplete()
            }
          }}
        >
          {/* Logo + loading indicator */}
          <div className="loading-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-2 mb-4"
            >
              <div className="w-20 h-20 relative">
                <img src="https://cdn.jsdelivr.net/gh/andi-nugroho/padiku@main/public/logo-padiku.png" alt="PADIKU Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-[var(--olive-950)] tracking-tight">
                PADIKU
              </span>
              <span className="text-xs font-semibold text-[var(--stone)] uppercase tracking-widest">
                Desa Jagapura Kulon
              </span>
            </motion.div>

            {/* Progress bar */}
            <div className="loading-bar-track">
              <motion.div
                className="loading-bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
