import Image from "next/image"
import { Button } from "@/components/ui/button"

const navLinks = ["Features", "Method", "Customers", "Changelog", "Integration","Pricing","Company"]

export function Navbar() {
  return (
    <header
      className="fixed top-0 w-full z-50 border-b"
      style={{
        background: "var(--color-bg)",
        borderColor: "var(--color-border)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/wordmark-light 1.png"
              alt="Linear"
              width={60}
              height={20}
              priority
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <span
                key={link}
                className="transition-colors cursor-pointer hover:text-white"
                style={{ color: "var(--color-text)" }}
              >
                {link}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="text-sm transition-colors cursor-pointer hover:text-white"
            style={{ color: "var(--color-muted)" }}
          >
            Log in
          </span>
          <Button
            size="sm"
            className="rounded-full text-sm font-medium text-white px-8 gap-2 hover:opacity-50 transition-opacity"
            style={{ background: "var(--color-btn-gradient)" }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}