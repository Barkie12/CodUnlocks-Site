import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
    </main>
  )
} 