import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from "next";

const s3Hostname = process.env.NEXT_PUBLIC_S3_PUBLIC_HOSTNAME;

const nextConfig: NextConfig = {
  images: s3Hostname
    ? {
        remotePatterns: [
          { protocol: 'https', hostname: s3Hostname },
          { protocol: 'http', hostname: 'localhost' },
          { protocol: 'https', hostname: 'localhost' },
        ],
      }
    : {
        remotePatterns: [
          { protocol: 'http', hostname: 'localhost' },
          { protocol: 'https', hostname: 'localhost' },
        ],
      },
};

export default withPayload(nextConfig) 
