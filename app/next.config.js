/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/development': { page: '/development' }
    };
  }
}

module.exports = nextConfig;
