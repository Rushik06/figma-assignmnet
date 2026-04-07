"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function EndSection() {
    return (
        <section
            className="relative py-28 overflow-hidden"
            style={{ background: "var(--color-bg)" }}
        >

            <div className="flex justify-center mb-12">
                <Image
                    src="/Vector 3.png"
                    alt="divider"
                    width={1200}
                    height={20}
                    className="w-full max-w-6xl opacity-80"
                />
            </div>

            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-20 flex justify-center"
                >
                    <Image
                        src="/Frame 1 (1).png"
                        alt="features"
                        width={1000}
                        height={300}
                        className="w-full max-w-5xl h-auto"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-3xl overflow-hidden border flex flex-col"
                        style={{
                            borderColor: "var(--color-border)",
                            background: "var(--color-surface)",
                        }}
                    >
                        <div className="p-8 pb-4">

                            <motion.h3
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false }}
                                className="text-2xl font-semibold mb-2"
                                style={{ color: "var(--color-text)" }}
                            >
                                {"List and board".split("").map((c, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
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
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                className="text-sm font-semibold leading-relaxed"
                                style={{ color: "var(--color-muted)" }}
                            >
                                Switch between list and board layout
                                <br />to view work from any angle.
                            </motion.p>

                        </div>

                        <div className="relative mt-4 overflow-hidden max-h-[280px]">
                            <Image
                                src="/image-9 1.png"
                                alt="List and board"
                                width={800}
                                height={500}
                                className="w-full h-auto"
                            />
                            <div
                                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                                style={{ background: "linear-gradient(to top, var(--color-surface), transparent)" }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-3xl overflow-hidden border flex flex-col"
                        style={{
                            borderColor: "var(--color-border)",
                            background: "var(--color-surface)",
                        }}
                    >
                        <div className="p-8 pb-4">

                            <motion.h3
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false }}
                                className="text-2xl font-semibold mb-2"
                                style={{ color: "var(--color-text)" }}
                            >
                                {"Make it yours".split("").map((c, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
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
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                className="text-sm font-semibold leading-relaxed"
                                style={{ color: "var(--color-muted)" }}
                            >
                                Quickly apply filters and operators to
                                <br />refine your issue lists and create custom
                                <br />views.
                            </motion.p>

                        </div>

                        <div className="relative mt-4 overflow-hidden max-h-[280px]">
                            <Image
                                src="/image-7 2.png"
                                alt="Make it yours"
                                width={800}
                                height={500}
                                className="w-full h-auto"
                            />
                            <div
                                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                                style={{ background: "linear-gradient(to top, var(--color-surface), transparent)" }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}