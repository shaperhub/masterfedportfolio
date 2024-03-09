/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {

    //Delete these 2 loader lines and the loader.js file if you want to deploy on a Node server like Vercel
    loader: "custom",
    loaderFile: "./loader.js",
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
