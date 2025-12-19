"use client"

import type React from "react"

import { useState } from "react"
import { X, MessageSquare, Mail, Phone, Send } from "lucide-react"
import { CONTACT_INFO, PRICING_PACKAGES } from "@/lib/data"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPackage: string | null
}

export function QuoteModal({ isOpen, onClose, selectedPackage }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    service: selectedPackage || "Starter Website ($129)",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      setFormData({
        name: "",
        phone: "",
        business: "",
        service: "Starter Website ($129)",
        details: "",
      })
    }, 3000)
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Teknonia — I'm enquiring about the ${selectedPackage || "website services"} for my business. My name is ${formData.name || "___"}, business: ${formData.business || "___"}.`,
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-aegean/90 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-fade-in">
        {/* Left: Quick Actions */}
        <div className="bg-aegean text-ivory p-8 md:w-2/5 flex flex-col">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-gold">Get a Quote</h3>
            <p className="text-ivory/60 text-sm mb-8">Choose the fastest way for you.</p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace("+", "")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-ivory/5 hover:bg-ivory/10 rounded border border-ivory/10 transition group"
              >
                <MessageSquare className="w-5 h-5 text-green-400 mr-3 group-hover:scale-110 transition" />
                <div>
                  <span className="block font-semibold text-sm">WhatsApp</span>
                  <span className="text-xs text-ivory/50">Fastest response</span>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Quote Request - ${selectedPackage || "Website Services"}`}
                className="flex items-center p-4 bg-ivory/5 hover:bg-ivory/10 rounded border border-ivory/10 transition group"
              >
                <Mail className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition" />
                <div>
                  <span className="block font-semibold text-sm">Email Us</span>
                  <span className="text-xs text-ivory/50">{CONTACT_INFO.email}</span>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.whatsapp}`}
                className="flex items-center p-4 bg-ivory/5 hover:bg-ivory/10 rounded border border-ivory/10 transition group"
              >
                <Phone className="w-5 h-5 text-gold mr-3 group-hover:scale-110 transition" />
                <div>
                  <span className="block font-semibold text-sm">Call Now</span>
                  <span className="text-xs text-ivory/50">{CONTACT_INFO.phone}</span>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-ivory/10">
            <p className="text-xs text-ivory/50 text-center">
              We typically reply within 2 hours during business hours.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-8 md:w-3/5 overflow-y-auto bg-ivory">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-aegean">Or send detailed request</h3>
            <button onClick={onClose} className="p-2 hover:bg-aegean/10 rounded-full transition">
              <X className="w-5 h-5 text-aegean" />
            </button>
          </div>

          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-aegean mb-2">Request Sent!</h4>
              <p className="text-grey">We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-grey uppercase mb-1">Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-white border border-aegean/20 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-grey uppercase mb-1">Phone</label>
                  <input
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-white border border-aegean/20 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                    placeholder="+263..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-grey uppercase mb-1">Business Name</label>
                <input
                  required
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full p-3 bg-white border border-aegean/20 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                  placeholder="Company Ltd"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-grey uppercase mb-1">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-3 bg-white border border-aegean/20 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                >
                  {PRICING_PACKAGES.map((pkg) => (
                    <option key={pkg.id}>
                      {pkg.title} ({pkg.price})
                    </option>
                  ))}
                  <option>Custom / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-grey uppercase mb-1">Project Details</label>
                <textarea
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full p-3 bg-white border border-aegean/20 rounded focus:border-gold focus:ring-1 focus:ring-gold outline-none transition h-24 resize-none"
                  placeholder="Tell us a bit about what you need..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gold text-aegean font-semibold rounded hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
                <p className="text-center text-xs text-grey mt-3">We respect your privacy. No spam.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
