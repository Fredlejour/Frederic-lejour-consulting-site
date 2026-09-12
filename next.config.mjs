/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // Anciennes URL du site SPA (sans préfixe de langue) vers leurs
    // équivalents français. Redirections permanentes (308).
    return [
      { source: '/mentions-legales', destination: '/fr/mentions-legales', permanent: true },
      {
        source: '/politique-confidentialite',
        destination: '/fr/confidentialite',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
