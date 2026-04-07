import Image from "next/image"

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

        <h2
          className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight"
          style={{ color: "var(--color-text)" }}
        >
          Issue tracking
        </h2>

        <h3
          className="mt-2 text-5xl md:text-7xl font-semibold leading-tight tracking-tight"
          style={{
            background: "linear-gradient(to bottom, var(--color-dump), var(--color-track))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          you'll enjoy using
        </h3>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-3xl">
            <Image
              src="/Group 15.png"
              alt="Issue tracking UI"
              width={900}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        <p
          className="mt-16 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          Create tasks in seconds, discuss issues in
          <br />
          context, and breeze through your work in
          <br />
          views tailored to you and your team.
        </p>
      </div>
    </section>
  )
}