"use client"

import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {

    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 400], [0, -80])

    return (
        <section
            className="relative py-28 overflow-hidden"
            style={{ background: "var(--color-bg)" }}
        >

            <div
                className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[260px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, var(--color-purple-muted) 0%, transparent 65%)",
                    filter: "blur(60px)",
                    opacity: 0.6,
                }}
            />

            <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto px-6">

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs border mb-8 cursor-pointer"
                    style={{
                        background: "var(--color-purple-muted)",
                        borderColor: "var(--color-purple-border)",
                        color: "var(--color-muted)",
                    }}
                >
                    Introducing Linear Insights
                    <ArrowRight size={12} />
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6"
                    style={{ color: "var(--color-text)" }}
                >
                 
                    {"Linear is a better way".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.02 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <br />
                    {"to build products".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.02 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                >
                    Meet the new standard for modern software development.
                    Streamline issues, sprints, and product roadmaps.
                </motion.p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.92 }}
                >
                    <Button
                        size="lg"
                        className="rounded-full text-sm font-medium px-8 gap-2 hover:opacity-80 transition-opacity"
                        style={{
                            color: "var(--color-text)",
                            background: "var(--color-btn-gradient)"
                        }}
                    >
                        Get started <ChevronRight size={16} />
                    </Button>
                </motion.div>
            </div>

            <motion.div
                style={{ y }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="mt-20 w-full max-w-5xl mx-auto px-6"
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-xl overflow-hidden border"
                    style={{
                        borderColor: "var(--color-border-strong)",
                        boxShadow: "var(--shadow-hero)",
                    }}
                >
                    <Image
                        src="/image-7 1 (1).png"
                        alt="Linear app interface"
                        width={1200}
                        height={850}
                        priority
                        className="w-full h-auto"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}