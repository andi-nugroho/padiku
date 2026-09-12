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
};

export const metadata: Metadata = {
  metadataBase: new URL("https://umkmjagapura.web.id"),
  title: "PADIKU - Digitalisasi UMKM Desa Jagapura Kulon",
  description:
    "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon.",
  keywords: [
    "UMKM Desa Jagapura Kulon",
    "Makanan Khas Cirebon",
    "Pemberdayaan Perempuan Gegesik",
    "Ekonomi Sirkular PADIKU",
    "Produk Kuliner Lokal",
  ],
  authors: [{ name: "Tim KKM UMC 2026 - Desa Jagapura Kulon" }],
  creator: "Tim PADIKU",
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
      "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon.",
    url: "https://umkmjagapura.web.id",
    siteName: "PADIKU",
    images: [
      {
        url: "/og-image.png",
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
      "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon.",
    images: ["/og-image.png"],
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
    "@type": "Organization",
    name: "PADIKU",
    description:
      "Program Pemberdayaan Masyarakat melalui Agribisnis, Diversifikasi Pangan, dan Ekonomi Sirkular di Desa Jagapura Kulon, Kabupaten Cirebon",
    url: "https://www.umkmjagapura.web.id",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kantor Kuwu Desa Jagapura Kulon",
      addressLocality: "Kecamatan Gegesik",
      addressRegion: "Kabupaten Cirebon",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-800-0000-0000", // Ganti dengan nomor kontak resmi
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: "Indonesian"
    }
  };

  return (
    <html lang="id" className={hanken.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script 
          defer 
          src="https://cloud.umami.is/script.js" 
          data-website-id="5a7acdf1-1d79-4c2c-890a-8c44afd0042a" 
        />
        {children}
      </body>
    </html>
  );
}
