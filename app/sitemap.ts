import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
return [
    {
        url: 'https://ayane.uniproject.jp/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    },
]}