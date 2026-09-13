import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
const hanken = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://umkmjagapura.web.id"),
  title: {
    default: "PADIKU - Digitalisasi UMKM Desa Jagapura Kulon",
    template: "%s | PADIKU",
  },
  description:
    "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon. Memberdayakan ekonomi sirkular desa lewat produk makanan khas lokal unggulan.",
  keywords: [
    "UMKM Desa Jagapura Kulon",
    "Makanan Khas Cirebon",
    "Pemberdayaan Perempuan Gegesik",
    "Ekonomi Sirkular PADIKU",
    "Produk Kuliner Lokal",
  ],
  authors: [{ name: "Tim KKM UMC 2026 - Desa Jagapura Kulon" }],
  creator: "Tim PADIKU",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://umkmjagapura.web.id",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "PADIKU - Digitalisasi UMKM Desa Jagapura Kulon",
    description:
      "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon. Memberdayakan ekonomi sirkular desa lewat produk makanan khas lokal unggulan.",
    url: "https://umkmjagapura.web.id",
    siteName: "PADIKU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PADIKU - Digitalisasi UMKM & Produk Desa Jagapura Kulon",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADIKU - Digitalisasi UMKM Desa Jagapura Kulon",
    description:
      "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon. Memberdayakan ekonomi sirkular desa lewat produk makanan khas lokal unggulan.",
    site: "@umkmjagapura",
    creator: "@umkmjagapura",
    images: [
      {
        url: "/og-image.jpg",
        alt: "PADIKU - Digitalisasi UMKM & Produk Desa Jagapura Kulon",
      },
    ],
  },
  verification: {
    google: "WTj1vNn1l05IWJ1I_n_1MIfv8JBjlgiL8r3g5o2xQdY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PADIKU - UMKM Desa Jagapura Kulon",
    description:
      "Program Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular di Desa Jagapura Kulon, Kabupaten Cirebon",
    url: "https://umkmjagapura.web.id",
    image: "https://umkmjagapura.web.id/og-image.jpg",
    logo: "https://umkmjagapura.web.id/logo-padiku.png",
    telephone: "+62-851-7977-8898",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kantor Kuwu Desa Jagapura Kulon",
      addressLocality: "Kecamatan Gegesik",
      addressRegion: "Kabupaten Cirebon",
      postalCode: "45174",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.5796,
      longitude: 108.4441,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [
      "https://www.instagram.com/padiku.co",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-851-7977-8898",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
  };

  return (
    <html lang="id" className={hanken.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5a7acdf1-1d79-4c2c-890a-8c44afd0042a"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
