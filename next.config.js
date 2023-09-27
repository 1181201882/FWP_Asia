// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "mdbcdn.b-cdn.net",
      "tecdn.b-cdn.net",
      "smartwills.com.my",
    ], // Add your image host domain here
  },
};

module.exports = nextConfig;
