import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/layout/HeroSection'
import { CTASection } from '@/components/layout/CTASection'
import { FeaturesSection } from '@/components/layout/FeatureSection'
import { IssueSection } from '@/components/layout/IssueSection'
import{ EndSection } from '@/components/layout/EndSection'
import{ FooterSection } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CTASection/>
      <FeaturesSection/>
      <IssueSection/>
      <EndSection/>
      <FooterSection/>

    </main>
  )
}