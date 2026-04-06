import Image from "next/image"

export function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden" style={{ background: "var(--color-bg)" }}>
            <div className="text-center mb-16 px-6">
                <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    Powering the world's best product teams.
                    <br />
                    From next-gen startups to established enterprises.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <Image
                    src="/Screen Shot 2023-05-02 at 16.08 1.png"
                    alt="Companies using Linear"
                    width={1200}
                    height={200}
                    className="w-full h-auto"
                />
            </div>

            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-[50%] pointer-events-none"
                style={{ background: "var(--color-arc-glow)" }}
            />
        </section>
    )
}