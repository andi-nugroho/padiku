import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ketahanan Pangan dari Pekarangan Rumah',
  description:
    'Panduan memanfaatkan limbah organik dan ruang terbatas untuk mendukung budidaya tanaman pangan keluarga.',
  alternates: {
    canonical: '/blog/ketahanan-pangan',
  },
  openGraph: {
    title: 'Ketahanan Pangan dari Pekarangan Rumah',
    description:
      'Panduan memanfaatkan limbah organik dan ruang terbatas untuk mendukung budidaya tanaman pangan keluarga.',
    url: '/blog/ketahanan-pangan',
    images: [
      {
        url: '/poster/poster.png',
        width: 1200,
        height: 1697,
        alt: 'Poster Ketahanan Pangan',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
