"use client"

import { Layout, Target, ShoppingCart, Layers } from "lucide-react"

const services = [
  {
    title: "Strategic Web Design",
    subtitle: "(Webflow)",
    icon: Layout,
  },
  {
    title: "High-Conversion Landing Pages",
    subtitle: "(lead captures & funnels)",
    icon: Target,
  },
  {
    title: "E-commerce Development",
    subtitle: "(custom online stores)",
    icon: ShoppingCart,
  },
  {
    title: "UI/UX & Webflow Prototypes",
    subtitle: "(interactive mockups & design systems)",
    icon: Layers,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-aegean mb-4">Modern Web Design for Ambitious Brands</h2>
          <p className="text-grey max-w-2xl mx-auto">
            Beautiful, conversion-optimized websites crafted with skill and strategy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-gold/30 rounded-lg flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-semibold text-aegean mb-1">{service.title}</h3>
                <p className="text-sm text-grey">{service.subtitle}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-aegean text-aegean font-medium rounded hover:bg-aegean hover:text-ivory transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}
