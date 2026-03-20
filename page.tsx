import { HeroSection } from "@/components/hero-section"
import { AITeaserSection } from "@/components/ai-teaser-section"
import { SocialFeedSection } from "@/components/social-feed-section"
import { ExclusivitySection } from "@/components/exclusivity-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AITeaserSection />
      <SocialFeedSection />
      <ExclusivitySection />
      <WaitlistSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
