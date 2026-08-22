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
  title: "Program PADIKU — Digitalisasi UMKM & Ekonomi Sirkular Desa Jagapura Kulon",
  description:
    "Website resmi Program PADIKU Desa Jagapura Kulon, Kecamatan Gegesik, Kabupaten Cirebon. Media digitalisasi UMKM agribisnis, pupuk organik sekam padi, kompos bio-nutrisi, dan media tanam sirkular.",
  keywords: [
    "PADIKU",
    "Desa Jagapura Kulon",
    "Gegesik Cirebon",
    "Ekonomi Sirkular",
    "Pupuk Organik Sekam Padi",
    "Kompos Bio Organik",
    "Media Tanam",
    "UMKM Cirebon",
    "KKM UMC 2026",
    "Universitas Muhammadiyah Cirebon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
