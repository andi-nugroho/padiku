import type { MetadataRoute } from 'next';
import { POSTS } from '@/lib/data';

const BASE_URL = 'https://umkmjagapura.web.id';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/katalog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tentang-kami`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const dynamicBlogRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE_URL}${post.href}`,
    lastModified: new Date(post.date), // Uses the date string from the post
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicBlogRoutes];
}
