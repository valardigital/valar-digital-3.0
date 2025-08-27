import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from "next";

const s3Hostname = process.env.NEXT_PUBLIC_S3_PUBLIC_HOSTNAME;
const s3Bucket = process.env.S3_BUCKET;
const s3Region = process.env.S3_REGION;

const remotePatterns: { protocol: 'http' | 'https'; hostname: string; pathname: string }[] = [
  { protocol: 'http', hostname: 'localhost', pathname: '/**' },
  { protocol: 'https', hostname: 'localhost', pathname: '/**' },
]

if (s3Hostname) {
  remotePatterns.push({ protocol: 'https', hostname: s3Hostname, pathname: '/**' })
}

if (s3Bucket) {
  remotePatterns.push({ protocol: 'https', hostname: `${s3Bucket}.s3.amazonaws.com`, pathname: '/**' })
}

if (s3Bucket && s3Region) {
  remotePatterns.push({ protocol: 'https', hostname: `${s3Bucket}.s3.${s3Region}.amazonaws.com`, pathname: '/**' })
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default withPayload(nextConfig) 
