"use client"

import { MessageSquare, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import { NAV_LINKS, CONTACT_INFO } from "@/lib/data"
import Image from "next/image"

interface FooterProps {
  openQuote: () => void
}

export function Footer({ openQuote }: FooterProps) {
  return (
    <footer id="contact" className="bg-aegean text-ivory border-t border-ivory/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/teknonia-20logo.png" alt="Teknonia" width={150} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-ivory/60 text-sm mb-6">
              Intelligent Digital Craftsmanship.
              <br />
              Harare, Zimbabwe.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-ivory/10 rounded-full hover:bg-gold hover:text-aegean transition-colors duration-300 flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-ivory/10 rounded-full hover:bg-gold hover:text-aegean transition-colors duration-300 flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-ivory/10 rounded-full hover:bg-gold hover:text-aegean transition-colors duration-300 flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-ivory">Quick Links</h4>
            <ul className="space-y-3 text-sm text-ivory/60">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-gold transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="col-span-2 bg-[#0a1820] p-8 rounded-lg border border-ivory/5">
            <h4 className="font-semibold mb-6 text-gold">Start a Conversation</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory/80 hover:text-ivory group"
              >
                <MessageSquare className="text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm">WhatsApp: {CONTACT_INFO.whatsapp}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.whatsapp}`}
                className="flex items-center gap-3 text-ivory/80 hover:text-ivory group"
              >
                <Phone className="text-gold group-hover:scale-110 transition-transform" />
                <span className="text-sm">Call: {CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-ivory/80 hover:text-ivory group sm:col-span-2"
              >
                <Mail className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </a>
            </div>
            <button
              onClick={openQuote}
              className="mt-6 w-full py-3 bg-gold text-aegean font-semibold rounded hover:bg-gold/90 transition-colors duration-300"
            >
              Request a Quick Quote
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ivory/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Teknonia Web Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
