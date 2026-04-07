import Image from "next/image"
import { Button } from "@/components/ui/button"

const navLinks = ["Features", "Method", "Customers", "Changelog", "Integration", "Pricing", "Company"]

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
                style={{ color: "var(--color-text)" }}
                className="transition-colors cursor-pointer font-semibold hover:!text-[var(--color-muted)]"
              >
                {link}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <span
            style={{ color: "var(--color-text)" }}
            className="transition-colors cursor-pointer font-semibold hover:!text-[var(--color-muted)]"
          >
            Log in
          </span>
          <Button
            size="sm"
            className="rounded-full text-sm font-medium px-8 gap-2 hover:opacity-80 transition-opacity"
            style={{
              color: "var(--color-text)",
              background: "var(--color-btn-gradient)"
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}