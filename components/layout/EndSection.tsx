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

          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/Group 24 (1).png"
              alt="List and board"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/Group 22 (1).png"
              alt="Make it yours"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

        </div>

      </div>
    </section>
  )
}