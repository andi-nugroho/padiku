import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami - PADIKU | Program UMKM Desa Jagapura Kulon',
  description:
    'Kenali lebih dekat Program PADIKU, peran aktif pelaku UMKM Desa Jagapura Kulon, dan pendampingan digitalisasi KKM UMC 2026 untuk ekonomi sirkular desa.',
  alternates: {
    canonical: 'https://umkmjagapura.web.id/tentang-kami',
  },
  openGraph: {
    title: 'Tentang Kami - PADIKU | Program UMKM Desa Jagapura Kulon',
    description:
      'Kenali lebih dekat Program PADIKU, peran aktif pelaku UMKM Desa Jagapura Kulon, dan pendampingan digitalisasi KKM UMC 2026 untuk ekonomi sirkular desa.',
    url: 'https://umkmjagapura.web.id/tentang-kami',
    siteName: 'PADIKU',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
