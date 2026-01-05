/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash অনেক সময় এই হোস্টও ব্যবহার করে
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com', // Unsplash অনেক সময় এই হোস্টও ব্যবহার করে
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // Unsplash অনেক সময় এই হোস্টও ব্যবহার করে
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;