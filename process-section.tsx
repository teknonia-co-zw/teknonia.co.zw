"use client"

import { Users, Layout, Monitor, TrendingUp } from "lucide-react"
import { PROCESS_STEPS } from "@/lib/data"

const icons = [Users, Layout, Monitor, TrendingUp]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-aegean mb-4">How We Work</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-grey max-w-2xl mx-auto">A disciplined process from concept to conversion.</p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-aegean/10 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = icons[i]
              return (
                <div key={i} className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-2 border-aegean/10 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-gold group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full mb-3">
                      Step {i + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-aegean mb-2">{step.title}</h4>
                    <p className="text-sm text-grey">{step.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-aegean font-medium italic font-serif text-lg">
            Simple communication. Clear expectations. Reliable delivery.
          </p>
        </div>
      </div>
    </section>
  )
}
