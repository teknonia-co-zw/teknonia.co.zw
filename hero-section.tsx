"use client"

import { ArrowRight, Shield, Smartphone, CreditCard, Monitor } from "lucide-react"

interface HeroSectionProps {
  openQuote: () => void
}

export function HeroSection({ openQuote }: HeroSectionProps) {
  return (
    <header className="relative min-h-screen flex items-center pt-20 bg-aegean text-ivory overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0a1820] hidden lg:block"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full opacity-5 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full opacity-5 blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center py-12 lg:py-0">
        {/* Left Content */}
        <div className="lg:w-3/5 lg:pr-16 mb-12 lg:mb-0">
          <div className="inline-block px-4 py-1.5 border border-gold/50 text-gold text-xs uppercase tracking-widest font-medium mb-8 rounded-full opacity-0 animate-fade-in-up">
            Harare Web Studio
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6 opacity-0 animate-fade-in-up stagger-1">
            <span className="italic">Intelligent Design,</span>
            <br />
            <span className="font-bold text-gold">Powerful Growth.</span>
          </h1>

          <p className="text-lg lg:text-xl text-ivory/70 mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-2">
           We build conversion-driven websites and digital products that scale your business — faster and smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-fade-in-up stagger-3">
            <button
              onClick={openQuote}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gold text-aegean font-semibold rounded hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-ivory/30 text-ivory font-medium rounded hover:bg-ivory/10 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium text-ivory/50 uppercase tracking-wide border-t border-ivory/10 pt-6 opacity-0 animate-fade-in-up stagger-4">
            <span className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-gold" /> Trusted Locally
            </span>
            <span className="flex items-center">
              <Smartphone className="w-4 h-4 mr-2 text-gold" /> Built for Mobile
            </span>
            <span className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2 text-gold" /> Paynow Ready
            </span>
          </div>
        </div>

        {/* Right Content - Device Mockup */}
        <div className="lg:w-2/5 relative opacity-0 animate-fade-in-up stagger-5">
          <div className="relative">
            {/* Browser Mockup */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="bg-grey/20 px-4 py-2 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-grey/30 rounded h-5 mx-4"></div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-aegean to-[#0a1820] p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-ivory text-2xl mb-2">Boutique Luxury</div>
                  <div className="font-serif text-gold text-lg italic">in Zimbabwe</div>
                  <button className="mt-4 px-4 py-2 bg-gold text-aegean text-xs font-medium rounded">Book Now</button>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 bg-ivory text-aegean p-4 rounded-lg shadow-xl transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-grey">Conversion Rate</div>
                  <div className="font-bold text-lg">+34%</div>
                </div>
              </div>
            </div>

            {/* Small Accent */}
            <div className="absolute -top-4 -right-4 bg-gold text-aegean px-3 py-1.5 rounded text-xs font-bold transform rotate-[4deg]">
              Mobile First
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80V40C1440 40 1140 0 720 0C300 0 0 40 0 40V80Z" fill="#F4F1EC" />
        </svg>
      </div>
    </header>
  )
}
