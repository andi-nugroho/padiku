import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Katalog Produk - PADIKU | Makanan Khas UMKM Desa Jagapura Kulon',
  description:
    'Jelajahi katalog lengkap produk makanan khas UMKM Desa Jagapura Kulon — Grejeg, Sambel Garing, Gonjing, dan produk unggulan lainnya dari Program PADIKU.',
  alternates: {
    canonical: 'https://umkmjagapura.web.id/katalog',
  },
  openGraph: {
    title: 'Katalog Produk - PADIKU | Makanan Khas UMKM Desa Jagapura Kulon',
    description:
      'Jelajahi katalog lengkap produk makanan khas UMKM Desa Jagapura Kulon — Grejeg, Sambel Garing, Gonjing, dan produk unggulan lainnya dari Program PADIKU.',
    url: 'https://umkmjagapura.web.id/katalog',
    siteName: 'PADIKU',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function KatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
