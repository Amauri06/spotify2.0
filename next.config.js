/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
    images: {
      remotePatterns:[
        {
          protocol:'https',
          hostname:'is1-ssl.mzstatic.com',
          pathname:'**'
        }
      ]
    }
  }
  
  module.exports = nextConfig

