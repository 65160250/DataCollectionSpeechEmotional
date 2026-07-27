import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/collector/index.html",
        // permanent: false = 307 (เบราว์เซอร์ไม่ cache ถาวร) เผื่ออนาคตอยากเปลี่ยนหน้าแรก
        permanent: false
      }
    ];
  }
};

export default nextConfig;
