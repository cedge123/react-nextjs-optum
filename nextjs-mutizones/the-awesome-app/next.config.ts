import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  

  async rewrites() {
    return [
        {
            source: '/blogs-app',
            destination: `http://localhost:4010/blogs-app`,
        },
        {
            source: '/blogs-app/:path+',
            destination: `http://localhost:4010/blogs-app/:path+`,
        }
    ];
}

};

export default nextConfig;
