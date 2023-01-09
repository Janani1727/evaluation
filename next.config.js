/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized:true
  }
}

module.exports = {
  images:{
    domains:["avatars.githubusercontent.com"]
  }
}
