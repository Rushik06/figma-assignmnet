import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/layout/HeroSection'
import { CTASection } from '@/components/layout/CTASection'
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CTASection/>
    </main>
  )
}