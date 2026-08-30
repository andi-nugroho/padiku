import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PADIKU - Digitalisasi UMKM & Produk Sirkular Desa Jagapura Kulon",
  description:
    "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon. Temukan pupuk organik sekam, kompos, dan produk agribisnis berkualitas tinggi dari desa kami.",
  keywords: [
    "UMKM Desa Jagapura Kulon",
    "Pupuk Organik Sekam Cirebon",
    "Agribisnis Gegesik",
    "Ekonomi Sirkular PADIKU",
    "Produk Pertanian Cirebon",
  ],
  authors: [{ name: "Tim KKM UMC 2026 - Desa Jagapura Kulon" }],
  creator: "Tim PADIKU",
  openGraph: {
    title: "PADIKU - Digitalisasi UMKM & Produk Sirkular Desa Jagapura Kulon",
    description:
      "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon. Temukan pupuk organik sekam, kompos, dan produk agribisnis berkualitas tinggi.",
    url: "https://www.umkmjagapura.web.id",
    siteName: "PADIKU",
    images: [
      {
        url: "/images/og-padiku.jpg", // Make sure to add this image to the public/images folder
        width: 1200,
        height: 630,
        alt: "PADIKU - Digitalisasi UMKM & Produk Sirkular",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADIKU - Digitalisasi UMKM & Produk Sirkular Desa Jagapura Kulon",
    description:
      "Platform resmi digitalisasi UMKM Program PADIKU di Desa Jagapura Kulon, Cirebon. Temukan pupuk organik sekam, kompos, dan produk agribisnis berkualitas tinggi.",
    images: ["/images/og-padiku.jpg"],
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
        {children}
      </body>
    </html>
  );
}
