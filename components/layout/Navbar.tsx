"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

const navLinks = ["Features", "Method", "Customers", "Changelog", "Integration", "Pricing", "Company"]

export function Navbar() {

  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, 100], [56, 50])
  const opacity = useTransform(scrollY, [0, 100], [1, 0.96])

  return (
    <motion.header
      style={{
        height,
        opacity,
        background: "var(--color-bg)",
        borderColor: "var(--color-border)",
        backdropFilter: "blur(15px)",
      }}
      className="fixed top-0 w-full z-50 border-b flex items-center"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">

        <div className="flex items-center gap-8">

          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/wordmark-light 1.png"
              alt="Linear"
              width={60}
              height={20}
              priority
            />
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link, i) => (
              <motion.span
                key={link}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                className="relative cursor-pointer font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full" />
              </motion.span>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <motion.span
            whileHover={{ opacity: 0.6 }}
            className="cursor-pointer font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            Log in
          </motion.span>

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button
              size="sm"
              className="rounded-full text-sm font-medium px-8 gap-2"
              style={{
                color: "var(--color-text)",
                background: "var(--color-btn-gradient)"
              }}
            >
              Sign up
            </Button>
          </motion.div>

        </div>
      </div>
    </motion.header>
  )
}