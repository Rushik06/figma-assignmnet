"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function IssueSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[140px] pointer-events-none">
        <div
          className="w-full h-full rounded-b-xl blur-xl"
          style={{
            background: "linear-gradient(to bottom, var(--color-spotlight), transparent)",
          }}
        />
      </div>

      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ opacity: 0.6, background: "var(--color-arc-glow)" }}
      />

      <div className="relative px-6 text-center">

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          {"Issue tracking".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.03 }
                }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.h3
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="mt-2 text-5xl md:text-7xl font-semibold leading-tight tracking-tight"
          style={{
            background: "linear-gradient(to bottom, var(--color-dump), var(--color-track))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {"you'll enjoy using".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4 + i * 0.03 }
                }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h3>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-3xl">

            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              animate={{
                y: [20, -30, 20],
                scale: [0.95, 1.08, 0.95],
                rotateX: [2, -2, 2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative perspective-[1200px]"
            >
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.9, 1.15, 0.9]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 blur-2xl bg-white/10 pointer-events-none"
              />

              <Image
                src="/Group 15.png"
                alt="Issue tracking UI"
                width={900}
                height={600}
                priority
                className="w-full h-auto relative z-10"
              />
            </motion.div>

          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-16 max-w-3xl mx-auto text-lg font-semibold md:text-3xl leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          Create tasks in seconds, discuss issues in
          <br />
          context, and breeze through your work in
          <br />
          views tailored to you and your team.
        </motion.p>

      </div>
    </section>
  )
}