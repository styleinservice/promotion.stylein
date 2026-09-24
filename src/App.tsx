import { useState } from 'react'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import FaqSection from './components/FaqSection'
import QuoteSection, { serviceOptions } from './components/QuoteSection'
import QuoteModal from './components/QuoteModal'
import Footer from './components/Footer'

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
    <div style={{ background: '#050505' }} className="font-kanit w-full">
      <HeroSection onOpenQuote={() => setIsModalOpen(true)} />
      <MarqueeSection />
      <ServicesSection
        onSelectService={handleSelectService}
        onServicesViewed={handleServicesViewed}
      />
      <ProjectsSection onOpenQuote={() => setIsModalOpen(true)} />
      <QuoteSection selectedService={selectedService} setSelectedService={setSelectedService} />
      <FaqSection />
      <AboutSection />
      <Footer />

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
