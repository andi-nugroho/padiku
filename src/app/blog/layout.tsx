import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - PADIKU | Kabar Terbaru Desa Jagapura Kulon',
  description:
    'Liputan kegiatan KKM UMC Kelompok 29, program pemberdayaan masyarakat, pembuatan pupuk cair organik, dan inovasi UMKM Desa Jagapura Kulon, Cirebon.',
  alternates: {
    canonical: 'https://umkmjagapura.web.id/blog',
  },
  openGraph: {
    title: 'Blog - PADIKU | Kabar Terbaru Desa Jagapura Kulon',
    description:
      'Liputan kegiatan KKM UMC Kelompok 29, program pemberdayaan masyarakat, pembuatan pupuk cair organik, dan inovasi UMKM Desa Jagapura Kulon, Cirebon.',
    url: 'https://umkmjagapura.web.id/blog',
    siteName: 'PADIKU',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://umkmjagapura.web.id/news/news-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahasiswa KKM UMC Bagikan Pupuk Cair kepada Warga Jagapura Kulon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - PADIKU | Kabar Terbaru Desa Jagapura Kulon',
    description:
      'Liputan kegiatan KKM UMC Kelompok 29, program pemberdayaan masyarakat, pembuatan pupuk cair organik, dan inovasi UMKM Desa Jagapura Kulon, Cirebon.',
    site: '@umkmjagapura',
    creator: '@umkmjagapura',
    images: [
      {
        url: 'https://umkmjagapura.web.id/news/news-og.jpg',
        alt: 'Mahasiswa KKM UMC Bagikan Pupuk Cair kepada Warga Jagapura Kulon',
      },
    ],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
