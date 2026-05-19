import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from "next";

const s3Hostname = process.env.NEXT_PUBLIC_S3_PUBLIC_HOSTNAME;
const siteHostname = process.env.NEXT_PUBLIC_SITE_HOSTNAME;
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

if (siteHostname) {
  remotePatterns.push({ protocol: 'https', hostname: siteHostname, pathname: '/**' })
}

const nextConfig: NextConfig = {
  // Unique id per build — stale HTML must not be served after deploy
  generateBuildId: async () => {
    return process.env.VERCEL_GIT_COMMIT_SHA || process.env.BUILD_ID || `build-${Date.now()}`
  },
  images: {
    remotePatterns,
  },
  async headers() {
    return [
      {
        // Hashed JS/CSS — safe to cache forever (listed first so it wins over the catch-all)
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // HTML / RSC — never serve stale document that points at removed chunks
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/privacyPolicy', destination: '/privacy-policy', permanent: true },
      { source: '/cookiePolicy', destination: '/cookie-policy', permanent: true },
      { source: '/services/headless-commerce', destination: '/services/headless-commerce-development', permanent: true },
    ]
  },
};

export default withPayload(nextConfig) 
