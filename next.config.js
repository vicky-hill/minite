/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: 'mongodb+srv://vicky:sweetwhitecat2018@minite.smjfq.mongodb.net/?retryWrites=true&w=majority',
    BASE_URL: 'http://localhost:3000/api',
    IMAGE_URL: 'https://firebasestorage.googleapis.com/v0/b/minite-cfc8f.appspot.com',
    JWT_SECRET: 'WhiteCat2018'
  },
  reactStrictMode: true,
}

module.exports = nextConfig
