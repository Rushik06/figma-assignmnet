"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const product = ["Features", "Integrations", "Pricing", "Changelog", "Docs", "Linear Method", "Download"]
const company = ["About us", "Blog", "Careers", "Customers", "Brand"]
const resources = ["Community", "Contact", "DPA", "Terms of service", "Report a vulnerability"]
const developers = ["API", "Status", "GitHub"]

export function FooterSection() {
    return (
        <section style={{ background: "var(--color-bg)" }}>

            <div className="max-w-5xl mx-auto px-6 py-28 flex flex-col items-center text-center">

                <Image
                    src="/linear-app-icon 1.png"
                    alt="Linear"
                    width={100}
                    height={100}
                    className="rounded-xl mb-8"
                />

                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="text-4xl md:text-6xl font-semibold tracking-tight"
                    style={{ color: "var(--color-text)" }}
                >
                    {"Built for the future.".split("").map((c, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { delay: i * 0.02 } }
                            }}
                        >
                            {c}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.h3
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="text-4xl md:text-6xl font-semibold tracking-tight mt-2"
                    style={{ color: "var(--color-muted)" }}
                >
                    {"Available today.".split("").map((c, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { delay: 0.4 + i * 0.02 } }
                            }}
                        >
                            {c}
                        </motion.span>
                    ))}
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="flex gap-4 mt-10"
                >
                    <Button
                        className="rounded-full text-sm font-medium px-8 gap-2 hover:opacity-80 transition-opacity"
                        style={{
                            color: "var(--color-text)",
                            background: "var(--color-btn-gradient)"
                        }}
                    >
                        Sign up for free
                    </Button>

                    <Button
                        variant="secondary"
                        className="rounded-full px-8 text-sm font-medium hover:opacity-50 transition-opacity"
                        style={{ background: "var(--color-surface)", color: "var(--color-text)", borderColor: "var(--color-border)" }}
                    >
                        <Image src="/apple-173-svgrepo-com.svg" alt="Apple" width={16} height={16} className="invert" />
                        Download
                    </Button>
                </motion.div>
            </div>

            <div className="px-6">
                <div className="w-full h-px" style={{ background: "var(--color-border)" }} />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

                    <div className="col-span-2 md:col-span-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                            <Image src="/wordmark-light 1.png" alt="Linear" width={60} height={60} />
                        </div>

                        <div className="flex items-center gap-4 mt-auto pt-8">
                            <Image src="/twitter-154-svgrepo-com.svg" alt="" width={16} height={16} className="invert opacity-60 hover:opacity-100" />
                            <Image src="/github-142-svgrepo-com.svg" alt="" width={16} height={16} className="invert opacity-60 hover:opacity-100" />
                            <Image src="/slack-svgrepo-com.svg" alt="" width={16} height={16} className="invert opacity-60 hover:opacity-100" />
                        </div>
                    </div>

                    {[product, company, resources, developers].map((list, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                        >
                            <p className="text-sm font-semibold mb-4" style={{ color: "var(--color-text)" }}>
                                {["Product", "Company", "Resources", "Developers"][idx]}
                            </p>

                            <ul className="space-y-3">
                                {list.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { delay: i * 0.05 }
                                            }
                                        }}
                                        className="text-sm cursor-pointer hover:text-white transition-colors"
                                        style={{ color: "var(--color-muted)" }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                </div>
            </div>

        </section>
    )
}