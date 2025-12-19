"use client"

import { Check, Clock } from "lucide-react"
import { PRICING_PACKAGES } from "@/lib/data"

interface PricingSectionProps {
  openQuote: (packageName?: string) => void
}

export function PricingSection({ openQuote }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-aegean mb-4">Clear, Upfront Pricing</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-grey max-w-2xl mx-auto">
            Choose the package that fits your stage of growth. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col p-6 rounded-lg border transition-all duration-300 ${
                pkg.popular
                  ? "border-gold shadow-xl bg-white scale-105 z-10"
                  : "border-aegean/10 shadow-sm bg-ivory hover:border-aegean/30 hover:shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-aegean text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-semibold text-aegean">{pkg.title}</h3>
                <p className="text-xs text-grey mt-1">{pkg.pages}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-aegean font-serif">{pkg.price}</span>
              </div>

              <p className="text-xs text-grey mb-6 italic">{pkg.desc}</p>

              <div className="flex-1 space-y-3 mb-8">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start text-xs text-aegean/80">
                    <Check className="w-3.5 h-3.5 text-gold mt-0.5 mr-2 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="text-xs text-grey text-center mb-3 flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> {pkg.delivery}
                </div>
                <button
                  onClick={() => openQuote(pkg.title)}
                  className={`w-full py-3 text-sm font-semibold rounded transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gold text-aegean hover:bg-gold/90"
                      : "border-2 border-aegean text-aegean hover:bg-aegean hover:text-ivory"
                  }`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-12">
          <p className="text-grey mb-2">Need something custom?</p>
          <button
            onClick={() => openQuote("Custom Package")}
            className="text-gold font-semibold hover:underline inline-flex items-center"
          >
            Contact us for a bespoke solution
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
