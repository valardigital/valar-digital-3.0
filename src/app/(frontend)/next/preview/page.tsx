import { redirect } from 'next/navigation';
import { draftMode } from 'next/headers';

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const { slug, collection, path, previewSecret } = params;

  // Verify the preview secret
  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid preview secret', { status: 401 });
  }

  // Validate required parameters
  if (!slug || !collection || !path) {
    return new Response('Missing required parameters', { status: 400 });
  }

  // Enable draft mode
  const draft = await draftMode();
  draft.enable();

  // Redirect to the actual page
  redirect(path as string);
} 