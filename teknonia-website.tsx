"use client"

import { useState, useEffect } from "react"
import { Header } from "./header"
import { HeroSection } from "./hero-section"
import { ServicesSection } from "./services-section"
import { PortfolioSection } from "./portfolio-section"
import { ProcessSection } from "./process-section"
import { PricingSection } from "./pricing-section"
import { AboutSection } from "./about-section"
import { Footer } from "./footer"
import { QuoteModal } from "./quote-modal"
import { DemoModal } from "./demo-modal"
import { MobileQuoteBar } from "./mobile-quote-bar"
import { DEMO_SITES } from "@/lib/demo-sites"

export function TeknoniaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState<(typeof DEMO_SITES)[0] | null>(null)
  const [demoPage, setDemoPage] = useState(0)
  const [activePortfolioFilter, setActivePortfolioFilter] = useState("All")
  const [scrolled, setScrolled] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter Portfolio logic
  const portfolioFiltered =
    activePortfolioFilter === "All"
      ? DEMO_SITES
      : DEMO_SITES.filter((site) => site.category.includes(activePortfolioFilter))

  const openQuote = (packageName?: string) => {
    if (packageName) setSelectedPackage(packageName)
    setIsQuoteModalOpen(true)
  }

  const closeQuote = () => {
    setIsQuoteModalOpen(false)
    setSelectedPackage(null)
  }

  const openDemo = (site: (typeof DEMO_SITES)[0]) => {
    setActiveDemo(site)
    setDemoPage(0)
  }

  const closeDemo = () => setActiveDemo(null)

  return (
    <div className="font-sans text-foreground bg-ivory selection:bg-gold selection:text-aegean">
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuote} selectedPackage={selectedPackage} />

      <DemoModal
        activeDemo={activeDemo}
        demoPage={demoPage}
        setDemoPage={setDemoPage}
        onClose={closeDemo}
        onGetQuote={() => {
          closeDemo()
          openQuote()
        }}
      />

      <Header scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} openQuote={() => openQuote()} />

      <main>
        <HeroSection openQuote={() => openQuote()} />
        <ServicesSection />
        <PortfolioSection
          portfolioFiltered={portfolioFiltered}
          activeFilter={activePortfolioFilter}
          setActiveFilter={setActivePortfolioFilter}
          openDemo={openDemo}
          openQuote={() => openQuote()}
        />
        <ProcessSection />
        <PricingSection openQuote={openQuote} />
        <AboutSection />
      </main>

      <Footer openQuote={() => openQuote()} />

      <MobileQuoteBar openQuote={() => openQuote()} />
    </div>
  )
}
