import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductsSection from '@/components/ProductsSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <FAQSection />
    </main>
  )
} 