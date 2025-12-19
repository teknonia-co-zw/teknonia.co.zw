"use client"

import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/data"
import Image from "next/image"

interface HeaderProps {
  scrolled: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  openQuote: () => void
}

export function Header({ scrolled, isMenuOpen, setIsMenuOpen, openQuote }: HeaderProps) {
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? "bg-ivory shadow-md py-3" : "bg-aegean py-4"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/teknonia-20logo.png"
            alt="Teknonia"
            width={180}
            height={50}
            className={`h-8 w-auto ${scrolled ? "brightness-0" : ""}`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-gold transition ${scrolled ? "text-aegean" : "text-ivory/80"}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={openQuote}
            className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded ${
              scrolled
                ? "bg-gold text-aegean hover:bg-gold/90"
                : "border border-gold text-gold hover:bg-gold hover:text-aegean"
            }`}
          >
            Start Your Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={scrolled ? "text-aegean" : "text-ivory"} />
          ) : (
            <Menu className={scrolled ? "text-aegean" : "text-ivory"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-aegean p-6 flex flex-col gap-4 shadow-xl lg:hidden border-t border-ivory/10 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ivory/80 text-lg py-2 border-b border-ivory/5 hover:text-gold transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false)
              openQuote()
            }}
            className="w-full mt-4 px-5 py-3 bg-gold text-aegean font-semibold rounded hover:bg-gold/90 transition"
          >
            Start Your Project
          </button>
        </div>
      )}
    </nav>
  )
}
