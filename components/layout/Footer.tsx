import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FooterSection() {
    return (
        <section
            className="relative py-25 overflow-hidden text-center"
            style={{ background: "var(--color-bg)" }}
        >
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
                <div className="mb-8">
                    <Image
                        src="/linear-app-icon 1.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="rounded-xl"
                    />
                </div>

                <h2
                    className="text-4xl md:text-6xl font-semibold tracking-tight"
                    style={{ color: "var(--color-text)" }}
                >
                    Built for the future.
                </h2>

                <h3
                    className="text-4xl md:text-6xl font-semibold tracking-tight mt-2"
                    style={{ color: "var(--color-muted)" }}
                >
                    Available today.
                </h3>

                <div className="flex gap-4 mt-10">

                    <Button
                        className="rounded-full text-sm font-medium text-white px-8 gap-2 hover:opacity-50 transition-opacity"
                        style={{ background: "var(--color-btn-gradient)" }}
                    >
                        Sign up for free
                    </Button>

                    <Button
                        variant="secondary"
                        className="rounded-full text-sm font-medium text-white px-8 gap-2 hover:opacity-50 transition-opacity"
                        style={{
                            background: "var(--color-surface)",
                            color: "var(--color-text)",
                            borderColor: "var(--color-border)"
                        }}
                    >
                        Download
                    </Button>

                </div>
            </div>

            <div className="mt-24 w-full">
                <Image
                    src="/Screen Shot 2023-05-03 at 12.46 1 (1).png"
                    alt="footer links"
                    width={1600}
                    height={500}
                    className="w-full h-auto"
                />
            </div>
        </section>
    )
}