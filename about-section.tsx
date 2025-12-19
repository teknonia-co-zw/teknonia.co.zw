"use client"

import { TEAM } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* About Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-aegean mb-4">About Teknonia</h2>
              <div className="h-1 w-20 bg-gold mb-6"></div>
            </div>

            <div className="space-y-4 text-grey leading-relaxed">
              <p className="text-xl font-serif italic text-aegean">"Where Craft Meets Intelligence"</p>
              <p>
                At Teknonia we practice <span className="text-gold font-semibold">téchnē</span> — the ancient art of
                skilled making — and we temper it with <span className="text-gold font-semibold">noûs</span>, clear
                strategic thought.
              </p>
              <p>
                We are a modern atelier: artisans of digital form, philosophers of product, and engineers of outcomes.
                We design with the patience of a sculptor and the precision of a mathematician.
              </p>
              <p>
                We believe a great website is not decoration. It is a crafted instrument — a logical{" "}
                <span className="italic">logos</span> that speaks for your business, guides your customer&apos;s
                choices, and earns trust.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { name: "Téchnē", value: "Craft", desc: "We obsess over details" },
                { name: "Noûs", value: "Wisdom", desc: "We design with strategy" },
                { name: "Arête", value: "Excellence", desc: "Quality that endures" },
                { name: "Koinonia", value: "Partnership", desc: "Collaborators, not vendors" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-gold font-serif italic">{item.name}</span>
                  <span className="text-aegean font-semibold"> ({item.value})</span>
                  <p className="text-xs text-grey mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold text-aegean mb-8 border-b border-aegean/10 pb-4">The Leadership</h3>
            <div className="space-y-4">
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-aegean rounded-full flex items-center justify-center text-gold font-serif text-xl flex-shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-aegean">{member.name}</h4>
                    <span className="text-xs text-gold font-semibold uppercase tracking-wider">{member.role}</span>
                    <p className="text-sm text-grey mt-1">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 bg-aegean text-ivory p-6 rounded-lg">
              <h4 className="font-serif text-lg mb-3 text-gold">Our Mission</h4>
              <p className="text-ivory/80 text-sm leading-relaxed">
                To practice digital téchnē with modern noûs — creating websites and systems that turn attention into
                value for Zimbabwean businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
