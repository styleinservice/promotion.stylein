import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const servicesList = [
  { name: 'Clear PPF — Full Body', href: '#service-01' },
  { name: 'Color PPF — Full Body', href: '#service-02' },
  { name: 'Color Wrapping & Vinyl', href: '#service-03' },
  { name: 'Partial & Custom PPF', href: '#service-04' },
  { name: 'Nano Ceramic Coating', href: '#service-05' },
  { name: 'Motorcycle PPF', href: '#service-06' },
  { name: 'Interior Detailing & Steam', href: '#service-07' },
  { name: 'Full Paint Correction & Polish', href: '#service-08' },
  { name: 'Car Seat Customization', href: '#service-09' },
  { name: 'Car Seat Reupholstery', href: '#service-10' },
]

const locationList = [
  'Ajman (Al Jerf Industrial 1 & Corniche)',
  'Sharjah (Al Nahda, Majaz & Khan)',
  'Dubai (Downtown, Marina & Palm)',
  'Abu Dhabi (Yas Island & Saadiyat)',
]

const Footer = () => {
  return (
    <footer
      className="relative z-20 px-4 sm:px-6 md:px-12 lg:px-16 pt-8 sm:pt-10 pb-6 sm:pb-8 overflow-hidden border-t border-white/[0.08]"
      style={{ background: '#050505' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Company Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-4 sm:pb-5">
          {/* Column 1: Brand Bio */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.webp" alt="StyleInCar" className="h-8 sm:h-9 w-auto object-contain" />
              <span className="text-[#8E8E93] text-[10px] tracking-[0.2em] uppercase font-mono border-l border-white/15 pl-3">
                AJMAN · UAE
              </span>
            </div>

            <p className="text-[#8E8E93] text-xs leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">StyleInCar</strong> — Professional PPF and car care services in Al Jerf Industrial 1, Ajman, UAE. Premium Paint Protection Film engineered to protect your vehicle's original paint from stone chips, sand abrasion, and UV exposure.
            </p>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#E50914] hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Request Quote Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Column 2: Protection Packages */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/[0.06]">
              Protection Packages
            </h4>
            <ul className="space-y-2 text-xs text-[#8E8E93] font-light">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="text-[#E50914] hover:text-white font-medium transition-colors block mt-1"
                >
                  View All 10 Packages →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas & Why Contact Us */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-3 pb-2 border-b border-white/[0.06]">
              Areas We Serve
            </h4>
            <ul className="space-y-2 text-xs text-[#8E8E93] font-light mb-4">
              {locationList.map((loc) => (
                <li key={loc} className="flex items-start gap-2">
                  <span className="text-[#E50914] mt-0.5">•</span>
                  <span>{loc}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-2.5 pb-1.5 border-b border-white/[0.06]">
              Why Contact Us
            </h4>
            <ul className="space-y-1.5 text-xs text-[#8E8E93] font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#E50914] mt-0.5">•</span>
                <span>Free consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E50914] mt-0.5">•</span>
                <span>No-obligation quotation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E50914] mt-0.5">•</span>
                <span>Vehicle-specific recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E50914] mt-0.5">•</span>
                <span>Same-week installation</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Dedicated Contact Block */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/[0.06]">
              Studio & Contact
            </h4>
            <div className="space-y-3.5 text-xs text-[#8E8E93] font-light">
              <a
                href="https://maps.google.com/?q=Stylein+Car+Studio+Al+Jerf+Industrial+1+Ajman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Al Jerf Industrial 1, Ajman, United Arab Emirates</span>
              </a>

              <a
                href="tel:+971558120570"
                className="flex items-center gap-2.5 group hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E50914] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-white/90 group-hover:text-white transition-colors">
                  +971 55 812 0570
                </span>
              </a>

              <a
                href="mailto:info@styleincar.com"
                className="flex items-center gap-2.5 group hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#E50914] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">
                  info@styleincar.com
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 9:00 PM<br />Sunday: By Appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/30">
          <div>
            <span>DEVELOPED BY </span>
            <a
              href="https://sociallyconnect.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#E50914] font-semibold tracking-wider transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#E50914]"
            >
              SOCIALLY CONNECT
            </a>
          </div>

          <div>
            © 2026 StyleInCar Studio — Ajman. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
