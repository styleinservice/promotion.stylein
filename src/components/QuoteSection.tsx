import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

export const serviceOptions = [
  'Clear PPF — Full Body (From AED 3,500)',
  'Color PPF — Full Body (From AED 3,999)',
  'Color Wrapping & Vinyl (From AED 3,600)',
  'Partial / Custom PPF (Custom Quote)',
  'Door & Edge Protection (+AED 1,500)',
  'Nano Ceramic Coating (From AED 649)',
  'Motorcycle PPF (From AED 2,000)',
  'Interior Detailing & Steam (From AED 349)',
  'Full Detailing & Polish (From AED 499)',
]

const finishOptions = ['High-Gloss', 'Satin Matte', 'Color Change', 'Undecided / Need Advice']
const locations = ['Ajman (Studio / Pickup)', 'Sharjah (Complimentary Pickup)', 'Dubai (Complimentary Pickup)', 'Abu Dhabi / Other']

interface QuoteSectionProps {
  selectedService?: string
  setSelectedService?: (service: string) => void
}

const QuoteSection = ({
  selectedService: propSelectedService,
  setSelectedService: propSetSelectedService,
}: QuoteSectionProps) => {
  const [internalService, setInternalService] = useState<string>(serviceOptions[0])
  const selectedService = propSelectedService ?? internalService
  const setSelectedService = propSetSelectedService ?? setInternalService
  const [finish, setFinish] = useState<string>('High-Gloss')
  const [location, setLocation] = useState<string>('Ajman (Studio / Pickup)')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [carModel, setCarModel] = useState('')
  const [carYear, setCarYear] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const payload = {
        _subject: `New PPF & Detailing Quote Request — ${carModel || 'Vehicle'} (${fullName})`,
        _captcha: 'false',
        _template: 'table',
        'Client Name': fullName,
        'Client Email': email,
        'WhatsApp / Phone': phone,
        'Vehicle Make & Model': carModel,
        'Model Year / Condition': carYear || 'Not Specified',
        'Service Requested': selectedService,
        'Desired Finish': finish,
        'Service Area / Location': location,
        'Specific Requirements / Notes': notes || 'None',
      }

      const response = await fetch('https://formsubmit.co/ajax/e995f601b30e07a7fb7b77a7725995cc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => null)
      if (response.ok || (data && (data.success === 'true' || data.success === true || (data.message && data.message.includes('Activation'))))) {
        setSubmitted(true)
      } else {
        // Fallback: If network block, open mail client
        const mailSubject = encodeURIComponent(`PPF Quote Request — ${carModel || 'Vehicle'} (${fullName})`)
        const mailBody = encodeURIComponent(
          `Full Name: ${fullName}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nVehicle: ${carModel} (${carYear || 'N/A'})\nLocation: ${location}\nService Required: ${selectedService}\nFinish Preference: ${finish}\n\nAdditional Notes:\n${notes || 'None'}`
        )
        window.location.href = `mailto:info@styleincar.com?subject=${mailSubject}&body=${mailBody}`
        setSubmitted(true)
      }
    } catch {
      // Fallback
      const mailSubject = encodeURIComponent(`PPF Quote Request — ${carModel || 'Vehicle'} (${fullName})`)
      const mailBody = encodeURIComponent(
        `Full Name: ${fullName}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nVehicle: ${carModel} (${carYear || 'N/A'})\nLocation: ${location}\nService Required: ${selectedService}\nFinish Preference: ${finish}\n\nAdditional Notes:\n${notes || 'None'}`
      )
      window.location.href = `mailto:info@styleincar.com?subject=${mailSubject}&body=${mailBody}`
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="quote"
      className="relative z-20 px-4 sm:px-6 md:px-8 py-10 sm:py-14 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.06) 0%, rgba(5, 5, 5, 0) 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <FadeIn delay={0} y={20}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
              style={{ fontSize: 'clamp(2.3rem, 7.5vw, 90px)' }}
            >
              Get Your Vehicle Quote
            </h2>
          </FadeIn>

          <FadeIn delay={0.05} y={15}>
            <p className="text-[#888888] text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Select your required service and enter your vehicle details. We will send a customized, vehicle-specific quotation directly to your email and WhatsApp.
            </p>
          </FadeIn>
        </div>

        {/* Compact Form Container */}
        <FadeIn delay={0.1} y={15}>
          <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 p-5 sm:p-7 md:p-8 bg-gradient-to-b from-[#0E0E0E] via-[#090909] to-[#060606] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-xl relative overflow-hidden">
            {/* Top red sheen */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="quote-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4 sm:gap-5"
                >
                  {/* ROW 1: Service (6 cols) + Finish (3 cols) + Location (3 cols) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
                    {/* Service Selection */}
                    <div className="md:col-span-6 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Select Service Required *
                      </label>
                      <div className="relative">
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#121212] text-white text-xs sm:text-[13px] font-medium focus:outline-none focus:border-[#E50914] focus:bg-[#161616] transition-all appearance-none cursor-pointer pr-9"
                        >
                          {serviceOptions.map((srv) => (
                            <option key={srv} value={srv} className="bg-[#121212] text-white">
                              {srv}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Desired Finish */}
                    <div className="md:col-span-3 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Desired Finish
                      </label>
                      <div className="relative">
                        <select
                          value={finish}
                          onChange={(e) => setFinish(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#121212] text-white text-xs sm:text-[13px] focus:outline-none focus:border-[#E50914] transition-all appearance-none cursor-pointer pr-9"
                        >
                          {finishOptions.map((f) => (
                            <option key={f} value={f} className="bg-[#121212] text-white">
                              {f}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="md:col-span-3 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Location / Area
                      </label>
                      <div className="relative">
                        <select
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#121212] text-white text-xs sm:text-[13px] focus:outline-none focus:border-[#E50914] transition-all appearance-none cursor-pointer pr-9"
                        >
                          {locations.map((loc) => (
                            <option key={loc} value={loc} className="bg-[#121212] text-white">
                              {loc}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ROW 2: Vehicle Make & Model (4 cols) + Model Year (4 cols) + Full Name (4 cols) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
                    {/* Vehicle Make & Model */}
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Make & Model *
                      </label>
                      <input
                        type="text"
                        required
                        value={carModel}
                        onChange={(e) => setCarModel(e.target.value)}
                        placeholder="e.g. Porsche 911 GT3 / BMW M4"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] focus:bg-[#E50914]/[0.04] transition-all"
                      />
                    </div>

                    {/* Model Year */}
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Year / Condition
                      </label>
                      <input
                        type="text"
                        value={carYear}
                        onChange={(e) => setCarYear(e.target.value)}
                        placeholder="e.g. 2026 (Brand New)"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] focus:bg-[#E50914]/[0.04] transition-all"
                      />
                    </div>

                    {/* Full Name */}
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] focus:bg-[#E50914]/[0.04] transition-all"
                      />
                    </div>
                  </div>

                  {/* ROW 3: WhatsApp/Phone (4 cols) + Email Address (4 cols) + Notes (4 cols) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
                    {/* Phone / WhatsApp */}
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] focus:bg-[#E50914]/[0.04] transition-all font-mono"
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Email (For PDF Quote) *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] focus:bg-[#E50914]/[0.04] transition-all"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div className="md:col-span-4 flex flex-col gap-1.5">
                      <label className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        Specific Notes (Optional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Pickup from Dubai, 10yr XPEL..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button Dock */}
                  <div className="flex items-center justify-center pt-4 mt-1 border-t border-white/[0.08]">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-3.5 rounded-full bg-[#E50914] hover:bg-[#B80710] text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(229,9,20,0.45)] hover:scale-105 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{loading ? 'Submitting...' : 'Submit'}</span>
                      <span>→</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 sm:py-12 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-1.5 max-w-md">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                      Quote Request Sent!
                    </h3>
                    <p className="text-[#888888] text-xs sm:text-[13px] font-light leading-relaxed">
                      Thank you <span className="text-white font-medium">{fullName}</span>. Your request for{' '}
                      <span className="text-white font-medium">{carModel}</span> ({selectedService}) has been received. We will follow up to{' '}
                      <span className="text-white font-mono">{email}</span> shortly.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFullName('')
                      setEmail('')
                      setPhone('')
                      setCarModel('')
                      setCarYear('')
                      setNotes('')
                    }}
                    className="mt-2 px-6 py-2.5 rounded-full border border-white/10 hover:border-white/25 text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default QuoteSection
