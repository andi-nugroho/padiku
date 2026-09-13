"use client"

// MapLibre imports removed
import { Button } from "@/components/ui/button"
import { SplitText } from "@/components/ui/split-text"
import Magnet from "@/components/reactbits/Magnet"

const IG_URL =
  "https://ig.me/m/padiku.co?text=Halo%20Pengelola%20PADIKU%20Desa%20Jagapura%20Kulon%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pemesanan%20produk%20makanan%20khas%20lokal."
const MAPS_URL =
  "https://maps.google.com/?q=Desa+Jagapura+Kulon+Kecamatan+Gegesik+Kabupaten+Cirebon"

// Koordinat Desa Jagapura Kulon, Gegesik, Cirebon
const PADIKU_LNG = 108.4441
const PADIKU_LAT = -6.5796

export function CTASection() {
  return (
    <section className="cta-final py-16">
      <div className="cta-final-inner max-w-5xl mx-auto px-4">
        <div className="section-label">Lokasi &amp; Kontak Usaha</div>
        <h2 className="cta-final-title">
          <SplitText text="Kunjungi Lokasi & Pesan Produk PADIKU" />
        </h2>
        <p className="cta-final-sub mb-8">
          Sentra UMKM PADIKU &amp; Produksi Makanan Khas Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon, Jawa Barat.
        </p>

        {/* Interactive Map (Google Maps Iframe) */}
        <div className="w-full h-80 rounded-2xl overflow-hidden mb-8 border border-white/20 shadow-lg relative bg-[#e5e3df]">
          <iframe 
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${PADIKU_LNG - 0.01}%2C${PADIKU_LAT - 0.01}%2C${PADIKU_LNG + 0.01}%2C${PADIKU_LAT + 0.01}&layer=mapnik&marker=${PADIKU_LAT}%2C${PADIKU_LNG}`}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="OpenStreetMap - Desa Jagapura Kulon"
          ></iframe>
        </div>

        <div className="cta-final-buttons flex flex-wrap justify-center gap-4">
          <Magnet padding={60} magnetStrength={6}>
            <Button variant="cta-bone" asChild>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                Pesan via Instagram
                <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Button>
          </Magnet>
          <Button variant="cta-ghost-bone" asChild>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              Buka Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
