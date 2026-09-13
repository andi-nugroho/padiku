import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gelar Penanaman Tanaman Jagapura Kulon',
  description:
    'Mahasiswa KKM UMC Kelompok 29 gelar penanaman tanaman ciptakan lingkungan asri di Jagapura Kulon.',
  alternates: {
    canonical: '/blog/penanaman-tanaman',
  },
  openGraph: {
    title: 'Gelar Penanaman Tanaman Jagapura Kulon',
    description:
      'Mahasiswa KKM UMC Kelompok 29 gelar penanaman tanaman ciptakan lingkungan asri di Jagapura Kulon.',
    url: '/blog/penanaman-tanaman',
    images: [
      {
        url: '/news/news2.png',
        width: 1200,
        height: 630,
        alt: 'Kegiatan penanaman tanaman',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
