import { type MetadataRoute } from 'next';
import { locales } from '@/i18n';

import { BASE_URL } from '@/lib/env';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: '', // home
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'explore',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'submit',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'startup',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  const sitemapData = sitemapRoutes.flatMap((route) =>
    locales.map((locale) => {
      const lang = locale === 'en' ? '' : `/${locale}`;
      const routeUrl = route.url === '' ? '' : `/${route.url}`;
      return {
        ...route,
        url: `${BASE_URL}${lang}${routeUrl}`,
      };
    }),
  );

  return sitemapData;
}
