import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { serviceOptions } from './QuoteSection'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

const finishOptions = ['High-Gloss', 'Satin Matte', 'Color Change', 'Undecided / Need Advice']
const locations = ['Ajman (Studio / Pickup)', 'Sharjah (Complimentary Pickup)', 'Dubai (Complimentary Pickup)', 'Abu Dhabi / Other']

const QuoteModal = ({ isOpen, onClose, initialService }: QuoteModalProps) => {
  const [selectedService, setSelectedService] = useState<string>(initialService || serviceOptions[0])
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

  // Sync initialService if changed
  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService)
    }
  }, [initialService])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const payload = {
        _subject: `Popup Form Quote Request — ${carModel || 'Vehicle'} (${fullName})`,
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
        // Fallback: Mail client
        const mailSubject = encodeURIComponent(`PPF Quote Request — ${carModel || 'Vehicle'} (${fullName})`)
        const mailBody = encodeURIComponent(
          `Full Name: ${fullName}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nVehicle: ${carModel} (${carYear || 'N/A'})\nLocation: ${location}\nService Required: ${selectedService}\nFinish Preference: ${finish}\n\nAdditional Notes:\n${notes || 'None'}`
        )
        window.location.href = `mailto:info@styleincar.com?subject=${mailSubject}&body=${mailBody}`
        setSubmitted(true)
      }
    } catch {
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl rounded-[24px] sm:rounded-[30px] border border-white/15 bg-gradient-to-b from-[#111111] via-[#0A0A0A] to-[#050505] p-5 sm:p-7 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] z-10 overflow-hidden my-auto max-h-[92vh] overflow-y-auto"
          >
            {/* Top red sheen */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.1] text-white/70 hover:text-white flex items-center justify-center text-xs sm:text-sm transition-all cursor-pointer z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="text-[#E50914] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] block mb-1">
                Vehicle Protection Quotation
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                Get Your Customized Quote
              </h3>
              <p className="text-[#888888] text-xs sm:text-[13px] font-light mt-1 max-w-lg">
                Enter your details to receive an official vehicle quotation sent directly to your email.
              </p>
            </div>

            {/* Modal Body */}
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="modal-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-3.5 sm:gap-4"
                >
                  {/* ROW 1: Service (6 cols) + Finish (3 cols) + Location (3 cols) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-3.5">
                    {/* Service Selection */}
                    <div className="md:col-span-6 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Select Service *
                      </label>
                      <div className="relative">
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-white/10 bg-[#141414] text-white text-xs sm:text-[13px] font-medium focus:outline-none focus:border-[#E50914] transition-all appearance-none cursor-pointer pr-8"
                        >
                          {serviceOptions.map((srv) => (
                            <option key={srv} value={srv} className="bg-[#141414] text-white">
                              {srv}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Desired Finish */}
                    <div className="md:col-span-3 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Desired Finish
                      </label>
                      <div className="relative">
                        <select
                          value={finish}
                          onChange={(e) => setFinish(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-white/10 bg-[#141414] text-white text-xs sm:text-[13px] focus:outline-none focus:border-[#E50914] transition-all appearance-none cursor-pointer pr-8"
                        >
                          {finishOptions.map((f) => (
                            <option key={f} value={f} className="bg-[#141414] text-white">
                              {f}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="md:col-span-3 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Location
                      </label>
                      <div className="relative">
                        <select
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-white/10 bg-[#141414] text-white text-xs sm:text-[13px] focus:outline-none focus:border-[#E50914] transition-all appearance-none cursor-pointer pr-8"
                        >
                          {locations.map((loc) => (
                            <option key={loc} value={loc} className="bg-[#141414] text-white">
                              {loc}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ROW 2: Vehicle (4 cols) + Year (4 cols) + Name (4 cols) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-3.5">
                    {/* Make & Model */}
                    <div className="md:col-span-4 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Make & Model *
                      </label>
                      <input
                        type="text"
                        required
                        value={carModel}
                        onChange={(e) => setCarModel(e.target.value)}
                        placeholder="e.g. Porsche 911 GT3"
                        className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-all"
                      />
                    </div>

                    {/* Year */}
                    <div className="md:col-span-4 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Year / Condition
                      </label>
                      <input
                        type="text"
                        value={carYear}
                        onChange={(e) => setCarYear(e.target.value)}
                        placeholder="e.g. 2026 (Brand New)"
                        className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-all"
                      />
                    </div>

                    {/* Full Name */}
                    <div className="md:col-span-4 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-all"
                      />
                    </div>
                  </div>

                  {/* ROW 3: WhatsApp (4 cols) + Email (4 cols) + Notes (4 cols) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-3.5">
                    {/* Phone */}
                    <div className="md:col-span-4 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-all font-mono"
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-4 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Email (For PDF Quote) *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-all"
                      />
                    </div>

                    {/* Notes */}
                    <div className="md:col-span-4 flex flex-col gap-1">
                      <label className="text-white text-[11px] font-bold uppercase tracking-wider">
                        Specific Notes (Optional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Dubai pickup, XPEL..."
                        className="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-white text-xs sm:text-[13px] placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Dock */}
                  <div className="flex items-center justify-center pt-3 mt-1 border-t border-white/[0.08]">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-[#E50914] hover:bg-[#B80710] text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(229,9,20,0.45)] hover:scale-105 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{loading ? 'Submitting...' : 'Submit'}</span>
                      <span>→</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="modal-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-1 max-w-md">
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
                    onClick={onClose}
                    className="mt-2 px-6 py-2 rounded-full bg-[#E50914] hover:bg-[#B80710] text-xs font-semibold uppercase tracking-wider text-white transition-colors cursor-pointer"
                  >
                    Done & Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default QuoteModal
