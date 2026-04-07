import Image from "next/image"

export function EndSection() {
    return (
        <section className="relative py-28 overflow-hidden"
            style={{ background: "var(--color-bg)" }}>

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

                <div className="mb-20 flex justify-center">
                    <Image
                        src="/Frame 1 (1).png"
                        alt="features"
                        width={1000}
                        height={300}
                        className="w-full max-w-5xl h-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div
                        className="rounded-3xl overflow-hidden border flex flex-col"
                        style={{
                            borderColor: "var(--color-border)",
                            background: "var(--color-surface)",
                        }}
                    >
                        <div className="p-8 pb-4">
                            <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                                List and board
                            </h3>
                            <p className="text-sm  font-semibold leading-relaxed" style={{ color: "var(--color-muted)" }}>
                                Switch between list and board layout
                                <br />to view work from any angle.
                            </p>
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
                    </div>

                    <div
                        className="rounded-3xl overflow-hidden border flex flex-col"
                        style={{
                            borderColor: "var(--color-border)",
                            background: "var(--color-surface)",
                        }}
                    >
                        <div className="p-8 pb-4">
                            <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                                Make it yours
                            </h3>
                            <p className="text-sm  font-semibold leading-relaxed" style={{ color: "var(--color-muted)" }}>
                                Quickly apply filters and operators to
                                <br />refine your issue lists and create custom
                                <br />views.
                            </p>
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
                    </div>

                </div>
            </div>
        </section>
    )
}