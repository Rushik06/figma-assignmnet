import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
            style={{ color: "var(--color-text)" }}
          >
            Unlike any tool
            <br />
            you've used before
          </h2>
          <p
            className="text-base max-w-md mx-auto leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world-class performance.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">

          <div
            className="col-span-2 rounded-2xl border overflow-hidden"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <div className="flex justify-center pt-6 px-6">
              <Image
                src="/rec (2).png"
                alt="Keyboard shortcuts"
                width={500}
                height={160}
                className="h-auto"
              />
            </div>

            <div className="mt-10">
              <Image
                src="/Group 13.png"
                alt="Keyboard toolbar"
                width={600}
                height={42}
                className="w-full h-auto"
              />
            </div>

            <div className="px-6 py-6 text-center">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Built for your keyboard
              </h3>
              <p className="text-md leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Fly through your tasks with rapid-fire keyboard 
                <br />shortcuts for everything. Literally everything.
              </p>
            </div>
          </div>

          <div
            className="col-span-1 rounded-2xl border overflow-hidden"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <Image
              src="/rec (3).png"
              alt="Breathtakingly fast"
              width={350}
              height={220}
              className="w-full h-auto"
            />

            <div className="px-6 py-6 text-center">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Breathtakingly fast
              </h3>
              <p className="text-md leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Built for speed with 50ms interactions and real-time sync.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div
            className="col-span-1 rounded-2xl border overflow-hidden"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <Image
              src="/Group 14.png"
              alt="Designed for modern software teams"
              width={300}
              height={50} 
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="col-span-2 rounded-2xl border overflow-hidden"
            style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            <div className="px-8 pt-8 pb-4 text-center">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Meet your command line
              </h3>
              <p className="text-md leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Complete any action in seconds
                <br />with the global command menu.
              </p>
            </div>

            <Image
              src="/rec (4).png"
              alt="Command palette"
              width={700}
              height={280}
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  )
}