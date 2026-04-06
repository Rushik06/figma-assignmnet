import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-14 overflow-hidden"
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
        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border mb-8"
          style={{
            background: "var(--color-purple-muted)",
            borderColor: "var(--color-purple-border)",
            color: "var(--color-muted)",
          }}
        >
          Introducing Linear Insights
          <ArrowRight size={12} />
        </span>

        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Linear is a better way
          <br />
          to build products
        </h1>

        <p
          className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          Meet the new standard for modern software development.
          Streamline issues, sprints, and product roadmaps.
        </p>

        <Button
          size="lg"
          className="rounded-full text-sm font-medium text-white px-8 gap-2 hover:opacity-50 transition-opacity"
          style={{ background: "var(--color-btn-gradient)" }}
        >
          Get started <ArrowRight size={16} />
        </Button>
      </div>

      <div className="relative mt-20 w-full max-w-5xl mx-auto px-6">
        <div
          className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, var(--color-bg), transparent)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--color-bg), transparent)" }}
        />

        <div
          className="rounded-xl overflow-hidden border"
          style={{
            borderColor: "var(--color-border-strong)",
            boxShadow: "var(--shadow-hero)",
          }}
        >
          <Image
            src="/image-7 1 (1).png"
            alt="Linear app interface"
            width={1100}
            height={650}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}