"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function CTASection() {
    return (
        <section
            className="relative pt-12 pb-28 overflow-hidden"
            style={{ background: "var(--color-bg)" }}
        >

            <div className="text-center mb-16 px-6">
                <motion.p
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                >

                    {"Powering the world's best product teams.".split("").map((char, i) => (
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
                            {char}
                        </motion.span>
                    ))}

                    <br />

                    {"From next-gen startups to established enterprises.".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.5 + i * 0.015 }
                                }
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.p>
            </div>

            <div className="max-w-5xl mx-auto px-6 overflow-hidden">
                <motion.div
                    animate={{ x: [0, -40, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src="/Screen Shot 2023-05-02 at 16.08 1.png"
                        alt="Companies using Linear"
                        width={1200}
                        height={200}
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>

            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-[50%] pointer-events-none"
                style={{ background: "var(--color-arc-glow)" }}
            />
        </section>
    )
}