import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buat Alat Peniris Minyak UMKM Grejeg',
  description:
    'Mahasiswa KKM UMC Kelompok 29 buat alat peniris minyak dukung UMKM makanan Grejeg di Jagapura Kulon.',
  alternates: {
    canonical: '/blog/peniris-minyak',
  },
  openGraph: {
    title: 'Buat Alat Peniris Minyak UMKM Grejeg',
    description:
      'Mahasiswa KKM UMC Kelompok 29 buat alat peniris minyak dukung UMKM makanan Grejeg di Jagapura Kulon.',
    url: '/blog/peniris-minyak',
    images: [
      {
        url: '/news/news3.png',
        width: 1200,
        height: 630,
        alt: 'Penyerahan alat peniris minyak',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
