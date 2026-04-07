"use client"

import { motion } from "framer-motion"
import { FeatureCards } from "./FeatureCards"

export function FeaturesSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: false}}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
            style={{ color: "var(--color-text)" }}
          >
            {"Unlike any tool".split("").map((c, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.02 }
                  }
                }}
              >
                {c}
              </motion.span>
            ))}
            <br />
            {"you've used before".split("").map((c, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4 + i * 0.02 }
                  }
                }}
              >
                {c}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-base max-w-md mx-auto leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world-class performance.
          </motion.p>
        </div>

        <FeatureCards />

      </div>
    </section>
  )
}