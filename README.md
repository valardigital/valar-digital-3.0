This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Media storage on S3

This project is configured to store Payload uploads in Amazon S3 using `@payloadcms/storage-s3`.

Environment variables required:

```
PAYLOAD_SECRET=change-me
DATABASE_URI=mongodb://localhost:27017/valar-digital

S3_BUCKET=your-bucket-name
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
S3_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY

# Optional: hostname used to serve images for Next.js Image optimization
NEXT_PUBLIC_S3_PUBLIC_HOSTNAME=my-bucket.s3.amazonaws.com
```

Notes:

- The `media` collection accepts both images and videos (e.g., `video/*`).
- Deleting a media item from the Payload Admin will delete the corresponding object from S3.
- To render S3-hosted images, `next.config.ts` includes `images.remotePatterns`. If you use a custom domain (e.g., CloudFront), set `NEXT_PUBLIC_S3_PUBLIC_HOSTNAME` accordingly and rebuild.

## Email via AWS SES

The contact form posts to `src/app/(frontend)/api/contact/route.ts`, which sends an email via AWS SES to `shashi@valardigital.com` and `tushar@valardigital.com` and sets `Reply-To` to the submitter's address.

Configure the following environment variables (e.g., in `.env.local`):

```
AWS_SES_REGION=us-east-1
AWS_ACCESS_KEY_ID=...           # Key with SES permissions
AWS_SECRET_ACCESS_KEY=...       # Secret for the above key
AWS_SES_SOURCE_EMAIL=...        # Verified SES identity to send from
```

Notes:
- Ensure `AWS_SES_SOURCE_EMAIL` is verified in SES in the specified region.
- In SES sandbox, all recipients must be verified.
