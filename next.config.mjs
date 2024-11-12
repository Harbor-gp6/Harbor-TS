/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'fakeimg.pl',
      'via.placeholder.com',
      'cdn.cosmicjs.com'
    ],
  },
  output: 'standalone',
};

export default nextConfig;
