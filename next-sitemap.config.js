/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://nwrfhp.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Optional: Add paths to exclude from sitemap
  exclude: ['/api/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add dynamic sitemaps if needed
      // `${siteUrl}/server-sitemap.xml`,
    ],
  },
  // Transform function to customize URLs
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}
