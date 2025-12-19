"use client"

import { X, Monitor, Check } from "lucide-react"
import type { DEMO_SITES } from "@/lib/demo-sites"

interface DemoModalProps {
  activeDemo: (typeof DEMO_SITES)[0] | null
  demoPage: number
  setDemoPage: (page: number) => void
  onClose: () => void
  onGetQuote: () => void
}

export function DemoModal({ activeDemo, demoPage, setDemoPage, onClose, onGetQuote }: DemoModalProps) {
  if (!activeDemo) return null

  const currentPage = activeDemo.pages[demoPage]

  return (
    <div className="fixed inset-0 z-[60] bg-aegean flex flex-col animate-fade-in">
      {/* Top Bar */}
      <div className="h-16 border-b border-ivory/10 flex items-center justify-between px-6 bg-aegean text-ivory shadow-md z-10">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-lg">{activeDemo.name}</h3>
          <span className="bg-gold text-aegean text-[10px] font-bold px-2 py-0.5 rounded uppercase">Demo Mode</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center text-sm text-ivory/60 mr-4">
            <Monitor className="w-4 h-4 mr-2" /> Mobile Preview
          </div>
          <button
            onClick={onGetQuote}
            className="px-4 py-2 bg-gold text-aegean text-sm font-semibold rounded hover:bg-gold/90 transition"
          >
            Get This Design
          </button>
          <button onClick={onClose} className="p-2 hover:bg-ivory/10 rounded-full transition">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Nav */}
        <div className="w-56 bg-[#0a1820] border-r border-ivory/5 flex-shrink-0 flex flex-col hidden md:flex">
          <div className="p-6">
            <p className="text-xs font-semibold text-ivory/40 uppercase mb-4">Demo Pages</p>
            <div className="space-y-2">
              {activeDemo.pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => setDemoPage(index)}
                  className={`w-full text-left px-4 py-3 rounded text-sm transition ${
                    demoPage === index ? "bg-gold text-aegean font-semibold" : "text-ivory/60 hover:bg-ivory/5"
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-auto p-6 border-t border-ivory/5">
            <div className="text-xs text-ivory/40 mb-2">Performance</div>
            <div className="flex items-center text-green-400 text-sm font-medium mb-1">
              <Check className="w-4 h-4 mr-1" /> Mobile Ready
            </div>
            <div className="flex items-center text-green-400 text-sm font-medium">
              <Check className="w-4 h-4 mr-1" /> Fast Load
            </div>
          </div>
        </div>

        {/* Device Simulator Area */}
        <div className="flex-1 bg-[#1a1d21] p-4 md:p-8 flex items-center justify-center overflow-auto relative">
          {/* Mobile Frame Container */}
          <div className="w-[320px] md:w-[375px] h-[640px] md:h-[750px] bg-black rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-8 border-gray-800 shadow-2xl relative overflow-hidden shrink-0 ring-4 ring-black/50">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 md:h-6 w-32 md:w-40 bg-black rounded-b-xl z-20"></div>
            {/* Screen Content */}
            <div className="w-full h-full bg-white overflow-y-auto no-scrollbar">{currentPage.content}</div>
            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 md:w-32 h-1 bg-gray-600 rounded-full z-20"></div>
          </div>

          {/* Info Card */}
          <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-aegean/90 backdrop-blur text-ivory p-4 rounded-lg max-w-xs text-xs hidden lg:block">
            <h4 className="font-semibold text-gold mb-1">Why this works</h4>
            <p className="text-ivory/80">{activeDemo.description}</p>
          </div>
        </div>
      </div>

      {/* Mobile Page Navigation */}
      <div className="md:hidden border-t border-ivory/10 bg-aegean p-4 flex gap-2 overflow-x-auto">
        {activeDemo.pages.map((page, index) => (
          <button
            key={index}
            onClick={() => setDemoPage(index)}
            className={`px-4 py-2 rounded text-sm whitespace-nowrap transition ${
              demoPage === index ? "bg-gold text-aegean font-semibold" : "bg-ivory/10 text-ivory/60"
            }`}
          >
            {page.title}
          </button>
        ))}
      </div>
    </div>
  )
}
