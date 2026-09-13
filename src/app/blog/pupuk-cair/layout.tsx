import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bagikan Pupuk Cair Limbah Rumah Tangga',
  description:
    'KKM UMC Kelompok 29 bagikan pupuk cair organik untuk warga Desa Jagapura Kulon Cirebon.',
  alternates: {
    canonical: '/blog/pupuk-cair',
  },
  openGraph: {
    title: 'Bagikan Pupuk Cair Limbah Rumah Tangga',
    description:
      'KKM UMC Kelompok 29 bagikan pupuk cair organik untuk warga Desa Jagapura Kulon Cirebon.',
    url: '/blog/pupuk-cair',
    images: [
      {
        url: '/news/news.png',
        width: 1200,
        height: 630,
        alt: 'Pembagian pupuk cair organik',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
