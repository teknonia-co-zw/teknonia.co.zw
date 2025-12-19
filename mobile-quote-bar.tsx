"use client"

import { MessageSquare, Phone } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"

interface MobileQuoteBarProps {
  openQuote: () => void
}

export function MobileQuoteBar({ openQuote }: MobileQuoteBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-aegean border-t border-ivory/10 p-3 flex items-center gap-2 lg:hidden z-30">
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded font-medium text-sm"
      >
        <MessageSquare className="w-4 h-4" />
        WhatsApp
      </a>
      <a
        href={`tel:${CONTACT_INFO.whatsapp}`}
        className="flex items-center justify-center w-12 h-12 bg-ivory/10 text-ivory rounded"
      >
        <Phone className="w-5 h-5" />
      </a>
      <button onClick={openQuote} className="flex-1 py-3 bg-gold text-aegean rounded font-semibold text-sm">
        Get Quote
      </button>
    </div>
  )
}
