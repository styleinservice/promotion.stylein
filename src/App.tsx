import { useState } from 'react'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import WhyPpfSection from './components/WhyPpfSection'
import UnderstandingPpf from './components/UnderstandingPpf'
import ServicesSection from './components/ServicesSection'
import CertifiedBrands from './components/CertifiedBrands'
import ProjectsSection from './components/ProjectsSection'
import WhyChooseUs from './components/WhyChooseUs'
import ReviewsSection from './components/ReviewsSection'
import QuoteSection from './components/QuoteSection'
import FaqSection from './components/FaqSection'
import BlogSection from './components/BlogSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import ScrollToTop from './components/ScrollToTop'
import { serviceOptions } from './constants/services'

function App() {
  const [selectedService, setSelectedService] = useState<string>(serviceOptions[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasTriggeredModal, setHasTriggeredModal] = useState(false)

  const handleSelectService = (serviceOption: string) => {
    setSelectedService(serviceOption)
    setIsModalOpen(true)
  }

  const handleServicesViewed = () => {
    if (!hasTriggeredModal) {
      setHasTriggeredModal(true)
      // Smooth subtle delay for seamless UX
      setTimeout(() => {
        setIsModalOpen(true)
      }, 500)
    }
  }

  return (
    <div style={{ background: '#050505' }} className="font-kanit w-full selection:bg-[#E50914] selection:text-white">
      {/* 1. Hero Section (includes Key Benefits bullets directly under CTAs) */}
      <HeroSection onOpenQuote={() => setIsModalOpen(true)} />

      {/* 2. Protection & Care in Action Marquee */}
      <MarqueeSection />

      {/* 4. Why Choose Paint Protection Film? (Point 2) */}
      <WhyPpfSection onOpenQuote={() => setIsModalOpen(true)} />

      {/* 5. Understanding PPF + Comparison Table & Ceramic vs PPF (Point 3) */}
      <UnderstandingPpf />

      {/* 6. Certified PPF Brands (Point 5) - Rendered Above Services */}
      <CertifiedBrands />

      {/* 7. Protection Packages & Services (Includes Point 11: Door & Edge Add-on) */}
      <ServicesSection
        onSelectService={handleSelectService}
        onServicesViewed={handleServicesViewed}
      />

      {/* 8. Our 6-Step Installation Process */}
      <ProjectsSection onOpenQuote={() => setIsModalOpen(true)} />

      {/* 9. Why Choose StyleInCar (Point 4) */}
      <WhyChooseUs />

      {/* 10. Interactive Quote Request Form */}
      <QuoteSection selectedService={selectedService} setSelectedService={setSelectedService} />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />

      {/* 12. From The Blog (Point 8) */}
      <BlogSection />

      {/* 13. Client Reviews & Google Rating: 5★ (Point 6 - Pre-Footer Trust Anchor) */}
      <ReviewsSection />

      {/* 14. About Studio & Areas We Serve (Points 7 & 10) */}
      <AboutSection />

      {/* 16. Expanded Footer with Company Info (Point 10) */}
      <Footer />

      {/* Floating Animated Scroll To Top Button */}
      <ScrollToTop />

      {/* Auto Popup Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  )
}

export default App
