import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - PADIKU | Kabar Terbaru Desa Jagapura Kulon',
  description:
    'Liputan kegiatan KKM UMC, program pemberdayaan masyarakat, dan inovasi UMKM Desa Jagapura Kulon, Kecamatan Gegesik, Cirebon.',
  alternates: {
    canonical: 'https://umkmjagapura.web.id/blog',
  },
  openGraph: {
    title: 'Blog - PADIKU | Kabar Terbaru Desa Jagapura Kulon',
    description:
      'Liputan kegiatan KKM UMC, program pemberdayaan masyarakat, dan inovasi UMKM Desa Jagapura Kulon, Kecamatan Gegesik, Cirebon.',
    url: 'https://umkmjagapura.web.id/blog',
    siteName: 'PADIKU',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://umkmjagapura.web.id/news/news.png',
        width: 1200,
        height: 630,
        alt: 'Mahasiswa KKM UMC Bagikan Pupuk Cair kepada Warga Jagapura Kulon',
      },
    ],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
