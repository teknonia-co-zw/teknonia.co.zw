"use client"

import { TrendingUp } from "lucide-react"
import type { DEMO_SITES } from "@/lib/demo-sites"
import Image from "next/image"

interface PortfolioSectionProps {
  portfolioFiltered: typeof DEMO_SITES
  activeFilter: string
  setActiveFilter: (filter: string) => void
  openDemo: (site: (typeof DEMO_SITES)[0]) => void
  openQuote: () => void
}

const filters = ["All", "Lodges", "Real Estate", "Retail", "Restaurant"]

export function PortfolioSection({
  portfolioFiltered,
  activeFilter,
  setActiveFilter,
  openDemo,
  openQuote,
}: PortfolioSectionProps) {
  return (
    <section id="work" className="py-24 bg-aegean">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-2">A Showcase of Our Craft</h2>
            <p className="text-ivory/60">Websites built with precision, intelligence, and local insight.</p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeFilter === filter ? "bg-gold text-aegean" : "bg-ivory/10 text-ivory/70 hover:bg-ivory/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioFiltered.map((item) => (
            <div
              key={item.id}
              className="group bg-ivory rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Preview */}
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-aegean/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openDemo(item)}
                    className="px-6 py-2 bg-gold text-aegean font-medium rounded transform scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    View Interactive Demo
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-aegean">{item.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-aegean/10 text-aegean px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-green-600 text-sm font-medium mb-4 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> {item.tagline}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => openDemo(item)}
                    className="flex-1 py-2.5 border border-aegean/20 rounded text-sm font-medium text-aegean hover:border-gold hover:text-gold transition-colors duration-300"
                  >
                    View Demo
                  </button>
                  <button
                    onClick={openQuote}
                    className="flex-1 py-2.5 bg-gold text-aegean rounded text-sm font-medium hover:bg-gold/90 transition-colors duration-300"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button
            onClick={openQuote}
            className="inline-flex items-center justify-center px-8 py-3 bg-gold text-aegean font-semibold rounded hover:bg-gold/90 transition-all duration-300"
          >
            View All Work
          </button>
        </div>
      </div>
    </section>
  )
}
