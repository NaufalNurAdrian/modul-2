/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.ctfassets.net",
        },
        {
          protocol: "https",
          hostname: "assets.ctfassets.net",
        },
        {
          protocol: "https",
          hostname: "randomuser.me",
        },
        {
          protocol: "https",
          hostname: "img.daisyui.com",
        },
      ],
    },
  };
  
  export default nextConfig;