import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.umkmjagapura.web.id',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Tambahkan URL halaman statis maupun dinamis lainnya di sini
  ];
}
