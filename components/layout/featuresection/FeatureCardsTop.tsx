"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FeatureCardsTop() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="col-span-2 rounded-2xl border overflow-hidden"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div className="flex justify-center pt-6 px-6">
          <Image src="/rec (2).png" alt="" width={500} height={160} className="h-auto" />
        </div>

        <div className="mt-10">
          <Image src="/Group 13.png" alt="" width={600} height={42} className="w-full h-auto" />
        </div>

        <div className="px-6 py-6 text-center">

          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-2xl font-semibold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            {"Built for your keyboard".split("").map((c, i) => (
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
            Fly through your tasks with rapid-fire keyboard
            <br />shortcuts for everything. Literally everything.
          </motion.p>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="col-span-1 rounded-2xl border overflow-hidden"
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <Image src="/rec (3).png" alt="" width={350} height={220} className="w-full h-auto" />

        <div className="px-6 py-6 text-center">

          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-2xl font-semibold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            {"Breathtakingly fast".split("").map((c, i) => (
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
            Built for speed with 50ms interactions and real-time sync.
          </motion.p>

        </div>
      </motion.div>

    </div>
  )
}