import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from "next";

const s3Hostname = process.env.NEXT_PUBLIC_S3_PUBLIC_HOSTNAME;

const nextConfig: NextConfig = {
  images: s3Hostname
    ? {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: s3Hostname,
          },
        ],
      }
    : undefined,
};

export default withPayload(nextConfig) 
