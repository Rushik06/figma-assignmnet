"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FeatureCardsBottom() {
  return (
    <div className="grid grid-cols-3 gap-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="col-span-1 rounded-2xl border overflow-hidden"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <Image src="/Screen Shot 2023-05-02 at 16.19 1.png" alt="" width={100} height={50} className="w-full h-auto" />

        <div className="px-6 py-6 text-center">

          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-2xl font-semibold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            {"Designed for modern software teams".split("").map((c, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.01 }
                  }
                }}
              >
                {c}
              </motion.span>
            ))}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-md font-semibold leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            Built for speed with 50ms
            <br />interactions and real-time sync.
          </motion.p>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="col-span-2 rounded-2xl border overflow-hidden"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="px-8 pt-8 pb-4 text-center">

          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-2xl font-semibold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            {"Meet your command line".split("").map((c, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.015 }
                  }
                }}
              >
                {c}
              </motion.span>
            ))}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-md font-semibold leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            Complete any action in seconds
            <br />with the global command menu.
          </motion.p>

        </div>

        <Image src="/rec (4).png" alt="" width={700} height={280} className="w-full h-auto" />
      </motion.div>

    </div>
  )
}